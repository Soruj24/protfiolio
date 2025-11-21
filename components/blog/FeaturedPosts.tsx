import { motion, AnimatePresence } from "framer-motion";
import { Sparkle, Star, Zap } from "lucide-react";
import PostCard from "./PostCard";
import { mockPosts } from "@/data/blog";

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
  // Filter featured posts based on current filters
  const featuredPosts = mockPosts.filter(
    (post) =>
      post.featured &&
      post.status === "published" &&
      (selectedCategory === "all" || post.category === selectedCategory) &&
      (selectedDifficulty === "all" ||
        post.difficulty === selectedDifficulty) &&
      (searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ))
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const sparkleVariants = {
    animate: {
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const starVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 10, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Don't render if no featured posts match filters
  if (featuredPosts.length === 0) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-12 relative"
    >
      {/* Background decoration */}
      <div className="absolute -top-10 -left-10 -z-10">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"
        />
      </div>

      {/* Header */}
      <motion.div
        variants={headerVariants}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center space-x-3">
          <motion.div
            variants={sparkleVariants}
            animate="animate"
            className="relative"
          >
            <Sparkle className="w-8 h-8 text-yellow-400 fill-current" />
            <motion.div
              variants={starVariants}
              animate="animate"
              className="absolute -top-1 -right-1"
            >
              <Star className="w-4 h-4 text-orange-400 fill-current" />
            </motion.div>
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-white">Featured Articles</h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-sm mt-1"
            >
              Handpicked content showcasing the best of our knowledge base
            </motion.p>
          </div>
        </div>

        {/* Featured count badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, type: "spring" }}
          className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full px-4 py-2"
        >
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 font-semibold text-sm">
            {featuredPosts.length}{" "}
            {featuredPosts.length === 1 ? "Article" : "Articles"}
          </span>
        </motion.div>
      </motion.div>

      {/* Featured Posts Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`featured-${selectedCategory}-${selectedDifficulty}-${searchQuery}`}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post._id}
              variants={itemVariants}
              custom={index}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <PostCard
                post={post}
                index={index}
                variant="featured"
                showActions={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No results message */}
      <AnimatePresence>
        {featuredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center py-12"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Sparkle className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No Featured Articles Found
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Try adjusting your filters to see featured content matching your
              criteria.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 pt-8 border-t border-gray-700/50"
      />
    </motion.div>
  );
}
