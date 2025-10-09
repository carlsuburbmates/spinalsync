import React, { useEffect } from "react";
import LearnCard from "./LearnCard";
import QuizBlock from "./QuizBlock";
import ReflectionPrompt from "./ReflectionPrompt";
import ScenarioPanel from "./ScenarioPanel";
import PeerTips from "./PeerTips";
import { logAnalyticsEvent } from "../utils/localAnalytics";
import { useProgressStore } from "../store/progressStore";
import { saveProgressLocal } from "../utils/localProgress";
import { saveProgress } from "../utils/progressApi";

// Renders a module page from JSON content

interface LearnSection {
  type: "learn";
  title: string;
  body: string;
}

interface QuizSection {
  type: "quiz";
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

interface ReflectionSection {
  type: "reflection";
  prompt: string;
}

interface ScenarioOption {
  text: string;
  result: string;
}

interface ScenarioSection {
  type: "scenario";
  prompt: string;
  options: ScenarioOption[];
  correctIndex: number;
}

export type ModuleSection = LearnSection | QuizSection | ReflectionSection | ScenarioSection;

export interface Module {
  title: string;
  slug?: string;
  sections: ModuleSection[];
}

export function ModuleTemplate({ module }: { module: Module }) {
  const { progress, setProgress } = useProgressStore();
  const moduleSlug = module.slug || module.title?.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    // Save progress to localStorage and Supabase on change
    saveProgressLocal(moduleSlug, progress[moduleSlug]);
    // Replace with actual userId if available
    saveProgress("demo-user", moduleSlug, progress[moduleSlug]);
  }, [progress[moduleSlug]]);
  
  // Track module completion (simple heuristic: all quizzes answered)
  useEffect(() => {
    if (module.sections.some((s: ModuleSection) => s.type === "quiz")) {
      const quizCount = module.sections.filter((s: ModuleSection) => s.type === "quiz").length;
      const answered = Object.keys(progress[moduleSlug] || {}).filter(k => k.startsWith("quiz_")).length;
      if (quizCount > 0 && answered === quizCount) {
        logAnalyticsEvent({ type: "module_completed", moduleSlug, timestamp: Date.now() });
      }
    }
  }, [progress[moduleSlug]]);

  const handleQuizAnswer = (idx: number, answer: number) => {
    setProgress(moduleSlug, {
      ...progress[moduleSlug],
      [`quiz_${idx}`]: answer,
    });
  };

  return (
    <div className="space-y-6" role="main" aria-label={module.title}>
      <h1 className="text-2xl font-bold mb-2">{module.title}</h1>
      {module.sections.map((section, idx) => {
        switch (section.type) {
          case "learn":
            return <LearnCard title={section.title} body={section.body} key={idx} />;
          case "quiz":
            return (
              <QuizBlock
                question={section.question}
                options={section.options}
                answerIndex={section.answerIndex}
                explanation={section.explanation}
                userAnswer={progress[moduleSlug]?.[`quiz_${idx}`]}
                onAnswer={(answer: number) => handleQuizAnswer(idx, answer)}
                key={idx}
              />
            );
          case "reflection":
            return <ReflectionPrompt prompt={section.prompt} key={idx} />;
          case "scenario":
            return (
              <ScenarioPanel
                prompt={section.prompt}
                options={section.options}
                correctIndex={section.correctIndex}
                key={idx}
              />
            );
          default:
            return null;
        }
      })}
      {/* Peer tips/comments section for local-only feedback */}
      <PeerTips moduleSlug={moduleSlug} />
    </div>
  );
}
