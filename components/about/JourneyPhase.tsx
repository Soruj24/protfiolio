import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface JourneyPhaseProps {
  phase: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
    phase: string;
    period: string;
    status: string;
    focus: string;
    achievements: string[];
  };
  index: number;
}

export default function JourneyPhase({ phase, index }: JourneyPhaseProps) {
  const Icon = phase.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 items-center`}
    >
      <div className="lg:w-1/3 text-center">
        <div
          className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
            phase.status === "current"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/25"
              : phase.status === "completed"
              ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/25"
              : "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/25"
          }`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">
          {phase.phase}
        </h3>
        <p className="text-gray-300">{phase.period}</p>
        <Badge
          className={`mt-2 ${
            phase.status === "current"
              ? "bg-purple-500/20 text-purple-400 border-purple-500/30"
              : phase.status === "completed"
              ? "bg-green-500/20 text-green-400 border-green-500/30"
              : "bg-blue-500/20 text-blue-400 border-blue-500/30"
          }`}
        >
          {phase.status}
        </Badge>
      </div>

      <div className="lg:w-2/3">
        <Card className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm border-gray-700">
          <CardHeader>
            <CardTitle className="text-blue-400">
              {phase.focus}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {phase.achievements.map(
                (achievement: string, achievementIndex: number) => (
                  <motion.li
                    key={achievementIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: achievementIndex * 0.1 }}
                    className="flex items-start space-x-2 text-gray-300"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                )
              )}
            </ul>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}