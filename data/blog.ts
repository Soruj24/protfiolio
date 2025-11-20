import { BlogPost } from "@/types/blog";
import { Atom, BookOpen, Brain, Cloud, Code, Palette } from "lucide-react";

export const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js 14",
    description: "Complete guide to Next.js 14 features and App Router",
    excerpt: "Learn how to build modern web applications with Next.js 14, React 18, and the new App Router architecture.",
    content: `# Getting Started with Next.js 14\n\nNext.js 14 introduces several exciting new features...`,
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      role: "Senior Frontend Developer"
    },
    publishedAt: "2024-01-15T10:00:00Z",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript", "Web Development", "Frontend"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    views: 1247,
    likes: 89,
    featured: true,
    status: "published",
    difficulty: "beginner"
  },
  {
    id: "2",
    title: "Mastering TypeScript for React Developers",
    description: "Advanced TypeScript patterns and best practices for React",
    excerpt: "Deep dive into TypeScript patterns and best practices specifically for React developers.",
    content: `# Mastering TypeScript for React Developers\n\nTypeScript has become an essential tool for building scalable React applications...`,
    author: {
      name: "Mike Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      role: "TypeScript Expert"
    },
    publishedAt: "2024-01-10T14:30:00Z",
    readTime: "12 min read",
    category: "TypeScript",
    tags: ["TypeScript", "React", "JavaScript", "Frontend", "Programming"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    views: 892,
    likes: 67,
    featured: true,
    status: "published",
    difficulty: "intermediate"
  },
  {
    id: "3",
    title: "Building Scalable Node.js Microservices",
    description: "Architect and build scalable microservices with Node.js",
    excerpt: "Architect and build scalable microservices with Node.js, Docker, and Kubernetes.",
    content: `# Building Scalable Node.js Microservices\n\nMicroservices architecture has revolutionized how we build and scale applications...`,
    author: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      role: "Backend Architect"
    },
    publishedAt: "2024-01-05T09:15:00Z",
    readTime: "15 min read",
    category: "Backend",
    tags: ["Node.js", "Microservices", "Docker", "Backend", "Architecture"],
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    views: 567,
    likes: 34,
    featured: false,
    status: "published",
    difficulty: "advanced"
  },
  {
    id: "4",
    title: "The Complete Guide to CSS Grid Layout",
    description: "Master CSS Grid Layout with practical examples",
    excerpt: "Master CSS Grid Layout with practical examples and real-world use cases.",
    content: `# The Complete Guide to CSS Grid Layout\n\nCSS Grid has revolutionized web layout design...`,
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      role: "UI/UX Designer"
    },
    publishedAt: "2024-01-08T11:45:00Z",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Frontend", "Web Design", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    views: 723,
    likes: 45,
    featured: false,
    status: "published",
    difficulty: "beginner"
  },
  {
    id: "5",
    title: "Introduction to Machine Learning with Python",
    description: "Beginner-friendly guide to machine learning concepts",
    excerpt: "Start your machine learning journey with Python. Learn fundamental concepts and algorithms.",
    content: `# Introduction to Machine Learning with Python\n\nMachine learning is transforming industries worldwide...`,
    author: {
      name: "Dr. James Kim",
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
      role: "Data Scientist"
    },
    publishedAt: "2024-01-12T16:20:00Z",
    readTime: "14 min read",
    category: "AI/ML",
    tags: ["Python", "Machine Learning", "AI", "Data Science", "scikit-learn"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    views: 456,
    likes: 28,
    featured: true,
    status: "published",
    difficulty: "beginner"
  },
  {
    id: "6",
    title: "Modern DevOps Practices for Small Teams",
    description: "Practical DevOps practices for small teams",
    excerpt: "Implement DevOps best practices even with limited resources.",
    content: `# Modern DevOps Practices for Small Teams\n\nYou don't need a large team or budget to implement effective DevOps practices...`,
    author: {
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      role: "DevOps Engineer"
    },
    publishedAt: "2024-01-03T13:10:00Z",
    readTime: "11 min read",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Docker", "AWS", "Infrastructure"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    views: 389,
    likes: 23,
    featured: false,
    status: "published",
    difficulty: "intermediate"
  },
  {
    id: "7",
    title: "Building Real-time Applications with Socket.io",
    description: "Create interactive real-time applications",
    excerpt: "Create interactive real-time applications using Socket.io and Node.js.",
    content: `# Building Real-time Applications with Socket.io\n\nReal-time features are becoming essential for modern web applications...`,
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      role: "Full Stack Developer"
    },
    publishedAt: "2024-01-20T08:00:00Z",
    readTime: "9 min read",
    category: "Backend",
    tags: ["Socket.io", "Node.js", "Real-time", "WebSockets", "Backend"],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    views: 0,
    likes: 0,
    featured: false,
    status: "draft",
    difficulty: "intermediate"
  },
  {
    id: "8",
    title: "Advanced React Performance Optimization",
    description: "Optimize React application performance",
    excerpt: "Learn advanced techniques to optimize React application performance.",
    content: `# Advanced React Performance Optimization\n\nPerformance is crucial for user experience and business metrics...`,
    author: {
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
      role: "React Specialist"
    },
    publishedAt: "2024-01-17T15:45:00Z",
    readTime: "13 min read",
    category: "React",
    tags: ["React", "Performance", "JavaScript", "Frontend", "Optimization"],
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop",
    views: 634,
    likes: 41,
    featured: true,
    status: "published",
    difficulty: "advanced"
  },
  {
    id: "9",
    title: "Getting Started with GraphQL and Apollo",
    description: "Learn GraphQL fundamentals and implementation",
    excerpt: "Learn GraphQL fundamentals and how to implement it in your applications.",
    content: `# Getting Started with GraphQL and Apollo\n\nGraphQL provides a more efficient and flexible alternative to REST APIs...`,
    author: {
      name: "Kevin Zhang",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      role: "API Architect"
    },
    publishedAt: "2024-01-22T12:30:00Z",
    readTime: "11 min read",
    category: "API",
    tags: ["GraphQL", "Apollo", "API", "Backend", "Frontend"],
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=400&fit=crop",
    views: 0,
    likes: 0,
    featured: false,
    status: "draft",
    difficulty: "intermediate"
  },
  {
    id: "10",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications",
    excerpt: "Build cross-platform mobile applications using React Native.",
    content: `# Mobile App Development with React Native\n\nReact Native allows you to build native mobile apps using React and JavaScript...`,
    author: {
      name: "Rachel Lee",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      role: "Mobile Developer"
    },
    publishedAt: "2024-01-14T17:20:00Z",
    readTime: "16 min read",
    category: "Mobile",
    tags: ["React Native", "Mobile", "JavaScript", "iOS", "Android"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    views: 521,
    likes: 38,
    featured: false,
    status: "published",
    difficulty: "intermediate"
  },
  {
    id: "11",
    title: "Advanced CSS Animations and Transitions",
    description: "Create stunning animations with modern CSS",
    excerpt: "Learn advanced CSS animation techniques and create stunning visual effects.",
    content: `# Advanced CSS Animations and Transitions\n\nCSS animations have evolved significantly in recent years...`,
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      role: "UI/UX Designer"
    },
    publishedAt: "2024-01-25T10:15:00Z",
    readTime: "7 min read",
    category: "CSS",
    tags: ["CSS", "Animations", "Frontend", "Web Design", "UI/UX"],
    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&h=400&fit=crop",
    views: 312,
    likes: 19,
    featured: false,
    status: "published",
    difficulty: "intermediate"
  },
  {
    id: "12",
    title: "Building Secure Authentication Systems",
    description: "Implement secure authentication and authorization",
    excerpt: "Learn how to build secure authentication systems with best practices.",
    content: `# Building Secure Authentication Systems\n\nAuthentication is a critical component of any web application...`,
    author: {
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      role: "Security Engineer"
    },
    publishedAt: "2024-01-28T14:00:00Z",
    readTime: "18 min read",
    category: "Security",
    tags: ["Authentication", "Security", "Node.js", "Backend", "JWT"],
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    views: 278,
    likes: 15,
    featured: false,
    status: "draft",
    difficulty: "advanced"
  }
];

// Helper function to count posts by category
const getCategoryCount = (category: string) => {
  return mockPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase()).length;
};

// Categories that match your mockPosts data
export const categories = [
  {
    id: "all",
    name: "All Articles",
    icon: BookOpen,
    count: mockPosts.length,
  },
  {
    id: "web development",
    name: "Web Development",
    icon: Code,
    count: getCategoryCount("Web Development"),
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: Code,
    count: getCategoryCount("TypeScript"),
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: Cloud,
    count: getCategoryCount("Backend"),
  },
  {
    id: "css",
    name: "CSS & Design",
    icon: Palette,
    count: getCategoryCount("CSS"),
  },
  {
    id: "ai/ml",
    name: "AI & Machine Learning",
    icon: Brain,
    count: getCategoryCount("AI/ML"),
  },
  {
    id: "devops",
    name: "DevOps",
    icon: Cloud,
    count: getCategoryCount("DevOps"),
  },
  {
    id: "react",
    name: "React",
    icon: Code,
    count: getCategoryCount("React"),
  },
  {
    id: "api",
    name: "API Development",
    icon: Cloud,
    count: getCategoryCount("API"),
  },
  {
    id: "mobile",
    name: "Mobile Development",
    icon: Code,
    count: getCategoryCount("Mobile"),
  },
  {
    id: "security",
    name: "Security",
    icon: Atom,
    count: getCategoryCount("Security"),
  }
];

export const difficulties = [
  { id: "all", name: "All Levels" },
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
];

export const sortOptions = [
  { id: "latest", name: "Latest" },
  { id: "popular", name: "Most Popular" },
  { id: "trending", name: "Trending" },
];

// Additional utility exports
export const statusOptions = [
  { id: "all", name: "All Status" },
  { id: "published", name: "Published" },
  { id: "draft", name: "Draft" },
];

export const featuredOptions = [
  { id: "all", name: "All Posts" },
  { id: "featured", name: "Featured Only" },
  { id: "not-featured", name: "Not Featured" },
];

// Helper function to get posts by category
export const getPostsByCategory = (categoryId: string) => {
  if (categoryId === "all") return mockPosts;
  return mockPosts.filter(post => 
    post.category.toLowerCase() === categoryId.toLowerCase()
  );
};

// Helper function to get posts by difficulty
export const getPostsByDifficulty = (difficultyId: string) => {
  if (difficultyId === "all") return mockPosts;
  return mockPosts.filter(post => post.difficulty === difficultyId);
};

// Helper function to sort posts
export const sortPosts = (posts: BlogPost[], sortBy: string) => {
  const sorted = [...posts];
  switch (sortBy) {
    case "latest":
      return sorted.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    case "popular":
      return sorted.sort((a, b) => b.views - a.views);
    case "trending":
      return sorted.sort((a, b) => (b.views + b.likes * 10) - (a.views + a.likes * 10));
    default:
      return sorted;
  }
};