"use client"; 
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectFilters from "./ProjectFilters"; 
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FolderOpen } from "lucide-react";
import EmptyState from "./EmptyState";
import LoadingSpinner from "./LoadingSpinner";

interface ProjectListProps {
  projects: Project[];
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onDuplicate: (project: Project) => void;
  onToggleFeatured: (project: Project) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filterCategory: string;
  onCategoryChange: (category: string) => void;
  filterStatus: string;
  onStatusChange: (status: string) => void;
  isLoading: boolean;
}

export default function ProjectList({
  projects,
  onEdit,
  onDelete,
  onDuplicate,
  onToggleFeatured,
  searchTerm,
  onSearchChange,
  filterCategory,
  onCategoryChange,
  filterStatus,
  onStatusChange,
  isLoading
}: ProjectListProps) {
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      filterCategory === "all" || project.category === filterCategory;
    const matchesStatus =
      filterStatus === "all" || project.status === filterStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const featuredCount = projects.filter(p => p.featured).length;

  return (
    <Card className="border-0 shadow-lg bg-gray-800/50 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-gray-800 to-blue-900/30 border-b border-gray-700">
        <ProjectFilters
          searchTerm={searchTerm}
          onSearchChange={onSearchChange}
          filterCategory={filterCategory}
          onCategoryChange={onCategoryChange}
          filterStatus={filterStatus}
          onStatusChange={onStatusChange}
          totalProjects={filteredProjects.length}
          featuredCount={featuredCount}
        />
      </CardHeader>

      <CardContent className="p-6">
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredProjects.length === 0 ? (
          <EmptyState
            title="No projects found"
            description={
              searchTerm || filterCategory !== "all" || filterStatus !== "all"
                ? "Try adjusting your search or filters"
                : "Get started by adding your first project"
            }
            icon={<FolderOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />}
          />
        ) : (
          <div className="grid gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onEdit={onEdit}
                onDelete={onDelete}
                onDuplicate={onDuplicate}
                onToggleFeatured={onToggleFeatured}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}