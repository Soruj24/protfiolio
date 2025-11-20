 
export interface ProjectFormData {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'fullstack';
  status: "published" | "draft";
}
export interface ImageFile {
  file: File;
  preview: string;
  id: string;
}
export interface Stats {
  totalProjects: number;
  featuredProjects: number;
  totalUsers: number;
  totalPosts: number;
  publishedPosts: number;
  unreadMessages: number;
  draftProjects: number;
  portfolioViews: number;
  conversionRate: number;
  monthlyGrowth: number;
  subItems: number;
}

export interface Activity {
  id: string;
  type: "project" | "blog" | "user" | "message";
  action: string;
  title: string;
  timestamp: string;
  user?: string;
}
export interface User {
  _id?: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}