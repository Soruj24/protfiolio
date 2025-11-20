"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Users,
  FolderOpen,
  LogOut,
  BookOpen,
  MessageSquare,
  Settings,
  X,
  Sparkles,
  Database,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Stats } from "@/types";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
  stats: Stats;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  {
    id: "projects",
    label: "Projects",
    icon: FolderOpen,
    count: "totalProjects",
  },
  { id: "blog", label: "Blog", icon: BookOpen, count: "totalPosts" },
  { id: "users", label: "Users", icon: Users, count: "totalUsers" },
  {
    id: "messages",
    label: "Messages",
    icon: MessageSquare,
    count: "unreadMessages",
  },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({
  activeTab,
  onTabChange,
  isOpen,
  onClose,
  stats,
}: SidebarProps) {
  const [isSeeding, setIsSeeding] = useState(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleSeedData = async () => {
    if (isSeeding) return;

    const confirmed = window.confirm(
      "This will replace all existing projects with seed data. Are you sure you want to continue?"
    );

    if (!confirmed) return;

    setIsSeeding(true);

    try {
      const response = await fetch("/api/seed", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (result.success) {
        toast.success(`Successfully seeded ${result.count} projects!`);
        // Refresh the page to show updated data
        window.location.reload();
      } else {
        toast.error(result.error || "Failed to seed data");
      }
    } catch (error) {
      console.error("Error seeding data:", error);
      toast.error("Failed to seed data. Please try again.");
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <div
      className={`
      fixed lg:static inset-y-0 left-0 z-50
      w-72 bg-gray-900/95 backdrop-blur-sm shadow-xl border-r border-gray-700 
      flex flex-col transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
    `}
    >
      {/* Sidebar content */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Admin Panel</h2>
              <p className="text-sm text-gray-400 mt-0.5">
                Portfolio Management
              </p>
            </div>
          </div>
          <button
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg"
            onClick={onClose}
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <nav className="flex-1 mt-4 p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const count = item.count ? stats[item.count as keyof Stats] : 0;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  onTabChange(item.id);
                  onClose();
                }}
                className={`w-full flex items-center px-4 py-3 text-gray-300 hover:bg-blue-900/30 hover:text-blue-400 transition-all duration-200 rounded-xl group ${
                  isActive
                    ? "bg-gradient-to-r from-blue-900/30 to-blue-800/20 text-blue-400 border border-blue-800 shadow-sm"
                    : ""
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
                {item.count && count > 0 && (
                  <Badge
                    variant={
                      item.id === "messages" ? "destructive" : "secondary"
                    }
                    className="ml-auto text-xs bg-gray-700 text-gray-300"
                  >
                    {count}
                  </Badge>
                )}
                {isActive && (
                  <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Seed Data Button */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <Button
            variant="outline"
            className="w-full justify-center border-yellow-600 hover:border-yellow-700 hover:bg-yellow-900/30 hover:text-yellow-400 transition-colors text-yellow-400"
            onClick={handleSeedData}
            disabled={isSeeding}
          >
            <Database className="w-4 h-4 mr-2" />
            {isSeeding ? "Seeding..." : "Seed Data"}
          </Button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Populate with sample projects
          </p>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-700 mt-auto">
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-4 mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              SM
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">
                Soruj Mahmud
              </p>
              <p className="text-xs text-gray-400 truncate">Administrator</p>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full justify-center border-gray-600 hover:border-red-700 hover:bg-red-900/30 hover:text-red-400 transition-colors text-gray-300"
          onClick={handleSignOut}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
