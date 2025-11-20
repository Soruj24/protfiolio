import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, Clock } from "lucide-react";

// Mock data - replace with actual data
const trendingPosts = [
  {
    id: 1,
    title: "Building AI Applications with Next.js",
    category: "ai",
    views: 1250,
    readTime: "5 min",
  },
  {
    id: 2,
    title: "Quantum Computing for Developers",
    category: "quantum",
    views: 890,
    readTime: "8 min",
  },
  {
    id: 3,
    title: "Modern CSS Architecture",
    category: "web",
    views: 756,
    readTime: "6 min",
  },
  {
    id: 4,
    title: "Cloud Native Applications",
    category: "cloud",
    views: 642,
    readTime: "7 min",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    ai: "bg-purple-500/20 text-purple-400",
    web: "bg-blue-500/20 text-blue-400",
    quantum: "bg-indigo-500/20 text-indigo-400",
    cloud: "bg-cyan-500/20 text-cyan-400",
    design: "bg-pink-500/20 text-pink-400",
  };
  return colors[category] || "bg-gray-500/20 text-gray-400";
};

export default function TrendingPosts() {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-white flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-orange-400" />
          Trending Posts
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trendingPosts.map((post, index) => (
          <div
            key={post.id}
            className="group p-3 rounded-xl bg-gray-700/30 border border-gray-600 hover:border-gray-500 transition-all duration-200 cursor-pointer hover:bg-gray-700/50"
            onClick={() => (window.location.href = `/blog/${post.id}`)}
          >
            <div className="flex items-start justify-between mb-2">
              <Badge className={`text-xs ${getCategoryColor(post.category)} border-0`}>
                {post.category.toUpperCase()}
              </Badge>
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <Eye className="w-3 h-3" />
                <span>{post.views}</span>
              </div>
            </div>
            
            <h4 className="text-sm font-medium text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h4>
            
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{post.readTime}</span>
              </div>
              <span className="text-orange-400 font-semibold">#{index + 1}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}