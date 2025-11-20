import { blogPosts } from "@/data/blog";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";
import PostCard from "./PostCard";

interface FeaturedPostsProps {
  searchQuery: string;
  selectedCategory: string;
  selectedDifficulty: string;
}

export default function FeaturedPosts({
  searchQuery,
  selectedCategory,
  selectedDifficulty,
}: FeaturedPostsProps) {
  const featuredPosts = blogPosts.filter((post) => post.featured);

  if (featuredPosts.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Sparkle className="w-6 h-6 mr-2 text-yellow-400" />
        Featured Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredPosts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} featured={true} />
        ))}
      </div>
    </div>
  );
}
