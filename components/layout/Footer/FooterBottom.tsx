// components/layout/FooterBottom.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUp, Heart, Code } from "lucide-react";

export default function FooterBottom() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="border-t border-white/10 relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <Copyright />
          <MadeWithLove />
          <BackToTop scrollToTop={scrollToTop} />
        </div>
      </div>
    </motion.div>
  );
}

// Copyright Component
const Copyright = () => (
  <motion.div
    className="flex items-center space-x-4 text-blue-300 text-sm"
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-center space-x-2">
      <span>© {new Date().getFullYear()} Soruj Mahmud</span>
      <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <span>All rights reserved across the multiverse</span>
    </div>
  </motion.div>
);

// Made With Love Component
const MadeWithLove = () => (
  <motion.div
    className="flex items-center space-x-3 text-blue-300 text-sm"
    whileHover={{ scale: 1.05 }}
  >
    <span className="flex items-center space-x-2">
      <span>Crafted with</span>
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <Heart className="w-4 h-4 text-red-400" />
      </motion.div>
      <span>and</span>
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Code className="w-4 h-4 text-cyan-400" />
      </motion.div>
      <span>in the digital cosmos</span>
    </span>
  </motion.div>
);

// Back to Top Component
const BackToTop = ({ scrollToTop }: { scrollToTop: () => void }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Button
      variant="ghost"
      size="sm"
      onClick={scrollToTop}
      className="text-blue-300 hover:text-cyan-300 hover:bg-white/5 border border-white/10 backdrop-blur-sm"
    >
      <motion.span
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Return to Orbit
      </motion.span>
      <ArrowUp className="w-4 h-4 ml-2" />
    </Button>
  </motion.div>
);
