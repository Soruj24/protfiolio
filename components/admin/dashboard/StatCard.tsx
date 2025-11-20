"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
  children?: ReactNode;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  iconColor,
  bgColor,
  children,
}: StatCardProps) {
  return (
    <Card className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-sm font-medium text-gray-400">
          {title}
        </CardTitle>
        <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-white">
          {value}
        </div>
        {children}
      </CardContent>
    </Card>
  );
}