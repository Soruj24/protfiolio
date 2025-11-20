"use client";
import { Search, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

interface BlogFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filterStatus: "all" | "published" | "draft";
  onStatusChange: (status: "all" | "published" | "draft") => void;
  sortBy: "newest" | "oldest" | "title";
  onSortChange: (sort: "newest" | "oldest" | "title") => void;
  onRefresh: () => void;
  isLoading: boolean;
  totalPosts: number;
  publishedCount: number;
}

export default function BlogFilters({
  searchTerm,
  onSearchChange,
  filterStatus,
  onStatusChange,
  sortBy,
  onSortChange,
  onRefresh,
  isLoading,
  totalPosts,
  publishedCount
}: BlogFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <CardTitle className="flex items-center text-white">
        <FileText className="w-6 h-6 mr-3 text-purple-400 drop-shadow-lg" />
        <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
          All Blog Posts ({totalPosts})
        </span>
        <Badge className="ml-3 bg-purple-500/20 text-purple-200 border-purple-400/30">
          {publishedCount} published
        </Badge>
      </CardTitle>

      <div className="flex flex-wrap gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 w-48 focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Filters */}
        <select
          value={filterStatus}
          onChange={(e) => onStatusChange(e.target.value as "all" | "published" | "draft")}
          className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as "newest" | "oldest" | "title")}
          className="px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="title">Alphabetical</option>
        </select>

        <Button
          variant="outline"
          size="sm"
          onClick={onRefresh}
          disabled={isLoading}
          className="bg-gray-700/50 hover:bg-gray-600/50 border-gray-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
        >
          <RefreshCw
            className={`w-4 h-4 mr-2 ${
              isLoading ? "animate-spin" : ""
            }`}
          />
          Refresh
        </Button>
      </div>
    </div>
  );
}