// components/sections/TechStackSection.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { techStack } from "@/constand";
import FloatingElement from "./FloatingElement";

const TechStackSection = () => {
  return (
    <section className="px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Technology <span className="text-blue-400">Stack</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {Object.entries(techStack).map(([category, technologies], index) => (
          <TechCategoryCard
            key={index}
            category={category}
            technologies={technologies}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const TechCategoryCard = ({
  category,
  technologies,
  index,
}: {
  category: string;
  technologies: string[];
  index: number;
}) => (
  <FloatingElement key={index} delay={index * 0.1}>
    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-blue-400/30 transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4 text-white border-b border-white/10 pb-2">
          {category}
        </h3>
        <div className="space-y-3">
          {technologies.map((tech: string) => (
            <motion.div
              key={tech}
              whileHover={{ x: 5 }}
              className="flex items-center text-gray-300 hover:text-white transition-colors cursor-default group"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
              {tech}
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  </FloatingElement>
);

export default TechStackSection;
