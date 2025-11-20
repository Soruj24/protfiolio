"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mail, Eye } from "lucide-react";
import Link from "next/link";

export default function MessagesManagement() {
  return (
    <Card className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center text-white">
          <MessageSquare className="w-6 h-6 mr-2 text-orange-400" />
          Contact Messages
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-orange-400" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Message Management
          </h3>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            This section connects to your contact form submissions. Manage
            incoming messages, respond to inquiries, and track communication
            with potential clients.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
          >
            <Link href="/contact" target="_blank">
              <Eye className="w-4 h-4 mr-2" />
              View Contact Page
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}