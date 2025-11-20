"use client";
import ImageUpload from "./ImageUpload";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Copy, FolderOpen, Trash2, Link } from "lucide-react";
import { Project } from "@/types/project";
import { useState, useEffect } from "react";
import slugify from "slugify";

interface ProjectFormProps {
  editingProject: Project | null;
  onSubmit: (data: any, imagePreview: string) => void;
  onCancel: () => void;
  onDuplicate: (project: Project) => void;
  isLoading: boolean;
  imagePreview: string;
  onImageChange: (file: File | null) => void;
  onImageClear: () => void;
}

interface DevelopmentHighlight {
  title: string;
  description: string;
}

export default function ProjectForm({
  editingProject,
  onSubmit,
  onCancel,
  onDuplicate,
  isLoading,
  imagePreview,
  onImageChange,
  onImageClear,
}: ProjectFormProps) {
  const [developmentHighlights, setDevelopmentHighlights] = useState<
    DevelopmentHighlight[]
  >(editingProject?.developmentHighlights || []);
  const [newHighlight, setNewHighlight] = useState({
    title: "",
    description: "",
  });
  const [autoSlug, setAutoSlug] = useState(editingProject?.slug || "");

  // Auto-generate slug from title
  useEffect(() => {
    if (!editingProject && !autoSlug) {
      const timer = setTimeout(() => {
        if (autoSlug === "") {
          const titleInput = document.getElementById(
            "title"
          ) as HTMLInputElement;
          if (titleInput?.value) {
            const slug = slugify(titleInput.value, {
              lower: true,
              strict: true,
              remove: /[*+~.()'"!:@]/g,
            });
            setAutoSlug(slug);
          }
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [autoSlug, editingProject]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingProject && !autoSlug) {
      const slug = slugify(e.target.value, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      });
      setAutoSlug(slug);
    }
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const slug = slugify(e.target.value, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g,
    });
    setAutoSlug(slug);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const projectData = {
      // Basic Information
      title: formData.get("title") as string,
      slug: autoSlug || (formData.get("slug") as string),
      description: formData.get("description") as string,
      fullDescription: formData.get("fullDescription") as string,
      emoji: formData.get("emoji") as string,

      // URLs
      githubUrl: formData.get("githubUrl") as string,
      liveUrl: formData.get("liveUrl") as string,

      // Categorization
      category: formData.get("category") as string,
      status: formData.get("status") as string,
      difficulty: formData.get("difficulty") as string,
      featured: formData.get("featured") === "true",

      // Arrays
      technologies: (formData.get("technologies") as string)
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== ""),
      features: (formData.get("features") as string)
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f !== ""),
      tags: (formData.get("tags") as string)
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t !== ""),
      screenshots: (formData.get("screenshots") as string)
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== ""),
      challenges: (formData.get("challenges") as string)
        .split(",")
        .map((c) => c.trim())
        .filter((c) => c !== ""),
      solutions: (formData.get("solutions") as string)
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== ""),
      lessonsLearned: (formData.get("lessonsLearned") as string)
        .split(",")
        .map((l) => l.trim())
        .filter((l) => l !== ""),
      futureImprovements: (formData.get("futureImprovements") as string)
        .split(",")
        .map((f) => f.trim())
        .filter((f) => f !== ""),

      // Project Details
      duration: formData.get("duration") as string,
      teamSize: formData.get("teamSize") as string,
      completionDate: formData.get("completionDate") as string,
      architecture: formData.get("architecture") as string,

      // Development Highlights
      developmentHighlights,

      // Stats - Fixed with proper field mapping
      stats: {
        completionTime:
          (formData.get("completionTime") as string) ||
          (formData.get("duration") as string),
        teamSize:
          (formData.get("statsTeamSize") as string) ||
          (formData.get("teamSize") as string),
        complexity:
          (formData.get("complexity") as string) ||
          (formData.get("difficulty") as string),
        views: parseInt(formData.get("views") as string) || 0,
        likes: parseInt(formData.get("likes") as string) || 0,
      },

      // Performance
      performance: {
        loadTime: parseInt(formData.get("loadTime") as string) || 0,
        accessibility: parseInt(formData.get("accessibility") as string) || 0,
        bestPractices: parseInt(formData.get("bestPractices") as string) || 0,
        seo: parseInt(formData.get("seo") as string) || 0,
      },

      // SEO
      metaDescription: formData.get("metaDescription") as string,
      seoTitle: formData.get("seoTitle") as string,

      // Image
      image: imagePreview || editingProject?.image || "",

      // Timestamps
      createdAt: editingProject?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onSubmit(projectData, imagePreview);
  };

  const addDevelopmentHighlight = () => {
    if (newHighlight.title && newHighlight.description) {
      setDevelopmentHighlights([...developmentHighlights, { ...newHighlight }]);
      setNewHighlight({ title: "", description: "" });
    }
  };

  const removeDevelopmentHighlight = (index: number) => {
    setDevelopmentHighlights(
      developmentHighlights.filter((_, i) => i !== index)
    );
  };

  const generateSlug = () => {
    const titleInput = document.getElementById("title") as HTMLInputElement;
    if (titleInput?.value) {
      const slug = slugify(titleInput.value, {
        lower: true,
        strict: true,
        remove: /[*+~.()'"!:@]/g,
      });
      setAutoSlug(slug);
    }
  };

  return (
    <Card className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm max-h-screen overflow-y-auto">
      <CardHeader className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-b border-gray-700 sticky top-0 z-10">
        <CardTitle className="flex items-center text-white">
          <FolderOpen className="w-6 h-6 mr-2 text-blue-400" />
          {editingProject ? "Edit Project" : "Add New Project"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="title"
                    className="text-sm font-medium text-gray-300"
                  >
                    Project Title *
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter project title"
                    required
                    defaultValue={editingProject?.title}
                    onChange={handleTitleChange}
                    className="focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="slug"
                    className="text-sm font-medium text-gray-300"
                  >
                    Slug *
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="slug"
                      name="slug"
                      placeholder="project-slug-name"
                      required
                      value={autoSlug}
                      onChange={handleSlugChange}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    />
                    <Button
                      type="button"
                      onClick={generateSlug}
                      className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
                    >
                      <Link className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400">
                    URL-friendly identifier
                  </p>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="emoji"
                    className="text-sm font-medium text-gray-300"
                  >
                    Emoji
                  </Label>
                  <Input
                    id="emoji"
                    name="emoji"
                    placeholder="🚀"
                    defaultValue={editingProject?.emoji || "🚀"}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="description"
                    className="text-sm font-medium text-gray-300"
                  >
                    Short Description *
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Brief description of your project..."
                    required
                    rows={3}
                    defaultValue={editingProject?.description}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="fullDescription"
                    className="text-sm font-medium text-gray-300"
                  >
                    Full Description
                  </Label>
                  <Textarea
                    id="fullDescription"
                    name="fullDescription"
                    placeholder="Detailed description of your project..."
                    rows={4}
                    defaultValue={editingProject?.fullDescription}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Categorization Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Categorization
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-300"
                >
                  Category *
                </Label>
                <select
                  name="category"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  defaultValue={editingProject?.category || "fullstack"}
                  required
                >
                  <option value="fullstack">Full Stack</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="mobile">Mobile</option>
                  <option value="ai">AI/ML</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="status"
                  className="text-sm font-medium text-gray-300"
                >
                  Status *
                </Label>
                <select
                  name="status"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  defaultValue={editingProject?.status || "completed"}
                  required
                >
                  <option value="completed">Completed</option>
                  <option value="in-progress">In Progress</option>
                  <option value="planned">Planned</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="difficulty"
                  className="text-sm font-medium text-gray-300"
                >
                  Difficulty *
                </Label>
                <select
                  name="difficulty"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  defaultValue={editingProject?.difficulty || "intermediate"}
                  required
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                <div>
                  <Label
                    htmlFor="featured"
                    className="text-sm font-medium cursor-pointer text-gray-300"
                  >
                    Featured Project
                  </Label>
                </div>
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  value="true"
                  defaultChecked={editingProject?.featured}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 bg-gray-600 border-gray-500"
                />
              </div>
            </div>
          </section>

          {/* Project Details Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Project Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="duration"
                  className="text-sm font-medium text-gray-300"
                >
                  Duration
                </Label>
                <Input
                  id="duration"
                  name="duration"
                  placeholder="e.g., 3 months"
                  defaultValue={editingProject?.duration}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="teamSize"
                  className="text-sm font-medium text-gray-300"
                >
                  Team Size
                </Label>
                <Input
                  id="teamSize"
                  name="teamSize"
                  placeholder="e.g., 1 person, 5 people"
                  defaultValue={editingProject?.teamSize}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="completionDate"
                  className="text-sm font-medium text-gray-300"
                >
                  Completion Date
                </Label>
                <Input
                  id="completionDate"
                  name="completionDate"
                  type="date"
                  defaultValue={editingProject?.completionDate}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Project Stats *
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="completionTime"
                  className="text-sm font-medium text-gray-300"
                >
                  Completion Time *
                </Label>
                <Input
                  id="completionTime"
                  name="completionTime"
                  placeholder="e.g., 3 months, 6 weeks"
                  required
                  defaultValue={
                    editingProject?.stats?.completionTime ||
                    editingProject?.duration
                  }
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="statsTeamSize"
                  className="text-sm font-medium text-gray-300"
                >
                  Team Size (Stats) *
                </Label>
                <Input
                  id="statsTeamSize"
                  name="statsTeamSize"
                  placeholder="e.g., Solo, 5 people"
                  required
                  defaultValue={
                    editingProject?.stats?.teamSize || editingProject?.teamSize
                  }
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="complexity"
                  className="text-sm font-medium text-gray-300"
                >
                  Complexity *
                </Label>
                <select
                  name="complexity"
                  className="w-full px-3 py-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
                  defaultValue={
                    editingProject?.stats?.complexity ||
                    editingProject?.difficulty ||
                    "intermediate"
                  }
                  required
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="views"
                  className="text-sm font-medium text-gray-300"
                >
                  Views
                </Label>
                <Input
                  id="views"
                  name="views"
                  type="number"
                  min="0"
                  placeholder="0"
                  defaultValue={editingProject?.stats?.views || 0}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="likes"
                  className="text-sm font-medium text-gray-300"
                >
                  Likes
                </Label>
                <Input
                  id="likes"
                  name="likes"
                  type="number"
                  min="0"
                  placeholder="0"
                  defaultValue={editingProject?.stats?.likes || 0}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            </div>
          </section>

          {/* Performance Metrics Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Performance Metrics (0-100)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="loadTime"
                  className="text-sm font-medium text-gray-300"
                >
                  Load Time Score
                </Label>
                <Input
                  id="loadTime"
                  name="loadTime"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0-100"
                  defaultValue={editingProject?.performance?.loadTime || 0}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="accessibility"
                  className="text-sm font-medium text-gray-300"
                >
                  Accessibility Score
                </Label>
                <Input
                  id="accessibility"
                  name="accessibility"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0-100"
                  defaultValue={editingProject?.performance?.accessibility || 0}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="bestPractices"
                  className="text-sm font-medium text-gray-300"
                >
                  Best Practices Score
                </Label>
                <Input
                  id="bestPractices"
                  name="bestPractices"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0-100"
                  defaultValue={editingProject?.performance?.bestPractices || 0}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="seo"
                  className="text-sm font-medium text-gray-300"
                >
                  SEO Score
                </Label>
                <Input
                  id="seo"
                  name="seo"
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0-100"
                  defaultValue={editingProject?.performance?.seo || 0}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            </div>
          </section>

          {/* Arrays Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Technologies & Features
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="technologies"
                    className="text-sm font-medium text-gray-300"
                  >
                    Technologies *
                  </Label>
                  <Textarea
                    id="technologies"
                    name="technologies"
                    placeholder="React, Next.js, Node.js, MongoDB, TypeScript"
                    required
                    rows={3}
                    defaultValue={editingProject?.technologies?.join(", ")}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate with commas</p>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="features"
                    className="text-sm font-medium text-gray-300"
                  >
                    Features
                  </Label>
                  <Textarea
                    id="features"
                    name="features"
                    placeholder="User authentication, Real-time chat, Payment processing"
                    rows={3}
                    defaultValue={editingProject?.features?.join(", ")}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate with commas</p>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="tags"
                    className="text-sm font-medium text-gray-300"
                  >
                    Tags
                  </Label>
                  <Textarea
                    id="tags"
                    name="tags"
                    placeholder="web-app, fullstack, responsive, pwa"
                    rows={2}
                    defaultValue={editingProject?.tags?.join(", ")}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate with commas</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="challenges"
                    className="text-sm font-medium text-gray-300"
                  >
                    Challenges
                  </Label>
                  <Textarea
                    id="challenges"
                    name="challenges"
                    placeholder="Performance optimization, Database scaling, Third-party API integration"
                    rows={3}
                    defaultValue={editingProject?.challenges?.join(", ")}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate with commas</p>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="solutions"
                    className="text-sm font-medium text-gray-300"
                  >
                    Solutions
                  </Label>
                  <Textarea
                    id="solutions"
                    name="solutions"
                    placeholder="Implemented caching, Used database indexing, Created API rate limiting"
                    rows={3}
                    defaultValue={editingProject?.solutions?.join(", ")}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate with commas</p>
                </div>
              </div>
            </div>
          </section>

          {/* Development Highlights */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Development Highlights
            </h3>
            <div className="space-y-4">
              {developmentHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-4 bg-gray-700/30 rounded-lg"
                >
                  <div className="flex-1 space-y-2">
                    <Input
                      value={highlight.title}
                      onChange={(e) => {
                        const updated = [...developmentHighlights];
                        updated[index].title = e.target.value;
                        setDevelopmentHighlights(updated);
                      }}
                      placeholder="Highlight title"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                    <Textarea
                      value={highlight.description}
                      onChange={(e) => {
                        const updated = [...developmentHighlights];
                        updated[index].description = e.target.value;
                        setDevelopmentHighlights(updated);
                      }}
                      placeholder="Highlight description"
                      rows={2}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeDevelopmentHighlight(index)}
                    className="text-red-400 border-red-400 hover:bg-red-400/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}

              <div className="space-y-2 p-4 bg-gray-700/30 rounded-lg">
                <Input
                  value={newHighlight.title}
                  onChange={(e) =>
                    setNewHighlight({ ...newHighlight, title: e.target.value })
                  }
                  placeholder="New highlight title"
                  className="bg-gray-700 border-gray-600 text-white"
                />
                <Textarea
                  value={newHighlight.description}
                  onChange={(e) =>
                    setNewHighlight({
                      ...newHighlight,
                      description: e.target.value,
                    })
                  }
                  placeholder="New highlight description"
                  rows={2}
                  className="bg-gray-700 border-gray-600 text-white"
                />
                <Button
                  type="button"
                  onClick={addDevelopmentHighlight}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Add Highlight
                </Button>
              </div>
            </div>
          </section>

          {/* URLs Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              URLs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="githubUrl"
                  className="text-sm font-medium text-gray-300"
                >
                  GitHub URL
                </Label>
                <Input
                  id="githubUrl"
                  name="githubUrl"
                  type="url"
                  placeholder="https://github.com/username/repo"
                  defaultValue={editingProject?.githubUrl}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="liveUrl"
                  className="text-sm font-medium text-gray-300"
                >
                  Live Demo URL
                </Label>
                <Input
                  id="liveUrl"
                  name="liveUrl"
                  type="url"
                  placeholder="https://your-project.com"
                  defaultValue={editingProject?.liveUrl}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            </div>
          </section>

          {/* Image Upload Section */}
          <ImageUpload
            imagePreview={imagePreview}
            onImageChange={onImageChange}
            onImageClear={onImageClear}
            currentImage={editingProject?.image}
          />

          {/* Additional Sections */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              Additional Information
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="architecture"
                    className="text-sm font-medium text-gray-300"
                  >
                    Architecture
                  </Label>
                  <Textarea
                    id="architecture"
                    name="architecture"
                    placeholder="Describe the system architecture..."
                    rows={4}
                    defaultValue={editingProject?.architecture}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="lessonsLearned"
                    className="text-sm font-medium text-gray-300"
                  >
                    Lessons Learned
                  </Label>
                  <Textarea
                    id="lessonsLearned"
                    name="lessonsLearned"
                    placeholder="What you learned from this project..."
                    rows={3}
                    defaultValue={editingProject?.lessonsLearned?.join(", ")}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate with commas</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="futureImprovements"
                    className="text-sm font-medium text-gray-300"
                  >
                    Future Improvements
                  </Label>
                  <Textarea
                    id="futureImprovements"
                    name="futureImprovements"
                    placeholder="Planned improvements and features..."
                    rows={3}
                    defaultValue={editingProject?.futureImprovements?.join(
                      ", "
                    )}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate with commas</p>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="screenshots"
                    className="text-sm font-medium text-gray-300"
                  >
                    Screenshot URLs
                  </Label>
                  <Textarea
                    id="screenshots"
                    name="screenshots"
                    placeholder="https://example.com/screenshot1.jpg, https://example.com/screenshot2.png"
                    rows={3}
                    defaultValue={editingProject?.screenshots?.join(", ")}
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <p className="text-xs text-gray-400">Separate with commas</p>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white border-b border-gray-700 pb-2">
              SEO & Metadata
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="seoTitle"
                  className="text-sm font-medium text-gray-300"
                >
                  SEO Title
                </Label>
                <Input
                  id="seoTitle"
                  name="seoTitle"
                  placeholder="Optimized title for search engines"
                  defaultValue={editingProject?.seoTitle}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="metaDescription"
                  className="text-sm font-medium text-gray-300"
                >
                  Meta Description
                </Label>
                <Textarea
                  id="metaDescription"
                  name="metaDescription"
                  placeholder="Meta description for search engines"
                  rows={3}
                  defaultValue={editingProject?.metaDescription}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
            </div>
          </section>

          {/* Form Actions */}
          <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-700 sticky bottom-0 bg-gray-800/80 backdrop-blur-sm py-4 -mx-6 px-6">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              ) : (
                <Plus className="w-4 h-4 mr-2" />
              )}
              {editingProject ? "Update Project" : "Add Project"}
            </Button>

            {editingProject && (
              <>
                <Button
                  type="button"
                  variant="outline"
                  onClick={onCancel}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Cancel Edit
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onDuplicate(editingProject)}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Duplicate
                </Button>
              </>
            )}

            <div className="flex-1"></div>

            <Button
              type="button"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-700"
              onClick={() => {
                setDevelopmentHighlights(
                  editingProject?.developmentHighlights || []
                );
                setAutoSlug(editingProject?.slug || "");
              }}
            >
              Reset Form
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
