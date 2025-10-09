import React, { useState } from "react";
import { motion } from "framer-motion";

interface ReflectionPromptProps {
  prompt: string;
}

export default function ReflectionPrompt({ prompt }: ReflectionPromptProps) {
  const [value, setValue] = useState("");
  return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <section className="mb-4 p-4 rounded-xl shadow-card bg-white" role="region" aria-label="Reflection" tabIndex={0}>
          <h2 className="text-lg font-semibold mb-2 text-base-900" tabIndex={0}>Reflection</h2>
          <p className="text-sm text-base-700 mb-2">{prompt}</p>
          <textarea
            className="w-full min-h-[120px] p-3 rounded-lg border border-base-300 focus:outline-none focus:ring-4 focus:ring-accent-light text-sm"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write your thoughts..."
          />
          {value && (
            <p className="mt-2 text-sm text-base-600">
              Your reflection is saved locally. You can export or sync later.
            </p>
          )}
        </section>
      </motion.div>
  );
}
