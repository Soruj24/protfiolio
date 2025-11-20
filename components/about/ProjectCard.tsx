import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Globe } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: any;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const MotionCard = motion(Card);

  const githubUrl =
    project.github && project.github !== "#"
      ? project.github
      : "https://github.com";
  const demoUrl =
    project.demo && project.demo !== "#" ? project.demo : "https://example.com";

  return (
    <MotionCard
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl"
    >
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-white">
          <span>{project?.name}</span>
          <Badge
            className={
              project?.status === "Completed"
                ? "bg-green-500/20 text-green-300 border-green-400/30"
                : project.status === "In Progress"
                ? "bg-blue-500/20 text-blue-300 border-blue-400/30"
                : "bg-purple-500/20 text-purple-300 border-purple-400/30"
            }
          >
            {project?.status}
          </Badge>
        </CardTitle>
        <p className="text-sm text-gray-300">{project?.type}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300">{project?.description}</p>
        <div className="flex flex-wrap gap-2">
          {project?.tech?.map((tech: string, techIndex: number) => (
            <Badge
              key={techIndex}
              variant="outline"
              className="text-xs bg-white/5 border-white/20 text-gray-300"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            asChild
            className="bg-white/5 border-white/20 text-white hover:bg-white/10"
          >
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Code className="w-3 h-3 mr-1" />
              Code
            </Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <Globe className="w-3 h-3 mr-1" />
              Demo
            </Link>
          </Button>
        </div>
      </CardContent>
    </MotionCard>
  );
}
