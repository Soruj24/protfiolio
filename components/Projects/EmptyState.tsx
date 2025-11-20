// EmptyState.tsx
"use client";
import { motion } from "framer-motion";

interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({ message = "No projects found in this category." }: EmptyStateProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-12"
    >
      <p className="text-gray-400 text-lg">{message}</p>
    </motion.div>
  );
};

export default EmptyState;