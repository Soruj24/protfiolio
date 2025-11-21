import CategoryFilter from "./CategoryFilter";
import DifficultyFilter from "./DifficultyFilter";
import TrendingPosts from "./TrendingPosts";
import { motion, AnimatePresence } from "framer-motion";

interface BlogSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
  isFilterOpen: boolean;
  featuredPosts?: any[];
  popularPosts?: any[];
}

export default function BlogSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  isFilterOpen,
  featuredPosts = [],
  popularPosts = [],
}: BlogSidebarProps) {
  // Animation variants
  const sidebarVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileSidebarVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {/* Close sidebar on backdrop click */}}
          >
            <motion.div
              className="absolute top-0 left-0 h-full w-80 max-w-[90vw] bg-gray-900 border-r border-gray-700 overflow-y-auto"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-6">
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                >
                  <DifficultyFilter
                    selectedDifficulty={selectedDifficulty}
                    setSelectedDifficulty={setSelectedDifficulty}
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <TrendingPosts 
                    featuredPosts={featuredPosts}
                    popularPosts={popularPosts}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.div
        className={`hidden lg:block space-y-6 sticky top-24`}
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            <DifficultyFilter
              selectedDifficulty={selectedDifficulty}
              setSelectedDifficulty={setSelectedDifficulty}
            />
          </motion.div>

          <motion.div 
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <TrendingPosts 
              featuredPosts={featuredPosts}
              popularPosts={popularPosts}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Mobile Sidebar (Inline) */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            className={`lg:hidden space-y-6`}
            variants={mobileSidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <CategoryFilter
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <DifficultyFilter
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              <TrendingPosts 
                featuredPosts={featuredPosts}
                popularPosts={popularPosts}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}