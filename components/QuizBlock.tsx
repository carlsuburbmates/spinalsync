import { useState } from "react";
import { motion } from "framer-motion";

interface QuizBlockProps {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export default function QuizBlock({
  question,
  options,
  answerIndex,
  explanation,
}: QuizBlockProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected !== null && selected === answerIndex;

  return (
    <motion.section
      className="mb-4 p-4 rounded-xl shadow-card bg-white"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <h2 className="text-lg font-semibold mb-2 text-base-900">{question}</h2>
      <div className="space-y-2">
        {options.map((opt, idx) => {
          const selectedState = selected === idx;
          const correctChoice = idx === answerIndex;
          const classes = selectedState
            ? correctChoice
              ? "border-primary-dark bg-primary-light/20"
              : "border-critical bg-red-100"
            : "border-base-300 hover:border-base-400";
          return (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-full text-left px-4 py-2 rounded-lg border transition-colors ${classes}`}
              disabled={selected !== null}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <p
          className={`mt-3 text-sm ${isCorrect ? "text-success" : "text-critical"}`}
        >
          {isCorrect ? "Correct!" : "Try again"}
        </p>
      )}
      {selected !== null && isCorrect && (
        <p className="mt-1 text-sm text-base-600">{explanation}</p>
      )}
    </motion.section>
  );
}
