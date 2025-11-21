import { BlogPost } from "@/types/blog";
import { Atom, BookOpen, Brain, Cloud, Code, Palette } from "lucide-react";

export const mockPosts: BlogPost[] = [
  {
    _id: "1",
    title: "Getting Started with Next.js 14",
    description: "Complete guide to Next.js 14 features and App Router",
    excerpt:
      "Learn how to build modern web applications with Next.js 14, React 18, and the new App Router architecture.",
    content: `# Getting Started with Next.js 14\n\nNext.js 14 introduces several exciting new features...`,
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      role: "Senior Frontend Developer",
    },
    publishedAt: "2024-01-15T10:00:00Z",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript", "Web Development", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    views: 1247,
    likes: 89,
    featured: true,
    status: "published",
    difficulty: "beginner",
  },
  {
    _id: "2",
    title: "Mastering TypeScript for React Developers",
    description: "Advanced TypeScript patterns and best practices for React",
    excerpt:
      "Deep dive into TypeScript patterns and best practices specifically for React developers.",
    content: `# Mastering TypeScript for React Developers\n\nTypeScript has become an essential tool for building scalable React applications...`,
    author: {
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      role: "TypeScript Expert",
    },
    publishedAt: "2024-01-10T14:30:00Z",
    readTime: "12 min read",
    category: "TypeScript",
    tags: ["TypeScript", "React", "JavaScript", "Frontend", "Programming"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    views: 892,
    likes: 67,
    featured: true,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "3",
    title: "Building Scalable Node.js Microservices",
    description: "Architect and build scalable microservices with Node.js",
    excerpt:
      "Architect and build scalable microservices with Node.js, Docker, and Kubernetes.",
    content: `# Building Scalable Node.js Microservices\n\nMicroservices architecture has revolutionized how we build and scale applications...`,
    author: {
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      role: "Backend Architect",
    },
    publishedAt: "2024-01-05T09:15:00Z",
    readTime: "15 min read",
    category: "Backend",
    tags: ["Node.js", "Microservices", "Docker", "Backend", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    views: 567,
    likes: 34,
    featured: false,
    status: "published",
    difficulty: "advanced",
  },
  {
    _id: "4",
    title: "The Complete Guide to CSS Grid Layout",
    description: "Master CSS Grid Layout with practical examples",
    excerpt:
      "Master CSS Grid Layout with practical examples and real-world use cases.",
    content: `# The Complete Guide to CSS Grid Layout\n\nCSS Grid has revolutionized web layout design...`,
    author: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      role: "UI/UX Designer",
    },
    publishedAt: "2024-01-08T11:45:00Z",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Frontend", "Web Design", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    views: 723,
    likes: 45,
    featured: false,
    status: "published",
    difficulty: "beginner",
  },
  {
    _id: "5",
    title: "Introduction to Machine Learning with Python",
    description: "Beginner-friendly guide to machine learning concepts",
    excerpt:
      "Start your machine learning journey with Python. Learn fundamental concepts and algorithms.",
    content: `# Introduction to Machine Learning with Python\n\nMachine learning is transforming industries worldwide...`,
    author: {
      name: "Dr. James Kim",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
      role: "Data Scientist",
    },
    publishedAt: "2024-01-12T16:20:00Z",
    readTime: "14 min read",
    category: "AI/ML",
    tags: ["Python", "Machine Learning", "AI", "Data Science", "scikit-learn"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    views: 456,
    likes: 28,
    featured: true,
    status: "published",
    difficulty: "beginner",
  },
  {
    _id: "6",
    title: "Modern DevOps Practices for Small Teams",
    description: "Practical DevOps practices for small teams",
    excerpt: "Implement DevOps best practices even with limited resources.",
    content: `# Modern DevOps Practices for Small Teams\n\nYou don't need a large team or budget to implement effective DevOps practices...`,
    author: {
      name: "Lisa Thompson",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      role: "DevOps Engineer",
    },
    publishedAt: "2024-01-03T13:10:00Z",
    readTime: "11 min read",
    category: "DevOps",
    tags: ["DevOps", "CI/CD", "Docker", "AWS", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    views: 389,
    likes: 23,
    featured: false,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "7",
    title: "Building Real-time Applications with Socket.io",
    description: "Create interactive real-time applications",
    excerpt:
      "Create interactive real-time applications using Socket.io and Node.js.",
    content: `# Building Real-time Applications with Socket.io\n\nReal-time features are becoming essential for modern web applications...`,
    author: {
      name: "David Park",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      role: "Full Stack Developer",
    },
    publishedAt: "2024-01-20T08:00:00Z",
    readTime: "9 min read",
    category: "Backend",
    tags: ["Socket.io", "Node.js", "Real-time", "WebSockets", "Backend"],
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    views: 0,
    likes: 0,
    featured: false,
    status: "draft",
    difficulty: "intermediate",
  },
  {
    _id: "8",
    title: "Advanced React Performance Optimization",
    description: "Optimize React application performance",
    excerpt:
      "Learn advanced techniques to optimize React application performance.",
    content: `# Advanced React Performance Optimization\n\nPerformance is crucial for user experience and business metrics...`,
    author: {
      name: "Maria Garcia",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
      role: "React Specialist",
    },
    publishedAt: "2024-01-17T15:45:00Z",
    readTime: "13 min read",
    category: "React",
    tags: ["React", "Performance", "JavaScript", "Frontend", "Optimization"],
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop",
    views: 634,
    likes: 41,
    featured: true,
    status: "published",
    difficulty: "advanced",
  },
  {
    _id: "9",
    title: "Getting Started with GraphQL and Apollo",
    description: "Learn GraphQL fundamentals and implementation",
    excerpt:
      "Learn GraphQL fundamentals and how to implement it in your applications.",
    content: `# Getting Started with GraphQL and Apollo\n\nGraphQL provides a more efficient and flexible alternative to REST APIs...`,
    author: {
      name: "Kevin Zhang",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      role: "API Architect",
    },
    publishedAt: "2024-01-22T12:30:00Z",
    readTime: "11 min read",
    category: "API",
    tags: ["GraphQL", "Apollo", "API", "Backend", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=400&fit=crop",
    views: 0,
    likes: 0,
    featured: false,
    status: "draft",
    difficulty: "intermediate",
  },
  {
    _id: "10",
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications",
    excerpt: "Build cross-platform mobile applications using React Native.",
    content: `# Mobile App Development with React Native\n\nReact Native allows you to build native mobile apps using React and JavaScript...`,
    author: {
      name: "Rachel Lee",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      role: "Mobile Developer",
    },
    publishedAt: "2024-01-14T17:20:00Z",
    readTime: "16 min read",
    category: "Mobile",
    tags: ["React Native", "Mobile", "JavaScript", "iOS", "Android"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    views: 521,
    likes: 38,
    featured: false,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "11",
    title: "Advanced CSS Animations and Transitions",
    description: "Create stunning animations with modern CSS",
    excerpt:
      "Learn advanced CSS animation techniques and create stunning visual effects.",
    content: `# Advanced CSS Animations and Transitions\n\nCSS animations have evolved significantly in recent years...`,
    author: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      role: "UI/UX Designer",
    },
    publishedAt: "2024-01-25T10:15:00Z",
    readTime: "7 min read",
    category: "CSS",
    tags: ["CSS", "Animations", "Frontend", "Web Design", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&h=400&fit=crop",
    views: 312,
    likes: 19,
    featured: false,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "12",
    title: "Building Secure Authentication Systems",
    description: "Implement secure authentication and authorization",
    excerpt:
      "Learn how to build secure authentication systems with best practices.",
    content: `# Building Secure Authentication Systems\n\nAuthentication is a critical component of any web application...`,
    author: {
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      role: "Security Engineer",
    },
    publishedAt: "2024-01-28T14:00:00Z",
    readTime: "18 min read",
    category: "Security",
    tags: ["Authentication", "Security", "Node.js", "Backend", "JWT"],
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    views: 278,
    likes: 15,
    featured: false,
    status: "draft",
    difficulty: "advanced",
  },
  {
    _id: "13",
    title: "Deep Dive into React Server Components",
    description: "Understanding React Server Components and their benefits",
    excerpt:
      "Explore how React Server Components can improve your application's performance and user experience.",
    content: `# Deep Dive into React Server Components\n\nReact Server Components represent a fundamental shift in how we build React applications...`,
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      role: "Senior Frontend Developer",
    },
    publishedAt: "2024-02-01T09:00:00Z",
    readTime: "14 min read",
    category: "React",
    tags: ["React", "Server Components", "Next.js", "Performance", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop",
    views: 845,
    likes: 52,
    featured: true,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "14",
    title: "Python for Data Analysis: Pandas Mastery",
    description: "Master data analysis with Python and Pandas library",
    excerpt:
      "Learn how to efficiently analyze and manipulate data using Python's powerful Pandas library.",
    content: `# Python for Data Analysis: Pandas Mastery\n\nPandas is the cornerstone of data analysis in Python...`,
    author: {
      name: "Dr. James Kim",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
      role: "Data Scientist",
    },
    publishedAt: "2024-02-05T11:30:00Z",
    readTime: "16 min read",
    category: "Data Science",
    tags: ["Python", "Pandas", "Data Analysis", "Data Science", "Programming"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    views: 623,
    likes: 41,
    featured: false,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "15",
    title: "Cloud Native Application Development",
    description: "Building applications for the cloud-native ecosystem",
    excerpt:
      "Discover the principles and practices of building cloud-native applications with modern tools and platforms.",
    content: `# Cloud Native Application Development\n\nCloud-native development is about building applications that leverage cloud computing...`,
    author: {
      name: "Lisa Thompson",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      role: "DevOps Engineer",
    },
    publishedAt: "2024-02-10T14:15:00Z",
    readTime: "12 min read",
    category: "DevOps",
    tags: ["Cloud", "Kubernetes", "Docker", "Microservices", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    views: 512,
    likes: 33,
    featured: true,
    status: "published",
    difficulty: "advanced",
  },
  {
    _id: "16",
    title: "Vue.js 3 Composition API Deep Dive",
    description: "Master Vue.js 3 Composition API for better code organization",
    excerpt:
      "Learn how to use Vue.js 3 Composition API to create more maintainable and reusable code.",
    content: `# Vue.js 3 Composition API Deep Dive\n\nThe Composition API in Vue.js 3 represents a significant evolution...`,
    author: {
      name: "Mike Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      role: "Frontend Developer",
    },
    publishedAt: "2024-02-15T10:45:00Z",
    readTime: "11 min read",
    category: "Vue.js",
    tags: ["Vue.js", "Composition API", "JavaScript", "Frontend", "Framework"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    views: 478,
    likes: 29,
    featured: false,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "17",
    title: "Database Design Best Practices",
    description: "Essential principles for effective database design",
    excerpt:
      "Learn the fundamental principles and best practices for designing efficient and scalable databases.",
    content: `# Database Design Best Practices\n\nGood database design is crucial for application performance and scalability...`,
    author: {
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      role: "Backend Architect",
    },
    publishedAt: "2024-02-20T13:20:00Z",
    readTime: "15 min read",
    category: "Database",
    tags: ["Database", "SQL", "Design", "Backend", "Architecture"],
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    views: 589,
    likes: 37,
    featured: true,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "18",
    title: "Progressive Web Apps (PWA) Implementation Guide",
    description: "Build reliable and engaging Progressive Web Apps",
    excerpt:
      "Learn how to transform your web applications into Progressive Web Apps for better user experience.",
    content: `# Progressive Web Apps (PWA) Implementation Guide\n\nProgressive Web Apps combine the best of web and mobile apps...`,
    author: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      role: "UI/UX Designer",
    },
    publishedAt: "2024-02-25T16:00:00Z",
    readTime: "13 min read",
    category: "Web Development",
    tags: ["PWA", "Web Development", "Mobile", "JavaScript", "Service Workers"],
    image:
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&h=400&fit=crop",
    views: 421,
    likes: 26,
    featured: false,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "19",
    title: "Machine Learning Model Deployment Strategies",
    description: "Best practices for deploying ML models to production",
    excerpt:
      "Explore different strategies and best practices for deploying machine learning models in production environments.",
    content: `# Machine Learning Model Deployment Strategies\n\nDeploying machine learning models is a critical step in the ML lifecycle...`,
    author: {
      name: "Dr. James Kim",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
      role: "Data Scientist",
    },
    publishedAt: "2024-03-01T09:30:00Z",
    readTime: "17 min read",
    category: "AI/ML",
    tags: ["Machine Learning", "Deployment", "MLOps", "Python", "AI"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    views: 367,
    likes: 24,
    featured: true,
    status: "published",
    difficulty: "advanced",
  },
  {
    _id: "20",
    title: "Web Accessibility (A11y) Complete Guide",
    description: "Make your web applications accessible to everyone",
    excerpt:
      "Learn how to build accessible web applications that work for all users, regardless of abilities.",
    content: `# Web Accessibility (A11y) Complete Guide\n\nWeb accessibility is about making your websites usable by everyone...`,
    author: {
      name: "Maria Garcia",
      avatar:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
      role: "UI/UX Designer",
    },
    publishedAt: "2024-03-05T11:00:00Z",
    readTime: "14 min read",
    category: "Web Development",
    tags: [
      "Accessibility",
      "A11y",
      "Web Development",
      "UI/UX",
      "Inclusive Design",
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    views: 298,
    likes: 18,
    featured: false,
    status: "published",
    difficulty: "beginner",
  },
  {
    _id: "21",
    title: "Docker and Containerization Fundamentals",
    description: "Learn containerization with Docker from scratch",
    excerpt:
      "Get started with Docker and understand how containerization revolutionizes application deployment.",
    content: `# Docker and Containerization Fundamentals\n\nContainerization has changed how we develop, ship, and run applications...`,
    author: {
      name: "David Park",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      role: "DevOps Engineer",
    },
    publishedAt: "2024-03-10T15:45:00Z",
    readTime: "10 min read",
    category: "DevOps",
    tags: ["Docker", "Containers", "DevOps", "Deployment", "Infrastructure"],
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop",
    views: 654,
    likes: 42,
    featured: true,
    status: "published",
    difficulty: "beginner",
  },
  {
    _id: "22",
    title: "Advanced JavaScript Patterns and Techniques",
    description: "Master advanced JavaScript concepts and patterns",
    excerpt:
      "Deep dive into advanced JavaScript patterns, techniques, and best practices for professional development.",
    content: `# Advanced JavaScript Patterns and Techniques\n\nJavaScript is a powerful language with many advanced features...`,
    author: {
      name: "Kevin Zhang",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      role: "JavaScript Expert",
    },
    publishedAt: "2024-03-15T08:20:00Z",
    readTime: "18 min read",
    category: "JavaScript",
    tags: [
      "JavaScript",
      "Patterns",
      "Advanced",
      "Programming",
      "Web Development",
    ],
    image:
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=600&h=400&fit=crop",
    views: 723,
    likes: 48,
    featured: true,
    status: "published",
    difficulty: "advanced",
  },
  {
    _id: "23",
    title: "Building RESTful APIs with Express.js",
    description: "Create robust REST APIs using Express.js framework",
    excerpt:
      "Learn how to design and build RESTful APIs with Express.js, including authentication, validation, and error handling.",
    content: `# Building RESTful APIs with Express.js\n\nExpress.js is the most popular framework for building web applications in Node.js...`,
    author: {
      name: "Rachel Lee",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      role: "Backend Developer",
    },
    publishedAt: "2024-03-20T12:10:00Z",
    readTime: "12 min read",
    category: "Backend",
    tags: ["Express.js", "REST API", "Node.js", "Backend", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    views: 512,
    likes: 35,
    featured: false,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "24",
    title: "Cybersecurity Fundamentals for Developers",
    description:
      "Essential cybersecurity knowledge every developer should know",
    excerpt:
      "Understand fundamental cybersecurity concepts and learn how to write more secure code.",
    content: `# Cybersecurity Fundamentals for Developers\n\nSecurity is everyone's responsibility in software development...`,
    author: {
      name: "Alex Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      role: "Security Engineer",
    },
    publishedAt: "2024-03-25T14:30:00Z",
    readTime: "16 min read",
    category: "Security",
    tags: [
      "Cybersecurity",
      "Security",
      "Development",
      "Best Practices",
      "Web Security",
    ],
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
    views: 389,
    likes: 27,
    featured: true,
    status: "published",
    difficulty: "intermediate",
  },
  {
    _id: "25",
    title: "Mobile-First Responsive Design",
    description: "Design and develop for mobile devices first",
    excerpt:
      "Learn the mobile-first approach to responsive web design and create better user experiences across all devices.",
    content: `# Mobile-First Responsive Design\n\nMobile-first design is a strategy that starts with designing for mobile devices...`,
    author: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      role: "UI/UX Designer",
    },
    publishedAt: "2024-03-30T10:00:00Z",
    readTime: "9 min read",
    category: "CSS",
    tags: ["Responsive Design", "Mobile-First", "CSS", "Web Design", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    views: 445,
    likes: 31,
    featured: false,
    status: "published",
    difficulty: "beginner",
  },
  {
    _id: "26",
    title: "Agile Software Development Methodology",
    description: "Understanding and implementing Agile practices",
    excerpt:
      "Learn about Agile software development methodology and how to implement it effectively in your projects.",
    content: `# Agile Software Development Methodology\n\nAgile methodology has transformed how software is developed...`,
    author: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      role: "Tech Lead",
    },
    publishedAt: "2024-04-01T13:15:00Z",
    readTime: "11 min read",
    category: "Methodology",
    tags: [
      "Agile",
      "Methodology",
      "Project Management",
      "Development",
      "Scrum",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    views: 334,
    likes: 22,
    featured: false,
    status: "published",
    difficulty: "beginner",
  },
  {
    _id: "27",
    title: "GraphQL vs REST: Choosing the Right API",
    description: "Comparison between GraphQL and REST APIs",
    excerpt:
      "Understand the differences between GraphQL and REST APIs and learn when to use each approach.",
    content: `# GraphQL vs REST: Choosing the Right API\n\nThe choice between GraphQL and REST is an important architectural decision...`,
    author: {
      name: "Kevin Zhang",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
      role: "API Architect",
    },
    publishedAt: "2024-04-05T15:20:00Z",
    readTime: "13 min read",
    category: "API",
    tags: ["GraphQL", "REST", "API", "Comparison", "Backend"],
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=600&h=400&fit=crop",
    views: 478,
    likes: 32,
    featured: true,
    status: "published",
    difficulty: "intermediate",
  },
];

export const sampleBlogPost: BlogPost = {
  _id: "1",
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
  category: "AI/ML",
  tags: [
    "LangChain",
    "AI Agents",
    "LLM",
    "Python",
    "OpenAI",
    "Machine Learning",
    "AI Development",
  ],
  image:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
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

export const sampleRelatedPosts: BlogPost[] = [
  {
    _id: "2",
    title: "Mastering Model Context Protocol (MCP) for AI Systems",
    description:
      "Deep dive into MCP and how it revolutionizes AI agent communication",
    excerpt:
      "Model Context Protocol enables seamless communication between AI agents and tools...",
    content: " ",
    author: {
      name: "Soruj Mahmud",
      avatar: "/soruj-avatar.jpg",
      role: "AI Developer",
      bio: "",
    },
    publishedAt: "2024-03-10",
    readTime: "8 min",
    category: "AI/ML",
    tags: ["MCP", "AI Agents", "Protocol"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    views: 892,
    likes: 67,
    featured: true,
    status: "published",
    difficulty: "advanced",
    tableOfContents: [],
  },
  {
    _id: "3",
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
    category: "AI/ML",
    tags: ["Vector DB", "AI", "Search"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    views: 734,
    likes: 45,
    featured: false,
    status: "published",
    difficulty: "advanced",
    tableOfContents: [],
  },
];

export const sampleComments: Comment[] = [
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

// Helper function to count posts by category
const getCategoryCount = (category: string) => {
  return mockPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  ).length;
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
  },
  {
    id: "data science",
    name: "Data Science",
    icon: Brain,
    count: getCategoryCount("Data Science"),
  },
  {
    id: "vue.js",
    name: "Vue.js",
    icon: Code,
    count: getCategoryCount("Vue.js"),
  },
  {
    id: "database",
    name: "Database",
    icon: Cloud,
    count: getCategoryCount("Database"),
  },
  {
    id: "methodology",
    name: "Methodology",
    icon: BookOpen,
    count: getCategoryCount("Methodology"),
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: Code,
    count: getCategoryCount("JavaScript"),
  },
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
  return mockPosts.filter(
    (post) => post.category.toLowerCase() === categoryId.toLowerCase()
  );
};

// Helper function to get posts by difficulty
export const getPostsByDifficulty = (difficultyId: string) => {
  if (difficultyId === "all") return mockPosts;
  return mockPosts.filter((post) => post.difficulty === difficultyId);
};

// Helper function to sort posts
export const sortPosts = (posts: BlogPost[], sortBy: string) => {
  const sorted = [...posts];
  switch (sortBy) {
    case "latest":
      return sorted.sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    case "popular":
      return sorted.sort((a, b) => b.views - a.views);
    case "trending":
      return sorted.sort(
        (a, b) => b.views + b.likes * 10 - (a.views + a.likes * 10)
      );
    default:
      return sorted;
  }
};

// Export all posts combined (mockPosts + additional posts)
export const allPosts: BlogPost[] = [...mockPosts];
