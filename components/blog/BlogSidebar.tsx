import CategoryFilter from "./CategoryFilter";
import DifficultyFilter from "./DifficultyFilter";
import TrendingPosts from "./TrendingPosts";

interface BlogSidebarProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
  isFilterOpen: boolean;
}

export default function BlogSidebar({
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  isFilterOpen,
}: BlogSidebarProps) {
  return (
    <div
      className={`lg:col-span-1 space-y-6 ${
        isFilterOpen ? "block" : "hidden lg:block"
      }`}
    >
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <DifficultyFilter
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />

      <TrendingPosts />
    </div>
  );
}
