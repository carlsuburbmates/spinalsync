import React from "react";
import { notFound } from "next/navigation";
import { ModuleTemplate } from "../../../components/ModuleTemplate";
import bowel from "../../../data/bowel.json";

import type { Module } from "../../../components/ModuleTemplate";
const modules: Record<string, Module> = {
  bowel: {
    ...bowel,
    sections: bowel.screens.map((section) => {
      switch (section.type) {
        case "learn":
          return {
            type: "learn",
            title: section.title,
            body: section.body,
          };
        case "quiz":
          return {
            type: "quiz",
            question: section.question,
            options: Array.isArray(section.options) && typeof section.options[0] === "string"
              ? section.options as string[]
              : [],
            answerIndex: section.answerIndex,
            explanation: section.explanation,
          };
        case "scenario":
          return {
            type: "scenario",
            prompt: section.prompt,
            options: Array.isArray(section.options) && typeof section.options[0] === "object"
              ? section.options as { text: string; result: string }[]
              : [],
            correctIndex: section.correctIndex,
          };
        case "reflect":
          return {
            type: "reflection",
            prompt: section.prompt,
          };
        default:
          throw new Error(`Unknown section type: ${section.type}`);
      }
    }),
  },
  // Future modules can be added here
};

interface ModulePageProps {
  params: {
    slug: string;
  };
}

export default function ModulePage({ params }: ModulePageProps) {
  const { slug } = params;
  const mod = modules[slug];
  if (!mod) return notFound();
  return <ModuleTemplate module={mod} />;
}
