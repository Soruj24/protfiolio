// components/layout/BackgroundElements.tsx
import { motion } from "framer-motion";
import { Code, Brain, Cloud } from "lucide-react";

export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Animated Tech Icons */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{ rotate: 360, y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Code className="w-6 h-6 text-blue-400/20" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/3"
        animate={{ rotate: -360, y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      >
        <Brain className="w-5 h-5 text-purple-400/20" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/3"
        animate={{ rotate: 180, scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Cloud className="w-7 h-7 text-cyan-400/20" />
      </motion.div>
    </div>
  );
}