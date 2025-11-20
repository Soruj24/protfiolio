// Updated ProjectsSection.tsx - Fixed View Details
"use client";
import { useState } from "react";
import { Zap, Smartphone, Globe, Cpu } from "lucide-react";
import { Project } from "@/types/project";
import { useRouter } from "next/navigation";
import LoadingState from "../Projects/LoadingState";
import ErrorState from "../Projects/ErrorState";
import ProjectsHeader from "../Projects/ProjectsHeader";
import CategoryFilter from "../Projects/CategoryFilter";
import ProjectsGrid from "../Projects/ProjectsGrid";
import EmptyState from "../Projects/EmptyState";

const fallbackCategories = [
  {
    id: "all",
    name: "All",
    count: 0,
    icon: Zap,
  },
  {
    id: "web",
    name: "Web Apps",
    count: 0,
    icon: Globe,
  },
  {
    id: "mobile",
    name: "Mobile",
    count: 0,
    icon: Smartphone,
  },
  {
    id: "ai",
    name: "AI/ML",
    count: 0,
    icon: Cpu,
  },
];

const fallbackProjects: Project[] = [];

interface ProjectsSectionProps {
  projects?: Project[];
  loading?: boolean;
  error?: string | null;
}

const ProjectsSection = ({
  projects = fallbackProjects,
  loading = false,
  error = null,
}: ProjectsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const router = useRouter();

  const categoriesWithCounts = fallbackCategories.map((category) => ({
    ...category,
    count:
      category.id === "all"
        ? projects.length
        : projects.filter((project) => project.category === category.id).length,
  }));

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Click handlers
  const handleFeatureClick = (feature: string) => {
    console.log("Feature clicked:", feature);
    // Add your custom logic here
  };

  const handleTechClick = (tech: string) => {
    console.log("Technology clicked:", tech);
    // Add your custom logic here
  };

  const handleViewDetailsClick = (project: Project) => {
    console.log("View details clicked for:", project.title);
    // Navigate to project details page
    router.push(`/projects/${project.slug}`);
  };

  const handleLiveDemoClick = (url: string) => {
    console.log("Live demo clicked, URL:", url);
    // Add analytics or custom logic here
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCodeClick = (url: string) => {
    console.log("Code clicked, URL:", url);
    // Add analytics or custom logic here
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleProjectClick = (project: Project) => {
    console.log("Project card clicked:", project.title);
    // Navigate to project details when card is clicked
    handleViewDetailsClick(project);
  };

  const handleImageClick = (project: Project) => {
    console.log("Project image clicked:", project.title);
    // You can show image in modal or navigate to details
    handleViewDetailsClick(project);
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;

  return (
    <section id="projects" className="px-4 py-16">
      <ProjectsHeader />

      <CategoryFilter
        categories={categoriesWithCounts}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <ProjectsGrid
        projects={filteredProjects}
        onFeatureClick={handleFeatureClick}
        onTechClick={handleTechClick}
        onViewDetailsClick={handleViewDetailsClick}
        onLiveDemoClick={handleLiveDemoClick}
        onCodeClick={handleCodeClick}
        onProjectClick={handleProjectClick}
        onImageClick={handleImageClick}
      />

      {filteredProjects.length === 0 && <EmptyState />}
    </section>
  );
};

export default ProjectsSection;
