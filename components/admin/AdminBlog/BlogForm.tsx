"use client";
import { useState } from "react";
import ImageUpload from "./ImageUpload";
import PostSettings from "./PostSettings";
import SEOSettings from "./SEOSettings";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Copy, FileText, RefreshCw } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogFormProps {
  editingPost: BlogPost | null;
  onSubmit: (data: any, imageFile: File | null) => void;
  onCancel: () => void;
  onDuplicate: (post: BlogPost) => void;
  isLoading: boolean;
  imagePreview: string;
  onImageChange: (file: File | null) => void;
  onImageClear: () => void;
}

export default function BlogForm({
  editingPost,
  onSubmit,
  onCancel,
  onDuplicate,
  isLoading,
  imagePreview,
  onImageChange,
  onImageClear,
}: BlogFormProps) {
  const [slug, setSlug] = useState(editingPost?.slug || "");

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (!editingPost && !slug) {
      setSlug(generateSlug(title));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;

    const postData = {
      title,
      slug: (formData.get("slug") as string) || generateSlug(title),
      excerpt: formData.get("excerpt") as string,
      content: formData.get("content") as string,
      author: formData.get("author") as string,
      tags: (formData.get("tags") as string)
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
      published: formData.get("published") === "true",
      readTime: parseInt(formData.get("readTime") as string),
      featured: formData.get("featured") === "true",
      category: formData.get("category") as string,
      metaDescription: formData.get("metaDescription") as string,
      seoTitle: formData.get("seoTitle") as string,
    };

    onSubmit(postData, null);
  };

  return (
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md border-gray-700/30 transition-all duration-500 hover:shadow-purple-500/10">
      <CardHeader className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border-b border-gray-700/30">
        <CardTitle className="flex items-center text-white">
          <FileText className="w-6 h-6 mr-3 text-blue-400 drop-shadow-lg" />
          <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            {editingPost ? "Edit Blog Post" : "Create New Blog Post"}
          </span>
        </CardTitle>
        <CardDescription className="text-gray-300">
          {editingPost
            ? "Update your blog post content and settings"
            : "Write a new blog post and configure its settings"}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-300">
                  Title *
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Blog post title"
                  required
                  defaultValue={editingPost?.title}
                  onChange={handleTitleChange}
                  className="focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug" className="text-gray-300">
                  Slug *
                </Label>
                <Input
                  id="slug"
                  name="slug"
                  placeholder="blog-post-slug"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="font-mono focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-gray-300">
                  Excerpt *
                </Label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  placeholder="Brief description of the post"
                  required
                  defaultValue={editingPost?.excerpt}
                  className="focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-gray-300">
                  Content *
                </Label>
                <Textarea
                  id="content"
                  name="content"
                  placeholder="Blog post content (Markdown supported)"
                  rows={12}
                  required
                  defaultValue={editingPost?.content}
                  className="font-mono focus:ring-2 focus:ring-purple-500 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 resize-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Sidebar Settings */}
            <div className="space-y-6">
              {/* Cover Image */}
              <ImageUpload
                imagePreview={imagePreview}
                onImageChange={onImageChange}
                onImageClear={onImageClear}
                currentImage={editingPost?.coverImage}
                label="Cover Image"
              />

              {/* Post Settings */}
              <PostSettings editingPost={editingPost} />

              {/* SEO Settings */}
              <SEOSettings editingPost={editingPost} />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-700/50">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              {isLoading ? (
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Plus className="w-4 h-4 mr-2" />
              )}
              {editingPost ? "Update Post" : "Create Post"}
            </Button>

            {editingPost && (
              <>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="bg-gray-700/50 hover:bg-gray-600/50 border-gray-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Cancel Edit
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onDuplicate(editingPost)}
                  className="bg-gray-700/50 hover:bg-gray-600/50 border-gray-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Duplicate
                </Button>
              </>
            )}

            <div className="flex-1"></div>

            <Button
              type="button"
              variant="outline"
              onClick={(e) => {
                const form = (e.target as HTMLButtonElement).closest("form");
                form?.reset();
                setSlug("");
              }}
              className="bg-gray-700/50 hover:bg-gray-600/50 border-gray-600 text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Clear Form
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
