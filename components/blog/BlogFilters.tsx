import { Button } from "@/components/ui/button";
import { sortOptions } from "@/data/blog";
import { Filter, X } from "lucide-react";

interface BlogFiltersProps {
  selectedCategory: string;
  selectedDifficulty: string;
  setSelectedCategory: (category: string) => void;
  setSelectedDifficulty: (difficulty: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (open: boolean) => void;
  searchQuery: string;
}

export default function BlogFilters({
  selectedCategory,
  selectedDifficulty,
  setSelectedCategory,
  setSelectedDifficulty,
  sortBy,
  setSortBy,
  isFilterOpen,
  setIsFilterOpen,
  searchQuery,
}: BlogFiltersProps) {
  const filteredPostsCount = 8; // This should be calculated based on actual filters

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="lg:hidden border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>

        <div className="flex items-center space-x-2 text-sm text-gray-300">
          <span>{filteredPostsCount} articles found</span>
          {(selectedCategory !== "all" || selectedDifficulty !== "all") && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedCategory("all");
                setSelectedDifficulty("all");
              }}
              className="text-xs text-gray-400 hover:text-gray-200 hover:bg-gray-700"
            >
              <X className="w-3 h-3 mr-1" />
              Clear filters
            </Button>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-300">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-gray-700 border border-gray-600 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
        >
          {sortOptions?.map((option) => (
            <option key={option.id} value={option.id} className="bg-gray-800 text-white">
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}