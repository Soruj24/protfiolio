// components/sections/CTASection.tsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, MessageCircle, Code } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl border border-white/10 mx-auto max-w-4xl"
      >
        <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">
          Let&apos;s Build Something Amazing
        </h2>
        <p className="text-xl text-cyan-100 mb-8 max-w-md mx-auto">
          Ready to bring your ideas to life with cutting-edge technology and AI
          solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/25"
          >
            <Link href="mailto:soruj@example.com">
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
          >
            <Link
              href="https://github.com/sorujmahmud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="w-4 h-4 mr-2" />
              View GitHub
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
