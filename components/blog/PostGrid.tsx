import { blogPosts } from "@/data/blog";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Search } from "lucide-react"; 
import PostCard from "./PostCard";

interface PostGridProps {
  searchQuery: string;
  selectedCategory: string;
  selectedDifficulty: string;
  sortBy: string;
}

export default function PostGrid({
  searchQuery,
  selectedCategory,
  selectedDifficulty,
  sortBy,
}: PostGridProps) {
  // Filter and sort logic here
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesDifficulty =
      selectedDifficulty === "all" || post.difficulty === selectedDifficulty;

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <BookOpen className="w-6 h-6 mr-2 text-blue-400" />
        All Articles
      </h2>

      <AnimatePresence>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <PostCard
                key={post.id}
                post={post}
                index={index}
                featured={false}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what
              you&apos;re looking for.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}