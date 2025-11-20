// ProjectsHeader.tsx
"use client";
import { motion } from "framer-motion";

interface ProjectsHeaderProps {
  title?: string;
  subtitle?: string;
}

const ProjectsHeader = ({
  title = "My Projects",
  subtitle = "A collection of full-stack applications, AI projects, and innovative solutions",
}: ProjectsHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-white mb-4">
        {title.split(" ")[0]}{" "}
        <span className="text-purple-400">{title.split(" ")[1]}</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
};

export default ProjectsHeader;