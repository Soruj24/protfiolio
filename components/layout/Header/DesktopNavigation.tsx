"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navigation } from "@/constand";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ExternalLink, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

interface DesktopNavigationProps {
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
  dropdownRef: React.RefObject<HTMLDivElement>;
  isScrolled?: boolean;
}

export default function DesktopNavigation({
  activeDropdown,
  setActiveDropdown,
  dropdownRef,
  isScrolled = false,
}: DesktopNavigationProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href.split("?")[0]);
  };

  const handleNavigation = (href: string) => {
    router.push(href);
    setActiveDropdown(null);
    setHoveredItem(null);
  };

  const handleItemHover = (itemName: string) => {
    setHoveredItem(itemName);
    if (navigation.find(item => item.name === itemName)?.subItems) {
      setActiveDropdown(itemName);
    }
  };

  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {navigation.map((item, index) => {
        const Icon = item.icon;
        const isActiveNav = isActive(item.href);
        const hasSubItems = item.subItems && item.subItems.length > 0;
        const isHovered = hoveredItem === item.name;
        const hasUpdates = item.badge;

        return (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
            onHoverStart={() => handleItemHover(item.name)}
            onHoverEnd={() => {
              setHoveredItem(null);
              if (activeDropdown === item.name) {
                setTimeout(() => setActiveDropdown(null), 150);
              }
            }}
          >
            {/* Active indicator bar */}
            <AnimatePresence>
              {isActiveNav && (
                <motion.div
                  className="absolute -bottom-2 left-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  initial={{ scale: 0, x: "-50%" }}
                  animate={{ scale: 1, x: "-50%" }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            <Button
              variant="ghost"
              className={cn(
                "relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border group",
                isActiveNav
                  ? `${item.gradient} text-white border-transparent shadow-lg shadow-blue-500/25`
                  : cn(
                      "text-gray-700 dark:text-gray-300 border-transparent",
                      isScrolled
                        ? "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white hover:shadow-md hover:border-gray-200 dark:hover:border-gray-600"
                        : "bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-gray-800/80 hover:shadow-md hover:border-gray-200/50 dark:hover:border-gray-600/50"
                    )
              )}
              onClick={() => handleNavigation(item.href)}
            >
              {/* Hover background effect */}
              <motion.div
                className={cn(
                  "absolute inset-0 rounded-xl -z-10",
                  isActiveNav 
                    ? "bg-gradient-to-r from-blue-600 to-purple-700"
                    : "bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-800"
                )}
                initial={false}
                animate={{ opacity: isHovered && !isActiveNav ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />

              <Icon className={cn(
                "w-4 h-4 transition-all duration-300",
                isActiveNav 
                  ? "text-white" 
                  : "text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
                isHovered && "scale-110"
              )} />
              
              <span className={cn(
                "font-semibold transition-colors",
                isActiveNav 
                  ? "text-white" 
                  : "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
              )}>
                {item.name}
              </span>

              {/* Badge for updates */}
              {hasUpdates && (
                <Badge 
                  variant="secondary" 
                  className={cn(
                    "ml-1 text-xs px-1.5 py-0 h-4 transition-colors",
                    isActiveNav
                      ? "bg-white/20 text-white/90 border-white/30"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                  )}
                >
                  {hasUpdates}
                </Badge>
              )}

              {/* Submenu indicator */}
              {hasSubItems && (
                <ChevronDown className={cn(
                  "w-3 h-3 transition-transform duration-300",
                  isHovered && "rotate-180",
                  isActiveNav ? "text-white/70" : "text-gray-400"
                )} />
              )}

              {/* Hover pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-transparent"
                initial={false}
                animate={{ 
                  borderColor: isHovered ? "rgba(59, 130, 246, 0.3)" : "transparent" 
                }}
                transition={{ duration: 0.2 }}
              />
            </Button>

            {/* Submenu Dropdown */}
            <AnimatePresence>
              {hasSubItems && activeDropdown === item.name && (
                <motion.div
                  ref={dropdownRef}
                  className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl shadow-black/10 z-50"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <div className="p-2">
                    <div className="px-3 py-2 mb-1">
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {item.name}
                      </p>
                    </div>
                    
                    {item.subItems?.map((subItem, subIndex) => (
                      <motion.div
                        key={subItem.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: subIndex * 0.05 }}
                      >
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-start items-center space-x-3 p-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                            isActive(subItem.href)
                              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          )}
                          onClick={() => handleNavigation(subItem.href)}
                        >
                          <subItem.icon className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform" />
                          <div className="flex flex-col items-start flex-1">
                            <span className="font-medium">{subItem.name}</span>
                            {subItem.description && (
                              <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                {subItem.description}
                              </span>
                            )}
                          </div>
                          {subItem.external && (
                            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                          )}
                          {subItem.badge && (
                            <Badge 
                              variant="secondary" 
                              className="ml-auto text-xs bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-1.5 py-0 h-4"
                            >
                              {subItem.badge}
                            </Badge>
                          )}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Dropdown footer */}
                  {item.featured && (
                    <div className="border-t border-gray-100 dark:border-gray-800 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-b-2xl">
                      <div className="flex items-center space-x-2 text-xs text-blue-700 dark:text-blue-300">
                        <Sparkles className="w-3 h-3" />
                        <span className="font-medium">{item.featured}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </nav>
  );
}

// Enhanced navigation data structure (add to your constants)
export const enhancedNavigation = navigation.map(item => ({
  ...item,
  subItems: item.subItems || [],
  badge: item.badge || null,
  featured: item.featured || null
}));