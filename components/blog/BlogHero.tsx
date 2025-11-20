import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function BlogHero({ searchQuery, setSearchQuery }: BlogHeroProps) {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Badge
            variant="secondary"
            className="mb-6 bg-gray-800/80 backdrop-blur-sm border-gray-700 text-gray-300"
          >
            <Sparkles className="w-3 h-3 mr-2 text-purple-400" />
            KNOWLEDGE NEBULAE
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Cosmic{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Knowledge
            </span>{" "}
            Hub
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore cutting-edge tutorials, AI research, and technical
            insights from the frontier of technology and development.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto relative"
          >
            <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
            <Input
              placeholder="Search across the knowledge cosmos..."
              className="pl-12 pr-4 py-3 text-lg border-2 border-gray-600 focus:border-blue-500 rounded-2xl bg-gray-800/80 backdrop-blur-sm shadow-lg text-white placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}