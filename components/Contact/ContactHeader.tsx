import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import ProjectTypeSelector from "./ProjectTypeSelector";
import AIOrbitalSystem from "./AIOrbitalSystem.tsxAIOrbitalSystem";

interface ProjectType {
  emoji: string;
  title: string;
  description: string;
  color: string;
  tech: string[];
}

interface ContactHeaderProps {
  selectedProject: number | null;
  setSelectedProject: (index: number | null) => void;
  projectTypes: ProjectType[];
}

const ContactHeader = ({
  selectedProject,
  setSelectedProject,
  projectTypes,
}: ContactHeaderProps) => {
  const MotionDiv = motion.div;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AIOrbitalSystem />

        <MotionDiv variants={itemVariants}>
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-400/30 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-READY DEVELOPER
          </Badge>
        </MotionDiv>

        <MotionDiv variants={itemVariants}>
          <h1 className="text-6xl font-bold text-white mb-6">
            Let&apos;s Build
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Intelligent Futures
            </span>
          </h1>
        </MotionDiv>

        <MotionDiv variants={itemVariants}>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Ready to transform your ideas with AI-powered solutions? I
            specialize in creating intelligent applications using{" "}
            <span className="text-purple-400 font-semibold">LangChain</span> and{" "}
            <span className="text-purple-400 font-semibold">MCP</span> to build
            the next generation of digital experiences.
          </p>
        </MotionDiv>

        <ProjectTypeSelector
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          projectTypes={projectTypes}
        />
      </div>
    </motion.section>
  );
};

export default ContactHeader;
