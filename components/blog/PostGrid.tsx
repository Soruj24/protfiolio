import { mockPosts } from "@/data/blog";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Search, Filter, Sparkles } from "lucide-react"; 
import PostCard from "./PostCard";
import { useState, useMemo } from "react";

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
  const [imageLoaded, setImageLoaded] = useState(false);

  // Filter and sort logic
  const filteredPosts = useMemo(() => {
    let filtered = mockPosts.filter((post) => {
      const matchesSearch = searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      
      const matchesDifficulty =
        selectedDifficulty === "all" || post.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty && post.status === "published";
    });

    // Sort posts
    switch (sortBy) {
      case "latest":
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case "popular":
        filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case "trending":
        filtered.sort((a, b) => {
          const aScore = (b.views || 0) + (b.likes || 0) * 2;
          const bScore = (a.views || 0) + (a.likes || 0) * 2;
          return aScore - bScore;
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const emptyStateVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const counterVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }
  };

  const filterIndicatorVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { 
      width: "auto", 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      width: 0, 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedDifficulty !== "all" || searchQuery !== "";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* Header Section */}
      <motion.div
        variants={headerVariants}
        className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4"
      >
        <div className="flex items-center space-x-3">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <BookOpen className="w-8 h-8 text-blue-400" />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-white">
              All Articles
            </h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-sm mt-1"
            >
              Explore our complete collection of technical content
            </motion.p>
          </div>
        </div>

        {/* Results Counter and Filter Indicator */}
        <div className="flex items-center space-x-4">
          {/* Active Filters Indicator */}
          <AnimatePresence>
            {hasActiveFilters && (
              <motion.div
                variants={filterIndicatorVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1"
              >
                <Filter className="w-3 h-3 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">
                  Filters Active
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Counter */}
          <motion.div
            key={`counter-${filteredPosts.length}`}
            variants={counterVariants}
            initial="initial"
            animate="animate"
            className="flex items-center space-x-2 bg-gray-700/50 border border-gray-600 rounded-full px-4 py-2"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
            <span className="text-white font-semibold text-sm">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'Result' : 'Results'}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Posts Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`grid-${selectedCategory}-${selectedDifficulty}-${searchQuery}-${sortBy}`}
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-full"
        >
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  variants={itemVariants}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <PostCard
                    post={post}
                    index={index}
                    variant="default"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              variants={emptyStateVariants}
              initial="hidden"
              animate="visible"
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.2 
                }}
                className="w-32 h-32 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Search className="w-12 h-12 text-gray-400" />
              </motion.div>
              
              <motion.h3 
                className="text-2xl font-semibold text-white mb-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                No articles found
              </motion.h3>
              
              <motion.p 
                className="text-gray-300 max-w-md mx-auto mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {searchQuery || selectedCategory !== "all" || selectedDifficulty !== "all" 
                  ? "Try adjusting your search terms or filters to find what you're looking for."
                  : "No articles are currently available. Check back soon for new content!"
                }
              </motion.p>

              {/* Suggestions based on current filters */}
              <AnimatePresence>
                {(searchQuery || selectedCategory !== "all" || selectedDifficulty !== "all") && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-3"
                  >
                    {searchQuery && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors text-sm"
                        onClick={() => window.location.reload()} // You might want to handle this differently
                      >
                        Clear search
                      </motion.button>
                    )}
                    {(selectedCategory !== "all" || selectedDifficulty !== "all") && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 hover:text-white hover:bg-blue-500/30 transition-colors text-sm"
                        onClick={() => window.location.reload()} // You might want to handle this differently
                      >
                        Reset filters
                      </motion.button>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:text-white hover:bg-purple-500/30 transition-colors text-sm"
                      onClick={() => window.location.href = '/blog'}
                    >
                      Browse all articles
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}