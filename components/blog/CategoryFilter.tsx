import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { Brain, Code, Atom, Cloud, Palette, BookOpen, Sparkles } from "lucide-react";
import { categories } from "@/data/blog";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const getCategoryIcon = (categoryId: string) => {
  const icons: Record<string, React.ReactNode> = {
    ai: <Brain className="w-4 h-4" />,
    web: <Code className="w-4 h-4" />,
    quantum: <Atom className="w-4 h-4" />,
    cloud: <Cloud className="w-4 h-4" />,
    design: <Palette className="w-4 h-4" />,
  };
  return icons[categoryId] || <BookOpen className="w-4 h-4" />;
};

const getCategoryColor = (categoryId: string) => {
  const colors: Record<string, string> = {
    ai: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    quantum: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    cloud: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    design: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  };
  return colors[categoryId] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

const getCategoryHoverColor = (categoryId: string) => {
  const colors: Record<string, string> = {
    ai: "hover:bg-purple-500/30 hover:border-purple-400/50",
    web: "hover:bg-blue-500/30 hover:border-blue-400/50",
    quantum: "hover:bg-indigo-500/30 hover:border-indigo-400/50",
    cloud: "hover:bg-cyan-500/30 hover:border-cyan-400/50",
    design: "hover:bg-pink-500/30 hover:border-pink-400/50",
  };
  return colors[categoryId] || "hover:bg-gray-600 hover:border-gray-500";
};

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    selected: {
      scale: [1, 1.2, 1],
      rotate: [0, 10, -5, 0],
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    selected: {
      scale: [1, 1.3, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0 },
    selected: {
      opacity: [0, 0.5, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardHeader className="pb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
            </motion.div>
            <CardTitle className="text-lg font-semibold text-white">
              Categories
            </CardTitle>
          </motion.div>
        </CardHeader>
        
        <CardContent>
          <motion.div 
            className="space-y-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categories.map((category, index) => {
              const isSelected = selectedCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 relative overflow-hidden ${
                    isSelected
                      ? `${getCategoryColor(category.id)} shadow-lg`
                      : `bg-gray-700/50 border-gray-600 text-gray-300 ${getCategoryHoverColor(category.id)}`
                  }`}
                >
                  {/* Animated background glow for selected item */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        variants={glowVariants}
                        initial="initial"
                        animate="selected"
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent"
                        style={{ opacity: 0.1 }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="flex items-center space-x-3 z-10">
                    <motion.div 
                      className={`p-2 rounded-lg ${
                        isSelected 
                          ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg" 
                          : "bg-gray-600/50"
                      }`}
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      animate={isSelected ? "selected" : "initial"}
                    >
                      {getCategoryIcon(category.id)}
                    </motion.div>
                    <motion.span 
                      className="font-medium"
                      animate={{
                        color: isSelected ? "#ffffff" : "#d1d5db"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {category.name}
                    </motion.span>
                  </div>
                  
                  <motion.div
                    variants={badgeVariants}
                    initial="initial"
                    whileHover="hover"
                    animate={isSelected ? "selected" : "initial"}
                  >
                    <Badge 
                      variant="secondary" 
                      className={`${
                        isSelected 
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg" 
                          : "bg-gray-600 text-gray-300"
                      } font-semibold`}
                    >
                      {category.count}
                    </Badge>
                  </motion.div>

                  {/* Selection indicator */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="w-2 h-2 bg-green-400 rounded-full"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </motion.div>

          {/* All Categories Reset Button */}
          <AnimatePresence>
            {selectedCategory !== "all" && (
              <motion.button
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                onClick={() => handleCategorySelect("all")}
                className="w-full mt-4 p-2 text-sm text-gray-400 hover:text-white bg-gray-700/30 rounded-lg border border-gray-600 hover:bg-gray-700/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Show All Categories
              </motion.button>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}