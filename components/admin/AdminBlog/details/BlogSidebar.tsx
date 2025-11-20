"use client";

import TableOfContents from "./TableOfContents";
import ShareCard from "./ShareCard";
import ArticleStats from "./ArticleStats";
import AuthorBio from "./AuthorBio";
import RelatedPosts from "./RelatedPosts";
import { BlogPost, Comment } from "./types";

interface BlogSidebarProps {
  blogPost: BlogPost;
  relatedPosts: BlogPost[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  onShare: (platform: string) => void;
  copied: boolean;
  formatDate: (dateString: string) => string;
}

export default function BlogSidebar({
  blogPost,
  relatedPosts,
  activeSection,
  onSectionClick,
  onShare,
  copied,
  formatDate,
}: BlogSidebarProps) {
  return (
    <div className="sticky top-24 space-y-6">
      <TableOfContents
        tableOfContents={blogPost.tableOfContents}
        activeSection={activeSection}
        onSectionClick={onSectionClick}
      />
      
      <ShareCard onShare={onShare} copied={copied} />
      
      <ArticleStats blogPost={blogPost} formatDate={formatDate} />
      
      <AuthorBio author={blogPost.author} />
      
      <RelatedPosts relatedPosts={relatedPosts} />
    </div>
  );
}