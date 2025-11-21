"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";

import { BlogPost, Comment } from "@/types/blog";
import { Zap } from "lucide-react";
import BlogNavigation from "@/components/admin/AdminBlog/details/BlogNavigation";
import BlogSidebar from "@/components/admin/AdminBlog/details/BlogSidebar";
import {
  formatDate,
  getCategoryColor,
  getCategoryIcon,
  getDifficultyColor,
} from "@/utils/helpers";
import BlogHeader from "@/components/admin/AdminBlog/details/BlogHeader";
import BlogContent from "@/components/admin/AdminBlog/details/BlogContent";
import CommentsSection from "@/components/admin/AdminBlog/details/CommentsSection";
import ScrollToTop from "@/components/admin/AdminBlog/details/ScrollToTop";
import {
  sampleBlogPost,
  sampleComments,
  sampleRelatedPosts,
} from "@/data/blog";

const BlogDetails = () => {
  const params = useParams();
  console.log(params);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Simulate loading blog post data
    setBlogPost(sampleBlogPost);
    setRelatedPosts(sampleRelatedPosts);
    setComments(sampleComments as unknown as Comment[]);
  }, [params.id]);

  useEffect(() => {
    // Setup intersection observer for table of contents
    const setupObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      const options = {
        root: null,
        rootMargin: "-100px 0px -66% 0px",
        threshold: 0,
      };

      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      // Observe all sections in table of contents
      if (
        blogPost &&
        "tableOfContents" in blogPost &&
        blogPost.tableOfContents
      ) {
        if (Array.isArray(blogPost.tableOfContents)) {
          blogPost.tableOfContents.forEach((item: { id: string }) => {
            const element = document.getElementById(item.id);
            if (element) {
              observerRef.current?.observe(element);
            }
          });
        }
      }
    };

    // Wait for content to be rendered
    const timer = setTimeout(setupObserver, 100);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearTimeout(timer);
    };
  }, [blogPost]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (blogPost) {
      setBlogPost({
        ...blogPost,
        likes: isLiked ? blogPost.likes - 1 : blogPost.likes + 1,
      });
    }
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = blogPost?.title || "";

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "copy":
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: Date.now().toString(),
        author: {
          name: "You",
          avatar: "",
          role: "Reader",
        },
        content: newComment,
        createdAt: new Date().toISOString(),
        likes: 0,
        replies: [],
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active section immediately
      setActiveSection(sectionId);
    }
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white animate-pulse" />
          </div>
          <p className="text-gray-300">Loading cosmic knowledge...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Navigation */}
      <BlogNavigation
        onLike={handleLike}
        onBookmark={handleBookmark}
        isLiked={isLiked}
        isBookmarked={isBookmarked}
        likes={blogPost.likes}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar
              blogPost={blogPost}
              relatedPosts={relatedPosts}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
              onShare={handleShare}
              copied={copied}
              formatDate={formatDate}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <BlogHeader
              blogPost={blogPost}
              getCategoryIcon={getCategoryIcon}
              getDifficultyColor={getDifficultyColor}
              getCategoryColor={getCategoryColor}
              formatDate={formatDate}
            />

            <BlogContent blogPost={blogPost} contentRef={contentRef} />

            <CommentsSection
              comments={comments}
              newComment={newComment}
              onCommentChange={setNewComment}
              onAddComment={handleAddComment}
              formatDate={formatDate}
            />
          </div>

          {/* This space is intentionally left blank as sidebar components are now in BlogSidebar */}
          <div className="lg:col-span-1"></div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop show={showScrollTop} onClick={scrollToTop} />
    </div>
  );
};

export default BlogDetails;
