"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CardTitle } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";

interface ProjectFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filterCategory: string;
  onCategoryChange: (category: string) => void;
  filterStatus: string;
  onStatusChange: (status: string) => void;
  totalProjects: number;
  featuredCount: number;
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "web", label: "Web Applications" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "fullstack", label: "Full Stack" },
  { value: "ecommerce", label: "E-commerce" },
];

const statuses = [
  { value: "all", label: "All Status" },
  { value: "published", label: "Published" },
  { value: "draft", label: "Draft" },
];

export default function ProjectFilters({
  searchTerm,
  onSearchChange,
  filterCategory,
  onCategoryChange,
  filterStatus,
  onStatusChange,
  totalProjects,
  featuredCount
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <CardTitle className="flex items-center text-white">
        <FolderOpen className="w-6 h-6 mr-2 text-gray-400" />
        All Projects ({totalProjects})
        <Badge
          variant="secondary"
          className="ml-2 bg-gray-700 text-gray-300"
        >
          {featuredCount} featured
        </Badge>
      </CardTitle>

      <div className="flex flex-wrap gap-3">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 w-48 focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        {/* Filters */}
        <select
          value={filterCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-3 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        <select
          value={filterStatus}
          onChange={(e) => onStatusChange(e.target.value)}
          className="px-3 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
        >
          {statuses.map((status) => (
            <option key={status.value} value={status.value}>
              {status.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}