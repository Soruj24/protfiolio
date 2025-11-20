// components/sections/HeroSection.tsx
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Rocket,
  Sparkles,
  BrainCircuit,
  Network,
  CircuitBoard,
  Atom,
  Binary,
  Database,
  Cloud,
  Code,
} from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  const techIcons = [
    BrainCircuit,
    Network,
    CircuitBoard,
    Atom,
    Binary,
    Database,
    Cloud,
    Code,
  ];

  return (
    <section className="text-center py-20 px-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge
          variant="secondary"
          className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          FULL-STACK & AI DEVELOPER
        </Badge>
      </motion.div>

      <motion.h1
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mb-6 text-white"
      >
        Building The{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Future
        </span>{" "}
        With AI
      </motion.h1>

      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
      >
        Mastering{" "}
        <span className="font-semibold text-cyan-400">LangChain</span> and{" "}
        <span className="font-semibold text-purple-400">MCP</span> to create
        intelligent applications that solve real-world problems.
      </motion.p>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Button
          asChild
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/25"
          size="lg"
        >
          <Link href="#projects">
            <Rocket className="w-4 h-4 mr-2" />
            Explore Projects
          </Link>
        </Button>
        <Button
          variant="outline"
          asChild
          size="lg"
          className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
        >
          <Link href="#learning-path">
            <Brain className="w-4 h-4 mr-2" />
            Learning Journey
          </Link>
        </Button>
      </motion.div>

      {/* Animated Tech Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex justify-center space-x-8 mt-12"
      >
        {techIcons.map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
            className="text-cyan-400/50 hover:text-cyan-400 transition-colors"
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;