export const portfolioData = {
  personal: {
    name: "Soruj Mahmud",
    title: "Self-Taught Full-Stack Developer",
    location: "Nagur Pur, Tangail, Dhaka, Bangladesh",
    email: "sorujmahmudb2h@gmail.com",
    phone: "+8801795397598",
    bio: "Passionate self-taught full-stack developer with strong expertise in modern web technologies. Built multiple production-ready applications through dedicated self-learning and hands-on project experience. Proficient in React, Next.js, Node.js, and MongoDB with a focus on writing clean, efficient code.",
    tagline: "Turning passion into code through self-learning and dedication",
    availability: "Seeking junior developer position or internship opportunity",
    languages: ["English (Fluent)", "Bengali (Native)"],
    learning_approach: "Project-based learning | Documentation | Online resources"
  },
  skills: {
    frontend: [
      { name: "React", level: "Advanced", years: 3 },
      { name: "Next.js", level: "Advanced", years: 2 },
      { name: "TypeScript", level: "Intermediate", years: 2 },
      { name: "Tailwind CSS", level: "Advanced", years: 2 },
      { name: "Vue.js", level: "Intermediate", years: 1 },
      { name: "Redux", level: "Intermediate", years: 2 },
      { name: "HTML/CSS", level: "Advanced", years: 4 },
    ],
    backend: [
      { name: "Node.js", level: "Advanced", years: 3 },
      { name: "Python", level: "Intermediate", years: 2 },
      { name: "Express", level: "Advanced", years: 3 },
      { name: "FastAPI", level: "Intermediate", years: 1 },
      { name: "MongoDB", level: "Intermediate", years: 2 },
      { name: "PostgreSQL", level: "Intermediate", years: 2 },
      { name: "RESTful APIs", level: "Advanced", years: 3 },
      { name: "GraphQL", level: "Beginner", years: 1 },
    ],
    tools: [
      { name: "Git", level: "Advanced", years: 3 },
      { name: "Docker", level: "Intermediate", years: 1 },
      { name: "AWS", level: "Intermediate", years: 1 },
      { name: "Vercel", level: "Advanced", years: 2 },
      { name: "Figma", level: "Intermediate", years: 2 },
      { name: "Jest", level: "Intermediate", years: 2 },
      { name: "Webpack", level: "Intermediate", years: 2 },
    ],
    soft: [
      "Problem Solving",
      "Self-Learning Ability",
      "Adaptability",
      "Time Management",
      "Attention to Detail",
      "Persistence",
      "Communication",
    ],
    highlights: [
      "Built production-ready applications used by real users",
      "Experience with complete software development lifecycle",
      "Strong debugging and problem-solving capabilities",
      "Ability to work independently and learn quickly"
    ]
  },
  projects: [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "A full-stack e-commerce solution with complete payment processing, user authentication, and admin dashboard. Features include real-time inventory management, order tracking, and multi-vendor support.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe", "Tailwind CSS"],
      features: [
        "User authentication & authorization",
        "Payment processing with Stripe",
        "Admin dashboard with analytics",
        "Real-time inventory management",
        "Order tracking system",
        "Product reviews and ratings",
        "Wishlist functionality",
      ],
      github: "https://github.com/sorujmahmud/ecommerce-platform",
      live: "https://ecommerce-soruj.vercel.app",
      image: "/images/ecommerce.jpg",
      status: "Completed",
      duration: "3 months",
      challenges: [
        "Implementing secure payment processing",
        "Managing real-time inventory updates",
        "Optimizing for mobile devices",
      ],
      achievements: [
        "Achieved 95%+ Lighthouse performance score",
        "Reduced loading time by 40%",
        "Successfully processed 1000+ test transactions",
      ],
      learning_outcomes: [
        "Mastered payment gateway integration with Stripe",
        "Learned complex state management in e-commerce applications",
        "Implemented secure authentication and authorization systems",
        "Gained experience in database design for complex data relationships"
      ],
      challenges_overcome: [
        "Self-taught payment processing security measures",
        "Solved cart state persistence issues",
        "Learned inventory management best practices through research"
      ]
    },
    {
      id: 2,
      name: "Real-time Chat Application",
      description: "Modern chat application with real-time messaging, file sharing, and user presence features. Built with Socket.io for instant communication and MongoDB for data persistence.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      features: [
        "Real-time messaging",
        "File and image sharing",
        "User presence indicators",
        "Group chats and channels",
        "Message reactions",
        "Typing indicators",
        "Message history",
      ],
      github: "https://github.com/sorujmahmud/chat-app",
      live: "https://chat-soruj.vercel.app",
      image: "/images/chat-app.jpg",
      status: "Completed",
      duration: "2 months",
      challenges: [
        "Handling concurrent WebSocket connections",
        "Implementing efficient message caching",
        "Ensuring message delivery reliability",
      ],
      achievements: [
        "Supports 500+ concurrent users",
        "Less than 100ms message delivery",
        "Responsive on all device sizes",
      ],
      learning_outcomes: [
        "Gained deep understanding of WebSocket and real-time communication",
        "Learned optimization techniques for real-time applications",
        "Mastered event-driven architecture patterns",
        "Implemented file upload and storage systems"
      ],
      challenges_overcome: [
        "Self-taught Socket.io implementation without prior experience",
        "Solved connection stability issues through research and testing",
        "Learned real-time database optimization independently"
      ]
    },
    {
      id: 3,
      name: "Portfolio Website with AI Assistant",
      description: "A modern, responsive portfolio website featuring an integrated AI assistant. Built with Next.js 14 and featuring advanced animations, dark mode, and performance optimizations.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "LangChain", "Framer Motion"],
      features: [
        "AI-powered assistant integration",
        "Fully responsive design",
        "Dark/light mode toggle",
        "Performance optimized (95+ Lighthouse)",
        "Smooth animations",
        "SEO optimized",
        "Contact form with validation",
      ],
      github: "https://github.com/sorujmahmud/portfolio",
      live: "https://sorujmahmud.vercel.app",
      image: "/images/portfolio.jpg",
      status: "Completed",
      duration: "1 month",
      challenges: [
        "Integrating AI assistant seamlessly",
        "Achieving perfect Lighthouse scores",
        "Implementing smooth page transitions",
      ],
      achievements: [
        "100/100 Performance score",
        "Fastest loading portfolio in tests",
        "Excellent accessibility score",
      ],
      learning_outcomes: [
        "Mastered AI integration with LangChain and Google Gemini",
        "Learned advanced performance optimization techniques",
        "Implemented complex animations with Framer Motion",
        "Gained expertise in SEO and accessibility best practices"
      ],
      challenges_overcome: [
        "Self-taught AI API integration without formal guidance",
        "Solved performance bottlenecks through independent research",
        "Learned advanced CSS and animation techniques through practice"
      ]
    },
    {
      id: 4,
      name: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
      technologies: ["Vue.js", "Node.js", "PostgreSQL", "Express", "Socket.io"],
      features: [
        "Drag-and-drop task management",
        "Team collaboration",
        "Progress tracking",
        "File attachments",
        "Real-time updates",
        "Task comments",
        "Due date reminders",
      ],
      github: "https://github.com/sorujmahmud/task-manager",
      live: "https://tasks-soruj.vercel.app",
      image: "/images/task-manager.jpg",
      status: "In Progress",
      duration: "2 months",
      learning_outcomes: [
        "Learning Vue.js framework through practical implementation",
        "Implementing drag-and-drop functionality",
        "Building collaborative features with real-time updates",
        "Database design for task management systems"
      ]
    },
  ],
  experience: [
    {
      id: 1,
      company: "Self-Employed / Personal Projects",
      position: "Full-Stack Developer",
      period: "2021 - Present",
      description: "Developed multiple full-stack applications through self-learning and project-based experience. Gained expertise in modern web technologies by building real-world projects from concept to deployment.",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Python"],
      achievements: [
        "Built 10+ complete web applications independently",
        "Mastered full-stack development through hands-on projects",
        "Implemented complex features like payment processing and real-time communication",
        "Deployed and maintained production-ready applications"
      ],
      location: "Remote",
      type: "Self-Learning & Project Development"
    }
  ],
  education: [
    {
      id: 1,
      institution: "Local College, Tangail",
      degree: "Higher Secondary Certificate (HSC)",
      group: "Science",
      period: "2019 - 2021",
      location: "Tangail, Bangladesh",
      achievements: [
        "Completed with focus on Mathematics and Science",
        "Developed strong analytical and problem-solving skills",
        "Self-studied programming alongside formal education"
      ],
      relevant_courses: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Computer Studies",
        "English"
      ]
    }
  ],
  learningJourney: {
    startYear: 2021,
    approach: "Project-Based Learning",
    resources: [
      "Official Documentation",
      "YouTube Tutorials",
      "FreeCodeCamp",
      "Stack Overflow",
      "Technical Blogs",
      "Online Courses"
    ],
    methodologies: [
      "Learn by building real projects",
      "Study documentation thoroughly",
      "Practice with coding challenges",
      "Contribute to open source",
      "Continuous skill improvement"
    ],
    milestones: [
      "Started with HTML, CSS, JavaScript fundamentals",
      "Learned React and modern frontend development",
      "Mastered Node.js and backend development",
      "Built full-stack applications with databases",
      "Implemented advanced features (payments, real-time, etc.)",
      "Learned TypeScript and advanced patterns"
    ],
    motivation: "Driven by passion for coding and problem-solving, dedicated to continuous learning and professional growth in software development."
  },
  certifications: [
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2022",
      credential: "https://freecodecamp.org/certification/soruj/javascript-algorithms-and-data-structures"
    },
    {
      name: "React Development",
      issuer: "Online Courses & Self-Study",
      date: "2022",
      credential: "Portfolio Projects"
    },
    {
      name: "Node.js Backend Development",
      issuer: "Self-Taught through Projects",
      date: "2023",
      credential: "Production Applications"
    },
  ],
  social: {
    github: "https://github.com/sorujmahmud",
    linkedin: "https://linkedin.com/in/sorujmahmud",
    twitter: "https://twitter.com/sorujmahmud",
    portfolio: "https://sorujmahmud.vercel.app",
  },
};
