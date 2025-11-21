import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import {
  Calendar,
  Clock,
  User,
  Eye,
  Heart,
  Bookmark,
  Share2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    avatar?: string;
  };
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  views?: number;
  likes?: number;
  featured?: boolean;
  category?: string;
  isBookmarked?: boolean;
}

interface BlogPostCardProps {
  post: BlogPost;
  variant?: "default" | "featured" | "minimal";
  showActions?: boolean;
  onBookmark?: (postId: string, bookmarked: boolean) => void;
  onLike?: (postId: string, liked: boolean) => void;
  index?: number;
}

export default function BlogPostCard({
  post,
  variant = "default",
  showActions = true,
  onBookmark,
  onLike,
  index = 0,
}: BlogPostCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked || false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || 0);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.9 },
  };

  const likeVariants = {
    initial: { scale: 1 },
    liked: {
      scale: [1, 1.4, 1],
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const bookmarkVariants = {
    initial: { scale: 1 },
    bookmarked: {
      scale: [1, 1.3, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newBookmarkState = !isBookmarked;
    setIsBookmarked(newBookmarkState);
    onBookmark?.(post._id, newBookmarkState);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newLikeState = !isLiked;
    setIsLiked(newLikeState);
    setLikesCount((prev) => (newLikeState ? prev + 1 : prev - 1));
    onLike?.(post._id, newLikeState);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const url = `${window.location.origin}/blog/${post.slug}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: url,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  if (variant === "minimal") {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <Link href={`/blog/${post._id}`}>
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </motion.div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (variant === "featured") {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
              <motion.div
                className="aspect-video lg:aspect-square overflow-hidden"
                variants={imageVariants}
                whileHover="hover"
              >
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
                <AnimatePresence>
                  {!imageLoaded && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gray-200 animate-pulse"
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>

            <div className="flex flex-col p-6 lg:p-8">
              <div className="flex-1">
                <AnimatePresence>
                  {post.featured && (
                    <motion.div
                      variants={badgeVariants}
                      initial="initial"
                      animate="animate"
                    >
                      <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                        Featured
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3 mb-4">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-600 text-lg mb-6 line-clamp-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    {post.author.avatar ? (
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="w-8 h-8 rounded-full"
                      />
                    ) : (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-400" />
                      </div>
                    )}
                    <span className="font-medium text-gray-900">
                      {post.author.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 4).map((tag, tagIndex) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.1 }}
                    >
                      <Badge variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {showActions && (
                  <div className="flex items-center space-x-2">
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleLike}
                        className={`p-2 ${
                          isLiked ? "text-red-500" : "text-gray-400"
                        }`}
                      >
                        <motion.div
                          variants={likeVariants}
                          initial="initial"
                          animate={isLiked ? "liked" : "initial"}
                        >
                          <Heart
                            className={`w-4 h-4 ${
                              isLiked ? "fill-current" : ""
                            }`}
                          />
                        </motion.div>
                        <span className="ml-1 text-xs">{likesCount}</span>
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
                        className={`p-2 ${
                          isBookmarked ? "text-blue-500" : "text-gray-400"
                        }`}
                      >
                        <motion.div
                          variants={bookmarkVariants}
                          initial="initial"
                          animate={isBookmarked ? "bookmarked" : "initial"}
                        >
                          <Bookmark
                            className={`w-4 h-4 ${
                              isBookmarked ? "fill-current" : ""
                            }`}
                          />
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
                        onClick={handleShare}
                        className="p-2 text-gray-400"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="h-full"
    >
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-0 bg-white shadow-sm">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative aspect-video overflow-hidden">
            <motion.div variants={imageVariants} whileHover="hover">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={400}
                height={225}
                className="w-full h-full object-cover"
                onLoad={() => setImageLoaded(true)}
              />
            </motion.div>

            <AnimatePresence>
              {!imageLoaded && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gray-200 animate-pulse"
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {post.featured && (
                <motion.div
                  className="absolute top-3 left-3"
                  variants={badgeVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                    Featured
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {post.category && (
                <motion.div
                  className="absolute top-3 right-3"
                  variants={badgeVariants}
                  initial="initial"
                  animate="animate"
                >
                  <Badge
                    variant="secondary"
                    className="bg-white/90 backdrop-blur-sm text-gray-700"
                  >
                    {post.category}
                  </Badge>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>

        <CardHeader className="pb-3 flex-1">
          <div className="space-y-3">
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                {post.title}
              </h3>
            </Link>

            <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </CardHeader>

        <CardContent className="pb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, tagIndex) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: tagIndex * 0.1 }}
              >
                <Badge
                  variant="outline"
                  className="text-xs bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
                >
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
                <Badge variant="outline" className="text-xs bg-gray-50">
                  +{post.tags.length - 3}
                </Badge>
              </motion.div>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 rounded-full"
                  />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span className="text-gray-700 font-medium">
                  {post.author.name}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}m</span>
              </div>
              {post.views !== undefined && (
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>

        {showActions && (
          <CardFooter className="pt-0 border-t border-gray-100 bg-gray-50/50">
            <div className="flex items-center justify-between w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>

              <div className="flex items-center space-x-1">
                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLike}
                    className={`p-2 h-8 w-8 ${
                      isLiked ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    <motion.div
                      variants={likeVariants}
                      initial="initial"
                      animate={isLiked ? "liked" : "initial"}
                    >
                      <Heart
                        className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                      />
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
                    className={`p-2 h-8 w-8 ${
                      isBookmarked ? "text-blue-500" : "text-gray-400"
                    }`}
                  >
                    <motion.div
                      variants={bookmarkVariants}
                      initial="initial"
                      animate={isBookmarked ? "bookmarked" : "initial"}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isBookmarked ? "fill-current" : ""
                        }`}
                      />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
