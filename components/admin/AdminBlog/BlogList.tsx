"use client";

import { BlogPost } from "@/types/blog";
import { Calendar, Clock, User, Eye, Heart, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BlogListProps {
  posts: BlogPost[];
  searchQuery: string;
  selectedCategory: string;
}

const BlogList = ({ posts, searchQuery, selectedCategory }: BlogListProps) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          No posts found
        </h3>
        <p className="text-gray-400 max-w-md mx-auto">
          {searchQuery
            ? `No posts found for "${searchQuery}". Try adjusting your search.`
            : selectedCategory !== "all"
            ? `No posts found in ${selectedCategory}.`
            : "No blog posts available at the moment."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02]"
        >
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-2/5 relative">
              <Link href={`/blog/${post?.slug}`}>
                <div className="relative h-48 md:h-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />

                  {/* Difficulty Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.difficulty === "beginner"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : post.difficulty === "intermediate"
                          ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                          : "bg-red-500/20 text-red-300 border border-red-500/30"
                      }`}
                    >
                      {post.difficulty}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {post.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-6 flex flex-col justify-between">
              <div>
                {/* Category */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  {post.status === "draft" && (
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-300 border border-gray-500/30 rounded-full text-xs font-medium">
                      Draft
                    </span>
                  )}
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{post.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  {/* Author */}
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span>{post.author.name}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Read Time */}
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogList;
