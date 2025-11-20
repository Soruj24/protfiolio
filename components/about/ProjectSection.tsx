import { motion } from "framer-motion"; 
import { Badge } from "@/components/ui/badge"; 
import { Rocket} from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
 

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-violet-900 to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 text-sm font-semibold bg-white/10 backdrop-blur-sm text-white border-white/20">
            <Rocket className="w-3 h-3 mr-1" />
            AI PROJECTS
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            Learning Through Building
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hands-on projects to master LangChain, MCP, and AI development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard   key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}