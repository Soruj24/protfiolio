import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { TrendingUp, Target, Zap } from "lucide-react";
import { difficulties } from "@/data/blog";

interface DifficultyFilterProps {
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
}

const getDifficultyIcon = (difficultyId: string) => {
  const icons: Record<string, React.ReactNode> = {
    beginner: <Target className="w-4 h-4" />,
    intermediate: <TrendingUp className="w-4 h-4" />,
    advanced: <Zap className="w-4 h-4" />,
  };
  return icons[difficultyId] || <Target className="w-4 h-4" />;
};

const getDifficultyColor = (difficultyId: string) => {
  const colors: Record<string, string> = {
    beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return colors[difficultyId] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

export default function DifficultyFilter({
  selectedDifficulty,
  setSelectedDifficulty,
}: DifficultyFilterProps) {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-white">
          Difficulty
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty.id}
            onClick={() => setSelectedDifficulty(difficulty.id)}
            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 hover:scale-105 ${
              selectedDifficulty === difficulty.id
                ? "bg-blue-500/20 border-blue-500/50 text-white"
                : "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${
                selectedDifficulty === difficulty.id ? "bg-blue-500/20" : "bg-gray-600/50"
              }`}>
                {getDifficultyIcon(difficulty.id)}
              </div>
              <span className="font-medium capitalize">{difficulty.name}</span>
            </div>
            <Badge 
              variant="secondary" 
              className={`${
                selectedDifficulty === difficulty.id 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-600 text-gray-300"
              }`}
            >
              {difficulty?.count}
            </Badge>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}