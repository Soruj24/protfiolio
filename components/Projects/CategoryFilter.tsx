// CategoryFilter.tsx
"use client";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto"
    >
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            className={`backdrop-blur-sm transition-all duration-300 px-4 py-2 rounded-lg flex items-center border ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-lg"
                : "border-white/20 text-white hover:bg-white/10 hover:border-white/40"
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <Icon className="w-4 h-4 mr-2" />
            {category.name}
            <span className="ml-2 bg-white/20 text-white rounded-full px-2 py-1 text-xs min-w-6">
              {category.count}
            </span>
          </button>
        );
      })}
    </motion.div>
  );
};

export default CategoryFilter;