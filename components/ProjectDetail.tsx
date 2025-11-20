"use client";

import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Github,
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  Zap,
  CheckCircle,
  Lightbulb,
  Code,
  FolderOpen,
  Star,
  Eye,
  Heart,
  Share2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles,
  Target,
  Award,
  Rocket,
  Cpu,
  Database as DatabaseIcon,
  Palette,
  TrendingUp,
  Smartphone,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  console.log("Project----", project);

  // Auto-play slideshow
  useEffect(() => {
    if (!isPlaying || !project.screenshots || project.screenshots.length <= 1)
      return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % project.screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, project.screenshots]);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setActiveImage(
      (prev) =>
        (prev - 1 + project.screenshots.length) % project.screenshots.length
    );
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: url,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const getTechnologyIcon = (tech: string) => {
    const techIcons: Record<string, React.ReactNode> = {
      React: <Code className="w-4 h-4" />,
      "React Native": <Smartphone className="w-4 h-4" />,
      "Next.js": <Zap className="w-4 h-4" />,
      "Node.js": <Code className="w-4 h-4" />,
      TypeScript: <Code className="w-4 h-4" />,
      MongoDB: <DatabaseIcon className="w-4 h-4" />,
      Tailwind: <Palette className="w-4 h-4" />,
      "Chart.js": <TrendingUp className="w-4 h-4" />,
      PostgreSQL: <DatabaseIcon className="w-4 h-4" />,
      Express: <Code className="w-4 h-4" />,
      Python: <Cpu className="w-4 h-4" />,
      FastAPI: <Rocket className="w-4 h-4" />,
      OpenAI: <Sparkles className="w-4 h-4" />,
      Docker: <Cpu className="w-4 h-4" />,
      Redis: <DatabaseIcon className="w-4 h-4" />,
      WebSocket: <Globe className="w-4 h-4" />,
      Firebase: <Sparkles className="w-4 h-4" />,
    };
    return techIcons[tech] || <Code className="w-4 h-4" />;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "mobile":
        return <Smartphone className="w-4 h-4" />;
      case "web":
        return <Globe className="w-4 h-4" />;
      case "ai":
        return <Cpu className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      nextImage();
    } else {
      prevImage();
    }
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Button
            asChild
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm border-white/20"
          >
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Project Header */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2 mb-6"
            >
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 backdrop-blur-sm flex items-center">
                {getCategoryIcon(project.category)}
                <span className="ml-1 capitalize">{project.category}</span>
              </Badge>
              <Badge
                className={
                  project.status === "completed"
                    ? "bg-green-500/20 text-green-300 border-green-400/30 backdrop-blur-sm"
                    : "bg-blue-500/20 text-blue-300 border-blue-400/30 backdrop-blur-sm"
                }
              >
                {project.status.replace("-", " ")}
              </Badge>
              {project.featured && (
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 backdrop-blur-sm">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Featured
                </Badge>
              )}
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 backdrop-blur-sm">
                {project.difficulty}
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              {project.fullDescription || project.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                {project.duration && (
                  <div className="flex items-center space-x-2 backdrop-blur-sm bg-white/5 px-3 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center space-x-2 backdrop-blur-sm bg-white/5 px-3 py-2 rounded-full">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>{project.teamSize}</span>
                  </div>
                )}
                {project.completionDate && (
                  <div className="flex items-center space-x-2 backdrop-blur-sm bg-white/5 px-3 py-2 rounded-full">
                    <Calendar className="w-4 h-4 text-green-400" />
                    <span>{formatDate(project.completionDate)}</span>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/25"
                >
                  <Link
                    href={project.liveUrl || project?.title || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Rocket className="w-5 h-5 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Code
                  </Link>
                </Button>
              </motion.div>

              <div className="flex gap-2">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={handleLike}
                    className={`backdrop-blur-sm ${
                      isLiked
                        ? "text-red-400 bg-red-500/20"
                        : "text-white/70 hover:text-red-400 hover:bg-red-500/20"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={handleBookmark}
                    className={`backdrop-blur-sm ${
                      isBookmarked
                        ? "text-blue-400 bg-blue-500/20"
                        : "text-white/70 hover:text-blue-400 hover:bg-blue-500/20"
                    }`}
                  >
                    <Bookmark
                      className={`w-5 h-5 ${
                        isBookmarked ? "fill-current" : ""
                      }`}
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={handleShare}
                    className="backdrop-blur-sm text-white/70 hover:text-green-400 hover:bg-green-500/20"
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Project Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-white/5 backdrop-blur-sm border-white/10">
                <TabsTrigger
                  value="overview"
                  className="flex items-center space-x-2 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20"
                >
                  <FolderOpen className="w-4 h-4" />
                  <span>Overview</span>
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="flex items-center space-x-2 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Features</span>
                </TabsTrigger>
                <TabsTrigger
                  value="technology"
                  className="flex items-center space-x-2 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20"
                >
                  <Code className="w-4 h-4" />
                  <span>Technology</span>
                </TabsTrigger>
                <TabsTrigger
                  value="challenges"
                  className="flex items-center space-x-2 text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20"
                >
                  <Lightbulb className="w-4 h-4" />
                  <span>Challenges</span>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Screenshots Gallery */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                      <CardHeader className="border-b border-white/10">
                        <CardTitle className="flex items-center justify-between text-white">
                          <span className="flex items-center">
                            <Eye className="w-5 h-5 mr-2 text-cyan-400" />
                            Project Gallery
                          </span>
                          {project.screenshots &&
                            project.screenshots.length > 1 && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="border-white/20 text-white hover:bg-white/10"
                              >
                                {isPlaying ? (
                                  <Pause className="w-4 h-4 mr-2" />
                                ) : (
                                  <Play className="w-4 h-4 mr-2" />
                                )}
                                {isPlaying ? "Pause" : "Play"} Slideshow
                              </Button>
                            )}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="relative aspect-video bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl overflow-hidden group">
                            <AnimatePresence custom={direction} mode="wait">
                              <motion.div
                                key={activeImage}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                  x: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 30,
                                  },
                                  opacity: { duration: 0.2 },
                                }}
                                className="w-full h-full flex items-center justify-center p-8"
                              >
                                {project.screenshots &&
                                project.screenshots[activeImage] ? (
                                  <Image
                                    src={project.screenshots[activeImage]}
                                    alt={`${project.title} screenshot ${
                                      activeImage + 1
                                    }`}
                                    loading="lazy"
                                    width={800}
                                    height={450}
                                    className="w-full h-full object-contain rounded-lg"
                                  />
                                ) : (
                                  <div className="text-center">
                                    <div className="text-8xl mb-6">
                                      {project.emoji || "🚀"}
                                    </div>
                                    <p className="text-gray-300 text-lg">
                                      {project.title} - Screenshot{" "}
                                      {activeImage + 1}
                                    </p>
                                  </div>
                                )}
                              </motion.div>
                            </AnimatePresence>

                            {project.screenshots &&
                              project.screenshots.length > 1 && (
                                <>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => paginate(-1)}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/20 transition-colors border border-white/20"
                                  >
                                    <ChevronLeft className="w-6 h-6 text-white" />
                                  </motion.button>
                                  <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => paginate(1)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/20 transition-colors border border-white/20"
                                  >
                                    <ChevronRight className="w-6 h-6 text-white" />
                                  </motion.button>
                                </>
                              )}
                          </div>

                          {project.screenshots &&
                            project.screenshots.length > 1 && (
                              <div className="flex gap-2 overflow-x-auto pb-2">
                                {project.screenshots.map(
                                  (screenshot, index) => (
                                    <motion.button
                                      key={index}
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={() => setActiveImage(index)}
                                      className={`flex-shrink-0 w-20 h-12 rounded-xl border-2 transition-all ${
                                        activeImage === index
                                          ? "border-cyan-400 bg-cyan-500/20 shadow-lg shadow-cyan-500/25"
                                          : "border-white/20 hover:border-white/40"
                                      }`}
                                    >
                                      <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg flex items-center justify-center text-xs font-medium text-white">
                                        {index + 1}
                                      </div>
                                    </motion.button>
                                  )
                                )}
                              </div>
                            )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Project Description */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                      <CardHeader className="border-b border-white/10">
                        <CardTitle className="text-white flex items-center">
                          <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                          Project Story
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="prose prose-lg max-w-none prose-invert"
                        >
                          <p className="text-gray-300 leading-relaxed mb-6">
                            {project.fullDescription || project.description}
                          </p>

                          {project.architecture && (
                            <div className="mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
                              <h4 className="font-semibold text-cyan-400 mb-3 flex items-center">
                                <Target className="w-4 h-4 mr-2" />
                                System Architecture
                              </h4>
                              <p className="text-gray-300 text-sm">
                                {project.architecture}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Quick Stats */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                      <CardHeader className="border-b border-white/10">
                        <CardTitle className="text-white flex items-center">
                          <Award className="w-5 h-5 mr-2 text-yellow-400" />
                          Project Stats
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 space-y-4">
                        {project.stats && (
                          <>
                            {Object.entries(project.stats).map(
                              ([key, value]) => (
                                <motion.div
                                  key={key}
                                  whileHover={{ scale: 1.02 }}
                                  className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                                >
                                  <span className="text-sm text-gray-300 capitalize">
                                    {key.replace(/([A-Z])/g, " $1").trim()}:
                                  </span>
                                  <span className="font-semibold text-white">
                                    {value}
                                  </span>
                                </motion.div>
                              )
                            )}
                          </>
                        )}

                        {/* Default stats if no specific stats provided */}
                        {!project.stats && (
                          <>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                            >
                              <span className="text-sm text-gray-300">
                                Duration:
                              </span>
                              <span className="font-semibold text-white">
                                {project.duration}
                              </span>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                            >
                              <span className="text-sm text-gray-300">
                                Team Size:
                              </span>
                              <span className="font-semibold text-white">
                                {project.teamSize}
                              </span>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                            >
                              <span className="text-sm text-gray-300">
                                Complexity:
                              </span>
                              <span className="font-semibold text-white capitalize">
                                {project.difficulty}
                              </span>
                            </motion.div>
                          </>
                        )}

                        {project.performance && (
                          <div className="space-y-3">
                            <h4 className="font-semibold text-white text-sm">
                              Performance Metrics
                            </h4>
                            {Object.entries(project.performance).map(
                              ([metric, value]) => (
                                <motion.div
                                  key={metric}
                                  className="space-y-2"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <div className="flex justify-between text-sm">
                                    <span className="text-gray-300 capitalize">
                                      {metric.replace(/([A-Z])/g, " $1").trim()}
                                    </span>
                                    <span className="font-medium text-white">
                                      {value}%
                                    </span>
                                  </div>
                                  <Progress
                                    value={value}
                                    className="h-2 bg-white/10"
                                  />
                                </motion.div>
                              )
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Technology Stack */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                      <CardHeader className="border-b border-white/10">
                        <CardTitle className="text-white flex items-center">
                          <Code className="w-5 h-5 mr-2 text-cyan-400" />
                          Technology Stack
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <motion.div
                                key={tech}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white transition-colors flex items-center space-x-1 text-sm"
                                >
                                  {getTechnologyIcon(tech)}
                                  <span>{tech}</span>
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>

                  {/* Project Tags */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                      <CardHeader className="border-b border-white/10">
                        <CardTitle className="text-white flex items-center">
                          <Sparkles className="w-5 h-5 mr-2 text-purple-400" />
                          Project Tags
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <motion.div
                              key={tag}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Badge className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-400/30">
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                  <CardHeader className="border-b border-white/10">
                    <CardTitle className="text-white flex items-center">
                      <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
                      Key Features & Capabilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className="flex items-start space-x-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
                        >
                          <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-cyan-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">
                              {feature}
                            </h4>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="technology">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                    <CardHeader className="border-b border-white/10">
                      <CardTitle className="text-white">
                        Technical Architecture
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        {project.architecture && (
                          <div>
                            <h4 className="font-semibold text-cyan-400 mb-3">
                              System Architecture
                            </h4>
                            <p className="text-gray-300">
                              {project.architecture}
                            </p>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-3">
                            Technology Stack
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {project.technologies.map((tech) => (
                              <motion.div
                                key={tech}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center space-x-2 p-2 bg-white/5 rounded-lg border border-white/10"
                              >
                                {getTechnologyIcon(tech)}
                                <span className="text-sm font-medium text-gray-300">
                                  {tech}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                    <CardHeader className="border-b border-white/10">
                      <CardTitle className="text-white">
                        Development Highlights
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {project.developmentHighlights ? (
                          project.developmentHighlights.map(
                            (highlight, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
                              >
                                <Zap className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h4 className="font-semibold text-white text-sm mb-1">
                                    {highlight.title}
                                  </h4>
                                  <p className="text-gray-300 text-sm">
                                    {highlight.description}
                                  </p>
                                </div>
                              </motion.div>
                            )
                          )
                        ) : (
                          <div className="text-center text-gray-400 py-8">
                            <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>No development highlights available</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="challenges">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                    <CardHeader className="border-b border-white/10">
                      <CardTitle className="text-white flex items-center">
                        <Lightbulb className="w-6 h-6 mr-2 text-yellow-400" />
                        Challenges & Solutions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-red-400 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          Challenges Faced
                        </h4>
                        <ul className="space-y-3">
                          {project.challenges.map((challenge, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + index * 0.1 }}
                              className="flex items-start p-3 bg-red-500/10 rounded-lg border border-red-500/20"
                            >
                              <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-300">{challenge}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-400 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                          Solutions Implemented
                        </h4>
                        <ul className="space-y-3">
                          {project.solutions.map((solution, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              className="flex items-start p-3 bg-green-500/10 rounded-lg border border-green-500/20"
                            >
                              <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-300">{solution}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl">
                    <CardHeader className="border-b border-white/10">
                      <CardTitle className="text-white">
                        Learning Journey
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      {project.lessonsLearned &&
                      project.lessonsLearned.length > 0 ? (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-cyan-400 mb-3">
                            Lessons Learned
                          </h4>
                          {project.lessonsLearned.map((lesson, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              className="flex items-start space-x-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20"
                            >
                              <Lightbulb className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{lesson}</span>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center text-gray-400 py-8">
                          <Lightbulb className="w-12 h-12 mx-auto mb-4 opacity-50" />
                          <p>No lessons learned documented</p>
                        </div>
                      )}

                      {project.futureImprovements &&
                        project.futureImprovements.length > 0 && (
                          <div className="mt-6">
                            <h4 className="font-semibold text-purple-400 mb-3">
                              Future Improvements
                            </h4>
                            <ul className="space-y-2">
                              {project.futureImprovements.map(
                                (improvement, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                    className="flex items-start text-gray-300 p-2 bg-purple-500/10 rounded-lg border border-purple-500/20"
                                  >
                                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {improvement}
                                  </motion.li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </motion.section>
    </div>
  );
}
