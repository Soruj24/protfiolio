// types/project.ts

export interface DevelopmentHighlight {
  title: string;
  description: string;
}

export interface PerformanceMetrics {
  loadTime: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

export interface ProjectStats {
  completionTime: string;
  teamSize: string;
  complexity: string;
  views: number;
  likes: number;
}

export interface Project {
  // Core identification
  id: string;
  _id: string;
  title: string;
  images: string[];
  description: string;
  fullDescription: string;
  emoji: string;
  slug: string;
  // Media
  image: string;
  screenshots: string[];

  // Technical details
  technologies: string[];
  features: string[];
  category: "ai" | "frontend" | "backend" | "fullstack" | "mobile";
  difficulty: "beginner" | "intermediate" | "advanced";
  architecture: string;

  // Project management
  status: "completed" | "in-progress" | "planned";
  duration: string;
  teamSize: string;
  featured: boolean;

  // URLs
  githubUrl?: string;
  liveUrl?: string;

  // Timeline
  createdAt: string;
  updatedAt: string;
  completionDate: string;

  // Development details
  challenges: string[];
  solutions: string[];
  developmentHighlights: DevelopmentHighlight[];
  lessonsLearned: string[];
  futureImprovements: string[];

  // Metadata
  tags: string[];
  stats: ProjectStats;

  // SEO
  metaDescription: string;
  seoTitle: string;
  performance: PerformanceMetrics;
}

// Utility types for filtering and queries
export type ProjectCategory = Project["category"];
export type ProjectStatus = Project["status"];
export type ProjectDifficulty = Project["difficulty"];

// Filter options interface
export interface ProjectFilters {
  category?: ProjectCategory | "all";
  status?: ProjectStatus | "all";
  difficulty?: ProjectDifficulty | "all";
  fullDescription?: string;
  emoji?: string;
  tags?: string[];
  featured?: boolean;
}

// Pagination interface
export interface ProjectPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Search and filter result interface
export interface ProjectSearchResult {
  projects: Project[];
  pagination: ProjectPagination;
  filters: ProjectFilters;
}
