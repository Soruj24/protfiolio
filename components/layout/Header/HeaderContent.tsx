"use client";

import { useState, useRef, useEffect } from "react";
import { useSession } from "next-auth/react";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import SearchTrigger from "./SearchTrigger";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";
import SearchModal from "./SearchModal";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderContentProps {
  isScrolled: boolean;
}

export default function HeaderContent({ isScrolled }: HeaderContentProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { data: session, status } = useSession();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Enhanced scroll handling for hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b backdrop-blur-xl",
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-black/5"
          : "bg-white/80 dark:bg-gray-900/80 border-transparent"
      )}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-purple-500/2 to-cyan-500/3" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:16px_16px]" />

      {/* Status Bar */}
      <div
        className={cn(
          "h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo Section */}
          <motion.div
            className="flex items-center space-x-8"
            initial={false}
            animate={{ opacity: 1 }}
          >
            <Logo
              isHoveringLogo={isHoveringLogo}
              setIsHoveringLogo={setIsHoveringLogo}
            />

            {/* Desktop Navigation */}
            <DesktopNavigation
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              dropdownRef={dropdownRef}
              isScrolled={isScrolled}
            />
          </motion.div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Search Trigger */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <SearchTrigger
                setIsSearchOpen={setIsSearchOpen}
                isScrolled={isScrolled}
              />
            </motion.div>

            {/* User Menu */}
            <AnimatePresence mode="wait">
              {status === "loading" ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-9 w-9 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"
                />
              ) : session ? (
                <motion.div
                  key="user-menu"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <UserMenu session={session} dropdownRef={dropdownRef} />
                </motion.div>
              ) : (
                <motion.div
                  key="auth-buttons"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hidden sm:flex items-center space-x-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                    >
                      <Link href="/auth/signin">Sign In</Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      asChild
                      size="sm"
                      className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all duration-200 font-medium"
                    >
                      <Link href="/auth/signup">Get Started</Link>
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <MobileMenu
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                isScrolled={isScrolled}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Enhanced Active Dropdown Indicator */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
            initial={{ width: 0, x: 0 }}
            animate={{ width: "100px", x: "calc(50% - 50px)" }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Additional UI Components
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Enhanced Loading State Component
const HeaderSkeleton = () => (
  <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16 lg:h-20">
        <div className="flex items-center space-x-8">
          <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
          <div className="hidden lg:flex items-center space-x-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="h-9 w-9 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div className="h-9 w-24 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);
