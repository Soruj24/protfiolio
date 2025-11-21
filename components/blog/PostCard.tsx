import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Eye, Heart, Bookmark, Brain, Code, Atom, Cloud, Palette, BookOpen, User, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: {
    _id: string;
    title: string;
    description: string;
    excerpt: string;
    publishedAt: string;
    readTime: string;
    category: string;
    difficulty: string;
    author: {
      name: string;
      avatar?: string;
    };
    views: number;
    likes: number;
    tags: string[];
    image?: string;
    featured?: boolean;
  };
  index: number;
  featured?: boolean;
  variant?: "default" | "featured" | "minimal";
}

export default function PostCard({ post, index, featured = false, variant = "default" }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(post.likes || 0);

  const MotionCard = motion.create(Card);

  // Animation variants
  const cardVariants = {
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
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    },
    hover: {
      y: featured ? -8 : -4,
      scale: featured ? 1.02 : 1.01,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.9 }
  };

  const likeVariants = {
    initial: { scale: 1 },
    liked: {
      scale: [1, 1.4, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const bookmarkVariants = {
    initial: { scale: 1 },
    bookmarked: {
      scale: [1, 1.3, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      "AI/ML": <Brain className="w-3 h-3" />,
      "Web Development": <Code className="w-3 h-3" />,
      "Backend": <Cloud className="w-3 h-3" />,
      "CSS": <Palette className="w-3 h-3" />,
      "TypeScript": <Code className="w-3 h-3" />,
      "React": <Code className="w-3 h-3" />,
      "Mobile": <Code className="w-3 h-3" />,
      "Security": <Atom className="w-3 h-3" />,
      "DevOps": <Cloud className="w-3 h-3" />,
      "API": <Cloud className="w-3 h-3" />,
    };
    return icons[category] || <BookOpen className="w-3 h-3" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      beginner: "bg-green-500/20 text-green-400 border-green-500/30",
      intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      advanced: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[difficulty] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "AI/ML": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Web Development": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Backend": "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
      "CSS": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "TypeScript": "bg-blue-600/20 text-blue-400 border-blue-600/30",
      "React": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      "Mobile": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Security": "bg-red-500/20 text-red-400 border-red-500/30",
      "DevOps": "bg-green-500/20 text-green-400 border-green-500/30",
      "API": "bg-teal-500/20 text-teal-400 border-teal-500/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newLikedState = !liked;
    setLiked(newLikedState);
    setCurrentLikes(prev => newLikedState ? prev + 1 : prev - 1);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setBookmarked(!bookmarked);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (featured || variant === "featured") {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover="hover"
        className="h-full"
      >
        <Link href={`/blog/${post._id}`} className="block h-full">
          <Card className="bg-gradient-to-br from-gray-800/50 to-blue-500/10 border border-gray-700 shadow-xl overflow-hidden group cursor-pointer backdrop-blur-sm h-full flex flex-col">
            <CardContent className="p-0 flex-1 flex flex-col">
              {/* Header with badges */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    variants={badgeVariants}
                    initial="initial"
                    animate="animate"
                  >
                    <Badge className={cn(getCategoryColor(post.category), "backdrop-blur-sm")}>
                      {getCategoryIcon(post.category)}
                      <span className="ml-1 capitalize">{post.category}</span>
                    </Badge>
                  </motion.div>
                  
                  <div className="flex items-center space-x-2">
                    {post.featured && (
                      <motion.div
                        variants={badgeVariants}
                        initial="initial"
                        animate="animate"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </motion.div>
                    )}
                    <motion.div
                      variants={badgeVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <Badge className={getDifficultyColor(post.difficulty)}>
                        {post.difficulty}
                      </Badge>
                    </motion.div>
                  </div>
                </div>

                {/* Title and excerpt */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt || post.description}
                </p>
              </div>

              {/* Tags */}
              <div className="px-6 pb-4">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 4).map((tag, tagIndex) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                    >
                      <Badge variant="outline" className="text-xs bg-gray-700/50 border-gray-600 text-gray-300">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer with meta info and actions */}
              <div className="mt-auto px-6 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      {post.author.avatar ? (
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={24}
                          height={24}
                          className="w-6 h-6 rounded-full"
                        />
                      ) : (
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          <User className="w-3 h-3" />
                        </div>
                      )}
                      <span className="text-sm text-gray-300">{post.author.name}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-xs text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-3 text-xs text-gray-400 mr-2">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{currentLikes}</span>
                      </div>
                    </div>

                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleLike}
                        className={cn("w-8 h-8 p-0 hover:bg-gray-700", liked && "text-red-400")}
                      >
                        <motion.div
                          variants={likeVariants}
                          initial="initial"
                          animate={liked ? "liked" : "initial"}
                        >
                          <Heart className={cn("w-4 h-4", liked && "fill-current")} />
                        </motion.div>
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleBookmark}
                        className={cn("w-8 h-8 p-0 hover:bg-gray-700", bookmarked && "text-blue-400")}
                      >
                        <motion.div
                          variants={bookmarkVariants}
                          initial="initial"
                          animate={bookmarked ? "bookmarked" : "initial"}
                        >
                          <Bookmark className={cn("w-4 h-4", bookmarked && "fill-current")} />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover="hover"
      className="h-full"
    >
      <Link href={`/blog/${post._id}`} className="block h-full">
        <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
          <CardContent className="p-6 flex-1 flex flex-col">
            {/* Header with badges */}
            <div className="flex items-center justify-between mb-3">
              <motion.div
                variants={badgeVariants}
                initial="initial"
                animate="animate"
              >
                <Badge className={cn(getCategoryColor(post.category), "text-xs")}>
                  {getCategoryIcon(post.category)}
                  <span className="ml-1 capitalize">{post.category}</span>
                </Badge>
              </motion.div>
              <motion.div
                variants={badgeVariants}
                initial="initial"
                animate="animate"
              >
                <Badge variant="outline" className={cn(getDifficultyColor(post.difficulty), "text-xs")}>
                  {post.difficulty}
                </Badge>
              </motion.div>
            </div>

            {/* Title and description */}
            <div className="flex-1 mb-4">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                {post.title}
              </h3>

              <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
                {post.excerpt || post.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {post.tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tagIndex * 0.1 }}
                >
                  <Badge variant="outline" className="text-xs bg-gray-700/50 border-gray-600 text-gray-300">
                    {tag}
                  </Badge>
                </motion.div>
              ))}
              {post.tags.length > 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Badge variant="outline" className="text-xs bg-gray-700/50 border-gray-600 text-gray-300">
                    +{post.tags.length - 3}
                  </Badge>
                </motion.div>
              )}
            </div>

            {/* Footer with meta info */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-3 text-xs text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-3 h-3" />
                    <span>{currentLikes}</span>
                  </div>
                </div>

                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLike}
                    className={cn("w-6 h-6 p-0 hover:bg-gray-700", liked && "text-red-400")}
                  >
                    <motion.div
                      variants={likeVariants}
                      initial="initial"
                      animate={liked ? "liked" : "initial"}
                    >
                      <Heart className={cn("w-3 h-3", liked && "fill-current")} />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}