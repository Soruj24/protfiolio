// components/layout/Logo.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  isHoveringLogo: boolean;
  setIsHoveringLogo: (hovering: boolean) => void;
}

export default function Logo({ isHoveringLogo, setIsHoveringLogo }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group relative"
      onMouseEnter={() => setIsHoveringLogo(true)}
      onMouseLeave={() => setIsHoveringLogo(false)}
    >
      <div className="relative">
        {/* Orbiting elements */}
        <motion.div
          className={cn(
            "absolute inset-0 border-2 border-blue-400/30 rounded-full",
            isHoveringLogo ? "opacity-100" : "opacity-0"
          )}
          animate={isHoveringLogo ? { scale: [1, 1.1, 1] } : { scale: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className={cn(
            "absolute inset-0 border-2 border-purple-400/20 rounded-full",
            isHoveringLogo ? "opacity-100" : "opacity-0"
          )}
          animate={isHoveringLogo ? { scale: [1, 1.2, 1] } : { scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />

        {/* Central logo */}
        <motion.div
          className={cn(
            "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 relative z-10 shadow-2xl",
            isHoveringLogo && "shadow-blue-500/25"
          )}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Zap className="w-6 h-6 text-white" />
        </motion.div>

        {/* Floating particles */}
        <LogoParticles isHoveringLogo={isHoveringLogo} />
      </div>

      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
          Soruj Mahmud
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
          AI Developer
        </span>
      </div>
    </Link>
  );
}

// Logo Particles Component
const LogoParticles = ({ isHoveringLogo }: { isHoveringLogo: boolean }) => {
  if (!isHoveringLogo) return null;

  return (
    <>
      <motion.div
        className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-pink-400 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, delay: 0.5 }}
      />
    </>
  );
};