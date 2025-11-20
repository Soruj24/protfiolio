"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Bookmark } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface BlogNavigationProps {
  onLike: () => void;
  onBookmark: () => void;
  isLiked: boolean;
  isBookmarked: boolean;
  likes: number;
}

export default function BlogNavigation({
  onLike,
  onBookmark,
  isLiked,
  isBookmarked,
  likes,
}: BlogNavigationProps) {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-40 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Button>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={onLike}
              className={cn(
                "flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-700",
                isLiked && "text-red-400"
              )}
            >
              <Heart className={cn("w-4 h-4", isLiked && "fill-current")} />
              <span>{likes}</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={onBookmark}
              className={cn(
                "text-gray-300 hover:text-white hover:bg-gray-700",
                isBookmarked && "text-blue-400"
              )}
            >
              <Bookmark
                className={cn("w-4 h-4", isBookmarked && "fill-current")}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}