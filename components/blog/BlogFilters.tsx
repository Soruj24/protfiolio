import { Button } from "@/components/ui/button";
import { sortOptions } from "@/data/blog";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogFiltersProps {
  selectedCategory: string;
  selectedDifficulty: string;
  setSelectedCategory: (category: string) => void;
  setSelectedDifficulty: (difficulty: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  searchQuery: string;
  totalPosts: number;
}

export default function BlogFilters({
  selectedCategory,
  selectedDifficulty,
  setSelectedCategory,
  setSelectedDifficulty,
  sortBy,
  setSortBy,
  isFilterOpen,
  setIsFilterOpen,
  searchQuery,
  totalPosts,
}: BlogFiltersProps) {
  const hasActiveFilters =
    selectedCategory !== "all" || selectedDifficulty !== "all";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const clearButtonVariants = {
    initial: { opacity: 0, x: -10 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.2 },
    },
  };

  const selectVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.2 },
    },
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSelectedDifficulty("all");
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center space-x-4">
        {/* Filter Button */}
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button
            variant="outline"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </motion.div>

        <div className="flex items-center space-x-2 text-sm text-gray-300">
          {/* Results Count */}
          <motion.span
            key={`count-${totalPosts}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {totalPosts} {totalPosts === 1 ? "article" : "articles"} found
            {searchQuery && (
              <span className="text-blue-400 ml-1">for &quot;{searchQuery}&quot;</span>
            )}
          </motion.span>

          {/* Clear Filters Button */}
          <AnimatePresence>
            {hasActiveFilters && (
              <motion.div
                variants={clearButtonVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearFilters}
                  className="text-xs text-gray-400 hover:text-gray-200 hover:bg-gray-700"
                >
                  <X className="w-3 h-3 mr-1" />
                  Clear filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Sort Dropdown */}
      <motion.div
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-sm text-gray-300">Sort by:</span>
        <motion.select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white cursor-pointer"
          whileFocus="focus"
          variants={selectVariants}
        >
          {sortOptions?.map((option, index) => (
            <motion.option
              key={option.id}
              value={option.id}
              className="bg-gray-800 text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {option.name}
            </motion.option>
          ))}
        </motion.select>
      </motion.div>
    </motion.div>
  );
}
