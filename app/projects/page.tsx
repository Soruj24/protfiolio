"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  Mail,
  ArrowRight,
  Zap,
  Sparkles,
  Code,
  Globe,
  Smartphone,
  Server,
  LucideIcon,
} from "lucide-react";
import BackgroundElements from "@/components/Home/BackgroundElements";
import { useEffect, useState } from "react";
import ProjectsSection from "@/components/Home/ProjectsSection";
import { Project } from "@/types/project";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`/api/projects`);

        if (!response.ok) {
          throw new Error(`Failed to fetch projects: ${response.status}`);
        }

        const data = await response.json();
        if (data.success) {
          setProjects(data.data);
        } else {
          throw new Error(data.error || "Failed to fetch projects");
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  // Calculate stats and categories from actual projects data
  const projectStats = [
    { number: `${projects.length}+`, label: "Projects Completed", icon: Code },
    { number: "5+", label: "Happy Clients", icon: Globe },
    { number: "3+", label: "Years Experience", icon: Smartphone },
    { number: "15+", label: "Technologies", icon: Server },
  ];

  // Calculate categories from actual projects
  const getProjectCategories = () => {
    const categories = projects.reduce<Record<string, number>>(
      (acc, project) => {
        const category = project.category || "web";
        if (!acc[category]) {
          acc[category] = 0;
        }
        acc[category]++;
        return acc;
      },
      {}
    );

    const categoryIcons: Record<string, LucideIcon> = {
      web: Globe,
      mobile: Smartphone,
      ecommerce: Server,
      api: Code,
      fullstack: Globe,
    };

    const categoryColors: { [key: string]: string } = {
      web: "blue",
      mobile: "green",
      ecommerce: "purple",
      api: "orange",
      fullstack: "blue",
    };

    const categoryNames: { [key: string]: string } = {
      web: "Web Apps",
      mobile: "Mobile Apps",
      ecommerce: "E-commerce",
      api: "APIs & Backend",
      fullstack: "Full Stack",
    };

    return Object.entries(categories).map(([category, count]) => ({
      name: categoryNames[category] || category,
      count: `${count}`,
      description: `${categoryNames[category] || category} projects`,
      icon: categoryIcons[category] || Globe,
      color: categoryColors[category] || "blue",
    }));
  };

  // Get all technologies from projects
  const getAllTechnologies = () => {
    const techSet = new Set<string>();
    projects.forEach((project) => {
      if (project.technologies && Array.isArray(project.technologies)) {
        project.technologies.forEach((tech: string) => techSet.add(tech));
      }
    });
    return Array.from(techSet);
  };

  const projectCategories = getProjectCategories();
  const technologies = getAllTechnologies();

  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/20 text-blue-400 hover:from-blue-500/30 hover:to-blue-600/30",
    green:
      "from-green-500/20 to-green-600/20 text-green-400 hover:from-green-500/30 hover:to-green-600/30",
    purple:
      "from-purple-500/20 to-purple-600/20 text-purple-400 hover:from-purple-500/30 hover:to-purple-600/30",
    orange:
      "from-orange-500/20 to-orange-600/20 text-orange-400 hover:from-orange-500/30 hover:to-orange-600/30",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-7 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 relative">
      {/* Background Elements */}
      <BackgroundElements />

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-6 text-sm font-semibold bg-purple-500/20 text-purple-300 border-purple-500/30"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              PORTFOLIO SHOWCASE
            </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Explore my collection of web applications, each built with modern
              technologies and best practices. From e-commerce platforms to
              real-time applications, every project represents unique challenges
              and innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25"
              >
                <Link href="/contact" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Start a Project
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400"
              >
                <Link href="/about" className="flex items-center">
                  Learn About Me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-12 bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Project{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Categories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse projects by category and technology stack
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {projectCategories.map((category, index) => {
              const Icon = category.icon;
              const colorClass =
                colorClasses[category.color as keyof typeof colorClasses];

              return (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${colorClass} rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300`}
                    >
                      <Icon className={`w-6 h-6 ${colorClass.split(" ")[2]}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <div className="text-2xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {category.count}
                    </div>
                    <p className="text-gray-300 text-sm">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Technologies Used */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Technologies I{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Work With
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium bg-gray-800/60 backdrop-blur-sm border-gray-700 text-gray-200 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-500/30 transition-all duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects Showcase */}
      <section className="py-16 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-4 text-sm font-semibold bg-purple-500/20 text-purple-300 border-purple-500/30"
            >
              <Zap className="w-3 h-3 mr-1" />
              FEATURED WORK
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-4">
              Project{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each project below includes detailed information about the
              technologies used, challenges overcome, and the solutions
              implemented.
            </p>
          </div>

          <ProjectsSection
            projects={projects}
            loading={loading}
            error={error}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 via-purple-600/80 to-blue-600/80 backdrop-blur-sm"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl font-bold mb-6 text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let&apos;s collaborate to bring your ideas to life. I&apos;m always
            excited to work on new challenges and create amazing digital
            experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg shadow-white/25"
            >
              <Link href="/contact" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Discuss Your Project
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Link href="/about" className="flex items-center">
                View My Experience
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
