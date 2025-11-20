"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tag } from "lucide-react";
import { motion } from "framer-motion"; 
import { BlogPost } from "@/types/blog";

interface BlogContentProps {
  blogPost: BlogPost;
  contentRef: React.RefObject<HTMLDivElement>;
}

export default function BlogContent({ blogPost, contentRef }: BlogContentProps) {
  const MotionCard = motion(Card);

  return (
    <MotionCard 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl mb-8"
    >
      <CardContent className="p-8" ref={contentRef}>
        <article
          className="prose prose-lg max-w-none 
            prose-headings:text-white 
            prose-p:text-gray-300 
            prose-li:text-gray-300 
            prose-strong:text-white 
            prose-code:text-gray-200 
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-pre:border prose-pre:border-gray-700
            prose-h1:text-3xl prose-h1:font-bold
            prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8
            prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-6
            prose-ul:list-disc prose-ol:list-decimal
            prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="flex items-center space-x-2 mb-3">
            <Tag className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-medium text-white">
              Tags:
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm bg-gray-700/50 border-gray-600 text-gray-300">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </MotionCard>
  );
}