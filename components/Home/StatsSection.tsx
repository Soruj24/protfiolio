// components/sections/StatsSection.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card"; 
import { aiStats } from "@/constand";
import FloatingElement from "./FloatingElement";

const StatsSection = () => {
  return (
    <section className="px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-white"
      >
        Development <span className="text-cyan-400">Statistics</span>
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {aiStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <FloatingElement key={index} delay={index * 0.1}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="font-semibold mb-2 text-gray-300">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            </FloatingElement>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;