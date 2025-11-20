import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, User, Eye, Heart, Bookmark, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
}

export default function BlogPostCard({ 
  post, 
  variant = "default", 
  showActions = true,
  onBookmark,
  onLike 
}: BlogPostCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked || false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes || 0);

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
    setLikesCount(prev => newLikeState ? prev + 1 : prev - 1);
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
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    }
  };

  if (variant === "minimal") {
    return (
      <Card className="group hover:shadow-md transition-all duration-300 border-l-4 border-l-blue-500">
        <CardContent className="p-4">
          <Link href={`/blog/${post.slug}`}>
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
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </CardContent>
      </Card>
    );
  }

  if (variant === "featured") {
    return (
      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="aspect-video lg:aspect-square overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
          
          <div className="flex flex-col p-6 lg:p-8">
            <div className="flex-1">
              {post.featured && (
                <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                  Featured
                </Badge>
              )}
              
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
                  <span className="font-medium text-gray-900">{post.author.name}</span>
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
                {post.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {showActions && (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLike}
                    className={`p-2 ${isLiked ? 'text-red-500' : 'text-gray-400'}`}
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="ml-1 text-xs">{likesCount}</span>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBookmark}
                    className={`p-2 ${isBookmarked ? 'text-blue-500' : 'text-gray-400'}`}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                  </Button>
                  
                  <Button variant="ghost" size="sm" onClick={handleShare} className="p-2 text-gray-400">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Default variant
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col border-0 bg-white shadow-sm">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {post.featured && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                Featured
              </Badge>
            </div>
          )}
          {post.category && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-gray-700">
                {post.category}
              </Badge>
            </div>
          )}
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
          {post.tags.slice(0, 3).map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline" className="text-xs bg-gray-50">
              +{post.tags.length - 3}
            </Badge>
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
              <span className="text-gray-700 font-medium">{post.author.name}</span>
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
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn"
            >
              <Link href={`/blog/${post.slug}`}>
                Read More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`p-2 h-8 w-8 ${isLiked ? 'text-red-500' : 'text-gray-400'}`}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleBookmark}
                className={`p-2 h-8 w-8 ${isBookmarked ? 'text-blue-500' : 'text-gray-400'}`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}