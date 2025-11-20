 import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle } from "lucide-react"; 
import { learningJourney } from "@/constand";
import JourneyPhase from "./JourneyPhase";

export default function LearningJourney() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-sm font-semibold bg-gray-800/50 text-gray-300 border-gray-700">
            <BookOpen className="w-3 h-3 mr-1" />
            LEARNING JOURNEY
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            My Path to AI Development
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From web development fundamentals to cutting-edge AI technologies
          </p>
        </motion.div>

        <div className="space-y-8">
          {learningJourney.map((phase, index) => (
            <JourneyPhase key={index} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}