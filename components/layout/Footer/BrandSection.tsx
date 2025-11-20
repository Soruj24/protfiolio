import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail, Zap, Sparkles } from "lucide-react";

interface BrandSectionProps {
  hoveredLink: string | null;
  setHoveredLink: (link: string | null) => void;
}

export default function BrandSection({
  hoveredLink,
  setHoveredLink,
}: BrandSectionProps) {
  const cosmicSocials = [
    {
      name: "GitHub",
      href: "https://github.com/sorujmahmud",
      icon: Github,
      label: "Code Universe",
      pulse: true,
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/sorujmahmud",
      icon: Linkedin,
      label: "Professional Network",
      pulse: true,
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/sorujmahmud",
      icon: Twitter,
      label: "Tech Insights",
      pulse: false,
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      href: "mailto:soruj@example.com",
      icon: Mail,
      label: "Quantum Mail",
      pulse: true,
      color: "hover:text-red-400",
    },
  ];

  const systemStatus = {
    online: true,
    responseTime: "12ms",
    uptime: "99.9%",
    projects: "47",
  };

  return (
    <motion.div
      className="xl:col-span-2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <BrandLogo />

      <motion.p
        className="text-blue-200 mb-6 leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Crafting digital universes with quantum code and cosmic creativity.
        Transforming ideas into interstellar experiences through cutting-edge
        technology.
      </motion.p>

      <SystemStatus systemStatus={systemStatus} />
      <SocialLinks
        cosmicSocials={cosmicSocials}
        hoveredLink={hoveredLink}
        setHoveredLink={setHoveredLink}
      />
    </motion.div>
  );
}

// Brand Logo Component
const BrandLogo = () => (
  <Link href="/" className="flex items-center space-x-4 mb-6 group">
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
        <Zap className="w-7 h-7 text-white" />
      </div>
      <motion.div
        className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-2 h-2 text-yellow-800" />
      </motion.div>

      {/* Pulsing orbit */}
      <motion.div
        className="absolute -inset-2 border-2 border-cyan-400/20 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
    <div className="flex flex-col">
      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
        Soruj Mahmud
      </span>
      <span className="text-cyan-300 text-sm">
        Quantum Full-Stack Developer
      </span>
    </div>
  </Link>
);

// System Status Component
interface SystemStatusProps {
  systemStatus: {
    online: boolean;
    responseTime: string;
    uptime: string;
    projects: string;
  };
}

const SystemStatus = ({ systemStatus }: SystemStatusProps) => (
  <motion.div
    className="bg-white/5 rounded-2xl p-4 border border-white/10 mb-6 backdrop-blur-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    <div className="flex items-center space-x-2 mb-3">
      <motion.div
        className={`w-2 h-2 rounded-full ${
          systemStatus.online ? "bg-green-400" : "bg-red-400"
        }`}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <span className="font-semibold">System Status</span>
      <Badge
        variant="secondary"
        className="bg-green-500/20 text-green-300 border-green-400/30"
      >
        Online
      </Badge>
    </div>
    <div className="grid grid-cols-3 gap-4 text-sm">
      <div>
        <div className="text-cyan-300 font-semibold">
          {systemStatus.responseTime}
        </div>
        <div className="text-blue-300 text-xs">Response</div>
      </div>
      <div>
        <div className="text-cyan-300 font-semibold">{systemStatus.uptime}</div>
        <div className="text-blue-300 text-xs">Uptime</div>
      </div>
      <div>
        <div className="text-cyan-300 font-semibold">
          {systemStatus.projects}
        </div>
        <div className="text-blue-300 text-xs">Active</div>
      </div>
    </div>
  </motion.div>
);

// Social Links Component
interface SocialLinksProps {
  cosmicSocials: {
    name: string;
    href: string;
    icon: React.ElementType;
    label: string;
    pulse: boolean;
    color: string;
  }[];
  hoveredLink: string | null;
  setHoveredLink: (link: string | null) => void;
}

const SocialLinks = ({
  cosmicSocials,
  hoveredLink,
  setHoveredLink,
}: SocialLinksProps) => (
  <motion.div
    className="flex items-center space-x-3"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
  >
    {cosmicSocials.map((social) => {
      const Icon = social.icon;
      return (
        <motion.div
          key={social.name}
          whileHover={{ scale: 1.2, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative p-3 bg-white/10 border border-white/20 rounded-xl text-blue-200 ${
              social.color
            } hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm ${
              social.pulse ? "animate-pulse hover:animate-none" : ""
            }`}
            onMouseEnter={() => setHoveredLink(social.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Icon className="w-5 h-5" />
            <SocialTooltip hoveredLink={hoveredLink} social={social} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </motion.div>
      );
    })}
  </motion.div>
);

// Social Tooltip Component
interface SocialTooltipProps {
  hoveredLink: string | null;
  social: {
    name: string;
    href: string;
    icon: React.ElementType;
    label: string;
    pulse: boolean;
    color: string;
  };
}

const SocialTooltip = ({ hoveredLink, social }: SocialTooltipProps) => (
  <AnimatePresence>
    {hoveredLink === social.name && (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-lg whitespace-nowrap"
      >
        {social.label}
      </motion.div>
    )}
  </AnimatePresence>
);
