"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BlogPost } from "@/types/blog";

interface PostSettingsProps {
  editingPost?: BlogPost | null;
  onFieldChange?: (field: string, value: any) => void;
}

const categories = [
  "Technology",
  "Web Development",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "DevOps",
  "UI/UX",
  "Career",
  "Tutorial",
];

export default function PostSettings({
  editingPost,
  onFieldChange,
}: PostSettingsProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-white">Post Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="author" className="text-gray-300">
            Author *
          </Label>
          <Input
            id="author"
            name="author"
            placeholder="Author name"
            required
            defaultValue={editingPost?.author}
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-gray-300">
            Category
          </Label>
          <select
            name="category"
            className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
            defaultValue={editingPost?.category || "Technology"}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="readTime" className="text-gray-300">
            Read Time (minutes) *
          </Label>
          <Input
            id="readTime"
            name="readTime"
            type="number"
            placeholder="5"
            required
            defaultValue={editingPost?.readTime || 5}
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tags" className="text-gray-300">
            Tags
          </Label>
          <Input
            id="tags"
            name="tags"
            placeholder="technology, web development, nextjs"
            defaultValue={editingPost?.tags?.join(", ")}
            className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
          />
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-600/50 transition-all duration-300 hover:border-purple-500/30">
          <div>
            <Label
              htmlFor="published"
              className="text-sm font-medium cursor-pointer text-gray-200"
            >
              Publish Post
            </Label>
            <p className="text-xs text-gray-400">
              Make this post publicly visible
            </p>
          </div>
          <input
            type="checkbox"
            id="published"
            name="published"
            value="true"
            defaultChecked={editingPost?.published}
            className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 bg-gray-600 border-gray-500"
          />
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-600/50 transition-all duration-300 hover:border-yellow-500/30">
          <div>
            <Label
              htmlFor="featured"
              className="text-sm font-medium cursor-pointer text-gray-200"
            >
              Featured Post
            </Label>
            <p className="text-xs text-gray-400">
              Highlight this post on the blog
            </p>
          </div>
          <input
            type="checkbox"
            id="featured"
            name="featured"
            value="true"
            defaultChecked={editingPost?.featured}
            className="w-4 h-4 text-yellow-600 rounded focus:ring-yellow-500 bg-gray-600 border-gray-500"
          />
        </div>
      </CardContent>
    </Card>
  );
}
