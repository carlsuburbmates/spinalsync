import { motion } from 'framer-motion';

export interface LearnCardProps {
  title: string;
  body: string;
}

export default function LearnCard({ title, body }: LearnCardProps) {
  return (
    <motion.section
      className="mb-4 p-4 rounded-xl shadow-card bg-white bg-teal-mist"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <h2 className="text-lg font-semibold mb-2 text-base-900">{title}</h2>
      <p className="text-sm text-base-700 leading-relaxed">{body}</p>
    </motion.section>
  );
}
