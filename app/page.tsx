"use client";
import BackgroundElements from "@/components/Home/BackgroundElements";
import HeroSection from "@/components/Home/HeroSection";
import StatsSection from "@/components/Home/StatsSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
import LearningPathSection from "@/components/Home/LearningPathSection";
import TechStackSection from "@/components/Home/TechStackSection";
import CTASection from "@/components/Home/CTASection";
import useProjects from "@/hooks/useProjects";

const HomePage = () => {
  const { projects, loading, error } = useProjects();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      <BackgroundElements />

      <div className="relative z-10 space-y-20 py-8">
        <HeroSection />
        <StatsSection />
        <ProjectsSection projects={projects} loading={loading} error={error} />
        <LearningPathSection />
        <TechStackSection />
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;