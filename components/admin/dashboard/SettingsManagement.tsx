"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Download, RefreshCw } from "lucide-react";

interface SettingsManagementProps {
  onExport: (type: string) => void;
}

export default function SettingsManagement({ onExport }: SettingsManagementProps) {
  return (
    <Card className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <Settings className="w-6 h-6 mr-2 text-gray-400" />
          Portfolio Settings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-white">General Settings</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                  Site Information
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                  SEO Configuration
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                  Social Media Links
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Appearance</h4>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                  Theme Settings
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                  Custom CSS
                </Button>
                <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:bg-gray-700">
                  Font Settings
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h4 className="font-semibold text-white mb-4">
              Data Management
            </h4>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                onClick={() => onExport('data')} 
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <Settings className="w-4 h-4 mr-2" />
                Backup Settings
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset Cache
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}