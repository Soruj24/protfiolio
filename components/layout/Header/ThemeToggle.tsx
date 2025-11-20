// components/layout/ThemeToggle.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative group"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 group-hover:scale-110 transition-transform" />
        ) : (
          <Moon className="w-4 h-4 group-hover:scale-110 transition-transform" />
        )}
      </Button>
    </motion.div>
  );
}