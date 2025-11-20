"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FolderOpen, BookOpen, Mail, RefreshCw, Zap } from "lucide-react";
import Link from "next/link";

interface QuickActionsProps {
  onRefresh: () => void;
  isLoading: boolean;
}

export default function QuickActions({ onRefresh, isLoading }: QuickActionsProps) {
  const actions = [
    {
      title: "Add New Project",
      description: "Create a new portfolio project",
      icon: FolderOpen,
      href: "#projects",
      variant: "default" as const,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "Write Blog Post",
      description: "Create new blog content",
      icon: BookOpen,
      href: "#blog",
      variant: "outline" as const,
    },
    {
      title: "Check Contact Form",
      description: "Test contact form functionality",
      icon: Mail,
      href: "/contact",
      variant: "outline" as const,
      external: true,
    },
  ];

  return (
    <Card className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center text-white">
          <Zap className="w-5 h-5 mr-2 text-yellow-400" />
          Quick Actions
        </CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onRefresh} 
          disabled={isLoading} 
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const buttonClass = action.variant === "default" 
              ? `h-14 justify-start px-4 rounded-xl bg-gradient-to-r ${action.gradient} hover:from-blue-700 hover:to-purple-700`
              : "h-14 justify-start px-4 rounded-xl border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white";

            return (
              <Button
                key={index}
                variant={action.variant}
                className={buttonClass}
                asChild
              >
                <Link 
                  href={action.href} 
                  target={action.external ? "_blank" : undefined}
                  className="flex items-center w-full"
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className={`text-sm ${action.variant === "default" ? "text-blue-200" : "text-gray-400"}`}>
                      {action.description}
                    </div>
                  </div>
                </Link>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}