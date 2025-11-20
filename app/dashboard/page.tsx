"use client";

import { useState, useEffect, useMemo, Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";
import { signOut } from "next-auth/react";

 
// Types
import { Stats, Activity } from "@/types";
import DashboardSkeleton from "@/components/admin/dashboard/DashboardSkeleton";
import DashboardOverview from "@/components/admin/dashboard/DashboardOverview";
import AdminProjects from "@/components/admin/adminProject/AdminProjects";
import AdminBlog from "@/components/admin/AdminBlog/AdminBlog";
import AdminUsers from "@/components/admin/AdminUsers";
import MessagesManagement from "@/components/admin/dashboard/MessagesManagement";
import SettingsManagement from "@/components/admin/dashboard/SettingsManagement";
import AdminLayout from "@/components/admin/dashboard/AdminLayout";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [stats, setStats] = useState<Stats>({
    totalProjects: 0,
    featuredProjects: 0,
    totalUsers: 0,
    totalPosts: 0,
    publishedPosts: 0,
    unreadMessages: 0,
    draftProjects: 0,
    portfolioViews: 0,
    conversionRate: 0,
    monthlyGrowth: 0,
  });
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Real-time updates effect
  useEffect(() => {
    fetchStats();
    fetchRecentActivity();

    const interval = setInterval(() => {
      if (activeTab === "dashboard") {
        fetchStats();
        fetchRecentActivity();
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [activeTab]);

  const fetchStats = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call - replace with actual API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockStats: Stats = {
        totalProjects: 15,
        featuredProjects: 8,
        totalUsers: 3,
        totalPosts: 12,
        publishedPosts: 9,
        unreadMessages: 5,
        draftProjects: 3,
        portfolioViews: 1247,
        conversionRate: 12.5,
        monthlyGrowth: 12.3,
      };
      setStats(mockStats);
    } catch (error) {
      console.error("Error fetching stats:", error);
      setError("Failed to load dashboard data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchRecentActivity = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const mockActivity: Activity[] = [
        {
          id: "1",
          type: "project",
          action: "created",
          title: "E-commerce Platform",
          timestamp: "2 hours ago",
          user: "Soruj Mahmud",
        },
        {
          id: "2",
          type: "blog",
          action: "published",
          title: "React Best Practices",
          timestamp: "1 day ago",
          user: "Soruj Mahmud",
        },
        {
          id: "3",
          type: "message",
          action: "received",
          title: "New project inquiry",
          timestamp: "2 days ago",
        },
        {
          id: "4",
          type: "project",
          action: "updated",
          title: "Portfolio Website",
          timestamp: "3 days ago",
          user: "Soruj Mahmud",
        },
      ];
      setRecentActivity(mockActivity);
    } catch (error) {
      console.error("Error fetching activity:", error);
    }
  };

  const exportData = (type: string) => {
    const dataStr = JSON.stringify(stats, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `portfolio-${type}-${
      new Date().toISOString().split("T")[0]
    }.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderContent = () => {
    if (error && activeTab === "dashboard") {
      return (
        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-400">{error}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchStats}
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </div>
      );
    }

    if (isLoading && activeTab === "dashboard") {
      return <DashboardSkeleton />;
    }

    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardOverview
            stats={stats}
            recentActivity={recentActivity}
            onExport={exportData}
            onRefresh={fetchStats}
            isLoading={isLoading}
          />
        );
      case "projects":
        return (
          <Suspense fallback={<div>Loading projects...</div>}>
            <AdminProjects />
          </Suspense>
        );
      case "blog":
        return (
          <Suspense fallback={<div>Loading blog...</div>}>
            <AdminBlog />
          </Suspense>
        );
      case "users":
        return (
          <Suspense fallback={<div>Loading users...</div>}>
            <AdminUsers />
          </Suspense>
        );
      case "messages":
        return <MessagesManagement />;
      case "settings":
        return <SettingsManagement onExport={exportData} />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <AdminLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      isSidebarOpen={isSidebarOpen}
      onSidebarToggle={setIsSidebarOpen}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      stats={stats}
    >
      {renderContent()}
    </AdminLayout>
  );
}
