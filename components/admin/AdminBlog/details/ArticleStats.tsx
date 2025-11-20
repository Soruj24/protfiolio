"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";
import { Zap } from "lucide-react";

interface ArticleStatsProps {
  blogPost: BlogPost;
  formatDate: (dateString: string) => string;
}

export default function ArticleStats({
  blogPost,
  formatDate,
}: ArticleStatsProps) {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg text-white">
          <Zap className="w-5 h-5 mr-2 text-yellow-400" />
          Stats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">Published</span>
          <span className="font-medium text-white">
            {formatDate(blogPost.publishedAt)}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">Read time</span>
          <span className="font-medium text-white">{blogPost.readTime}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">Views</span>
          <span className="font-medium text-white">{blogPost.views}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">Likes</span>
          <span className="font-medium text-white">{blogPost.likes}</span>
        </div>
      </CardContent>
    </Card>
  );
}
