"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Linkedin, Link2, Check } from "lucide-react";

interface ShareCardProps {
  onShare: (platform: string) => void;
  copied: boolean;
}

export default function ShareCard({ onShare, copied }: ShareCardProps) {
  return (
    <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-lg text-white">
          <Share2 className="w-5 h-5 mr-2 text-green-400" />
          Share
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onShare("twitter")}
            className="flex items-center space-x-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <Twitter className="w-4 h-4" />
            <span>Twitter</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onShare("facebook")}
            className="flex items-center space-x-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <Facebook className="w-4 h-4" />
            <span>Facebook</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onShare("linkedin")}
            className="flex items-center space-x-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onShare("copy")}
            className="flex items-center space-x-2 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Link2 className="w-4 h-4" />
            )}
            <span>{copied ? "Copied!" : "Copy"}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}