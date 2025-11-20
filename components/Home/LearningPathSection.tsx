// components/sections/LearningPathSection.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { aiLearningPath } from "@/constand";
import { CheckCircle } from "lucide-react";
import FloatingElement from "./FloatingElement";

const LearningPathSection = () => {
  return (
    <section id="learning-path" className="px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Learning <span className="text-green-400">Journey</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          My structured path to mastering full-stack and AI development
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiLearningPath.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <FloatingElement key={index} delay={index * 0.1}>
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-green-400/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white text-lg">
                          {phase.phase}
                        </h3>
                        <Badge
                          className={
                            phase.status === "Completed"
                              ? "bg-green-500/20 text-green-400 border-green-400/30"
                              : phase.status === "In Progress"
                              ? "bg-blue-500/20 text-blue-400 border-blue-400/30"
                              : phase.status === "Learning"
                              ? "bg-purple-500/20 text-purple-400 border-purple-400/30"
                              : "bg-gray-500/20 text-gray-400 border-gray-400/30"
                          }
                        >
                          {phase.status}
                        </Badge>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                        style={{ width: `${phase.progress}%` }}
                      ></div>
                    </div>

                    <ul className="space-y-2">
                      {phase.topics.map((topic, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FloatingElement>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LearningPathSection;