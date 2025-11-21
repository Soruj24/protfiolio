import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, Clock, Flame, Zap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { mockPosts } from "@/data/blog";

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "AI/ML": "bg-purple-500/20 text-purple-400 border-purple-500/30",
    "Web Development": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Backend: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    CSS: "bg-pink-500/20 text-pink-400 border-pink-500/30",
    TypeScript: "bg-blue-600/20 text-blue-400 border-blue-600/30",
    React: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    Mobile: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    Security: "bg-red-500/20 text-red-400 border-red-500/30",
    DevOps: "bg-green-500/20 text-green-400 border-green-500/30",
    API: "bg-teal-500/20 text-teal-400 border-teal-500/30",
  };
  return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
};

const getTrendingRankColor = (rank: number) => {
  const colors = [
    "bg-gradient-to-r from-yellow-500 to-orange-500", // 1st
    "bg-gradient-to-r from-gray-400 to-gray-500", // 2nd
    "bg-gradient-to-r from-orange-800 to-orange-600", // 3rd
    "bg-gradient-to-r from-gray-600 to-gray-700", // 4th
  ];
  return colors[rank - 1] || "bg-gradient-to-r from-gray-600 to-gray-700";
};

export default function TrendingPosts() {
  // Get trending posts based on views and likes
  const trendingPosts = mockPosts
    .filter((post) => post.status === "published")
    .sort((a, b) => {
      const aScore = (a.views || 0) + (a.likes || 0) * 2;
      const bScore = (b.views || 0) + (b.likes || 0) * 2;
      return bScore - aScore;
    })
    .slice(0, 4);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      x: 4,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const flameVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rankVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: (index: number) => ({
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.1,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const viewCountVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  if (trendingPosts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 overflow-hidden">
        <CardHeader className="pb-3">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              <motion.div variants={flameVariants} animate="animate">
                <Flame className="w-5 h-5 text-orange-400 fill-current" />
              </motion.div>
              <CardTitle className="text-lg font-semibold text-white">
                Trending Now
              </CardTitle>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-1 text-xs text-gray-400 bg-gray-700/50 rounded-full px-2 py-1"
            >
              <Zap className="w-3 h-3 text-yellow-400" />
              <span>Hot</span>
            </motion.div>
          </motion.div>
        </CardHeader>

        <CardContent>
          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {trendingPosts.map((post, index) => (
              <motion.div
                key={post._id}
                variants={itemVariants}
                whileHover="hover"
                className="group relative"
              >
                <Link href={`/blog/${post._id}`}>
                  <div className="p-3 rounded-xl bg-gray-700/30 border border-gray-600 hover:border-gray-500 transition-all duration-200 cursor-pointer hover:bg-gray-700/50 backdrop-blur-sm">
                    {/* Background glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {/* Trending rank badge */}
                          <motion.div
                            variants={rankVariants}
                            initial="initial"
                            animate="animate"
                            custom={index}
                            whileHover="hover"
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${getTrendingRankColor(
                              index + 1
                            )}`}
                          >
                            {index + 1}
                          </motion.div>

                          <Badge
                            className={`text-xs ${getCategoryColor(
                              post.category
                            )} border-0 backdrop-blur-sm`}
                          >
                            {post.category}
                          </Badge>
                        </div>

                        <motion.div
                          variants={viewCountVariants}
                          initial="initial"
                          animate="animate"
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center space-x-1 text-xs text-gray-400 bg-gray-600/50 rounded-full px-2 py-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>{post.views?.toLocaleString() || 0}</span>
                        </motion.div>
                      </div>

                      <h4 className="text-sm font-medium text-white mb-2 group-hover:text-orange-400 transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h4>

                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-2 h-2 bg-red-400 rounded-full"
                            />
                            <span>{post.likes || 0} likes</span>
                          </div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="flex items-center space-x-1 text-orange-400"
                        >
                          <span className="text-xs font-semibold">
                            {index === 0 && "🔥 Hot"}
                            {index === 1 && "🚀 Rising"}
                            {index === 2 && "⭐ Popular"}
                            {index >= 3 && "📈 Trending"}
                          </span>
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatDelay: 2,
                            }}
                          >
                            <ArrowRight className="w-3 h-3" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Trending Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 pt-3 border-t border-gray-600/50"
          >
            <Link href="/blog?sort=trending">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center space-x-2 text-sm text-gray-400 hover:text-white bg-gray-700/30 rounded-lg py-2 border border-gray-600 hover:border-gray-500 transition-all duration-200 cursor-pointer"
              >
                <TrendingUp className="w-4 h-4" />
                <span>View All Trending</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
