"use client";

import { motion } from "framer-motion";
import { ForwardedRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge"; 
import { Zap } from "lucide-react"; 
import { containerVariants, itemVariants } from "@/app/about/page";
import { skills } from "@/constand";
import SkillCard from "./SkillCard";

interface SkillsSectionProps {
  ref: ForwardedRef<HTMLDivElement>;
  isInView: boolean;
}

export default function SkillsSection({ ref, isInView }: SkillsSectionProps) {
  const [visibleBatch, setVisibleBatch] = useState(0);
  const batchSize = 4; // Show 4 cards at a time
  
  useEffect(() => {
    if (isInView) {
      const totalBatches = Math.ceil(skills.length / batchSize);
      const interval = setInterval(() => {
        setVisibleBatch(prev => {
          if (prev >= totalBatches - 1) {
            clearInterval(interval);
            return totalBatches - 1;
          }
          return prev + 1;
        });
      }, 80); // Very fast batch loading
      
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const visibleSkills = skills.slice(0, (visibleBatch + 1) * batchSize);

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 text-sm font-semibold bg-white/10 backdrop-blur-sm text-white border-white/20">
            <Zap className="w-3 h-3 mr-1" />
            TECHNICAL SKILLS
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            My Development Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Focused on AI technologies while building strong foundations in
            full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {visibleSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}