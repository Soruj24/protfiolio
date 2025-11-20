"use client";

import BlogFilters from "@/components/blog/BlogFilters";
import BlogHero from "@/components/blog/BlogHero";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { useState, useMemo } from "react";
import BlogList from "@/components/admin/AdminBlog/BlogList";
import {
  getPostsByCategory,
  getPostsByDifficulty,
  mockPosts,
  sortPosts,
} from "@/data/blog";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort posts based on user selections
  const filteredPosts = useMemo(() => {
    let filtered = mockPosts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered?.filter(
        (post) =>
          post.title?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
          post.description
            ?.toLowerCase()
            .includes(searchQuery?.toLowerCase()) ||
          post.tags.some((tag) =>
            tag?.toLowerCase().includes(searchQuery?.toLowerCase())
          )
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = getPostsByCategory(selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== "all") {
      filtered = getPostsByDifficulty(selectedDifficulty);
    }

    // Sort posts
    return sortPosts(filtered, sortBy);
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  // Get featured posts for sidebar
  const featuredPosts = useMemo(() => {
    return mockPosts
      .filter((post) => post.featured && post.status === "published")
      .slice(0, 3);
  }, []);

  // Get popular posts for sidebar
  const popularPosts = useMemo(() => {
    return mockPosts
      .filter((post) => post.status === "published")
      .sort((a, b) => b.views - a.views)
      .slice(0, 3);
  }, []);

  return (
    <div className="min-h-screen mt-4 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10">
        <BlogHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <BlogSidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
                isFilterOpen={isFilterOpen}
                featuredPosts={featuredPosts}
                popularPosts={popularPosts}
              />

              {/* Main Content */}
              <div className="lg:col-span-3">
                <BlogFilters
                  selectedCategory={selectedCategory}
                  selectedDifficulty={selectedDifficulty}
                  setSelectedCategory={setSelectedCategory}
                  setSelectedDifficulty={setSelectedDifficulty}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  isFilterOpen={isFilterOpen}
                  setIsFilterOpen={setIsFilterOpen}
                  searchQuery={searchQuery}
                  totalPosts={filteredPosts.length}
                />

                {/* Blog List */}
                <BlogList
                  posts={filteredPosts}
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
