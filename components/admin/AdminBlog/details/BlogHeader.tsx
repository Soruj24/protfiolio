"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Eye, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BlogPost } from "./types";
import { cn } from "@/lib/utils";

interface BlogHeaderProps {
  blogPost: BlogPost;
  getCategoryIcon: (category: string) => React.ReactNode;
  getDifficultyColor: (difficulty: string) => string;
  getCategoryColor: (category: string) => string;
  formatDate: (dateString: string) => string;
}

export default function BlogHeader({
  blogPost,
  getCategoryIcon,
  getDifficultyColor,
  getCategoryColor,
  formatDate,
}: BlogHeaderProps) {
  const MotionCard = motion(Card);

  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl mb-8"
    >
      <CardContent className="p-8">
        <div className="flex items-center space-x-4 mb-4">
          <Badge className={getCategoryColor(blogPost.category)}>
            {getCategoryIcon(blogPost.category)}
            <span className="ml-1 capitalize">{blogPost.category}</span>
          </Badge>
          <Badge className={getDifficultyColor(blogPost.difficulty)}>
            {blogPost.difficulty}
          </Badge>
          {blogPost.featured && (
            <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {blogPost.title}
        </h1>

        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          {blogPost.description}
        </p>

        {/* Author and Meta Info */}
        <div className="flex items-center justify-between border-t border-gray-700 pt-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12 border-2 border-blue-500/20">
              <AvatarImage src={blogPost.author.avatar} />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                {blogPost.author.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-white">{blogPost.author.name}</p>
              <p className="text-sm text-gray-300">{blogPost.author.role}</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blogPost.publishedAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{blogPost.views}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </MotionCard>
  );
}
