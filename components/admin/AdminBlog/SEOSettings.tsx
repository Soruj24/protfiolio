"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BlogPost } from "@/types/blog";

interface SEOSettingsProps {
  editingPost?: BlogPost | null;
}

export default function SEOSettings({ editingPost }: SEOSettingsProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-white">SEO Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="seoTitle" className="text-gray-300">
            SEO Title
          </Label>
          <Input
            id="seoTitle"
            name="seoTitle"
            placeholder="Optional custom SEO title"
            defaultValue={editingPost?.seoTitle}
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="metaDescription" className="text-gray-300">
            Meta Description
          </Label>
          <Textarea
            id="metaDescription"
            name="metaDescription"
            placeholder="Optional meta description for SEO"
            rows={3}
            defaultValue={editingPost?.metaDescription}
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </CardContent>
    </Card>
  );
}
