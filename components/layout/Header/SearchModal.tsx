// components/layout/SearchModal.tsx
"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScanSearch, X, Sparkle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchModalProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchModal({
  isSearchOpen,
  setIsSearchOpen,
  searchQuery,
  setSearchQuery,
}: SearchModalProps) {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20"
          onClick={() => setIsSearchOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl mx-4 p-6 border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch}>
              <div className="relative">
                <ScanSearch className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
                <Input
                  placeholder="Search across the cosmos..."
                  className="pl-12 pr-20 py-3 text-lg border-2 border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-2 top-2"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-4 text-sm text-gray-500 flex items-center space-x-2">
                <Sparkle className="w-4 h-4" />
                <span>Search for projects, articles, or cosmic knowledge...</span>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}