"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, FileText } from "lucide-react";
import { BlogPost } from "@/types/blog";
import BlogStats from "./BlogStats";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import { mockPosts } from "@/data/blog";

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "published" | "draft"
  >("all");
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "title">("newest");
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview("");
    }
  }, [imageFile]);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      // Simulate API call with mock data
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setPosts(mockPosts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleSubmit = async (postData: any, imageFile: File | null) => {
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      let imageUrl = editingPost?.coverImage;

      if (imageFile) {
        // Simulate image upload
        imageUrl = URL.createObjectURL(imageFile);
      }

      if (editingPost) {
        // Update existing post
        setPosts((prev) =>
          prev.map((p) =>
            p._id === editingPost._id
              ? {
                  ...p,
                  ...postData,
                  coverImage: imageUrl || p.coverImage,
                  updatedAt: new Date().toISOString(),
                }
              : p
          )
        );
      } else {
        // Add new post
        const newPost: BlogPost = {
          _id: Date.now().toString(),
          ...postData,
          coverImage: imageUrl || "",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          views: 0,
          likes: 0,
        };
        setPosts((prev) => [newPost, ...prev]);
      }

      setEditingPost(null);
      setImageFile(null);
      setImagePreview("");
    } catch (error) {
      console.error("Error saving blog post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePublish = async (post: BlogPost) => {
    try {
      const updatedPost = { ...post, published: !post.published };
      setPosts((prev) =>
        prev.map((p) => (p._id === post._id ? updatedPost : p))
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const toggleFeatured = async (post: BlogPost) => {
    try {
      const updatedPost = { ...post, featured: !post.featured };
      setPosts((prev) =>
        prev.map((p) => (p._id === post._id ? updatedPost : p))
      );
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this blog post? This action cannot be undone."
      )
    )
      return;

    try {
      setPosts((prev) => prev.filter((p) => p._id !== id));
      setSelectedPosts((prev) => prev.filter((postId) => postId !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const duplicatePost = async (post: BlogPost) => {
    try {
      const duplicatedPost: BlogPost = {
        ...post,
        _id: Date.now().toString(),
        title: `${post.title} (Copy)`,
        slug: `${post.slug}-copy`,
        published: false,
        featured: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setPosts((prev) => [duplicatedPost, ...prev]);
    } catch (error) {
      console.error("Error duplicating post:", error);
    }
  };

  const handleBulkAction = async (
    action: "publish" | "unpublish" | "delete"
  ) => {
    if (selectedPosts.length === 0) return;

    if (
      action === "delete" &&
      !confirm(`Are you sure you want to delete ${selectedPosts.length} posts?`)
    ) {
      return;
    }

    try {
      setPosts((prev) =>
        prev
          .map((post) => {
            if (selectedPosts.includes(post._id)) {
              switch (action) {
                case "publish":
                  return { ...post, published: true };
                case "unpublish":
                  return { ...post, published: false };
                default:
                  return post;
              }
            }
            return post;
          })
          .filter(
            (post) => action !== "delete" || !selectedPosts.includes(post._id)
          )
      );

      if (action === "delete") {
        setSelectedPosts([]);
      }
    } catch (error) {
      console.error("Error performing bulk action:", error);
    }
  };

  const togglePostSelection = (postId: string) => {
    setSelectedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const selectAllPosts = () => {
    const filteredPosts = posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesStatus =
        filterStatus === "all" ||
        (filterStatus === "published" && post.published) ||
        (filterStatus === "draft" && !post.published);

      return matchesSearch && matchesStatus;
    });

    setSelectedPosts(
      selectedPosts.length === filteredPosts.length
        ? []
        : filteredPosts.map((post) => post._id)
    );
  };

  const handleImageChange = (file: File | null) => {
    setImageFile(file);
  };

  const handleImageClear = () => {
    setImageFile(null);
    setImagePreview("");
  };

  // Calculate stats
  const stats: BlogStats = {
    total: posts.length,
    published: posts.filter((p) => p.published).length,
    draft: posts.filter((p) => !p.published).length,
    featured: posts.filter((p) => p.featured).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 backdrop-blur-sm p-6 transition-all duration-500">
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Stats Overview */}
        <BlogStats stats={stats} />

        <Tabs defaultValue="editor" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 p-1 rounded-xl">
            <TabsTrigger
              value="editor"
              className="flex items-center space-x-2 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 rounded-lg"
            >
              <Edit className="w-4 h-4" />
              <span>{editingPost ? "Edit Post" : "Create Post"}</span>
            </TabsTrigger>
            <TabsTrigger
              value="posts"
              className="flex items-center space-x-2 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-purple-500/25 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>All Posts ({posts.length})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editor">
            <BlogForm
              editingPost={editingPost}
              onSubmit={handleSubmit}
              onCancel={() => {
                setEditingPost(null);
                setImageFile(null);
                setImagePreview("");
              }}
              onDuplicate={duplicatePost}
              isLoading={isLoading}
              imagePreview={imagePreview}
              onImageChange={handleImageChange}
              onImageClear={handleImageClear}
            />
          </TabsContent>

          <TabsContent value="posts">
            <BlogList
              posts={posts}
              selectedPosts={selectedPosts}
              onToggleSelection={togglePostSelection}
              onSelectAll={selectAllPosts}
              onEdit={setEditingPost}
              onDelete={handleDelete}
              onDuplicate={duplicatePost}
              onTogglePublish={togglePublish}
              onToggleFeatured={toggleFeatured}
              onBulkAction={handleBulkAction}
              onClearSelection={() => setSelectedPosts([])}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              filterStatus={filterStatus}
              onStatusChange={setFilterStatus}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onRefresh={fetchPosts}
              isLoading={isLoading}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
