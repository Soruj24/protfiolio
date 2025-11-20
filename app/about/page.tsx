"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import HeroSection from "@/components/about/HeroSection";
import SkillsSection from "@/components/about/SkillsSection";
import LearningJourney from "@/components/about/LearningJourney";
import ProjectsSection from "@/components/about/ProjectSection";
import CallToAction from "@/components/about/CallToAction";

// Optimized Framer Motion variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Much faster stagger
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20, // Reduced distance
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4, // Faster duration
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  const ref = useRef(null);
  // More aggressive triggering
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.2,
  });

  return (
    <div className="min-h-screen mt-5 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <SkillsSection ref={ref} isInView={isInView} />
        <LearningJourney />
        <ProjectsSection />
        <CallToAction />
      </div>
    </div>
  );
}
