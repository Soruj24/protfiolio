// components/layout/MobileMenu.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Zap, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, quickActions } from "@/constand";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isScrolled?: boolean;
}

export default function MobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  isScrolled = false,
}: MobileMenuProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href.split("?")[0]);
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild>
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="lg:hidden"
        >
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "relative group transition-all duration-300",
              isScrolled 
                ? "bg-gray-100/50 dark:bg-gray-800/50 hover:bg-gray-200/70 dark:hover:bg-gray-700/70" 
                : "bg-white/20 dark:bg-gray-800/20 hover:bg-white/30 dark:hover:bg-gray-700/30"
            )}
          >
            <div className="relative p-1.5">
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Animated dot indicator */}
              <motion.div
                className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
            </div>
          </Button>
        </motion.div>
      </SheetTrigger>
      
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] p-0 border-l border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl overflow-hidden"
      >
        <MobileMenuContent
          isActive={isActive}
          handleNavigation={handleNavigation}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          pathname={pathname}
        />
      </SheetContent>
    </Sheet>
  );
}

// Enhanced Mobile Menu Content Component
const MobileMenuContent = ({
  isActive,
  handleNavigation,
  setIsMobileMenuOpen,
  pathname,
}: any) => (
  <div className="flex flex-col h-full">
    {/* Header Section */}
    <div className="p-6 border-b border-gray-100 dark:border-gray-800 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Zap className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Navigation
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore all features
            </p>
          </div>
        </div>

      </div>
      
      {/* Quick Stats */}
      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Online</span>
        </div>
        <span>•</span>
        <span>v2.4.1</span>
      </div>
    </div>

    {/* Navigation Items */}
    <div className="flex-1 overflow-y-auto">
      <div className="p-4 space-y-2">
        <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
          Main Menu
        </h3>
        
        {navigation.map((item, index) => {
          const Icon = item.icon;
          const isActiveNav = isActive(item.href);
          const hasUpdates = item.badge;

          return (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-between items-center p-4 rounded-xl transition-all duration-200 group",
                  isActiveNav
                    ? `${item.gradient} text-white shadow-lg shadow-blue-500/25`
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/80 hover:shadow-md"
                )}
                onClick={() => handleNavigation(item.href)}
              >
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isActiveNav 
                      ? "bg-white/20" 
                      : "bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                  )}>
                    <Icon className={cn(
                      "w-4 h-4 transition-transform group-hover:scale-110",
                      isActiveNav ? "text-white" : "text-gray-600 dark:text-gray-400"
                    )} />
                  </div>
                  
                  <div className="flex flex-col items-start min-w-0 flex-1">
                    <div className="flex items-center space-x-2 w-full">
                      <span className={cn(
                        "font-medium text-sm truncate",
                        isActiveNav ? "text-white" : "text-gray-900 dark:text-white"
                      )}>
                        {item.name}
                      </span>
                      {hasUpdates && (
                        <Badge 
                          variant="secondary" 
                          className="ml-1 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 text-xs px-1.5 py-0 h-4"
                        >
                          {hasUpdates}
                        </Badge>
                      )}
                    </div>
                    <span className={cn(
                      "text-xs truncate w-full",
                      isActiveNav ? "text-white/80" : "text-gray-500 dark:text-gray-400"
                    )}>
                      {item.description}
                    </span>
                  </div>
                </div>
                
                <ChevronRight className={cn(
                  "w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5",
                  isActiveNav ? "text-white/70" : "text-gray-400"
                )} />
              </Button>
            </motion.div>
          );
        })}
      </div>

     
    </div>

    {/* Footer */}
    <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/20">
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-3 h-3" />
          <span>Enhanced Experience</span>
        </div>
        <span>v2.4.1</span>
      </div>
    </div>
  </div>
);