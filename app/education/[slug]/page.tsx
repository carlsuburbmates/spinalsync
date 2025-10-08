import { notFound } from 'next/navigation';
import LearnCard from '../../../components/LearnCard';
import QuizBlock from '../../../components/QuizBlock';
import ScenarioPanel from '../../../components/ScenarioPanel';
import ReflectionPrompt from '../../../components/ReflectionPrompt';

import bowel from '../../../data/bowel.json';

const modules: Record<string, any> = {
  bowel,
  // Future modules can be added here, e.g. introduction: require('../../../data/introduction.json')
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

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4 text-base-900">{mod.title}</h1>
      {mod.screens.map((screen: any, idx: number) => {
        switch (screen.type) {
          case 'learn':
            return <LearnCard key={idx} title={screen.title} body={screen.body} />;
          case 'quiz':
            return (
              <QuizBlock
                key={idx}
                question={screen.question}
                options={screen.options}
                answerIndex={screen.answerIndex}
                explanation={screen.explanation}
              />
            );
          case 'scenario':
            return (
              <ScenarioPanel
                key={idx}
                prompt={screen.prompt}
                options={screen.options}
                correctIndex={screen.correctIndex}
              />
            );
          case 'reflect':
            return <ReflectionPrompt key={idx} prompt={screen.prompt} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
