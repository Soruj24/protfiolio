import { LucideIcon } from "lucide-react";

export interface BlogPost {
  _id: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio?: string;
  };
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  published: boolean;
  views: number;
  likes: number;
  featured: boolean;
  status: "published" | "draft";
  difficulty: "beginner" | "intermediate" | "advanced";
}

export interface BlogFormData {
  title: string;
  description: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio?: string;
  };
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
  status: "published" | "draft";
  difficulty: "beginner" | "intermediate" | "advanced";
}
export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    bio?: string;
  };
  content: string;
  createdAt: string;
  likes: number;
  replies: Comment[];
}

export interface BlogDetailsProps {
  blogPost: BlogPost;
  relatedPosts: BlogPost[];
  comments: Comment[];
  onLike: () => void;
  onBookmark: () => void;
  onShare: (platform: string) => void;
  onAddComment: (content: string) => void;
  isLiked: boolean;
  isBookmarked: boolean;
  copied: boolean;
}
export interface BlogStats {
  total: number;
  published: number;
  draft: number;
  featured: number;
}
export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  count: number;
}

export interface Difficulty {
  id: string;
  name: string;
}

export interface SortOption {
  id: string;
  name: string;
}