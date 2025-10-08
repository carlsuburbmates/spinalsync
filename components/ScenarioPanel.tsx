import { useState } from 'react';
import { motion } from 'framer-motion';

interface ScenarioOption {
  text: string;
  result: string;
}

interface ScenarioPanelProps {
  prompt: string;
  options: ScenarioOption[];
  correctIndex: number;
}

export default function ScenarioPanel({ prompt, options, correctIndex }: ScenarioPanelProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected !== null && selected === correctIndex;

  return (
    <motion.section
      className="mb-4 p-4 rounded-xl shadow-card bg-white bg-indigo-haze"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <h2 className="text-lg font-semibold mb-2 text-base-900">Clinical Scenario</h2>
      <p className="text-sm text-base-700 mb-3">{prompt}</p>
      <div className="space-y-2">
        {options.map((opt, idx) => {
          const selectedState = selected === idx;
          const correctChoice = idx === correctIndex;
          const classes =
            selectedState
              ? correctChoice
                ? 'border-primary-dark bg-primary-light/20'
                : 'border-critical bg-red-100'
              : 'border-base-300 hover:border-base-400';
          return (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-full text-left px-4 py-2 rounded-lg border transition-colors ${classes}`}
              disabled={selected !== null}
            >
              {opt.text}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div className="mt-3 space-y-1">
          <p className={`text-sm ${isCorrect ? 'text-success' : 'text-critical'}`}>{
            isCorrect ? 'Correct!' : 'Consider again'
          }</p>
          <p className="text-sm text-base-600">{options[selected].result}</p>
        </div>
      )}
    </motion.section>
  );
}
