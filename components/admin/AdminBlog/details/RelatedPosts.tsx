"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";
import { Clock, Eye, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

interface RelatedPostsProps {
  relatedPosts: BlogPost[];
}

export default function RelatedPosts({ relatedPosts }: RelatedPostsProps) {
  const router = useRouter();

  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg text-white">
          <Rocket className="w-5 h-5 mr-2 text-orange-400" />
          Related Articles
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {relatedPosts.map((post) => (
          <div
            key={post._id}
            className="p-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-md transition-all duration-300 cursor-pointer"
            onClick={() => router.push(`/blog/${post._id}`)}
          >
            <h4 className="font-semibold text-white text-sm line-clamp-2 mb-1">
              {post.title}
            </h4>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
              <Eye className="w-3 h-3" />
              <span>{post.views}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
