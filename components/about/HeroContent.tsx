import { motion } from "framer-motion"; 
import { Button } from "@/components/ui/button";
import { MapPin, Brain, Globe, Mail, Download, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { itemVariants } from "@/app/about/page";

export default function HeroContent() {
  return (
    <motion.div
      variants={itemVariants}
      className="lg:col-span-1 text-center lg:text-left"
    >
      {/* Profile Image */}
      <div className="relative inline-block mb-8">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto shadow-2xl overflow-hidden border-4 border-gray-800">
          <Image
            width={128}
            height={128}
            src="/Soruj.JPG"
            alt="Soruj Mahmud"
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs border-2 border-gray-800">
          <Sparkles className="w-3 h-3" />
        </div>
      </div>

      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold text-white mb-4"
      >
        Soruj Mahmud
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-2xl text-blue-400 font-semibold mb-2 flex items-center justify-center lg:justify-start"
      >
        <Sparkles className="w-5 h-5 mr-2" />
        Aspiring AI Developer
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-gray-300 text-lg mb-6 max-w-md leading-relaxed"
      >
        Passionate about building intelligent applications with{" "}
        <span className="font-semibold text-purple-400">LangChain</span> and{" "}
        <span className="font-semibold text-purple-400">MCP</span>. Ready to
        bring AI solutions to life.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="space-y-3 text-sm text-gray-400 mb-8"
      >
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <MapPin className="w-4 h-4 text-blue-400" />
          <span>Nagur Pur, Tangail, Bangladesh</span>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <Brain className="w-4 h-4 text-purple-400" />
          <span>Currently Learning: LangChain & MCP</span>
        </div>
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <Globe className="w-4 h-4 text-blue-400" />
          <span>Available for remote opportunities</span>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-wrap gap-3 justify-center lg:justify-start"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25">
            <Link href="/contact">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Link>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" asChild className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400">
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}