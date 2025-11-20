"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { itemVariants } from "@/app/about/page";
import { useId } from "react";

interface SkillCardProps {
  skill: any;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const MotionCard = motion(Card);
  const Icon = skill.icon;
  const uniqueId = useId();

  return (
    <MotionCard
      variants={itemVariants}
      whileHover={{
        y: -3, // Reduced hover lift
        transition: { duration: 0.2 },
      }}
      className="hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl"
      style={{
        willChange: "transform, opacity",
        transform: "translate3d(0,0,0)",
      }}
    >
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center space-x-3 text-lg text-white">
          <div className={`p-2 rounded-lg bg-${skill.color}-500/20`}>
            <Icon className={`w-5 h-5 text-${skill.color}-400`} />
          </div>
          <span>{skill.category}</span>
        </CardTitle>
        <p className="text-gray-300 text-sm">{skill.description}</p>
      </CardHeader>
      <CardContent className="space-y-3">
        {" "}
        {/* Reduced spacing */}
        {skill.technologies.map((tech: any, techIndex: number) => (
          <SkillProgress
            key={`${uniqueId}-${techIndex}`}
            tech={tech}
            techIndex={techIndex}
          />
        ))}
      </CardContent>
    </MotionCard>
  );
}

function SkillProgress({ tech, techIndex }: { tech: any; techIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }} // Reduced initial movement
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: techIndex * 0.05, // Much faster delay
        duration: 0.3, // Faster duration
        ease: "easeOut",
      }}
      className="space-y-1.5" // Reduced spacing
      style={{
        willChange: "transform, opacity",
      }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-200 truncate max-w-[120px]">
            {tech.name}
          </span>
          <Badge
            variant="outline"
            className={`text-xs bg-white/10 border-white/20 text-gray-300 flex-shrink-0`}
          >
            {tech.status.replace("-", " ")}
          </Badge>
        </div>
        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
          {tech.level}%
        </span>
      </div>
      <Progress
        value={tech.level}
        className="h-1.5 bg-white/10" // Smaller progress bar
      />
      {tech.description && (
        <p className="text-xs text-gray-400 line-clamp-2">
          {" "}
          {/* Limit lines */}
          {tech.description}
        </p>
      )}
    </motion.div>
  );
}
