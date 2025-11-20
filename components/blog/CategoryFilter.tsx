import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { Brain, Code, Atom, Cloud, Palette, BookOpen } from "lucide-react";
import { categories } from "@/data/blog";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const getCategoryIcon = (categoryId: string) => {
  const icons: Record<string, React.ReactNode> = {
    ai: <Brain className="w-4 h-4" />,
    web: <Code className="w-4 h-4" />,
    quantum: <Atom className="w-4 h-4" />,
    cloud: <Cloud className="w-4 h-4" />,
    design: <Palette className="w-4 h-4" />,
  };
  return icons[categoryId] || <BookOpen className="w-4 h-4" />;
};

const getCategoryColor = (categoryId: string) => {
  const colors: Record<string, string> = {
    ai: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    quantum: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    cloud: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    design: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  };
  return colors[categoryId] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-white">
          Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 hover:scale-105 ${
              selectedCategory === category.id
                ? "bg-blue-500/20 border-blue-500/50 text-white"
                : "bg-gray-700/50 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500"
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${
                selectedCategory === category.id ? "bg-blue-500/20" : "bg-gray-600/50"
              }`}>
                {getCategoryIcon(category.id)}
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
            <Badge 
              variant="secondary" 
              className={`${
                selectedCategory === category.id 
                  ? "bg-blue-500 text-white" 
                  : "bg-gray-600 text-gray-300"
              }`}
            >
              {category.count}
            </Badge>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}