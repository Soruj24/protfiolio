import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Sparkles } from "lucide-react";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function BlogHero({
  searchQuery,
  setSearchQuery,
}: BlogHeroProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const backgroundVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.2, 0.3, 0.2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const searchVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "backOut",
      },
    },
    focus: {
      scale: 1.02,
      boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const gradientTextVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  const sparkleVariants = {
    animate: {
      rotate: 360,
      scale: [1, 1.2, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          variants={backgroundVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          variants={backgroundVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          variants={backgroundVariants}
          animate="animate"
          transition={{ delay: 4 }}
        />

        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        {/* Grid Pattern */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-gray-800/80 backdrop-blur-sm border-gray-700 text-gray-300 cursor-pointer"
            >
              <motion.div variants={sparkleVariants} animate="animate">
                <Sparkles className="w-3 h-3 mr-2 text-purple-400" />
              </motion.div>
              KNOWLEDGE NEBULAE
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Cosmic{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-size-200"
              style={{
                backgroundSize: "200% 200%",
              }}
              variants={gradientTextVariants}
              initial="initial"
              animate="animate"
            >
              Knowledge
            </motion.span>{" "}
            Hub
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Explore cutting-edge tutorials, AI research, and technical insights
            from the frontier of technology and development.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            variants={searchVariants}
            initial="initial"
            animate="animate"
            whileFocus="focus"
            className="max-w-2xl mx-auto relative"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400 z-10" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Input
                placeholder="Search across the knowledge cosmos..."
                className="pl-12 pr-4 py-3 text-lg border-2 border-gray-600 focus:border-blue-500 rounded-2xl bg-gray-800/80 backdrop-blur-sm shadow-lg text-white placeholder-gray-400 relative z-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>

            {/* Search indicator animation when typing */}
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute right-3 top-2.5"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
