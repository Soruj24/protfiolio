export interface Project {
  id: string;
  
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  category: "fullstack" | "frontend" | "backend" | "mobile" | "ai";
  status: "completed" | "in-progress" | "planned";
  screenshots: string[];
  challenges: string[];
  solutions: string[];
  // New enhanced fields
  featured: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  teamSize: string;
  completionDate: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  emoji: string;
  // Statistics
  stats?: {
    completionTime: string;
    teamSize: string;
    complexity: string;
    views?: number;
    likes?: number;
  };
  // Technical details
  architecture?: string;
  developmentHighlights?: Array<{
    title: string;
    description: string;
  }>;
  lessonsLearned?: string[];
  futureImprovements?: string[];
  // SEO and metadata
  metaDescription?: string;
  seoTitle?: string;
  // Performance metrics
  performance?: {
    loadTime: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

export const projects: Project[] = [
   {
    id: "ai-chatbot",
    title: "AI-Powered Chatbot Platform",
    description:
      "Intelligent chatbot platform with natural language processing, multi-channel support, and analytics.",
    fullDescription:
      "A sophisticated AI chatbot platform that leverages advanced natural language processing to provide intelligent conversational experiences. The platform supports multiple communication channels (website, WhatsApp, Messenger), includes a powerful admin dashboard for bot training and analytics, and features seamless integration with various APIs. Built with cutting-edge AI technologies, it enables businesses to automate customer support and engagement efficiently.",
    image: "/projects/ai-chatbot-main.jpg",
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
      "/projects/ai-chatbot-1.jpg",
      "/projects/ai-chatbot-2.jpg",
      "/projects/ai-chatbot-3.jpg",
      "/projects/ai-chatbot-4.jpg",
      "/projects/ai-chatbot-5.jpg",
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
    completionDate: "2024-04-20",
    createdAt: "2024-01-10",
    updatedAt: "2024-05-01",
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
    title: "Cryptocurrency Trading Dashboard",
    description:
      "Real-time cryptocurrency trading platform with portfolio tracking, analytics, and automated trading.",
    fullDescription:
      "A comprehensive cryptocurrency trading dashboard that provides real-time market data, portfolio management, advanced charting tools, and automated trading capabilities. The platform integrates with multiple exchanges, offers sophisticated technical analysis tools, and includes risk management features. Built for both novice and experienced traders, it provides insights and tools to make informed trading decisions in the volatile crypto market.",
    image: "/projects/crypto-dashboard-main.jpg",
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
      "/projects/crypto-1.jpg",
      "/projects/crypto-2.jpg",
      "/projects/crypto-3.jpg",
      "/projects/crypto-4.jpg",
      "/projects/crypto-5.jpg",
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
    completionDate: "2024-03-15",
    createdAt: "2023-10-01",
    updatedAt: "2024-04-01",
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
    title: "AI Fitness Tracker & Coach",
    description:
      "Intelligent fitness tracking application with AI-powered workout plans, progress analytics, and virtual coaching.",
    fullDescription:
      "A comprehensive fitness tracking application that combines AI-powered workout recommendations with detailed progress tracking and virtual coaching. The app creates personalized workout plans based on user goals, fitness level, and available equipment. Features include exercise demonstration videos, nutrition tracking, social challenges, and advanced analytics to help users achieve their fitness goals effectively.",
    image: "/projects/fitness-tracker-main.jpg",
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
      "/projects/fitness-1.jpg",
      "/projects/fitness-2.jpg",
      "/projects/fitness-3.jpg",
      "/projects/fitness-4.jpg",
      "/projects/fitness-5.jpg",
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
    completionDate: "2024-05-10",
    createdAt: "2023-11-01",
    updatedAt: "2024-05-20",
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
    title: "Interactive Learning Management System",
    description:
      "Modern LMS with video courses, interactive quizzes, progress tracking, and AI-powered recommendations.",
    fullDescription:
      "A cutting-edge learning management system that provides an engaging and interactive educational experience. The platform features high-quality video courses, interactive coding exercises, AI-powered learning path recommendations, and comprehensive progress tracking. Built for both individual learners and educational institutions, it supports multiple learning formats and provides tools for instructors to create and manage educational content effectively.",
    image: "/projects/lms-main.jpg",
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
      "/projects/lms-1.jpg",
      "/projects/lms-2.jpg",
      "/projects/lms-3.jpg",
      "/projects/lms-4.jpg",
      "/projects/lms-5.jpg",
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
    completionDate: "2024-06-15",
    createdAt: "2023-11-01",
    updatedAt: "2024-07-01",
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
    id: "social-network",
    title: "Developer Social Network",
    description:
      "Professional social network for developers with code sharing, collaboration tools, and job matching.",
    fullDescription:
      "A specialized social network designed exclusively for developers and tech professionals. The platform enables code sharing, technical discussions, project collaboration, and career opportunities. Features include integrated code editors, real-time collaboration, technical blog publishing, and intelligent job matching based on skills and interests. Built to foster community and professional growth in the developer ecosystem.",
    image: "/projects/dev-network-main.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "WebSocket",
      "Docker",
      "Elasticsearch",
      "AWS S3",
      "OAuth",
      "Jest",
      "Cypress",
    ],
    features: [
      "Code Sharing & Collaboration",
      "Technical Discussion Forums",
      "Real-time Messaging",
      "Project Showcase",
      "Job Board & Matching",
      "Skill-based Networking",
      "Code Review Tools",
      "Technical Blog Platform",
      "Event Management",
      "Mentorship Program",
      "Open Source Project Discovery",
      "Learning Resources",
      "Company Profiles",
      "Recruitment Tools",
    ],
    githubUrl: "https://github.com/sorujmahmud/dev-network",
    liveUrl: "https://dev-network-soruj.vercel.app",
    category: "fullstack",
    status: "in-progress",
    screenshots: [
      "/projects/dev-network-1.jpg",
      "/projects/dev-network-2.jpg",
      "/projects/dev-network-3.jpg",
      "/projects/dev-network-4.jpg",
    ],
    challenges: [
      "Building real-time collaboration features for code editing",
      "Implementing efficient search across code, posts, and profiles",
      "Managing complex social graph relationships and notifications",
      "Ensuring platform scalability with high user engagement",
      "Implementing secure code execution and sharing",
      "Creating accurate job and connection recommendations",
    ],
    solutions: [
      "Used Operational Transforms for real-time code collaboration",
      "Implemented Elasticsearch for fast and relevant search results",
      "Designed efficient graph database schema for social relationships",
      "Built microservices architecture with horizontal scaling",
      "Created secure sandboxed environment for code execution",
      "Developed machine learning models for personalized recommendations",
    ],
    featured: false,
    difficulty: "advanced",
    duration: "8 months",
    teamSize: "6 developers",
    completionDate: "2024-08-30",
    createdAt: "2024-01-15",
    updatedAt: "2024-06-01",
    tags: ["social", "developers", "collaboration", "career", "community"],
    emoji: "👨‍💻",
    stats: {
      completionTime: "8 months (ongoing)",
      teamSize: "6 developers",
      complexity: "Very High",
      views: 1250,
      likes: 89
    },
    architecture: "GraphQL API with React frontend, Microservices for different features, PostgreSQL with graph extensions, Elasticsearch for search, Redis for caching",
    developmentHighlights: [
      {
        title: "Real-time Collaboration",
        description: "Built advanced real-time code collaboration system with conflict resolution"
      },
      {
        title: "Search Infrastructure",
        description: "Created comprehensive search system indexing code, discussions, and profiles"
      },
      {
        title: "Social Features",
        description: "Implemented sophisticated social networking features tailored for developers"
      }
    ],
    lessonsLearned: [
      "Complexities of real-time collaborative editing",
      "Importance of community moderation in social platforms",
      "Challenges of building engaged technical communities",
      "Scalability considerations for social networks"
    ],
    futureImprovements: [
      "Add video interview and screening features",
      "Implement more advanced code analysis tools",
      "Add integration with popular developer tools",
      "Develop mobile application with push notifications"
    ],
    metaDescription: "Developer social network with code sharing, collaboration tools, and job matching. Built for the developer community.",
    seoTitle: "Developer Social Network | Code Collaboration Platform",
    performance: {
      loadTime: 86,
      accessibility: 92,
      bestPractices: 91,
      seo: 93
    }
  },
  {
    id: "iot-dashboard",
    title: "IoT Device Management Dashboard",
    description:
      "Enterprise IoT platform for device management, real-time monitoring, and data analytics.",
    fullDescription:
      "A comprehensive Internet of Things platform that enables enterprises to manage, monitor, and analyze their IoT devices at scale. The dashboard provides real-time device status, remote configuration, firmware updates, and advanced analytics. Built for reliability and scalability, it supports millions of devices with robust security features and comprehensive reporting capabilities for industrial and commercial IoT deployments.",
    image: "/projects/iot-dashboard-main.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MQTT",
      "PostgreSQL",
      "TimescaleDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "Grafana",
      "InfluxDB",
      "AWS IoT Core",
      "WebSocket",
    ],
    features: [
      "Real-time Device Monitoring",
      "Remote Device Management",
      "Firmware Over-the-Air Updates",
      "Data Analytics & Visualization",
      "Alert & Notification System",
      "Device Grouping & Geofencing",
      "API for Third-party Integration",
      "Custom Dashboard Creation",
      "Historical Data Analysis",
      "Security & Access Control",
      "Bulk Operations",
      "Device Templates",
      "Performance Metrics",
      "Predictive Maintenance",
    ],
    githubUrl: "https://github.com/sorujmahmud/iot-dashboard",
    liveUrl: "https://iot-soruj.vercel.app",
    category: "backend",
    status: "completed",
    screenshots: [
      "/projects/iot-1.jpg",
      "/projects/iot-2.jpg",
      "/projects/iot-3.jpg",
      "/projects/iot-4.jpg",
    ],
    challenges: [
      "Handling massive-scale real-time data from millions of devices",
      "Implementing reliable device communication and synchronization",
      "Managing device security and authentication at scale",
      "Building efficient time-series data storage and querying",
      "Implementing reliable over-the-air update mechanisms",
      "Ensuring platform reliability and fault tolerance",
    ],
    solutions: [
      "Used MQTT with cluster deployment for scalable device communication",
      "Implemented device shadowing for state synchronization",
      "Built certificate-based authentication with automatic rotation",
      "Utilized TimescaleDB for efficient time-series data management",
      "Created robust update system with rollback capabilities",
      "Implemented comprehensive monitoring and alerting system",
    ],
    featured: false,
    difficulty: "advanced",
    duration: "9 months",
    teamSize: "8 developers",
    completionDate: "2024-04-30",
    createdAt: "2023-07-01",
    updatedAt: "2024-05-15",
    tags: ["iot", "enterprise", "realtime", "analytics", "monitoring"],
    emoji: "📡",
    stats: {
      completionTime: "9 months",
      teamSize: "8 developers",
      complexity: "Very High",
      views: 1100,
      likes: 76
    },
    architecture: "Microservices with MQTT message broker, TimescaleDB for time-series data, Redis for caching, Kubernetes for orchestration, React frontend",
    developmentHighlights: [
      {
        title: "Scalable Architecture",
        description: "Built platform supporting millions of devices with real-time data processing"
      },
      {
        title: "Device Management",
        description: "Created comprehensive device lifecycle management with secure updates"
      },
      {
        title: "Data Analytics",
        description: "Implemented advanced analytics and visualization for IoT data"
      }
    ],
    lessonsLearned: [
      "Complexities of large-scale IoT deployments",
      "Importance of reliable device communication protocols",
      "Challenges of time-series data management at scale",
      "Security considerations in IoT ecosystems"
    ],
    futureImprovements: [
      "Add AI-powered predictive maintenance",
      "Implement edge computing capabilities",
      "Add more protocol support (LoRaWAN, Zigbee)",
      "Develop mobile field service application"
    ],
    metaDescription: "Enterprise IoT platform for device management, real-time monitoring, and data analytics. Scalable and secure.",
    seoTitle: "IoT Device Management Dashboard | Enterprise Platform",
    performance: {
      loadTime: 90,
      accessibility: 91,
      bestPractices: 94,
      seo: 89
    }
  },
  {
    id: "ecommerce",
    title: "Modern E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with admin dashboard, payment integration, and inventory management.",
    fullDescription:
      "A comprehensive e-commerce platform built with modern technologies featuring user authentication, product management, shopping cart, payment processing, order management, and admin dashboard. The platform supports multiple payment methods, real-time inventory tracking, and responsive design for optimal user experience across all devices. Includes advanced features like wishlists, product reviews, inventory management, and analytics dashboard.",
    image: "/projects/ecommerce-main.jpg",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "NextAuth",
      "Cloudinary",
      "Shadcn UI",
      "Zod",
      "React Hook Form",
      "Chart.js",
    ],
    features: [
      "User Authentication & Authorization",
      "Product Catalog with Search & Filters",
      "Shopping Cart & Wishlist",
      "Secure Payment Processing (Stripe)",
      "Order Management System",
      "Admin Dashboard with Analytics",
      "Real-time Inventory Management",
      "Customer Reviews & Ratings",
      "Responsive Mobile-First Design",
      "Image Upload & Management with Cloudinary",
      "Email Notifications",
      "Order Tracking System",
      "Multi-vendor Support",
      "Discount & Coupon System",
    ],
    githubUrl: "https://github.com/sorujmahmud/ecommerce-app",
    liveUrl: "https://ecommerce-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "/projects/ecommerce-1.jpg",
      "/projects/ecommerce-2.jpg",
      "/projects/ecommerce-3.jpg",
      "/projects/ecommerce-4.jpg",
      "/projects/ecommerce-5.jpg",
    ],
    challenges: [
      "Implementing secure payment processing with Stripe and handling webhooks",
      "Managing real-time inventory updates across multiple concurrent users",
      "Handling user sessions and authentication securely with role-based access",
      "Optimizing product search and filtering performance with large datasets",
      "Ensuring responsive design and cross-browser compatibility",
      "Managing file uploads and image optimization at scale",
    ],
    solutions: [
      "Integrated Stripe webhooks for secure payment verification and status updates",
      "Implemented MongoDB transactions and atomic operations for inventory management",
      "Used NextAuth with JWT tokens and middleware for secure authentication",
      "Optimized database queries with indexing and implemented search with regex and filters",
      "Utilized Tailwind CSS with mobile-first responsive design approach",
      "Integrated Cloudinary for efficient image upload, transformation, and delivery",
    ],
    featured: true,
    difficulty: "advanced",
    duration: "3 months",
    teamSize: "Solo",
    completionDate: "2024-01-15",
    createdAt: "2023-10-01",
    updatedAt: "2024-01-20",
    tags: ["ecommerce", "fullstack", "payments", "dashboard", "mongodb"],
    emoji: "🛒",
    stats: {
      completionTime: "3 months",
      teamSize: "1 developer",
      complexity: "High",
      views: 1250,
      likes: 89
    },
    architecture: "MERN Stack with Next.js App Router, Microservices architecture for payment processing, CDN for static assets",
    developmentHighlights: [
      {
        title: "Payment Integration",
        description: "Successfully integrated Stripe with webhook handling for secure payment processing and subscription management"
      },
      {
        title: "Admin Dashboard",
        description: "Built comprehensive admin panel with real-time analytics, order management, and inventory tracking"
      },
      {
        title: "Performance Optimization",
        description: "Achieved 95+ Lighthouse scores through code splitting, image optimization, and efficient database queries"
      }
    ],
    lessonsLearned: [
      "Importance of proper error handling in payment processing",
      "Value of comprehensive testing for e-commerce flows",
      "Benefits of using TypeScript for large-scale applications",
      "Need for proper inventory management strategies"
    ],
    futureImprovements: [
      "Implement AI-powered product recommendations",
      "Add multi-language and currency support",
      "Integrate with more payment providers",
      "Develop mobile app with React Native"
    ],
    metaDescription: "Modern e-commerce platform built with Next.js, TypeScript, and MongoDB. Features include payment processing, admin dashboard, and inventory management.",
    seoTitle: "Modern E-Commerce Platform | Full-Stack Development",
    performance: {
      loadTime: 92,
      accessibility: 98,
      bestPractices: 95,
      seo: 96
    }
  },
  {
    id: "chat-app",
    title: "Real-time Chat Application",
    description:
      "Real-time messaging application with rooms, file sharing, and live notifications.",
    fullDescription:
      "A real-time chat application that enables instant messaging, group conversations, file sharing, and live notifications. Built with Socket.io for real-time communication, the app supports multiple chat rooms, user presence indicators, message history, and secure file uploads. Features include typing indicators, message reactions, user profiles, and comprehensive moderation tools. Perfect for team collaboration or social messaging with enterprise-grade reliability.",
    image: "/projects/chat-app-main.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
      "Redis",
      "Framer Motion",
      "React Query",
    ],
    features: [
      "Real-time Messaging with Socket.io",
      "Multiple Chat Rooms & Direct Messages",
      "File & Image Sharing with Preview",
      "User Presence Indicators",
      "Message History with Pagination",
      "Typing Indicators",
      "Online/Offline Status",
      "Push Notifications",
      "User Authentication & Profiles",
      "Message Reactions & Replies",
      "Message Search & Filtering",
      "Admin Moderation Tools",
      "Responsive Mobile Design",
      "Dark/Light Theme",
    ],
    githubUrl: "https://github.com/sorujmahmud/chat-app",
    liveUrl: "https://chat-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "/projects/chat-1.jpg",
      "/projects/chat-2.jpg",
      "/projects/chat-3.jpg",
      "/projects/chat-4.jpg",
      "/projects/chat-5.jpg",
    ],
    challenges: [
      "Managing real-time connections and handling disconnections gracefully",
      "Handling large-scale message broadcasting to multiple rooms efficiently",
      "Implementing secure file uploads and sharing with proper validation",
      "Maintaining message history consistency and synchronization across clients",
      "Optimizing performance for multiple concurrent users and large message volumes",
      "Implementing reliable delivery receipts and read status",
    ],
    solutions: [
      "Used Socket.io rooms and namespaces for efficient message broadcasting",
      "Implemented Redis for session management, caching, and pub/sub functionality",
      "Integrated Cloudinary with file type validation and virus scanning",
      "Designed efficient MongoDB schema with indexing for message history queries",
      "Optimized frontend with React.memo, useCallback, and virtual scrolling",
      "Implemented message queue system for reliable delivery and status tracking",
    ],
    featured: true,
    difficulty: "advanced",
    duration: "2 months",
    teamSize: "Solo",
    completionDate: "2024-02-10",
    createdAt: "2023-12-01",
    updatedAt: "2024-02-15",
    tags: ["realtime", "websockets", "chat", "collaboration", "nodejs"],
    emoji: "💬",
    stats: {
      completionTime: "2 months",
      teamSize: "1 developer",
      complexity: "High",
      views: 890,
      likes: 67
    },
    architecture: "React frontend with Node.js/Express backend, Socket.io for real-time communication, Redis for session storage, MongoDB for data persistence",
    developmentHighlights: [
      {
        title: "Real-time Architecture",
        description: "Designed scalable real-time architecture supporting thousands of concurrent connections"
      },
      {
        title: "File Handling",
        description: "Implemented secure file upload system with preview capabilities and storage optimization"
      },
      {
        title: "User Experience",
        description: "Created smooth animations and intuitive interface with Framer Motion"
      }
    ],
    lessonsLearned: [
      "WebSocket connection management and error handling",
      "Importance of proper message queuing and delivery guarantees",
      "Security considerations for real-time applications",
      "Performance optimization for high-frequency updates"
    ],
    futureImprovements: [
      "Add video and voice call functionality",
      "Implement end-to-end encryption",
      "Add chatbot integration",
      "Develop mobile applications"
    ],
    metaDescription: "Real-time chat application with Socket.io, React, and Node.js. Features include group chats, file sharing, and live notifications.",
    seoTitle: "Real-time Chat Application | Socket.io & React",
    performance: {
      loadTime: 88,
      accessibility: 94,
      bestPractices: 92,
      seo: 89
    }
  },
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description:
      "Modern, responsive portfolio website with project showcase, blog, and contact integration.",
    fullDescription:
      "A cutting-edge personal portfolio website built with Next.js 14 and modern web technologies. Features a stunning design with smooth animations, project showcase, blog integration, and contact forms. The website is optimized for performance, accessibility, and SEO, with perfect Lighthouse scores. Includes dark mode, internationalization support, and a fully functional admin dashboard for content management.",
    image: "/projects/portfolio-main.jpg",
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
      "/projects/portfolio-1.jpg",
      "/projects/portfolio-2.jpg",
      "/projects/portfolio-3.jpg",
      "/projects/portfolio-4.jpg",
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
    completionDate: "2024-03-05",
    createdAt: "2024-02-01",
    updatedAt: "2024-03-10",
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
    id: "task-manager",
    title: "Advanced Task Management System",
    description:
      "Productivity application with task management, team collaboration, and time tracking features.",
    fullDescription:
      "A comprehensive task management system designed for both individual productivity and team collaboration. Features include project organization, task assignments, time tracking, progress monitoring, and team communication. Built with a focus on user experience and productivity, the app helps teams stay organized and meet deadlines efficiently with intuitive drag-and-drop interfaces and real-time updates.",
    image: "/projects/taskmanager-main.jpg",
    technologies: [
      "React",
      "Redux Toolkit",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io",
      "JWT",
      "React DnD",
      "Chart.js",
      "Jest",
      "Cypress",
    ],
    features: [
      "Project & Task Management",
      "Drag & Drop Interface",
      "Team Collaboration",
      "Time Tracking & Reporting",
      "Progress Monitoring",
      "File Attachments",
      "Comment System",
      "Due Date Reminders",
      "Kanban & List Views",
      "User Role Management",
      "Real-time Updates",
      "Export & Reporting",
      "Mobile Responsive",
      "Offline Support",
    ],
    githubUrl: "https://github.com/sorujmahmud/task-manager",
    liveUrl: "https://taskmanager-soruj.vercel.app",
    category: "fullstack",
    status: "completed",
    screenshots: [
      "/projects/taskmanager-1.jpg",
      "/projects/taskmanager-2.jpg",
      "/projects/taskmanager-3.jpg",
      "/projects/taskmanager-4.jpg",
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Managing complex state with drag-and-drop functionality",
      "Handling file uploads and storage efficiently",
      "Creating responsive design that works for complex interactions",
      "Implementing comprehensive testing for user interactions",
    ],
    solutions: [
      "Used Socket.io for real-time updates and conflict resolution",
      "Implemented React DnD with optimized re-renders and state management",
      "Integrated cloud storage with compression and caching",
      "Designed mobile-first with touch-friendly interactions",
      "Wrote comprehensive unit and E2E tests with Jest and Cypress",
    ],
    featured: false,
    difficulty: "advanced",
    duration: "4 months",
    teamSize: "2 developers",
    completionDate: "2023-11-20",
    createdAt: "2023-07-15",
    updatedAt: "2023-12-01",
    tags: ["productivity", "collaboration", "tasks", "team", "realtime"],
    emoji: "📊",
    stats: {
      completionTime: "4 months",
      teamSize: "2 developers",
      complexity: "High",
      views: 720,
      likes: 45
    },
    architecture: "React frontend with Redux state management, Node.js backend with WebSocket support, PostgreSQL for data persistence with complex relationships",
    developmentHighlights: [
      {
        title: "Real-time Collaboration",
        description: "Implemented conflict-free real-time synchronization for multiple users"
      },
      {
        title: "Drag & Drop System",
        description: "Built performant drag-and-drop interface with smooth animations"
      },
      {
        title: "Testing Strategy",
        description: "Created comprehensive test suite covering 95% of user interactions"
      }
    ],
    lessonsLearned: [
      "Complexity of real-time data synchronization",
      "Importance of proper state management in complex applications",
      "Value of comprehensive testing in productivity apps",
      "User experience considerations for drag-and-drop interfaces"
    ],
    futureImprovements: [
      "Add AI-powered task suggestions",
      "Implement calendar integration",
      "Add more visualization options",
      "Develop mobile applications"
    ],
    metaDescription: "Advanced task management system with team collaboration, time tracking, and real-time updates. Built with React and Node.js.",
    seoTitle: "Task Management System | Team Collaboration Tool",
    performance: {
      loadTime: 85,
      accessibility: 92,
      bestPractices: 90,
      seo: 88
    }
  },
  {
    id: "weather-app",
    title: "Weather Forecast Application",
    description:
      "Beautiful weather application with detailed forecasts, maps, and severe weather alerts.",
    fullDescription:
      "A modern weather application that provides accurate weather forecasts, interactive maps, and severe weather alerts. Features include location-based weather, 7-day forecasts, hourly predictions, weather maps with multiple layers, and customizable notifications. The app focuses on providing a beautiful, intuitive interface while delivering comprehensive weather information from reliable sources.",
    image: "/projects/weather-main.jpg",
    technologies: [
      "React",
      "TypeScript",
      "OpenWeather API",
      "Mapbox GL JS",
      "Chart.js",
      "PWA",
      "Service Workers",
      "IndexedDB",
      "Geolocation API",
      "Tailwind CSS",
    ],
    features: [
      "Current Weather & Forecasts",
      "Interactive Weather Maps",
      "Location-based Services",
      "Severe Weather Alerts",
      "7-Day & Hourly Forecasts",
      "Weather Charts & Graphs",
      "PWA with Offline Support",
      "Push Notifications",
      "Multiple Location Support",
      "Dark/Light Theme",
      "Accessibility Features",
      "Weather History",
      "Share Weather Reports",
      "Customizable Dashboard",
    ],
    githubUrl: "https://github.com/sorujmahmud/weather-app",
    liveUrl: "https://weather-soruj.vercel.app",
    category: "frontend",
    status: "completed",
    screenshots: [
      "/projects/weather-1.jpg",
      "/projects/weather-2.jpg",
      "/projects/weather-3.jpg",
      "/projects/weather-4.jpg",
    ],
    challenges: [
      "Handling API rate limits and optimizing API calls",
      "Implementing offline functionality with cached data",
      "Creating responsive maps that work on mobile devices",
      "Managing geolocation permissions and fallbacks",
      "Optimizing performance with large weather datasets",
    ],
    solutions: [
      "Implemented efficient caching strategy with service workers",
      "Used IndexedDB for offline data storage and synchronization",
      "Optimized Mapbox integration with mobile touch controls",
      "Provided graceful fallbacks for denied geolocation",
      "Lazy-loaded map components and optimized data fetching",
    ],
    featured: false,
    difficulty: "intermediate",
    duration: "1.5 months",
    teamSize: "Solo",
    completionDate: "2023-09-10",
    createdAt: "2023-07-20",
    updatedAt: "2023-09-15",
    tags: ["weather", "maps", "pwa", "api", "mobile"],
    emoji: "🌤️",
    stats: {
      completionTime: "1.5 months",
      teamSize: "1 developer",
      complexity: "Medium",
      views: 560,
      likes: 38
    },
    architecture: "React PWA with service workers, OpenWeather API integration, Mapbox for interactive maps, IndexedDB for offline storage",
    developmentHighlights: [
      {
        title: "Offline Functionality",
        description: "Implemented robust offline support with cached forecasts and maps"
      },
      {
        title: "Map Integration",
        description: "Created interactive weather maps with multiple data layers"
      },
      {
        title: "PWA Features",
        description: "Built full PWA with install prompt and push notifications"
      }
    ],
    lessonsLearned: [
      "API rate limiting and quota management strategies",
      "Offline-first development approaches",
      "Mobile map interaction patterns",
      "Progressive enhancement techniques"
    ],
    futureImprovements: [
      "Add more weather data sources",
      "Implement social weather sharing",
      "Add weather photography integration",
      "Develop native mobile versions"
    ],
    metaDescription: "Beautiful weather application with forecasts, interactive maps, and PWA features. Built with React and OpenWeather API.",
    seoTitle: "Weather Forecast Application | React PWA",
    performance: {
      loadTime: 90,
      accessibility: 95,
      bestPractices: 92,
      seo: 91
    }
  }
];