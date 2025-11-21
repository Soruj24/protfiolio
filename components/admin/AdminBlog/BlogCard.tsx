"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle2,
  Copy,
  User,
  Calendar,
  Clock,
} from "lucide-react";
import { BlogPost } from "@/types/blog";
import Image from "next/image";

interface BlogCardProps {
  post: BlogPost;
  isSelected: boolean;
  onToggleSelection: (postId: string) => void;
  onEdit: (post: BlogPost) => void;
  onDelete: (id: string) => void;
  onDuplicate: (post: BlogPost) => void;
  onTogglePublish: (post: BlogPost) => void;
  onToggleFeatured: (post: BlogPost) => void;
}

export default function BlogCard({
  post,
  isSelected,
  onToggleSelection,
  onEdit,
  onDelete,
  onDuplicate,
  onTogglePublish,
  onToggleFeatured,
}: BlogCardProps) {
  return (
    <div
      className={`flex items-center justify-between p-4 border rounded-xl transition-all duration-300 group hover:scale-[1.02] ${
        isSelected
          ? "bg-blue-500/10 border-blue-400/30 shadow-lg shadow-blue-500/20"
          : "bg-gray-800/30 border-gray-700/50 hover:bg-gray-700/40 hover:border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/10"
      }`}
    >
      <div className="flex items-start space-x-4 flex-1 min-w-0">
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggleSelection(post._id)}
            className="mt-1 rounded focus:ring-purple-500 bg-gray-600 border-gray-500"
          />
          {post.coverImage && (
            <Image
              src={post.coverImage}
              alt={post.title}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0 border-2 border-gray-600 group-hover:border-purple-400 transition-all duration-300"
            />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-semibold text-white truncate group-hover:text-purple-200 transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center space-x-1">
              {post.featured && (
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-xs group-hover:bg-yellow-500/30 transition-all">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Featured
                </Badge>
              )}
              <Badge
                className={`text-xs transition-all ${
                  post.published
                    ? "bg-green-500/20 text-green-300 border-green-400/30 group-hover:bg-green-500/30"
                    : "bg-gray-500/20 text-gray-300 border-gray-400/30 group-hover:bg-gray-500/30"
                }`}
              >
                {post.published ? "Published" : "Draft"}
              </Badge>
            </div>
          </div>

          <p className="text-sm text-gray-400 line-clamp-2 mb-2 group-hover:text-gray-300 transition-colors">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{new Date(post.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime} min read</span>
            </div>
            {post.views !== undefined && (
              <div className="flex items-center space-x-1">
                <Eye className="w-3 h-3" />
                <span>{post.views} views</span>
              </div>
            )}
            {post.category && (
              <Badge className="text-xs bg-blue-500/20 text-blue-300 border-blue-400/30">
                {post.category}
              </Badge>
            )}
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 group-hover:border-purple-400/30 transition-all"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2 ml-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onTogglePublish(post)}
          className={`transition-all duration-300 hover:scale-110 ${
            post.published
              ? "text-green-400 border-green-400/30 bg-green-500/10 hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/20"
              : "text-gray-400 border-gray-600 bg-gray-700/50 hover:bg-gray-600/50 hover:shadow-lg hover:shadow-gray-500/20"
          }`}
        >
          {post.published ? (
            <Eye className="w-4 h-4" />
          ) : (
            <EyeOff className="w-4 h-4" />
          )}
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onToggleFeatured(post)}
          className={`transition-all duration-300 hover:scale-110 ${
            post.featured
              ? "text-yellow-400 border-yellow-400/30 bg-yellow-500/10 hover:bg-yellow-500/20 hover:shadow-lg hover:shadow-yellow-500/20"
              : "text-gray-400 border-gray-600 bg-gray-700/50 hover:bg-gray-600/50 hover:shadow-lg hover:shadow-gray-500/20"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(post)}
          className="text-blue-400 border-blue-400/30 bg-blue-500/10 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-110"
        >
          <Edit className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onDuplicate(post)}
          className="text-purple-400 border-purple-400/30 bg-purple-500/10 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:scale-110"
        >
          <Copy className="w-4 h-4" />
        </Button>

        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(post._id)}
          className="text-red-400 border-red-400/30 bg-red-500/10 hover:bg-red-500/20 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-110"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
