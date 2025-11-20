"use client";

import { Activity, Stats } from "@/types";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";
import StatsGrid from "./StatsGrid";

 

interface DashboardOverviewProps {
  stats: Stats;
  recentActivity: Activity[];
  onExport: (type: string) => void;
  onRefresh: () => void;
  isLoading: boolean;
}

export default function DashboardOverview({
  stats,
  recentActivity,
  onExport,
  onRefresh,
  isLoading,
}: DashboardOverviewProps) {
  return (
    <div className="space-y-6">
      <StatsGrid stats={stats} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <QuickActions onRefresh={onRefresh} isLoading={isLoading} />
        <RecentActivity 
          activities={recentActivity} 
          onExport={onExport} 
        />
      </div>
    </div>
  );
}