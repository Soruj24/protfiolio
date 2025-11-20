import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {  Workflow } from "lucide-react";

interface TechOrbit {
  icon: React.ElementType;
  name: string;
  size: string;
  delay: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

interface TechOrbitsSectionProps {
  hoveredTech: string | null;
  setHoveredTech: (tech: string | null) => void;
  techOrbits: TechOrbit[];
  processSteps: ProcessStep[];
}

const TechOrbitsSection = ({
  hoveredTech,
  setHoveredTech,
  techOrbits,
  processSteps
}: TechOrbitsSectionProps) => {
  const MotionDiv = motion.div;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Animated AI Tech Sphere */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Central AI Core */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotate: 360,
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity },
                }}
              >
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25">
                  <Workflow className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              {/* Orbiting Tech Platforms */}
              {techOrbits?.map((tech, index) => {
                const Icon = tech.icon;
                const angle = (index * 90 + 45) * (Math.PI / 180);
                const radius = 160;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                  <motion.div
                    key={index}
                    className={`absolute ${tech.size} bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-sm cursor-pointer`}
                    style={{
                      left: `calc(50% + ${x}px - ${tech.size.split(" ")[0]}/2)`,
                      top: `calc(50% + ${y}px - ${tech.size.split(" ")[0]}/2)`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(192, 132, 252, 0.5)",
                    }}
                    onHoverStart={() => setHoveredTech(tech.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                  >
                    <Icon className="w-8 h-8 text-cyan-400" />

                    <AnimatePresence>
                      {hoveredTech === tech.name && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap"
                        >
                          {tech.description}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </MotionDiv>

          {/* AI Development Process */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 backdrop-blur-sm">
              <Workflow className="w-3 h-3 mr-1" />
              AI DEVELOPMENT PROCESS
            </Badge>

            <h2 className="text-4xl font-bold text-white">
              Intelligent Solutions
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                From Concept to AI
              </span>
            </h2>

            <div className="space-y-6">
              {processSteps?.map((step, index) => {
                const Icon = step.icon;
                return (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                    className="group flex items-start space-x-4 p-4 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-400 font-mono mb-1">
                        {step.step}
                      </div>
                      <h3 className="font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default TechOrbitsSection;