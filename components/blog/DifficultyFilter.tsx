import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; 
import { TrendingUp, Target, Zap, Gauge } from "lucide-react";
import { difficulties } from "@/data/blog";
import { motion, AnimatePresence } from "framer-motion";

interface DifficultyFilterProps {
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
}

const getDifficultyIcon = (difficultyId: string) => {
  const icons: Record<string, React.ReactNode> = {
    beginner: <Target className="w-4 h-4" />,
    intermediate: <TrendingUp className="w-4 h-4" />,
    advanced: <Zap className="w-4 h-4" />,
  };
  return icons[difficultyId] || <Target className="w-4 h-4" />;
};

const getDifficultyColor = (difficultyId: string) => {
  const colors: Record<string, string> = {
    beginner: "bg-green-500/20 text-green-400 border-green-500/30",
    intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    advanced: "bg-red-500/20 text-red-400 border-red-500/30",
  };
  return colors[difficultyId] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

const getDifficultyHoverColor = (difficultyId: string) => {
  const colors: Record<string, string> = {
    beginner: "hover:bg-green-500/30 hover:border-green-400/50",
    intermediate: "hover:bg-yellow-500/30 hover:border-yellow-400/50",
    advanced: "hover:bg-red-500/30 hover:border-red-400/50",
  };
  return colors[difficultyId] || "hover:bg-gray-600 hover:border-gray-500";
};

const getDifficultyPulseColor = (difficultyId: string) => {
  const colors: Record<string, string> = {
    beginner: "bg-green-400",
    intermediate: "bg-yellow-400",
    advanced: "bg-red-400",
  };
  return colors[difficultyId] || "bg-gray-400";
};

export default function DifficultyFilter({
  selectedDifficulty,
  setSelectedDifficulty,
}: DifficultyFilterProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
      scale: [1, 1.3, 1],
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
      scale: [1, 1.4, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0 },
    selected: {
      scale: [1, 1.5, 1],
      opacity: [0, 0.8, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (custom: number) => ({
      width: `${custom}%`,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    })
  };

  const handleDifficultySelect = (difficultyId: string) => {
    setSelectedDifficulty(difficultyId);
  };

  // Mock data for difficulty counts (replace with actual data)
  const difficultyCounts = {
    beginner: 12,
    intermediate: 8,
    advanced: 5
  };

  const getDifficultyLevel = (difficultyId: string) => {
    const levels = {
      beginner: 25,
      intermediate: 60,
      advanced: 90
    };
    return levels[difficultyId] || 0;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardHeader className="pb-3">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-2"
          >
            <motion.div
              animate={{ 
                rotate: [0, 180, 360],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Gauge className="w-4 h-4 text-blue-400" />
            </motion.div>
            <CardTitle className="text-lg font-semibold text-white">
              Difficulty Level
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
            {difficulties.map((difficulty, index) => {
              const isSelected = selectedDifficulty === difficulty.id;
              const count = difficultyCounts[difficulty.id as keyof typeof difficultyCounts] || 0;
              const progressLevel = getDifficultyLevel(difficulty.id);
              
              return (
                <motion.button
                  key={difficulty.id}
                  onClick={() => handleDifficultySelect(difficulty.id)}
                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 relative overflow-hidden ${
                    isSelected
                      ? `${getDifficultyColor(difficulty.id)} shadow-lg`
                      : `bg-gray-700/50 border-gray-600 text-gray-300 ${getDifficultyHoverColor(difficulty.id)}`
                  }`}
                >
                  {/* Progress bar background */}
                  <motion.div 
                    className="absolute inset-0 opacity-10"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <div className={`h-full ${getDifficultyColor(difficulty.id).split(' ')[0]}`} />
                  </motion.div>

                  {/* Animated progress bar */}
                  <motion.div
                    className={`absolute inset-0 opacity-20 ${getDifficultyColor(difficulty.id).split(' ')[0]}`}
                    variants={progressVariants}
                    initial="hidden"
                    animate="visible"
                    custom={progressLevel}
                  />

                  {/* Pulsing effect for selected item */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        variants={pulseVariants}
                        initial="initial"
                        animate="selected"
                        className={`absolute inset-0 rounded-xl ${getDifficultyPulseColor(difficulty.id)}`}
                        style={{ opacity: 0.1 }}
                      />
                    )}
                  </AnimatePresence>

                  <div className="flex items-center space-x-3 z-10">
                    <motion.div 
                      className={`p-2 rounded-lg ${
                        isSelected 
                          ? `${
                              difficulty.id === 'beginner' ? 'bg-green-500' :
                              difficulty.id === 'intermediate' ? 'bg-yellow-500' :
                              'bg-red-500'
                            } text-white shadow-lg` 
                          : "bg-gray-600/50"
                      }`}
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      animate={isSelected ? "selected" : "initial"}
                    >
                      {getDifficultyIcon(difficulty.id)}
                    </motion.div>
                    <div className="flex flex-col items-start">
                      <motion.span 
                        className="font-medium capitalize"
                        animate={{
                          color: isSelected ? "#ffffff" : "#d1d5db"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {difficulty.name}
                      </motion.span>
                      <motion.span 
                        className="text-xs opacity-70"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {difficulty.id === 'beginner' && 'Perfect for getting started'}
                        {difficulty.id === 'intermediate' && 'Build on existing knowledge'}
                        {difficulty.id === 'advanced' && 'Challenging concepts & techniques'}
                      </motion.span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 z-10">
                    {/* Difficulty indicator dots */}
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((dot) => (
                        <motion.div
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full ${
                            dot <= (difficulty.id === 'beginner' ? 1 : difficulty.id === 'intermediate' ? 2 : 3)
                              ? getDifficultyPulseColor(difficulty.id)
                              : 'bg-gray-600'
                          }`}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.6 + dot * 0.1 }}
                        />
                      ))}
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
                            ? `${
                                difficulty.id === 'beginner' ? 'bg-green-500' :
                                difficulty.id === 'intermediate' ? 'bg-yellow-500' :
                                'bg-red-500'
                              } text-white shadow-lg` 
                            : "bg-gray-600 text-gray-300"
                        } font-semibold min-w-8 justify-center`}
                      >
                        {count}
                      </Badge>
                    </motion.div>
                  </div>

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
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className={`w-2 h-2 rounded-full ${getDifficultyPulseColor(difficulty.id)}`}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </motion.div>

          {/* All Difficulties Reset Button */}
          <AnimatePresence>
            {selectedDifficulty !== "all" && (
              <motion.button
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                onClick={() => handleDifficultySelect("all")}
                className="w-full mt-4 p-2 text-sm text-gray-400 hover:text-white bg-gray-700/30 rounded-lg border border-gray-600 hover:bg-gray-700/50 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Show All Difficulty Levels
              </motion.button>
            )}
          </AnimatePresence>

          {/* Difficulty Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 pt-4 border-t border-gray-600/50"
          >
            <div className="flex justify-between text-xs text-gray-400">
              <span>Beginner Friendly</span>
              <span>Expert Level</span>
            </div>
            <div className="mt-2 flex space-x-1">
              {['beginner', 'intermediate', 'advanced'].map((level, index) => (
                <motion.div
                  key={level}
                  className={`h-1 flex-1 rounded-full ${
                    level === 'beginner' ? 'bg-green-500' :
                    level === 'intermediate' ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                />
              ))}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}