import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProject extends Document {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'ai';
  status: 'completed' | 'in-progress' | 'planned';
  screenshots: string[];
  challenges: string[];
  solutions: string[];
  featured: boolean;
  slug: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  teamSize: string;
  completionDate: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  emoji: string;

  stats?: {
    completionTime: string;
    teamSize: string;
    complexity: string;
    views?: number;
    likes?: number;
  };

  architecture?: string;
  developmentHighlights?: Array<{
    title: string;
    description: string;
  }>;
  lessonsLearned?: string[];
  futureImprovements?: string[];

  metaDescription?: string;
  seoTitle?: string;

  performance?: {
    loadTime: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
}

// Sub-schemas
const StatsSchema = new Schema({
  completionTime: { type: String, required: true },
  teamSize: { type: String, required: true },
  complexity: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 }
}, { _id: false });

const DevelopmentHighlightSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { _id: false });

const PerformanceSchema = new Schema({
  loadTime: { type: Number, min: 0, max: 100, default: 0 },
  accessibility: { type: Number, min: 0, max: 100, default: 0 },
  bestPractices: { type: Number, min: 0, max: 100, default: 0 },
  seo: { type: Number, min: 0, max: 100, default: 0 }
}, { _id: false });

// Main Project Schema
const ProjectSchema: Schema<IProject> = new Schema({

  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 300
  },
  fullDescription: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  technologies: {
    type: [String],
    default: []
  },
  features: {
    type: [String],
    default: []
  },
  githubUrl: {
    type: String,
    default: ''
  },
  liveUrl: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    required: true,
    enum: ['fullstack', 'frontend', 'backend', 'mobile', 'ai'],
    index: true
  },
  status: {
    type: String,
    required: true,
    enum: ['completed', 'in-progress', 'planned'],
    index: true
  },
  screenshots: {
    type: [String],
    default: []
  },
  challenges: {
    type: [String],
    default: []
  },
  solutions: {
    type: [String],
    default: []
  },
  featured: {
    type: Boolean,
    default: false,
    index: true
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['beginner', 'intermediate', 'advanced'],
    index: true
  },
  duration: {
    type: String,
    required: true
  },
  teamSize: {
    type: String,
    required: true
  },
  completionDate: {
    type: String,
    required: true
  },
  createdAt: {
    type: String,
    required: true
  },
  updatedAt: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    default: []
  },
  emoji: {
    type: String,
    required: true
  },
  stats: {
    type: StatsSchema,
    default: () => ({
      completionTime: '',
      teamSize: '',
      complexity: '',
      views: 0,
      likes: 0
    })
  },
  architecture: {
    type: String,
    default: ''
  },
  developmentHighlights: {
    type: [DevelopmentHighlightSchema],
    default: []
  },
  lessonsLearned: {
    type: [String],
    default: []
  },
  futureImprovements: {
    type: [String],
    default: []
  },
  metaDescription: {
    type: String,
    default: ''
  },
  seoTitle: {
    type: String,
    default: ''
  },
  performance: {
    type: PerformanceSchema,
    default: () => ({
      loadTime: 0,
      accessibility: 0,
      bestPractices: 0,
      seo: 0
    })
  }
}, {
  timestamps: false
});

// Indexes
ProjectSchema.index({ category: 1, status: 1 });
ProjectSchema.index({ featured: 1, status: 1 });
ProjectSchema.index({ tags: 1 });
ProjectSchema.index({ difficulty: 1 });
ProjectSchema.index({ createdAt: -1 });

export const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);