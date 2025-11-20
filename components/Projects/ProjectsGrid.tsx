// Updated ProjectsGrid.tsx with click handlers
import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

interface ProjectsGridProps {
  projects: Project[];
  onFeatureClick?: (feature: string) => void;
  onTechClick?: (tech: string) => void;
  onViewDetailsClick?: (project: Project) => void;
  onLiveDemoClick?: (url: string) => void;
  onCodeClick?: (url: string) => void;
  onProjectClick?: (project: Project) => void;
  onImageClick?: (project: Project) => void;
}

const ProjectsGrid = ({ 
  projects,
  onFeatureClick,
  onTechClick,
  onViewDetailsClick,
  onLiveDemoClick,
  onCodeClick,
  onProjectClick,
  onImageClick
}: ProjectsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard 
          key={index} 
          project={project} 
          index={index}
          onFeatureClick={onFeatureClick}
          onTechClick={onTechClick}
          onViewDetailsClick={onViewDetailsClick}
          onLiveDemoClick={onLiveDemoClick}
          onCodeClick={onCodeClick}
          onProjectClick={onProjectClick}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default ProjectsGrid;