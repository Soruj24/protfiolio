import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Brain, Mail, Code } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-12 text-white border border-white/10 shadow-2xl"
        >
          <Brain className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build AI Solutions Together?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m excited to contribute to AI projects, learn from experienced
            teams, and help bring intelligent applications to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg" size="lg">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Discuss AI Projects
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg" size="lg">
                <Link href="/projects">
                  <Code className="w-4 h-4 mr-2" />
                  View My Work
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}