"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";

// Types
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

// Sample data (you can move this to a separate file)
const sampleBlogPost: BlogPost = {
  id: "1",
  title: "Building AI Agents with LangChain: A Comprehensive Guide",
  description:
    "Learn how to create intelligent AI agents using LangChain and modern LLM orchestration",
  excerpt:
    "Discover the power of LangChain in building sophisticated AI agents that can reason, plan, and execute complex tasks. This comprehensive guide covers everything from basic concepts to advanced implementations.",
  content: `
    <div id="introduction">
      <h1>Building AI Agents with LangChain</h1>
      <p>Artificial Intelligence has evolved from simple chatbots to sophisticated agents that can reason, plan, and execute complex tasks. LangChain has emerged as the go-to framework for building these intelligent systems.</p>
    </div>

    <div id="what-are-ai-agents">
      <h2>What are AI Agents?</h2>
      <p>AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional AI models, agents can:</p>
      <ul>
        <li><strong>Reason</strong> about complex problems</li>
        <li><strong>Plan</strong> multi-step workflows</li>
        <li><strong>Execute</strong> actions in various environments</li>
        <li><strong>Learn</strong> from their experiences</li>
      </ul>
    </div>

    <div id="getting-started">
      <h2>Getting Started with LangChain</h2>
      
      <div id="installation">
        <h3>Installation</h3>
        <pre><code>pip install langchain openai</code></pre>
      </div>

      <div id="basic-setup">
        <h3>Basic Setup</h3>
        <pre><code>from langchain.llms import OpenAI
from langchain.agents import initialize_agent, Tool

# Initialize your LLM
llm = OpenAI(temperature=0.7, openai_api_key="your-api-key")

# Create the agent
agent = initialize_agent(tools, llm, agent="zero-shot-react-description")</code></pre>
      </div>
    </div>

    <div id="advanced-architectures">
      <h2>Advanced Agent Architectures</h2>
      
      <div id="react-pattern">
        <h3>ReAct Pattern</h3>
        <p>The Reason + Act (ReAct) pattern enables agents to think step-by-step before taking action:</p>
        <pre><code>from langchain.agents import AgentType
from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(memory_key="chat_history")
agent = initialize_agent(
    tools,
    llm,
    agent=AgentType.CONVERSATIONAL_REACT_DESCRIPTION,
    memory=memory
)</code></pre>
      </div>

      <div id="multi-agent-systems">
        <h3>Multi-Agent Systems</h3>
        <p>Create collaborative agent systems where multiple specialized agents work together:</p>
        <pre><code>class ResearchAgent:
    def research_topic(self, topic: str) -> str:
        return f"Research about {topic}"

class WritingAgent:
    def write_content(self, research: str) -> str:
        return f"Content based on: {research}"</code></pre>
      </div>
    </div>

    <div id="real-world-applications">
      <h2>Real-World Applications</h2>
      <h3>Customer Support Agent</h3>
      <p>Create intelligent customer support agents that can:</p>
      <ol>
        <li><strong>Understand</strong> customer queries</li>
        <li><strong>Access</strong> knowledge bases</li>
        <li><strong>Provide</strong> accurate solutions</li>
        <li><strong>Escalate</strong> when necessary</li>
      </ol>

      <h3>Research Assistant</h3>
      <p>Build research agents that can:</p>
      <ul>
        <li><strong>Search</strong> academic databases</li>
        <li><strong>Summarize</strong> research papers</li>
        <li><strong>Generate</strong> literature reviews</li>
        <li><strong>Identify</strong> research gaps</li>
      </ul>
    </div>

    <div id="best-practices">
      <h2>Best Practices</h2>
      <h3>Error Handling</h3>
      <pre><code>try:
    response = agent.run(user_query)
except Exception as e:
    logger.error(f"Agent execution failed: {e}")
    fallback_response = get_fallback_response(user_query)</code></pre>

      <h3>Monitoring and Logging</h3>
      <pre><code>import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)</code></pre>
    </div>

    <div id="performance-optimization">
      <h2>Performance Optimization</h2>
      <h3>Caching</h3>
      <pre><code>from langchain.cache import InMemoryCache
from langchain.globals import set_llm_cache
set_llm_cache(InMemoryCache())</code></pre>

      <h3>Parallel Execution</h3>
      <pre><code>import asyncio

async def run_agents_parallel(queries: List[str]):
    tasks = [agent.arun(query) for query in queries]
    responses = await asyncio.gather(*tasks)
    return responses</code></pre>
    </div>

    <div id="future-trends">
      <h2>Future Trends</h2>
      <p>The field of AI agents is rapidly evolving. Key trends include:</p>
      <ol>
        <li><strong>Multi-modal agents</strong> that can process text, images, and audio</li>
        <li><strong>Self-improving systems</strong> that learn from interactions</li>
        <li><strong>Enterprise-scale deployments</strong> with robust security</li>
        <li><strong>Specialized domain agents</strong> for healthcare, finance, etc.</li>
      </ol>
    </div>

    <div id="conclusion">
      <h2>Conclusion</h2>
      <p>Building AI agents with LangChain opens up incredible possibilities for creating intelligent, autonomous systems. By following the patterns and best practices outlined in this guide, you can create robust agents that solve real-world problems effectively.</p>
      <p>Remember to start simple, iterate based on feedback, and always prioritize safety and ethical considerations in your AI implementations.</p>
    </div>
  `,
  author: {
    name: "Soruj Mahmud",
    avatar: "/soruj-avatar.jpg",
    role: "AI Developer",
    bio: "Passionate about building intelligent systems with AI and machine learning. Currently exploring LangChain and MCP for advanced AI applications.",
  },
  publishedAt: "2024-03-15",
  updatedAt: "2024-03-16",
  readTime: "12 min",
  category: "ai",
  tags: [
    "LangChain",
    "AI Agents",
    "LLM",
    "Python",
    "OpenAI",
    "Machine Learning",
    "AI Development",
  ],
  image: "/blog/ai-agents.jpg",
  views: 1247,
  likes: 89,
  featured: true,
  status: "published",
  difficulty: "intermediate",
  tableOfContents: [
    { id: "introduction", title: "Introduction", level: 1 },
    { id: "what-are-ai-agents", title: "What are AI Agents?", level: 2 },
    {
      id: "getting-started",
      title: "Getting Started with LangChain",
      level: 2,
    },
    { id: "installation", title: "Installation", level: 3 },
    { id: "basic-setup", title: "Basic Setup", level: 3 },
    {
      id: "advanced-architectures",
      title: "Advanced Agent Architectures",
      level: 2,
    },
    { id: "react-pattern", title: "ReAct Pattern", level: 3 },
    { id: "multi-agent-systems", title: "Multi-Agent Systems", level: 3 },
    {
      id: "real-world-applications",
      title: "Real-World Applications",
      level: 2,
    },
    { id: "best-practices", title: "Best Practices", level: 2 },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      level: 2,
    },
    { id: "future-trends", title: "Future Trends", level: 2 },
    { id: "conclusion", title: "Conclusion", level: 2 },
  ],
};

const sampleRelatedPosts: BlogPost[] = [
  {
    id: "2",
    title: "Mastering Model Context Protocol (MCP) for AI Systems",
    description:
      "Deep dive into MCP and how it revolutionizes AI agent communication",
    excerpt:
      "Model Context Protocol enables seamless communication between AI agents and tools...",
    content: "",
    author: {
      name: "Soruj Mahmud",
      avatar: "/soruj-avatar.jpg",
      role: "AI Developer",
      bio: "",
    },
    publishedAt: "2024-03-10",
    readTime: "8 min",
    category: "ai",
    tags: ["MCP", "AI Agents", "Protocol"],
    image: "/blog/mcp-guide.jpg",
    views: 892,
    likes: 67,
    featured: true,
    status: "published",
    difficulty: "advanced",
    tableOfContents: [],
  },
  {
    id: "3",
    title: "Vector Databases: The Backbone of Modern AI Applications",
    description:
      "Understanding vector databases and their role in AI-powered search",
    excerpt: "Vector databases enable efficient similarity search...",
    content: "",
    author: {
      name: "Soruj Mahmud",
      avatar: "/soruj-avatar.jpg",
      role: "AI Developer",
      bio: "",
    },
    publishedAt: "2024-02-28",
    readTime: "15 min",
    category: "ai",
    tags: ["Vector DB", "AI", "Search"],
    image: "/blog/vector-db.jpg",
    views: 734,
    likes: 45,
    featured: false,
    status: "published",
    difficulty: "advanced",
    tableOfContents: [],
  },
];

const sampleComments: Comment[] = [
  {
    id: "1",
    author: {
      name: "Sarah Chen",
      avatar: "",
      role: "AI Researcher",
    },
    content:
      "This is an excellent guide! The section on multi-agent systems was particularly insightful. Have you considered writing about agent coordination patterns?",
    createdAt: "2024-03-16T10:30:00Z",
    likes: 12,
    replies: [
      {
        id: "1-1",
        author: {
          name: "Soruj Mahmud",
          avatar: "",
          role: "Author",
        },
        content:
          "Thanks Sarah! Yes, I'm planning a follow-up article specifically on coordination patterns and conflict resolution in multi-agent systems.",
        createdAt: "2024-03-16T11:15:00Z",
        likes: 8,
        replies: [],
      },
    ],
  },
];

const BlogDetails = () => {
  const params = useParams();
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
    setComments(sampleComments);
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
      sampleBlogPost.tableOfContents.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observerRef.current?.observe(element);
        }
      });
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
