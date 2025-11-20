// ProjectContent.tsx - Fixed View Details
"use client";
import { Zap, Clock, Users, Eye, Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Project } from "@/types/project";
import { useState } from "react";

interface ProjectContentProps {
  project: Project;
  onFeatureClick?: (feature: string) => void;
  onTechClick?: (tech: string) => void;
  onViewDetailsClick?: (project: Project) => void;
  onLiveDemoClick?: (url: string) => void;
  onCodeClick?: (url: string) => void;
}

const ProjectContent = ({
  project,
  onFeatureClick,
  onTechClick,
  onViewDetailsClick,
  onLiveDemoClick,
  onCodeClick,
}: ProjectContentProps) => {
  const [expandedFeatures, setExpandedFeatures] = useState(false);
  const [expandedTech, setExpandedTech] = useState(false);

  const displayUrl =
    project.liveUrl ?? (project as unknown as { demoUrl?: string }).demoUrl;

  const visibleFeatures = expandedFeatures
    ? project.features
    : project.features.slice(0, 3);

  const visibleTechnologies = expandedTech
    ? project.technologies
    : project.technologies.slice(0, 4);

  const handleFeatureClick = (feature: string) => {
    if (onFeatureClick) {
      onFeatureClick(feature);
    }
  };

  const handleTechClick = (tech: string) => {
    if (onTechClick) {
      onTechClick(tech);
    }
  };

  const handleViewDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click event
    if (onViewDetailsClick) {
      onViewDetailsClick(project);
    }
    // If no handler provided, let the Link handle navigation
  };

  const handleLiveDemoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onLiveDemoClick && displayUrl && displayUrl !== "#") {
      onLiveDemoClick(displayUrl);
    }
  };

  const handleCodeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onCodeClick && project.githubUrl && project.githubUrl !== "#") {
      onCodeClick(project.githubUrl);
    }
  };

  return (
    <div className="space-y-4 flex-1 flex flex-col">
      {/* Key Features with click handler */}
      <div className="flex-1">
        <h4 className="font-semibold text-cyan-400 text-sm mb-2">
          Key Features
        </h4>
        <ul className="text-sm text-gray-300 space-y-1">
          {visibleFeatures.map((feature: string, i: number) => (
            <li
              key={i}
              className="flex items-start cursor-pointer hover:bg-white/5 rounded px-2 py-1 transition-colors"
              onClick={() => handleFeatureClick(feature)}
            >
              <Zap className="w-3 h-3 text-yellow-400 mr-2 mt-0.5 shrink-0" />
              <span className="line-clamp-2">{feature}</span>
            </li>
          ))}
          {project.features.length === 0 && (
            <li className="text-gray-500 text-xs">No features listed</li>
          )}
          {project.features.length > 3 && (
            <li className="text-cyan-400 text-xs cursor-pointer hover:text-cyan-300 transition-colors pl-5">
              <button
                onClick={() => setExpandedFeatures(!expandedFeatures)}
                className="focus:outline-none"
              >
                {/* {expandedFeatures ? "Show less" : `+${project.features.length - 3} more features`} */}
              </button>
            </li>
          )}
        </ul>
      </div>

      {/* Technologies with click handler */}
      {project.technologies && project.technologies.length > 0 && (
        <div>
          <h4 className="font-semibold text-cyan-400 text-sm mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1">
            {visibleTechnologies.map((tech: string, i: number) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs bg-white/10 text-gray-300 border-0 backdrop-blur-sm cursor-pointer hover:bg-white/20 hover:text-white transition-colors"
                onClick={() => handleTechClick(tech)}
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && !expandedTech && (
              <Badge
                variant="secondary"
                className="text-xs bg-white/10 text-cyan-400 border-0 cursor-pointer hover:bg-cyan-400/20 transition-colors"
                onClick={() => setExpandedTech(true)}
              >
                +{project.technologies.length - 4} more
              </Badge>
            )}
            {expandedTech && project.technologies.length > 4 && (
              <Badge
                variant="secondary"
                className="text-xs bg-white/10 text-cyan-400 border-0 cursor-pointer hover:bg-cyan-400/20 transition-colors"
                onClick={() => setExpandedTech(false)}
              >
                Show less
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Project Stats */}
      <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-white/10">
        <div
          className="flex items-center cursor-pointer hover:text-white transition-colors"
          title={`Duration: ${project.duration}`}
        >
          <Clock className="w-3 h-3 mr-1" />
          <span>{project.duration}</span>
        </div>
        <div
          className="flex items-center cursor-pointer hover:text-white transition-colors"
          title={`Team Size: ${project.teamSize}`}
        >
          <Users className="w-3 h-3 mr-1" />
          <span>{project.teamSize}</span>
        </div>
        {project.stats?.views && (
          <div
            className="flex items-center cursor-pointer hover:text-white transition-colors"
            title={`Views: ${project.stats.views}`}
          >
            <Eye className="w-3 h-3 mr-1" />
            <span>{project.stats.views}</span>
          </div>
        )}
      </div>

      {/* Action Buttons with click handlers */}
      <div className="flex gap-2 pt-4">
        {project.githubUrl && project.githubUrl !== "#" && (
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-white border-white/20 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
            onClick={handleCodeClick}
            asChild={!onCodeClick}
          >
            {onCodeClick ? (
              <span className="flex items-center justify-center">
                <Code className="w-4 h-4 mr-2" /> Code
              </span>
            ) : (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="w-4 h-4 mr-2" /> Code
              </Link>
            )}
          </Button>
        )}
        {displayUrl && displayUrl !== "#" && (
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-0 hover:from-cyan-600 hover:to-purple-700 transition-all"
            onClick={handleLiveDemoClick}
            asChild={!onLiveDemoClick}
          >
            {onLiveDemoClick ? (
              <span className="flex items-center justify-center">
                <Eye className="w-4 h-4 mr-2" /> Live Demo
              </span>
            ) : (
              <Link href={displayUrl} target="_blank" rel="noopener noreferrer">
                <Eye className="w-4 h-4 mr-2" /> Live Demo
              </Link>
            )}
          </Button>
        )}
      </div>

      {/* View Details Link with FIXED click handler */}
      <div className="flex justify-center pt-2">
        {onViewDetailsClick ? (
          <Button
            variant="link"
            className="text-cyan-400 hover:text-cyan-300 transition-colors p-0 text-xs"
            onClick={handleViewDetailsClick}
          >
            View Details <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        ) : (
          <Button
            variant="link"
            className="text-cyan-400 hover:text-cyan-300 transition-colors p-0 text-xs"
            asChild
          >
            <Link
              href={`/projects/${project.slug}`}
              onClick={handleViewDetailsClick}
            >
              View Details <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectContent;
