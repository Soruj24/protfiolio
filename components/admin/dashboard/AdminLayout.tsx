"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface AdminLayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
  isSidebarOpen: boolean;
  onSidebarToggle: (open: boolean) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  stats: any;
}

export default function AdminLayout({
  children,
  activeTab,
  onTabChange,
  isSidebarOpen,
  onSidebarToggle,
  searchQuery,
  onSearchChange,
  stats,
}: AdminLayoutProps) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => onSidebarToggle(false)}
        />
      )}

      <Sidebar
        activeTab={activeTab}
        onTabChange={onTabChange}
        isOpen={isSidebarOpen}
        onClose={() => onSidebarToggle(false)}
        stats={stats}
      />

      {/* Main Content */}
      <div className="flex-1 overflow-auto relative z-10">
        <Header
          activeTab={activeTab}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onSidebarToggle={() => onSidebarToggle(true)}
          stats={stats}
        />
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}