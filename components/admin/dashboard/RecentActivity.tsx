"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "@/types";
import { Clock, Download, AlertCircle } from "lucide-react"; 
import ActivityItem from "./ActivityItem";
interface RecentActivityProps {
  activities: Activity[];
  onExport: (type: string) => void;
}

export default function RecentActivity({ activities, onExport }: RecentActivityProps) {
  return (
    <Card className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="flex items-center text-white">
          <Clock className="w-5 h-5 mr-2 text-gray-400" />
          Recent Activity
        </CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onExport('activity')} 
          className="border-gray-600 text-gray-300 hover:bg-gray-700"
        >
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}

          {activities.length === 0 && (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-6 h-6 text-gray-500" />
              </div>
              <p className="text-gray-400 text-sm">No recent activity</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}