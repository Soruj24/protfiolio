// Updated ProjectCard.tsx - Fixed View Details
"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types/project";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import ProjectContent from "./ProjectContent";

interface ProjectCardProps {
  project: Project;
  index: number;
  onFeatureClick?: (feature: string) => void;
  onTechClick?: (tech: string) => void;
  onViewDetailsClick?: (project: Project) => void;
  onLiveDemoClick?: (url: string) => void;
  onCodeClick?: (url: string) => void;
  onProjectClick?: (project: Project) => void;
  onImageClick?: (project: Project) => void;
}

const ProjectCard = ({ 
  project, 
  index, 
  onFeatureClick,
  onTechClick,
  onViewDetailsClick,
  onLiveDemoClick,
  onCodeClick,
  onProjectClick,
  onImageClick
}: ProjectCardProps) => {
  const getGradient = (category: string) => {
    switch (category) {
      case "mobile":
        return "from-blue-500/20 to-cyan-500/20";
      case "ai":
        return "from-purple-500/20 to-pink-500/20";
      case "web":
        return "from-green-500/20 to-teal-500/20";
      default:
        return "from-gray-500/20 to-slate-500/20";
    }
  };

  const gradient = getGradient(project.category);

  const handleCardClick = () => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onImageClick) {
      onImageClick(project);
    }
  };

  const handleTitleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onViewDetailsClick) {
      onViewDetailsClick(project);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group cursor-pointer"
      onClick={handleCardClick}
    >
      <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-white/10 hover:border-cyan-400/30 transition-all duration-500 h-full overflow-hidden shadow-xl">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Project Image with click handler */}
          {project.image && (
            <div 
              className="h-48 overflow-hidden cursor-pointer"
              onClick={handleImageClick}
            >
              <Image
                width={800}
                height={450}
                loading="lazy"
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          )}

          {/* Project Header */}
          <div className={`p-6 bg-gradient-to-r ${gradient}`}>
            <div className="flex justify-between items-start mb-3">
              <Badge
                className={`backdrop-blur-sm text-white border-0 cursor-default ${
                  project.status === "completed"
                    ? "bg-green-500/20 text-green-300"
                    : project.status === "in-progress"
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-yellow-500/20 text-yellow-300"
                }`}
              >
                {project.status.replace("-", " ")}
              </Badge>
              {project.featured && (
                <Badge className="bg-yellow-500/20 text-yellow-400 border-0 backdrop-blur-sm cursor-default">
                  Featured
                </Badge>
              )}
            </div>
            <div 
              className="flex items-center mb-3 cursor-pointer"
              onClick={handleTitleClick}
            >
              <Code2 className="w-6 h-6 text-cyan-400 mr-3" />
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-1">
                {project.title}
              </h3>
            </div>
            <p className="text-gray-300 text-sm line-clamp-2 cursor-default">
              {project.description}
            </p>
          </div>

          {/* Project Content */}
          <div className="p-6 flex-1 flex flex-col" onClick={(e) => e.stopPropagation()}>
            <ProjectContent 
              project={project}
              onFeatureClick={onFeatureClick}
              onTechClick={onTechClick}
              onViewDetailsClick={onViewDetailsClick}
              onLiveDemoClick={onLiveDemoClick}
              onCodeClick={onCodeClick}
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;