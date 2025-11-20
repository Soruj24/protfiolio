import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Eye, Heart, Bookmark, Brain, Code, Atom, Cloud, Palette, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    readTime: string;
    category: string;
    difficulty: string;
    author: {
      name: string;
    };
    views: number;
    likes: number;
    tags: string[];
  };
  index: number;
  featured: boolean;
}

export default function PostCard({ post, index, featured }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const MotionCard = motion(Card);

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      ai: <Brain className="w-4 h-4" />,
      web: <Code className="w-4 h-4" />,
      quantum: <Atom className="w-4 h-4" />,
      cloud: <Cloud className="w-4 h-4" />,
      design: <Palette className="w-4 h-4" />,
    };
    return icons[category] || <BookOpen className="w-4 h-4" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      beginner: "bg-green-500/20 text-green-400 border-green-500/30",
      intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      advanced: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[difficulty] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      ai: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      quantum: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      cloud: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      design: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  if (featured) {
    return (
      <MotionCard
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-gradient-to-br from-gray-800/50 to-blue-500/10 border border-gray-700 shadow-xl overflow-hidden group cursor-pointer backdrop-blur-sm"
        onClick={() => (window.location.href = `/blog/${post.id}`)}
      >
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge className={getCategoryColor(post.category)}>
                {getCategoryIcon(post.category)}
                <span className="ml-1 capitalize">{post.category}</span>
              </Badge>
              <Badge className={getDifficultyColor(post.difficulty)}>
                {post.difficulty}
              </Badge>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLiked(!liked);
                  }}
                  className={cn("w-8 h-8 p-0 hover:bg-gray-700", liked && "text-red-400")}
                >
                  <Heart className={cn("w-4 h-4", liked && "fill-current")} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setBookmarked(!bookmarked);
                  }}
                  className={cn("w-8 h-8 p-0 hover:bg-gray-700", bookmarked && "text-blue-400")}
                >
                  <Bookmark className={cn("w-4 h-4", bookmarked && "fill-current")} />
                </Button>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {post.author.name.charAt(0)}
                </div>
                <span className="text-sm text-gray-300">{post.author.name}</span>
              </div>

              <div className="flex items-center space-x-3 text-xs text-gray-400">
                <div className="flex items-center space-x-1">
                  <Eye className="w-3 h-3" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="w-3 h-3" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </MotionCard>
    );
  }

  return (
    <MotionCard
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -3 }}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
      onClick={() => (window.location.href = `/blog/${post.id}`)}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge className={getCategoryColor(post.category)}>
            {getCategoryIcon(post.category)}
            <span className="ml-1 capitalize">{post.category}</span>
          </Badge>
          <Badge variant="outline" className={getDifficultyColor(post.difficulty)}>
            {post.difficulty}
          </Badge>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs bg-gray-700/50 border-gray-600 text-gray-300">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline" className="text-xs bg-gray-700/50 border-gray-600 text-gray-300">
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                setLiked(!liked);
              }}
              className={cn("w-6 h-6 p-0 hover:bg-gray-700", liked && "text-red-400")}
            >
              <Heart className={cn("w-3 h-3", liked && "fill-current")} />
            </Button>
          </div>
        </div>
      </CardContent>
    </MotionCard>
  );
}