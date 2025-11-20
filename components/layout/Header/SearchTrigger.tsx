// components/layout/SearchTrigger.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Search, Command, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SearchTriggerProps {
  setIsSearchOpen: (open: boolean) => void;
  isScrolled?: boolean;
  variant?: "default" | "minimal" | "expanded";
}

export default function SearchTrigger({
  setIsSearchOpen,
  isScrolled = false,
  variant = "default",
}: SearchTriggerProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsMac(/Mac|iPod|iPhone|iPad/.test(navigator.platform));
  }, []);

  // Keyboard shortcut handler
  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMounted, setIsSearchOpen]);

  const handleClick = () => {
    setIsSearchOpen(true);
    // Analytics event could be added here
    // trackEvent('search_trigger_clicked');
  };

  // Expanded variant for prominent search
  if (variant === "expanded") {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex-1 max-w-md"
      >
        <Button
          variant="outline"
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "w-full h-10 px-4 justify-between group relative overflow-hidden border-2 transition-all duration-300",
            isScrolled
              ? "bg-white/80 dark:bg-gray-800/80 border-gray-200/60 dark:border-gray-700/60 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-white dark:hover:bg-gray-800"
              : "bg-white/90 dark:bg-gray-800/90 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-white dark:hover:bg-gray-800"
          )}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />

          <div className="flex items-center space-x-3 text-left flex-1">
            <Search
              className={cn(
                "w-4 h-4 transition-colors duration-300",
                isHovered
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-400 dark:text-gray-500"
              )}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Search...
              </span>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                Documentation, features, and more
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.div
                  key="sparkle"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  className="p-1 rounded-md bg-blue-100 dark:bg-blue-900/30"
                >
                  <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="shortcut"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center space-x-1 text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded border"
                >
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Button>
      </motion.div>
    );
  }

  // Minimal variant (icon only)
  if (variant === "minimal") {
    return (
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "relative group p-2 transition-all duration-300",
            isScrolled
              ? "bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/70 dark:hover:bg-gray-700/70"
              : "bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30"
          )}
        >
          <Search
            className={cn(
              "w-4 h-4 transition-all duration-300",
              isHovered
                ? "text-blue-600 dark:text-blue-400 scale-110"
                : "text-gray-600 dark:text-gray-400"
            )}
          />

          {/* Pulsing dot indicator */}
          <motion.div
            className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-blue-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </Button>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="hidden sm:block"
    >
      <Button
        variant="outline"
        size="sm"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative group px-3 py-2 h-9 transition-all duration-300 border-2 overflow-hidden",
          isScrolled
            ? "bg-white/80 dark:bg-gray-800/80 border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-white dark:hover:bg-gray-800"
            : "bg-white/60 dark:bg-gray-800/60 border-gray-200/40 dark:border-gray-700/40 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-white dark:hover:bg-gray-800"
        )}
      >
        {/* Gradient background on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />

        <div className="flex items-center space-x-2">
          <Search
            className={cn(
              "w-4 h-4 transition-colors duration-300",
              isHovered
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-500 dark:text-gray-400"
            )}
          />

          <span
            className={cn(
              "text-sm font-medium transition-colors duration-300",
              isHovered
                ? "text-gray-700 dark:text-gray-200"
                : "text-gray-600 dark:text-gray-400"
            )}
          >
            Search
          </span>
        </div>

        {/* Keyboard shortcut badge */}
        <div
          className={cn(
            "ml-2 px-1.5 py-0.5 rounded text-xs border transition-all duration-300",
            isHovered
              ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800"
              : "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-600"
          )}
        >
          {isMounted ? (isMac ? "⌘K" : "Ctrl+K") : "⌘K"}
        </div>

        {/* Active indicator dot */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}

// Additional component for search trigger with stats
export function SearchTriggerWithStats({
  setIsSearchOpen,
  searchCount,
}: {
  setIsSearchOpen: (open: boolean) => void;
  searchCount?: number;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative"
    >
      <Button
        variant="outline"
        onClick={() => setIsSearchOpen(true)}
        className="h-10 px-4 pr-12 relative overflow-hidden group border-2 border-gray-200/60 dark:border-gray-700/60 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
      >
        <div className="flex items-center space-x-3">
          <Search className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          <div className="text-left">
            <div className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
              Quick Search
            </div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              {searchCount
                ? `${searchCount} resources available`
                : "Search anything..."}
            </div>
          </div>
        </div>

        {/* Stats badge */}
        {searchCount && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Badge
              variant="secondary"
              className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {searchCount}+
            </Badge>
          </div>
        )}
      </Button>
    </motion.div>
  );
}

// Badge component for completeness
const Badge = ({
  variant = "default",
  className,
  children,
}: {
  variant?: "default" | "secondary" | "outline";
  className?: string;
  children: React.ReactNode;
}) => (
  <span
    className={cn(
      "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
      variant === "secondary" &&
        "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
      className
    )}
  >
    {children}
  </span>
);
