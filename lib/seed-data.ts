import { Project } from "@/types/project";


// Helper function to generate consistent dates
const generateDates = (completionDate: string) => {
  const completion = new Date(completionDate);
  const createdAt = new Date(completion);
  createdAt.setMonth(createdAt.getMonth() - 3); // 3 months before completion
  const updatedAt = new Date(completion);
  updatedAt.setDate(updatedAt.getDate() + 7); // 1 week after completion

  return {
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    completionDate: completion.toISOString()
  };
};

export const seedProjects: Project[] = [
  {
    id: "ai-chatbot",
    slug: "ai-chatbot",
    title: "AI-Powered Chatbot Platform",
    description: "Intelligent chatbot platform with natural language processing, multi-channel support, and analytics.",
    fullDescription: "A sophisticated AI chatbot platform that leverages advanced natural language processing to provide intelligent conversational experiences. The platform supports multiple communication channels (website, WhatsApp, Messenger), includes a powerful admin dashboard for bot training and analytics, and features seamless integration with various APIs. Built with cutting-edge AI technologies, it enables businesses to automate customer support and engagement efficiently.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Python",
      "FastAPI",
      "OpenAI GPT-4",
      "LangChain",
      "Pinecone",
      "Redis",
      "Docker",
      "PostgreSQL",
      "WebSockets",
      "Tailwind CSS",
      "Shadcn UI",
    ],
    features: [
      "Natural Language Processing (NLP)",
      "Multi-channel Integration",
      "Custom AI Model Training",
      "Real-time Conversation Analytics",
      "Sentiment Analysis",
      "Knowledge Base Integration",
      "Multi-language Support",
      "Conversation History",
      "Admin Training Interface",
      "API Integration Hub",
      "Automated Workflows",
      "User Behavior Tracking",
      "Performance Analytics",
      "Custom Bot Personalities",
    ],
    githubUrl: "https://github.com/sorujmahmud/ai-chatbot",
    liveUrl: "https://ai-chatbot-soruj.vercel.app",
    category: "ai",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    ],
    challenges: [
      "Implementing accurate natural language understanding and context retention",
      "Managing real-time conversations across multiple channels simultaneously",
      "Training and fine-tuning AI models for specific use cases",
      "Handling large-scale vector database operations for knowledge retrieval",
      "Ensuring low-latency responses for seamless user experience",
      "Implementing proper conversation memory and context management",
    ],
    solutions: [
      "Used LangChain for advanced conversation chains and memory management",
      "Implemented Redis for real-time session management and caching",
      "Fine-tuned GPT models with custom datasets and prompt engineering",
      "Utilized Pinecone for efficient vector similarity search and retrieval",
      "Optimized API responses with streaming and WebSocket connections",
      "Designed hierarchical memory system for short-term and long-term context",
    ],
    featured: true,
    difficulty: "advanced",
    duration: "4 months",
    teamSize: "3 developers",
    ...generateDates("2024-04-20"),
    tags: ["ai", "chatbot", "nlp", "machine-learning", "automation"],
    emoji: "🤖",
    stats: {
      completionTime: "4 months",
      teamSize: "3 developers",
      complexity: "Very High",
      views: 2100,
      likes: 156
    },
    architecture: "Microservices architecture with Next.js frontend, FastAPI backend, Python AI services, Vector database for knowledge retrieval, Redis for caching",
    developmentHighlights: [
      {
        title: "AI Model Integration",
        description: "Successfully integrated and fine-tuned multiple AI models including GPT-4 and custom transformers"
      },
      {
        title: "Real-time Processing",
        description: "Built low-latency real-time conversation system with WebSocket connections"
      },
      {
        title: "Multi-channel Support",
        description: "Implemented unified interface for multiple communication platforms with consistent experience"
      }
    ],
    lessonsLearned: [
      "Complexities of natural language understanding and context management",
      "Importance of proper training data and model fine-tuning",
      "Challenges of real-time AI inference at scale",
      "Security considerations for AI-powered applications"
    ],
    futureImprovements: [
      "Implement voice recognition and speech synthesis",
      "Add emotion detection and response adaptation",
      "Integrate with more enterprise systems and CRMs",
      "Develop mobile SDK for native app integration"
    ],
    metaDescription: "AI-powered chatbot platform with natural language processing, multi-channel support, and advanced analytics. Built with OpenAI and LangChain.",
    seoTitle: "AI Chatbot Platform | Natural Language Processing",
    performance: {
      loadTime: 87,
      accessibility: 93,
      bestPractices: 91,
      seo: 94
    }
  },
  {
    id: "crypto-dashboard",
    slug: "crypto-dashboard",
    title: "Cryptocurrency Trading Dashboard",
    description: "Real-time cryptocurrency trading platform with portfolio tracking, analytics, and automated trading.",
    fullDescription: "A comprehensive cryptocurrency trading dashboard that provides real-time market data, portfolio management, advanced charting tools, and automated trading capabilities. The platform integrates with multiple exchanges, offers sophisticated technical analysis tools, and includes risk management features. Built for both novice and experienced traders, it provides insights and tools to make informed trading decisions in the volatile crypto market.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "WebSocket",
      "PostgreSQL",
      "Redis",
      "D3.js",
      "Chart.js",
      "Binance API",
      "Coinbase API",
      "JWT",
      "Docker",
      "AWS Lambda",
    ],
    features: [
      "Real-time Market Data & Charts",
      "Multi-exchange Integration",
      "Portfolio Tracking & Analytics",
      "Technical Analysis Tools",
      "Automated Trading Bots",
      "Price Alerts & Notifications",
      "Risk Management Tools",
      "Trade History & Performance",
      "Mobile Responsive Design",
      "Dark/Light Theme",
      "API Key Management",
      "Social Trading Features",
      "News & Sentiment Analysis",
      "Tax Reporting Tools",
    ],
    githubUrl: "https://github.com/sorujmahmud/crypto-dashboard",
    liveUrl: "https://crypto-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      "https://images.unsplash.com/photo-1642784353723-4d1c6c56d3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1639762681057-408e52124e3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
    ],
    challenges: [
      "Handling real-time WebSocket data streams from multiple exchanges",
      "Implementing accurate and performant financial charting",
      "Managing secure API key storage and encryption",
      "Building reliable automated trading strategies",
      "Ensuring data consistency across multiple data sources",
      "Implementing proper risk management and trading safeguards",
    ],
    solutions: [
      "Used Redis pub/sub for efficient real-time data distribution",
      "Implemented D3.js for custom, high-performance financial charts",
      "Built secure vault system with encryption for API key storage",
      "Developed backtesting framework for trading strategy validation",
      "Implemented data reconciliation system for exchange discrepancies",
      "Created comprehensive risk management rules and circuit breakers",
    ],
    featured: true,
    difficulty: "advanced",
    duration: "5 months",
    teamSize: "2 developers",
    ...generateDates("2024-03-15"),
    tags: ["cryptocurrency", "trading", "finance", "realtime", "analytics"],
    emoji: "₿",
    stats: {
      completionTime: "5 months",
      teamSize: "2 developers",
      complexity: "Very High",
      views: 1800,
      likes: 134
    },
    architecture: "Real-time WebSocket architecture, Microservices for exchange integrations, Redis for caching and pub/sub, PostgreSQL for transactional data",
    developmentHighlights: [
      {
        title: "Real-time Data Processing",
        description: "Built scalable real-time data pipeline processing thousands of market events per second"
      },
      {
        title: "Advanced Charting",
        description: "Created custom financial charts with technical indicators and drawing tools"
      },
      {
        title: "Trading Automation",
        description: "Implemented reliable automated trading system with backtesting capabilities"
      }
    ],
    lessonsLearned: [
      "Complexities of financial data processing and visualization",
      "Importance of security in financial applications",
      "Challenges of multi-exchange data synchronization",
      "Risk management in automated trading systems"
    ],
    futureImprovements: [
      "Add more advanced trading algorithms and AI strategies",
      "Implement social trading and copy trading features",
      "Add derivatives and futures trading support",
      "Develop mobile trading application"
    ],
    metaDescription: "Real-time cryptocurrency trading dashboard with portfolio tracking, advanced charts, and automated trading. Multi-exchange support.",
    seoTitle: "Cryptocurrency Trading Dashboard | Real-time Analytics",
    performance: {
      loadTime: 89,
      accessibility: 91,
      bestPractices: 93,
      seo: 90
    }
  },
  {
    id: "fitness-tracker",
    slug: "fitness-tracker",
    title: "AI Fitness Tracker & Coach",
    description: "Intelligent fitness tracking application with AI-powered workout plans, progress analytics, and virtual coaching.",
    fullDescription: "A comprehensive fitness tracking application that combines AI-powered workout recommendations with detailed progress tracking and virtual coaching. The app creates personalized workout plans based on user goals, fitness level, and available equipment. Features include exercise demonstration videos, nutrition tracking, social challenges, and advanced analytics to help users achieve their fitness goals effectively.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "TensorFlow.js",
      "Redis",
      "AWS S3",
      "Firebase",
      "Apple HealthKit",
      "Google Fit API",
      "Chart.js",
      "Stripe",
    ],
    features: [
      "AI-Powered Workout Plans",
      "Exercise Demonstration Videos",
      "Progress Tracking & Analytics",
      "Nutrition & Calorie Tracking",
      "Virtual Personal Coach",
      "Social Challenges & Leaderboards",
      "Integration with Health Apps",
      "Personalized Recommendations",
      "Workout Reminders & Scheduling",
      "Body Measurements Tracking",
      "Achievement System",
      "Community Features",
      "Premium Coaching Programs",
      "Offline Workout Mode",
    ],
    githubUrl: "https://github.com/sorujmahmud/fitness-tracker",
    liveUrl: "https://fitness-soruj.vercel.app",
    category: "mobile",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1549060279-7e168fce7090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    ],
    challenges: [
      "Creating accurate AI models for personalized workout recommendations",
      "Implementing real-time exercise form analysis and feedback",
      "Synchronizing data across multiple health platforms and devices",
      "Building engaging social features and community interactions",
      "Optimizing mobile app performance with large media files",
      "Implementing secure payment processing for premium features",
    ],
    solutions: [
      "Used TensorFlow.js for exercise classification and recommendation algorithms",
      "Implemented computer vision with pose estimation for form analysis",
      "Built unified data synchronization layer for health platform integrations",
      "Created gamification system with challenges and social features",
      "Optimized media delivery with CDN and progressive loading",
      "Integrated Stripe with subscription management and trial periods",
    ],
    featured: true,
    difficulty: "advanced",
    duration: "6 months",
    teamSize: "4 developers",
    ...generateDates("2024-05-10"),
    tags: ["fitness", "mobile", "ai", "health", "react-native"],
    emoji: "💪",
    stats: {
      completionTime: "6 months",
      teamSize: "4 developers",
      complexity: "High",
      views: 1650,
      likes: 198
    },
    architecture: "React Native cross-platform mobile app, Node.js backend with microservices, MongoDB for user data, Redis for caching, AWS for media storage",
    developmentHighlights: [
      {
        title: "AI Personalization",
        description: "Developed sophisticated AI algorithms for personalized fitness recommendations"
      },
      {
        title: "Cross-platform Development",
        description: "Built seamless experience across iOS and Android with React Native"
      },
      {
        title: "Health Integrations",
        description: "Integrated with major health platforms for comprehensive data tracking"
      }
    ],
    lessonsLearned: [
      "Complexities of AI model training for fitness applications",
      "Importance of user engagement and motivation in fitness apps",
      "Challenges of cross-platform mobile development",
      "Data privacy considerations in health applications"
    ],
    futureImprovements: [
      "Add augmented reality for exercise guidance",
      "Implement more advanced AI coaching features",
      "Add integration with smart home gym equipment",
      "Develop wearable device integration"
    ],
    metaDescription: "AI-powered fitness tracker with personalized workout plans, progress analytics, and virtual coaching. Cross-platform mobile app.",
    seoTitle: "AI Fitness Tracker | Personalized Workout Plans",
    performance: {
      loadTime: 85,
      accessibility: 96,
      bestPractices: 92,
      seo: 89
    }
  },
  {
    id: "learning-platform",
    slug: "learning-platform",
    title: "Interactive Learning Management System",
    description: "Modern LMS with video courses, interactive quizzes, progress tracking, and AI-powered recommendations.",
    fullDescription: "A cutting-edge learning management system that provides an engaging and interactive educational experience. The platform features high-quality video courses, interactive coding exercises, AI-powered learning path recommendations, and comprehensive progress tracking. Built for both individual learners and educational institutions, it supports multiple learning formats and provides tools for instructors to create and manage educational content effectively.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "FFmpeg",
      "WebRTC",
      "Socket.io",
      "Stripe",
      "OpenAI API",
      "Docker",
      "Kubernetes",
    ],
    features: [
      "Interactive Video Courses",
      "Live Coding Environment",
      "AI-Powered Learning Paths",
      "Progress Tracking & Analytics",
      "Interactive Quizzes & Assessments",
      "Certificate Generation",
      "Discussion Forums",
      "Live Classes with WebRTC",
      "Course Creation Tools",
      "Multi-language Support",
      "Mobile Learning App",
      "Gamification & Badges",
      "Corporate Training Features",
      "API for Integrations",
    ],
    githubUrl: "https://github.com/sorujmahmud/learning-platform",
    liveUrl: "https://learn-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    ],
    challenges: [
      "Implementing scalable video streaming and processing infrastructure",
      "Building interactive coding environments with real-time execution",
      "Creating accurate AI models for personalized learning recommendations",
      "Managing complex course structures and learning paths",
      "Implementing secure payment and subscription management",
      "Ensuring platform accessibility for diverse learning needs",
    ],
    solutions: [
      "Used AWS MediaConvert and CloudFront for scalable video delivery",
      "Built Docker-based code execution environment for safe code running",
      "Implemented collaborative filtering and content-based recommendation systems",
      "Designed flexible course schema with prerequisites and learning objectives",
      "Integrated Stripe with complex pricing models and enterprise features",
      "Followed WCAG guidelines and implemented accessibility features throughout",
    ],
    featured: true,
    difficulty: "advanced",
    duration: "7 months",
    teamSize: "5 developers",
    ...generateDates("2024-06-15"),
    tags: ["education", "lms", "video", "ai", "learning"],
    emoji: "🎓",
    stats: {
      completionTime: "7 months",
      teamSize: "5 developers",
      complexity: "Very High",
      views: 1950,
      likes: 167
    },
    architecture: "Microservices architecture with Next.js frontend, NestJS backend, PostgreSQL for data, Redis for caching, Kubernetes for orchestration",
    developmentHighlights: [
      {
        title: "Video Processing Pipeline",
        description: "Built scalable video processing and streaming infrastructure supporting thousands of concurrent users"
      },
      {
        title: "Interactive Learning",
        description: "Created immersive learning experience with live coding and interactive exercises"
      },
      {
        title: "AI Recommendations",
        description: "Implemented sophisticated AI system for personalized learning path recommendations"
      }
    ],
    lessonsLearned: [
      "Complexities of building scalable video platforms",
      "Importance of engagement in online learning",
      "Challenges of personalized education at scale",
      "Security considerations in code execution environments"
    ],
    futureImprovements: [
      "Add virtual reality learning experiences",
      "Implement more advanced AI tutoring features",
      "Add integration with corporate HR systems",
      "Develop offline learning capabilities"
    ],
    metaDescription: "Interactive learning management system with video courses, AI recommendations, and live coding. Built for modern education.",
    seoTitle: "Learning Management System | Interactive Online Education",
    performance: {
      loadTime: 88,
      accessibility: 97,
      bestPractices: 94,
      seo: 95
    }
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website with project showcase, blog, and contact integration.",
    fullDescription: "A cutting-edge personal portfolio website built with Next.js 14 and modern web technologies. Features a stunning design with smooth animations, project showcase, blog integration, and contact forms. The website is optimized for performance, accessibility, and SEO, with perfect Lighthouse scores. Includes dark mode, internationalization support, and a fully functional admin dashboard for content management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "NextAuth",
      "MongoDB",
      "React Hook Form",
      "Shadcn UI",
      "Vercel Analytics",
      "Resend",
    ],
    features: [
      "Responsive Design with Mobile-First Approach",
      "Dark/Light Mode Toggle",
      "Smooth Animations & Page Transitions",
      "Project Showcase with Filtering",
      "Blog with Markdown Support",
      "Contact Form with Email Integration",
      "Admin Dashboard for Content Management",
      "SEO Optimized with Meta Tags",
      "Performance Monitoring with Analytics",
      "Accessibility Compliant (WCAG 2.1)",
      "Internationalization Support",
      "PWA Ready with Offline Support",
    ],
    githubUrl: "https://github.com/sorujmahmud/portfolio",
    liveUrl: "https://sorujmahmud.vercel.app",
    category: "frontend",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
    ],
    challenges: [
      "Achieving perfect Lighthouse scores across all metrics",
      "Implementing smooth animations without performance impact",
      "Creating responsive design that works perfectly on all devices",
      "Optimizing images and assets for fast loading times",
      "Implementing accessible design patterns and keyboard navigation",
    ],
    solutions: [
      "Used Next.js Image component with optimized formats and lazy loading",
      "Implemented Framer Motion with will-change and transform properties",
      "Adopted mobile-first responsive design with Tailwind CSS breakpoints",
      "Configured proper caching strategies and CDN delivery",
      "Followed WCAG guidelines and tested with screen readers",
    ],
    featured: true,
    difficulty: "intermediate",
    duration: "1 month",
    teamSize: "Solo",
    ...generateDates("2024-03-05"),
    tags: ["portfolio", "nextjs", "responsive", "seo", "animation"],
    emoji: "🌟",
    stats: {
      completionTime: "1 month",
      teamSize: "1 developer",
      complexity: "Medium",
      views: 1500,
      likes: 120
    },
    architecture: "Next.js App Router with static generation, MongoDB for dynamic content, Vercel for deployment with edge functions",
    developmentHighlights: [
      {
        title: "Performance Excellence",
        description: "Achieved 100/100 Lighthouse scores through optimized images, code splitting, and efficient bundling"
      },
      {
        title: "Animation System",
        description: "Created smooth, performant animations using Framer Motion with gesture support"
      },
      {
        title: "SEO Optimization",
        description: "Implemented comprehensive SEO strategy with structured data and meta tags"
      }
    ],
    lessonsLearned: [
      "Importance of performance optimization from day one",
      "Value of accessibility in modern web development",
      "Benefits of static generation for portfolio sites",
      "Effective use of animations for user engagement"
    ],
    futureImprovements: [
      "Add more interactive 3D elements",
      "Implement blog commenting system",
      "Add portfolio analytics dashboard",
      "Integrate with more social platforms"
    ],
    metaDescription: "Modern portfolio website built with Next.js and TypeScript. Features projects showcase, blog, and responsive design.",
    seoTitle: "Personal Portfolio | Soruj Mahmud - Full Stack Developer",
    performance: {
      loadTime: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100
    }
  }, 
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    description: "Full-featured e-commerce platform with advanced product filtering, cart management, and payment processing.",
    fullDescription: "A comprehensive e-commerce solution built with modern technologies featuring advanced product catalog, intelligent search, secure payment processing, and admin dashboard. The platform supports multiple vendors, inventory management, order tracking, and customer reviews with a focus on user experience and conversion optimization.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Redis",
      "Elasticsearch",
      "Docker",
      "Tailwind CSS",
      "Shadcn UI"
    ],
    features: [
      "Advanced Product Filtering",
      "Real-time Inventory Management",
      "Secure Payment Processing",
      "Multi-vendor Support",
      "Order Tracking System",
      "Customer Reviews & Ratings",
      "Wishlist & Cart Management",
      "Admin Dashboard",
      "Analytics & Reporting",
      "Mobile Responsive Design"
    ],
    githubUrl: "https://github.com/sorujmahmud/ecommerce-platform",
    liveUrl: "https://ecommerce-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1563013546-7e5c7c16eb67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "Implementing real-time inventory synchronization",
      "Building scalable search with filters",
      "Handling secure payment transactions",
      "Managing multiple vendor workflows"
    ],
    solutions: [
      "Used Redis for real-time inventory updates",
      "Implemented Elasticsearch for fast search",
      "Integrated Stripe with webhook handling",
      "Built role-based access control system"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "6 months",
    teamSize: "3 developers",
    ...generateDates("2024-02-10"),
    tags: ["ecommerce", "fullstack", "payments", "inventory"],
    emoji: "🛒",
    stats: {
      completionTime: "6 months",
      teamSize: "3 developers",
      complexity: "High",
      views: 1450,
      likes: 98
    },
    architecture: "Next.js frontend with Node.js API, PostgreSQL for data, Redis for caching, Elasticsearch for search",
    developmentHighlights: [
      {
        title: "Payment Integration",
        description: "Successfully implemented secure payment processing with Stripe"
      },
      {
        title: "Search Optimization",
        description: "Built fast and accurate search with advanced filtering"
      }
    ],
    lessonsLearned: [
      "Importance of inventory management in e-commerce",
      "Security considerations for payment processing"
    ],
    futureImprovements: [
      "Add AI-powered recommendations",
      "Implement AR product preview"
    ],
    metaDescription: "Modern e-commerce platform with advanced features and secure payments",
    seoTitle: "E-commerce Platform | Online Shopping Solution",
    performance: {
      loadTime: 92,
      accessibility: 94,
      bestPractices: 91,
      seo: 93
    }
  },
  {
    id: "social-network",
    slug: "social-network",
    title: "Social Media Application",
    description: "Feature-rich social networking platform with real-time messaging, posts, and community features.",
    fullDescription: "A modern social media application that enables users to connect, share content, and communicate in real-time. Features include news feed, direct messaging, groups, events, and multimedia sharing with a focus on user engagement and community building.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "AWS S3",
      "Redis",
      "JWT",
      "Express"
    ],
    features: [
      "Real-time Messaging",
      "News Feed Algorithm",
      "Media Upload & Sharing",
      "Groups & Communities",
      "Event Management",
      "Notifications System",
      "User Profiles",
      "Content Moderation"
    ],
    githubUrl: "https://github.com/sorujmahmud/social-network",
    liveUrl: "https://social-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    ],
    challenges: [
      "Real-time data synchronization",
      "Media storage optimization",
      "Scalable notification system"
    ],
    solutions: [
      "Implemented Socket.io for real-time features",
      "Used AWS S3 with CDN for media",
      "Built Redis-based notification queue"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "5 months",
    teamSize: "4 developers",
    ...generateDates("2024-01-20"),
    tags: ["social", "realtime", "messaging", "community"],
    emoji: "👥",
    stats: {
      completionTime: "5 months",
      teamSize: "4 developers",
      complexity: "High",
      views: 1670,
      likes: 145
    },
    architecture: "React SPA with Node.js backend, MongoDB for data, Socket.io for real-time, Redis for caching",
    developmentHighlights: [
      {
        title: "Real-time System",
        description: "Built scalable real-time messaging and notifications"
      }
    ],
    lessonsLearned: [
      "Challenges of real-time data synchronization",
      "Importance of content moderation"
    ],
    futureImprovements: [
      "Add video streaming capabilities",
      "Implement advanced analytics"
    ],
    metaDescription: "Social media platform with real-time features and community building",
    seoTitle: "Social Network | Connect and Share",
    performance: {
      loadTime: 88,
      accessibility: 92,
      bestPractices: 89,
      seo: 91
    }
  },
  {
    id: "task-manager",
    slug: "task-manager",
    title: "Project Management Tool",
    description: "Collaborative project management application with task tracking, team collaboration, and analytics.",
    fullDescription: "A comprehensive project management tool designed for teams to plan, track, and deliver projects efficiently. Features include task management, team collaboration, time tracking, reporting, and integration with popular development tools.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Firebase",
      "Vuex",
      "Vuetify",
      "Chart.js"
    ],
    features: [
      "Task Management",
      "Team Collaboration",
      "Time Tracking",
      "Progress Reporting",
      "File Sharing",
      "Calendar Integration",
      "Role-based Access"
    ],
    githubUrl: "https://github.com/sorujmahmud/task-manager",
    liveUrl: "https://tasks-soruj.vercel.app",
    category: "frontend",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1543286386-2e659306cd24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "Real-time collaboration features",
      "Complex state management",
      "Responsive design for complex UI"
    ],
    solutions: [
      "Used Firebase for real-time updates",
      "Implemented Vuex for state management",
      "Designed mobile-first responsive layout"
    ],
    featured: false,
    difficulty: "intermediate",
    duration: "3 months",
    teamSize: "2 developers",
    ...generateDates("2024-03-01"),
    tags: ["productivity", "collaboration", "vue", "firebase"],
    emoji: "✅",
    stats: {
      completionTime: "3 months",
      teamSize: "2 developers",
      complexity: "Medium",
      views: 1230,
      likes: 87
    },
    architecture: "Vue.js SPA with Firebase backend, Vuex for state management",
    developmentHighlights: [
      {
        title: "Real-time Collaboration",
        description: "Implemented real-time task updates and team collaboration"
      }
    ],
    lessonsLearned: [
      "Importance of real-time updates in collaboration tools",
      "State management best practices"
    ],
    futureImprovements: [
      "Add more integration options",
      "Implement AI task suggestions"
    ],
    metaDescription: "Project management tool for team collaboration and task tracking",
    seoTitle: "Task Manager | Project Management Tool",
    performance: {
      loadTime: 90,
      accessibility: 93,
      bestPractices: 91,
      seo: 89
    }
  },
  {
    id: "weather-app",
    slug: "weather-app",
    title: "Weather Forecast Application",
    description: "Real-time weather forecasting app with beautiful visuals and detailed meteorological data.",
    fullDescription: "A visually stunning weather application that provides accurate forecasts, severe weather alerts, and detailed meteorological data. Features interactive maps, historical data, and personalized location-based forecasts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    technologies: [
      "React",
      "OpenWeather API",
      "Chart.js",
      "Leaflet",
      "Styled Components",
      "PWA"
    ],
    features: [
      "Real-time Weather Data",
      "Interactive Maps",
      "7-Day Forecast",
      "Severe Weather Alerts",
      "Historical Data",
      "Location-based Forecasts",
      "PWA Support"
    ],
    githubUrl: "https://github.com/sorujmahmud/weather-app",
    liveUrl: "https://weather-soruj.vercel.app",
    category: "frontend",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1566228015668-4c45dbc0e2c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "API rate limiting",
      "Offline functionality",
      "Map performance optimization"
    ],
    solutions: [
      "Implemented efficient caching strategy",
      "Used service workers for offline support",
      "Optimized map rendering with Leaflet"
    ],
    featured: false,
    difficulty: "intermediate",
    duration: "2 months",
    teamSize: "Solo",
    ...generateDates("2024-04-05"),
    tags: ["weather", "api", "maps", "pwa"],
    emoji: "🌤️",
    stats: {
      completionTime: "2 months",
      teamSize: "1 developer",
      complexity: "Medium",
      views: 980,
      likes: 76
    },
    architecture: "React PWA with OpenWeather API, Leaflet for maps, service workers for offline",
    developmentHighlights: [
      {
        title: "Offline Functionality",
        description: "Implemented PWA features for offline weather access"
      }
    ],
    lessonsLearned: [
      "API integration best practices",
      "PWA implementation techniques"
    ],
    futureImprovements: [
      "Add more weather data sources",
      "Implement weather analytics"
    ],
    metaDescription: "Beautiful weather app with forecasts and interactive maps",
    seoTitle: "Weather App | Real-time Forecasts",
    performance: {
      loadTime: 95,
      accessibility: 96,
      bestPractices: 94,
      seo: 92
    }
  },
  {
    id: "blog-platform",
    slug: "blog-platform",
    title: "Modern Blog Platform",
    description: "Content management system for bloggers with rich text editing, SEO tools, and analytics.",
    fullDescription: "A modern blogging platform designed for content creators with advanced editing capabilities, SEO optimization tools, and comprehensive analytics. Supports multiple authors, content scheduling, and social media integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    technologies: [
      "Next.js",
      "Strapi",
      "PostgreSQL",
      "AWS S3",
      "Redis",
      "Tailwind CSS"
    ],
    features: [
      "Rich Text Editor",
      "SEO Optimization Tools",
      "Content Scheduling",
      "Multi-author Support",
      "Social Media Integration",
      "Analytics Dashboard",
      "Comment System"
    ],
    githubUrl: "https://github.com/sorujmahmud/blog-platform",
    liveUrl: "https://blog-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    ],
    challenges: [
      "Rich text editor implementation",
      "SEO optimization",
      "Content delivery performance"
    ],
    solutions: [
      "Integrated TipTap editor",
      "Implemented SSR for SEO",
      "Used Redis for caching"
    ],
    featured: false,
    difficulty: "intermediate",
    duration: "4 months",
    teamSize: "2 developers",
    ...generateDates("2024-02-28"),
    tags: ["blog", "cms", "seo", "content"],
    emoji: "📝",
    stats: {
      completionTime: "4 months",
      teamSize: "2 developers",
      complexity: "Medium",
      views: 1120,
      likes: 83
    },
    architecture: "Next.js frontend with Strapi headless CMS, PostgreSQL database",
    developmentHighlights: [
      {
        title: "SEO Optimization",
        description: "Built comprehensive SEO tools and analytics"
      }
    ],
    lessonsLearned: [
      "Headless CMS implementation",
      "SEO best practices for blogs"
    ],
    futureImprovements: [
      "Add AI content suggestions",
      "Implement newsletter system"
    ],
    metaDescription: "Modern blog platform with SEO tools and content management",
    seoTitle: "Blog Platform | Content Management System",
    performance: {
      loadTime: 91,
      accessibility: 95,
      bestPractices: 92,
      seo: 96
    }
  },
  {
    id: "music-player",
    slug: "music-player",
    title: "Streaming Music Player",
    description: "Web-based music streaming application with playlist management and audio visualization.",
    fullDescription: "A feature-rich music streaming application that provides high-quality audio playback, playlist management, social features, and stunning audio visualizations. Supports multiple audio formats and provides personalized recommendations.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: [
      "React",
      "Howler.js",
      "Web Audio API",
      "IndexedDB",
      "PWA",
      "Tailwind CSS"
    ],
    features: [
      "High-quality Audio Playback",
      "Playlist Management",
      "Audio Visualization",
      "Offline Listening",
      "Social Sharing",
      "Personalized Recommendations",
      "Cross-device Sync"
    ],
    githubUrl: "https://github.com/sorujmahmud/music-player",
    liveUrl: "https://music-soruj.vercel.app",
    category: "frontend",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "Audio performance optimization",
      "Offline storage management",
      "Real-time audio visualization"
    ],
    solutions: [
      "Used Howler.js for audio handling",
      "Implemented IndexedDB for offline storage",
      "Leveraged Web Audio API for visualization"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "3 months",
    teamSize: "Solo",
    ...generateDates("2024-05-15"),
    tags: ["music", "audio", "pwa", "streaming"],
    emoji: "🎵",
    stats: {
      completionTime: "3 months",
      teamSize: "1 developer",
      complexity: "High",
      views: 1340,
      likes: 112
    },
    architecture: "React PWA with Howler.js, Web Audio API, IndexedDB for offline",
    developmentHighlights: [
      {
        title: "Audio Visualization",
        description: "Built real-time audio visualizations using Web Audio API"
      }
    ],
    lessonsLearned: [
      "Audio processing in browsers",
      "Offline storage strategies"
    ],
    futureImprovements: [
      "Add podcast support",
      "Implement collaborative playlists"
    ],
    metaDescription: "Music streaming app with audio visualization and offline support",
    seoTitle: "Music Player | Streaming Audio Application",
    performance: {
      loadTime: 89,
      accessibility: 94,
      bestPractices: 90,
      seo: 88
    }
  },
  {
    id: "finance-tracker",
    slug: "finance-tracker",
    title: "Personal Finance Tracker",
    description: "Comprehensive personal finance management application with budgeting and investment tracking.",
    fullDescription: "A powerful personal finance application that helps users track expenses, create budgets, monitor investments, and plan financial goals. Features bank integration, investment analytics, and financial reporting.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "Plaid API",
      "Chart.js",
      "Firebase"
    ],
    features: [
      "Expense Tracking",
      "Budget Planning",
      "Investment Monitoring",
      "Bank Integration",
      "Financial Reports",
      "Goal Setting",
      "Bill Reminders"
    ],
    githubUrl: "https://github.com/sorujmahmud/finance-tracker",
    liveUrl: "https://finance-soruj.vercel.app",
    category: "mobile",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "Secure financial data handling",
      "Bank API integration",
      "Cross-platform mobile development"
    ],
    solutions: [
      "Used Plaid API for secure bank connections",
      "Implemented end-to-end encryption",
      "Built with React Native for cross-platform"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "5 months",
    teamSize: "2 developers",
    ...generateDates("2024-04-10"),
    tags: ["finance", "mobile", "budget", "investing"],
    emoji: "💰",
    stats: {
      completionTime: "5 months",
      teamSize: "2 developers",
      complexity: "High",
      views: 1560,
      likes: 134
    },
    architecture: "React Native mobile app with Node.js backend, MongoDB database",
    developmentHighlights: [
      {
        title: "Bank Integration",
        description: "Securely integrated with banking APIs using Plaid"
      }
    ],
    lessonsLearned: [
      "Financial data security requirements",
      "Bank API integration complexities"
    ],
    futureImprovements: [
      "Add cryptocurrency tracking",
      "Implement AI financial advice"
    ],
    metaDescription: "Personal finance tracker with budgeting and investment monitoring",
    seoTitle: "Finance Tracker | Budget and Investment Management",
    performance: {
      loadTime: 87,
      accessibility: 93,
      bestPractices: 91,
      seo: 89
    }
  },
  {
    id: "recipe-app",
    slug: "recipe-app",
    title: "Recipe Discovery Platform",
    description: "Interactive recipe application with meal planning, shopping lists, and dietary customization.",
    fullDescription: "A comprehensive recipe platform that helps users discover new recipes, plan meals, generate shopping lists, and customize based on dietary preferences. Features include step-by-step cooking instructions, nutritional information, and social sharing.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: [
      "Vue.js",
      "Firebase",
      "Spoonacular API",
      "Vuex",
      "Tailwind CSS",
      "PWA"
    ],
    features: [
      "Recipe Discovery",
      "Meal Planning",
      "Shopping List Generation",
      "Dietary Customization",
      "Nutritional Information",
      "Step-by-step Instructions",
      "Social Sharing"
    ],
    githubUrl: "https://github.com/sorujmahmud/recipe-app",
    liveUrl: "https://recipes-soruj.vercel.app",
    category: "frontend",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    ],
    challenges: [
      "Recipe data management",
      "Meal planning algorithm",
      "Offline functionality"
    ],
    solutions: [
      "Used Spoonacular API for recipe data",
      "Built intelligent meal planning system",
      "Implemented PWA for offline access"
    ],
    featured: false,
    difficulty: "intermediate",
    duration: "3 months",
    teamSize: "Solo",
    ...generateDates("2024-03-20"),
    tags: ["recipes", "cooking", "meal-planning", "vue"],
    emoji: "🍳",
    stats: {
      completionTime: "3 months",
      teamSize: "1 developer",
      complexity: "Medium",
      views: 1080,
      likes: 94
    },
    architecture: "Vue.js PWA with Firebase backend, Spoonacular API integration",
    developmentHighlights: [
      {
        title: "Meal Planning",
        description: "Built intelligent meal planning with dietary customization"
      }
    ],
    lessonsLearned: [
      "API integration for external data",
      "PWA implementation for food apps"
    ],
    futureImprovements: [
      "Add video cooking tutorials",
      "Implement AI recipe suggestions"
    ],
    metaDescription: "Recipe platform with meal planning and dietary customization",
    seoTitle: "Recipe App | Meal Planning and Discovery",
    performance: {
      loadTime: 92,
      accessibility: 95,
      bestPractices: 93,
      seo: 91
    }
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate Listing Platform",
    description: "Comprehensive real estate platform with property search, virtual tours, and agent matching.",
    fullDescription: "A modern real estate platform that connects buyers, sellers, and agents. Features advanced property search with filters, virtual tours, mortgage calculators, and intelligent agent matching system.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Mapbox",
      "Stripe",
      "AWS S3"
    ],
    features: [
      "Advanced Property Search",
      "Virtual Tours",
      "Mortgage Calculator",
      "Agent Matching",
      "Property Comparisons",
      "Neighborhood Insights",
      "Secure Messaging"
    ],
    githubUrl: "https://github.com/sorujmahmud/real-estate",
    liveUrl: "https://realestate-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
    ],
    challenges: [
      "Large dataset performance",
      "Map integration and optimization",
      "Virtual tour implementation"
    ],
    solutions: [
      "Used PostgreSQL with efficient indexing",
      "Integrated Mapbox for interactive maps",
      "Built virtual tour with 360° images"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "6 months",
    teamSize: "3 developers",
    ...generateDates("2024-01-15"),
    tags: ["realestate", "properties", "maps", "search"],
    emoji: "🏠",
    stats: {
      completionTime: "6 months",
      teamSize: "3 developers",
      complexity: "High",
      views: 1780,
      likes: 156
    },
    architecture: "Next.js with Node.js API, PostgreSQL database, Mapbox integration",
    developmentHighlights: [
      {
        title: "Property Search",
        description: "Built advanced search with filters and map integration"
      }
    ],
    lessonsLearned: [
      "Performance optimization for large datasets",
      "Map integration best practices"
    ],
    futureImprovements: [
      "Add AI property recommendations",
      "Implement blockchain for contracts"
    ],
    metaDescription: "Real estate platform with property search and virtual tours",
    seoTitle: "Real Estate | Property Search Platform",
    performance: {
      loadTime: 86,
      accessibility: 92,
      bestPractices: 90,
      seo: 94
    }
  },
  {
    id: "travel-planner",
    slug: "travel-planner",
    title: "AI Travel Planning Assistant",
    description: "Intelligent travel planning platform with itinerary generation and destination recommendations.",
    fullDescription: "An AI-powered travel planning platform that creates personalized itineraries, suggests destinations based on preferences, and provides real-time travel information. Features include budget planning, booking integration, and travel community.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "OpenAI API",
      "MongoDB",
      "Redis"
    ],
    features: [
      "AI Itinerary Generation",
      "Destination Recommendations",
      "Budget Planning",
      "Booking Integration",
      "Real-time Travel Info",
      "Travel Community",
      "Multi-language Support"
    ],
    githubUrl: "https://github.com/sorujmahmud/travel-planner",
    liveUrl: "https://travel-soruj.vercel.app",
    category: "ai",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "AI itinerary personalization",
      "Real-time travel data integration",
      "Multi-source booking integration"
    ],
    solutions: [
      "Used OpenAI for intelligent planning",
      "Integrated multiple travel APIs",
      "Built unified booking interface"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "4 months",
    teamSize: "2 developers",
    ...generateDates("2024-05-01"),
    tags: ["travel", "ai", "planning", "itinerary"],
    emoji: "✈️",
    stats: {
      completionTime: "4 months",
      teamSize: "2 developers",
      complexity: "High",
      views: 1420,
      likes: 118
    },
    architecture: "React frontend with Python FastAPI, OpenAI integration, MongoDB database",
    developmentHighlights: [
      {
        title: "AI Planning",
        description: "Implemented AI-powered itinerary generation and recommendations"
      }
    ],
    lessonsLearned: [
      "AI integration for travel planning",
      "Multi-API integration challenges"
    ],
    futureImprovements: [
      "Add virtual reality destination previews",
      "Implement group travel planning"
    ],
    metaDescription: "AI travel planner with personalized itineraries and recommendations",
    seoTitle: "Travel Planner | AI-powered Itinerary Generation",
    performance: {
      loadTime: 88,
      accessibility: 91,
      bestPractices: 89,
      seo: 90
    }
  },
  {
    id: "health-monitor",
    slug: "health-monitor",
    title: "Health Monitoring System",
    description: "Comprehensive health tracking system with wearable integration and medical insights.",
    fullDescription: "A health monitoring platform that integrates with wearable devices, tracks vital signs, provides health insights, and connects users with healthcare professionals. Features real-time monitoring, trend analysis, and emergency alerts.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "WebSocket",
      "Chart.js",
      "Firebase"
    ],
    features: [
      "Wearable Device Integration",
      "Vital Signs Tracking",
      "Health Trend Analysis",
      "Emergency Alerts",
      "Doctor Connectivity",
      "Medication Reminders",
      "Health Reports"
    ],
    githubUrl: "https://github.com/sorujmahmud/health-monitor",
    liveUrl: "https://health-soruj.vercel.app",
    category: "mobile",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "Wearable device integration",
      "Real-time health data processing",
      "Medical data security"
    ],
    solutions: [
      "Built adapters for multiple wearables",
      "Used WebSocket for real-time updates",
      "Implemented HIPAA-compliant security"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "7 months",
    teamSize: "3 developers",
    ...generateDates("2024-02-05"),
    tags: ["health", "medical", "wearable", "monitoring"],
    emoji: "❤️",
    stats: {
      completionTime: "7 months",
      teamSize: "3 developers",
      complexity: "Very High",
      views: 1650,
      likes: 142
    },
    architecture: "React Native mobile app with Node.js backend, WebSocket for real-time",
    developmentHighlights: [
      {
        title: "Device Integration",
        description: "Integrated multiple wearable devices for health monitoring"
      }
    ],
    lessonsLearned: [
      "Medical data security requirements",
      "Wearable API integration complexities"
    ],
    futureImprovements: [
      "Add AI health predictions",
      "Implement telemedicine features"
    ],
    metaDescription: "Health monitoring system with wearable integration and medical insights",
    seoTitle: "Health Monitor | Wearable Health Tracking",
    performance: {
      loadTime: 85,
      accessibility: 96,
      bestPractices: 92,
      seo: 88
    }
  },
  {
    id: "code-editor",
    slug: "code-editor",
    title: "Online Code Editor",
    description: "Browser-based code editor with real-time collaboration and multiple language support.",
    fullDescription: "A powerful online code editor that supports multiple programming languages, real-time collaboration, and integrated development tools. Features include syntax highlighting, version control, and deployment integration.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    technologies: [
      "React",
      "Node.js",
      "WebSocket",
      "Monaco Editor",
      "Docker",
      "Redis"
    ],
    features: [
      "Multi-language Support",
      "Real-time Collaboration",
      "Syntax Highlighting",
      "Version Control Integration",
      "Code Execution",
      "Deployment Tools",
      "Plugin System"
    ],
    githubUrl: "https://github.com/sorujmahmud/code-editor",
    liveUrl: "https://editor-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "Real-time code synchronization",
      "Secure code execution",
      "Performance with large files"
    ],
    solutions: [
      "Used operational transforms for collaboration",
      "Built Docker-based code execution",
      "Implemented virtual scrolling for large files"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "5 months",
    teamSize: "2 developers",
    ...generateDates("2024-04-18"),
    tags: ["coding", "editor", "collaboration", "development"],
    emoji: "💻",
    stats: {
      completionTime: "5 months",
      teamSize: "2 developers",
      complexity: "High",
      views: 1520,
      likes: 126
    },
    architecture: "React frontend with Monaco editor, Node.js with WebSocket, Docker for execution",
    developmentHighlights: [
      {
        title: "Real-time Collaboration",
        description: "Built real-time code editing with multiple users"
      }
    ],
    lessonsLearned: [
      "Operational transform implementation",
      "Secure code execution environments"
    ],
    futureImprovements: [
      "Add AI code completion",
      "Implement more language servers"
    ],
    metaDescription: "Online code editor with real-time collaboration and multiple languages",
    seoTitle: "Code Editor | Online Development Environment",
    performance: {
      loadTime: 84,
      accessibility: 90,
      bestPractices: 88,
      seo: 86
    }
  },
  {
    id: "gaming-platform",
    slug: "gaming-platform",
    title: "Online Gaming Platform",
    description: "Multiplayer gaming platform with real-time gameplay and social features.",
    fullDescription: "A comprehensive online gaming platform that supports multiple game types, real-time multiplayer gameplay, social features, and tournament systems. Built for both casual and competitive gaming communities.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: [
      "Unity",
      "C#",
      "Node.js",
      "WebSocket",
      "MongoDB",
      "Redis"
    ],
    features: [
      "Real-time Multiplayer",
      "Multiple Game Types",
      "Tournament System",
      "Social Features",
      "Leaderboards",
      "In-game Chat",
      "Achievement System"
    ],
    githubUrl: "https://github.com/sorujmahmud/gaming-platform",
    liveUrl: "https://gaming-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    challenges: [
      "Real-time game synchronization",
      "Low-latency networking",
      "Scalable game server architecture"
    ],
    solutions: [
      "Used authoritative server architecture",
      "Implemented client-side prediction",
      "Built scalable server with load balancing"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "8 months",
    teamSize: "4 developers",
    ...generateDates("2024-03-25"),
    tags: ["gaming", "multiplayer", "realtime", "unity"],
    emoji: "🎮",
    stats: {
      completionTime: "8 months",
      teamSize: "4 developers",
      complexity: "Very High",
      views: 1890,
      likes: 167
    },
    architecture: "Unity game clients with Node.js game servers, WebSocket for real-time",
    developmentHighlights: [
      {
        title: "Real-time Gameplay",
        description: "Built low-latency real-time multiplayer gaming system"
      }
    ],
    lessonsLearned: [
      "Game networking complexities",
      "Real-time synchronization challenges"
    ],
    futureImprovements: [
      "Add VR gaming support",
      "Implement blockchain for assets"
    ],
    metaDescription: "Multiplayer gaming platform with real-time gameplay and tournaments",
    seoTitle: "Gaming Platform | Online Multiplayer Games",
    performance: {
      loadTime: 82,
      accessibility: 88,
      bestPractices: 85,
      seo: 84
    }
  },
  {
    id: "analytics-dashboard",
    slug: "analytics-dashboard",
    title: "Business Analytics Dashboard",
    description: "Comprehensive analytics platform with data visualization and business intelligence tools.",
    fullDescription: "A powerful business analytics platform that provides deep insights through advanced data visualization, reporting tools, and predictive analytics. Features real-time data processing, custom reporting, and integration with multiple data sources.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: [
      "React",
      "D3.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis"
    ],
    features: [
      "Advanced Data Visualization",
      "Real-time Analytics",
      "Custom Reporting",
      "Predictive Analytics",
      "Data Export",
      "Multi-source Integration",
      "Dashboard Customization"
    ],
    githubUrl: "https://github.com/sorujmahmud/analytics-dashboard",
    liveUrl: "https://analytics-soruj.vercel.app",
    category: "frontend",
    status: "completed",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    ],
    challenges: [
      "Large dataset visualization",
      "Real-time data processing",
      "Custom chart implementations"
    ],
    solutions: [
      "Used D3.js for custom visualizations",
      "Implemented real-time data pipelines",
      "Built reusable chart components"
    ],
    featured: false,
    difficulty: "advanced",
    duration: "6 months",
    teamSize: "3 developers",
    ...generateDates("2024-05-22"),
    tags: ["analytics", "data", "visualization", "business"],
    emoji: "📊",
    stats: {
      completionTime: "6 months",
      teamSize: "3 developers",
      complexity: "High",
      views: 1730,
      likes: 148
    },
    architecture: "React with D3.js frontend, Node.js and Python backend, PostgreSQL for data",
    developmentHighlights: [
      {
        title: "Data Visualization",
        description: "Built advanced custom visualizations with D3.js"
      }
    ],
    lessonsLearned: [
      "Data visualization best practices",
      "Real-time analytics implementation"
    ],
    futureImprovements: [
      "Add AI-powered insights",
      "Implement natural language queries"
    ],
    metaDescription: "Business analytics dashboard with advanced visualization and reporting",
    seoTitle: "Analytics Dashboard | Business Intelligence Platform",
    performance: {
      loadTime: 86,
      accessibility: 92,
      bestPractices: 90,
      seo: 89
    }
  }
];

// Validation function
export function validateSeedProjects() {
  const requiredFields = ['id', 'title', 'description', 'fullDescription', 'image', 'category', 'status', 'createdAt', 'updatedAt', 'completionDate', 'duration', 'teamSize', 'difficulty', 'emoji'];

  const errors: string[] = [];

  seedProjects.forEach((project, index) => {
    requiredFields.forEach(field => {
      if (!(field in project) || !project[field as keyof Project]) {
        errors.push(`Project ${index + 1} (${project.title}): Missing required field '${field}'`);
      }
    });
  });

  if (errors.length > 0) {
    console.error('Seed data validation errors:');
    errors.forEach(error => console.error(`  ❌ ${error}`));
    throw new Error(`Seed data validation failed with ${errors.length} errors`);
  }

  console.log(`✅ All ${seedProjects.length} projects passed validation`);
  return true;
}

export const getProjectById = (id: string): Project | undefined => {
  return seedProjects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return seedProjects;
  return seedProjects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return seedProjects.filter(project => project.featured);
};

export const getProjectsByStatus = (status: string): Project[] => {
  if (status === 'all') return seedProjects;
  return seedProjects.filter(project => project.status === status);
};