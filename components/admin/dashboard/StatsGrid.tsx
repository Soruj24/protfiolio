"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FolderOpen, BookOpen, MessageSquare, Eye, TrendingUp } from "lucide-react";
import { Stats } from "@/types";

interface StatsGridProps {
  stats: Stats;
}

export default function StatsGrid({ stats }: StatsGridProps) {
  const completionRate = ((stats.publishedPosts / stats.totalPosts) * 100) || 0;

  const statCards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      icon: FolderOpen,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-900/30",
      badges: [
        { label: `${stats.featuredProjects} featured`, variant: "secondary" as const },
        { label: `${stats.draftProjects} drafts`, variant: "outline" as const },
      ],
    },
    {
      title: "Blog Posts",
      value: stats.totalPosts,
      icon: BookOpen,
      iconColor: "text-green-400",
      bgColor: "bg-green-900/30",
      badges: [
        { label: `${stats.publishedPosts} published`, variant: "default" as const },
      ],
      progress: completionRate,
    },
    {
      title: "Messages",
      value: stats.unreadMessages,
      icon: MessageSquare,
      iconColor: "text-orange-400",
      bgColor: "bg-orange-900/30",
      description: "Unread messages",
    },
    {
      title: "Portfolio Views",
      value: stats.portfolioViews.toLocaleString(),
      icon: Eye,
      iconColor: "text-purple-400",
      bgColor: "bg-purple-900/30",
      growth: `+${stats.monthlyGrowth}% this month`,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <Card key={index} className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-medium text-gray-400">
                {card.title}
              </CardTitle>
              <div className={`w-10 h-10 ${card.bgColor} rounded-xl flex items-center justify-center`}>
                <Icon className={`h-5 w-5 ${card.iconColor}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white">
                {card.value}
              </div>
              
              {card.badges && (
                <div className="flex items-center space-x-2 mt-2">
                  {card.badges.map((badge, i) => (
                    <Badge key={i} variant={badge.variant} className="text-xs bg-gray-700 text-gray-300">
                      {badge.label}
                    </Badge>
                  ))}
                  {card.progress !== undefined && (
                    <Progress value={card.progress} className="w-16 bg-gray-700" />
                  )}
                </div>
              )}

              {card.description && (
                <p className="text-xs text-gray-400 mt-2">{card.description}</p>
              )}

              {card.growth && (
                <div className="flex items-center space-x-2 mt-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-green-400">{card.growth}</span>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}