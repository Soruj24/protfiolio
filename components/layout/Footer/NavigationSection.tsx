import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Orbit, PlaneTakeoff, BookOpen, Rocket } from "lucide-react";

interface NavigationSectionProps {
  hoveredLink: string | null;
  setHoveredLink: (link: string | null) => void;
}

export default function NavigationSection({
  hoveredLink,
  setHoveredLink,
}: NavigationSectionProps) {
  const cosmicLinks = [
    {
      name: "Quantum Core",
      href: "/",
      icon: Orbit,
      description: "Home Universe",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Galaxy Projects",
      href: "/projects",
      icon: PlaneTakeoff,
      description: "My Creations",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Nebula Blog",
      href: "/blog",
      icon: BookOpen,
      description: "Knowledge Clouds",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Orbit Path",
      href: "/about",
      icon: Orbit,
      description: "My Journey",
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Transmission",
      href: "/contact",
      icon: PlaneTakeoff,
      description: "Connect Pulse",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const techGalaxies = [
    {
      name: "Web Applications",
      href: "/projects?category=web",
      icon: PlaneTakeoff,
      status: "active",
      projects: 12,
    },
    {
      name: "AI Systems",
      href: "/projects?category=ai",
      icon: BookOpen,
      status: "trending",
      projects: 8,
    },
    {
      name: "Cloud Architecture",
      href: "/projects?category=cloud",
      icon: Orbit,
      status: "active",
      projects: 15,
    },
    {
      name: "Blockchain",
      href: "/projects?category=blockchain",
      icon: PlaneTakeoff,
      status: "new",
      projects: 3,
    },
  ];

  const knowledgeNebulae = [
    {
      name: "Quantum Computing",
      href: "/blog?category=quantum",
      icon: BookOpen,
      readers: "2.4k",
      trending: true,
    },
    {
      name: "Web Development",
      href: "/blog?category=webdev",
      icon: Orbit,
      readers: "5.1k",
      trending: true,
    },
    {
      name: "AI Research",
      href: "/blog?category=ai",
      icon: PlaneTakeoff,
      readers: "3.2k",
      trending: true,
    },
    {
      name: "DevOps & Cloud",
      href: "/blog?category=devops",
      icon: BookOpen,
      readers: "1.8k",
      trending: false,
    },
  ];

  const sections = [
    {
      title: "Quantum Navigation",
      icon: Orbit,
      items: cosmicLinks,
      color: "text-cyan-400",
    },
    {
      title: "Tech Galaxies",
      icon: PlaneTakeoff,
      items: techGalaxies,
      color: "text-green-400",
    },
    {
      title: "Knowledge Nebulae",
      icon: BookOpen,
      items: knowledgeNebulae,
      color: "text-purple-400",
    },
  ];

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + sectionIndex * 0.1 }}
        >
          <SectionHeader section={section} />
          <SectionItems
            section={section}
            hoveredLink={hoveredLink}
            setHoveredLink={setHoveredLink}
          />
          {sectionIndex === 2 && <QuickLaunch />}
        </motion.div>
      ))}
    </>
  );
}

// Section Header Component
interface SectionHeaderProps {
  section: {
    title: string;
    icon: React.ElementType;
    color: string;
  };
}

const SectionHeader = ({ section }: SectionHeaderProps) => {
  const Icon = section.icon;
  return (
    <h3 className="font-bold text-white mb-6 flex items-center text-lg">
      <Icon className={`w-5 h-5 mr-2 ${section.color}`} />
      {section.title}
    </h3>
  );
};

// Section Items Component
interface SectionItemsProps {
  section: {
    title: string;
    icon: React.ElementType;
    color: string;
    items: Array<{
      name: string;
      href: string;
      icon: React.ElementType;
      description?: string;
      color?: string;
      status?: string;
      projects?: number;
      readers?: string;
      trending?: boolean;
    }>;
  };
  hoveredLink: string | null;
  setHoveredLink: (link: string | null) => void;
}

const SectionItems = ({ section,  setHoveredLink }: SectionItemsProps) => (
  <ul className="space-y-4">
    {section.items.map((item, index) => {
      const Icon = item.icon;
      return (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3 + index * 0.05,
          }}
        >
          <Link
            href={item.href}
            className="text-blue-200 hover:text-cyan-300 transition-colors flex items-center space-x-3 group"
            onMouseEnter={() => setHoveredLink(item.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <div className="flex items-center justify-between flex-1">
              <span>{item.name}</span>
              {"status" in item && (
                <Badge
                  variant="secondary"
                  className={`text-xs ${
                    item.status === "trending"
                      ? "bg-yellow-500/20 text-yellow-300 border-yellow-400/30"
                      : item.status === "new"
                      ? "bg-green-500/20 text-green-300 border-green-400/30"
                      : "bg-blue-500/20 text-blue-300 border-blue-400/30"
                  }`}
                >
                  {item.status}
                </Badge>
              )}
              {"readers" in item && (
                <Badge
                  variant="secondary"
                  className="bg-purple-500/20 text-purple-300 border-purple-400/30 text-xs"
                >
                  {item.readers}
                </Badge>
              )}
            </div>
          </Link>
        </motion.li>
      );
    })}
  </ul>
);

// Quick Launch Component
const QuickLaunch = () => (
  <motion.div
    className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-2xl backdrop-blur-sm"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.5 }}
  >
    <h4 className="font-semibold text-white mb-2 flex items-center">
      <Rocket className="w-4 h-4 mr-2 text-yellow-400" />
      Ready to Launch?
    </h4>
    <p className="text-blue-200 text-sm mb-3">
      Let&apos;s build something extraordinary together.
    </p>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        asChild
        size="sm"
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0 shadow-lg"
      >
        <Link href="/contact">Initiate Project</Link>
      </Button>
    </motion.div>
  </motion.div>
);
