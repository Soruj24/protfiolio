"use client";

import { FolderOpen, BookOpen, Users, MessageSquare, Zap } from "lucide-react";
import { Activity } from "@/types";

interface ActivityItemProps {
  activity: Activity;
}

export default function ActivityItem({ activity }: ActivityItemProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "project":
        return <FolderOpen className="w-4 h-4" />;
      case "blog":
        return <BookOpen className="w-4 h-4" />;
      case "user":
        return <Users className="w-4 h-4" />;
      case "message":
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "project":
        return "text-blue-400 bg-blue-500/20";
      case "blog":
        return "text-green-400 bg-green-500/20";
      case "user":
        return "text-purple-400 bg-purple-500/20";
      case "message":
        return "text-orange-400 bg-orange-500/20";
      default:
        return "text-gray-400 bg-gray-500/20";
    }
  };

  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
      <div
        className={`w-8 h-8 ${getActivityColor(activity.type)} rounded-lg flex items-center justify-center flex-shrink-0`}
      >
        {getActivityIcon(activity.type)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white">
          {activity.title}
        </p>
        <p className="text-xs text-gray-400">
          {activity.action} • {activity.timestamp}
          {activity.user && ` • by ${activity.user}`}
        </p>
      </div>
    </div>
  );
}