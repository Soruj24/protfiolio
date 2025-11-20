"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Edit,
  Trash2,
  Star,
  Copy,
  Github,
  ExternalLink,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onDuplicate: (project: Project) => void;
  onToggleFeatured: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
  onDuplicate,
  onToggleFeatured,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-700 rounded-xl hover:shadow-md transition-all duration-200 bg-gray-700/50 backdrop-blur-sm">
      <div className="flex items-start space-x-4 flex-1 min-w-0">
        <div className="relative flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded-lg shadow-sm"
          />
          {project.featured && (
            <div className="absolute -top-1 -right-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-semibold text-white truncate">
              {project.title}
            </h3>
            <Badge
              variant={project.status === "published" ? "default" : "secondary"}
              className="text-xs bg-gray-600 text-gray-300"
            >
              {project.status}
            </Badge>
          </div>

          <p className="text-sm text-gray-300 line-clamp-2 mb-2">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className="text-xs capitalize bg-gray-600 text-gray-300 border-gray-500"
            >
              {project.category}
            </Badge>

            <div className="flex items-center space-x-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-gray-300 bg-gray-600 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs text-gray-400">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(project.updatedAt).toLocaleDateString()}
            </span>
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-300"
              >
                <Github className="w-3 h-3 mr-1" />
                GitHub
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-300"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Live Demo
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-4 sm:mt-0 sm:ml-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onToggleFeatured(project)}
          className={`border-gray-600 ${
            project.featured
              ? "text-yellow-400 border-yellow-600 bg-yellow-900/30"
              : "text-gray-300 hover:bg-gray-600"
          }`}
        >
          <Star
            className={`w-4 h-4 ${project.featured ? "fill-current" : ""}`}
          />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(project)}
          className="border-gray-600 text-gray-300 hover:bg-gray-600"
        >
          <Edit className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="sm"
          onClick={() => onDuplicate(project)}
          className="border-gray-600 text-gray-300 hover:bg-gray-600"
        >
          <Copy className="w-4 h-4" />
        </Button>

        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(project._id)}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
