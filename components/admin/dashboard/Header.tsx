"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Plus, Menu, Search } from "lucide-react";
import Link from "next/link"; 
import { Stats } from "@/types";

interface HeaderProps {
  activeTab: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSidebarToggle: () => void;
  stats: Stats;
}

const tabTitles: { [key: string]: { title: string; description: string } } = {
  dashboard: { 
    title: "Dashboard Overview", 
    description: "Monitor your portfolio performance and activity" 
  },
  projects: { 
    title: "Project Management", 
    description: "Manage and organize your projects" 
  },
  blog: { 
    title: "Blog Management", 
    description: "Create and publish blog posts" 
  },
  users: { 
    title: "User Management", 
    description: "Manage user accounts and permissions" 
  },
  messages: { 
    title: "Contact Messages", 
    description: "View and respond to contact messages" 
  },
  settings: { 
    title: "Settings & Configuration", 
    description: "Configure your portfolio settings" 
  },
};

export default function Header({
  activeTab,
  searchQuery,
  onSearchChange,
  onSidebarToggle,
  stats,
}: HeaderProps) {
  const { title, description } = tabTitles[activeTab] || { title: activeTab, description: "" };

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm shadow-sm border-b border-gray-700 sticky top-0 z-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-6 sm:px-8 py-4">
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <button 
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
            onClick={onSidebarToggle}
          >
            <Menu className="w-5 h-5 text-gray-400" />
          </button>
          <div className="flex-1 sm:flex-none">
            <h1 className="text-2xl font-bold text-white capitalize">{title}</h1>
            <p className="text-gray-400 mt-1">{description}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
            />
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="flex-1 sm:flex-none border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Link href="/" target="_blank" className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">View Portfolio</span>
              </Link>
            </Button>

            {(activeTab === "projects" || activeTab === "blog") && (
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1 sm:flex-none"
              >
                <Link href={`#${activeTab}`} className="flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Add New</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}