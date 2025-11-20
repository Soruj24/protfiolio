"use client";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { BlogStats as BlogStatsType } from "./types";

interface BlogStatsProps {
  stats: BlogStatsType;
}

const statConfigs = [
  {
    key: "total" as const,
    label: "Total Posts",
    icon: FileText,
    gradient: "from-blue-400 to-cyan-400",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    hoverColor: "hover:bg-blue-500/20"
  },
  {
    key: "published" as const,
    label: "Published",
    icon: Eye,
    gradient: "from-green-400 to-emerald-400",
    iconColor: "text-green-400",
    bgColor: "bg-green-500/10",
    hoverColor: "hover:bg-green-500/20"
  },
  {
    key: "draft" as const,
    label: "Drafts",
    icon: EyeOff,
    gradient: "from-yellow-400 to-amber-400",
    iconColor: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    hoverColor: "hover:bg-yellow-500/20"
  },
  {
    key: "featured" as const,
    label: "Featured",
    icon: CheckCircle2,
    gradient: "from-purple-400 to-pink-400",
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/10",
    hoverColor: "hover:bg-purple-500/20"
  }
];

export default function BlogStats({ stats }: BlogStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {statConfigs.map((stat) => {
        const IconComponent = stat.icon;
        return (
          <Card 
            key={stat.key}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 backdrop-blur-md hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-300 group-hover:text-gray-200 transition-colors">
                    {stat.label}
                  </p>
                  <p className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stats[stat.key]}
                  </p>
                </div>
                <div className={`p-3 ${stat.bgColor} rounded-xl ${stat.hoverColor} transition-all`}>
                  <IconComponent className={`w-6 h-6 ${stat.iconColor} group-hover:scale-110 transition-transform`} />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}