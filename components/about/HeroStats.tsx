 import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, BookOpen, Users, Star } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { stats } from "@/constand";
import { itemVariants } from "@/app/about/page";

export default function HeroStats() {
  return (
    <motion.div variants={itemVariants} className="lg:col-span-2">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-white mb-6 flex items-center"
        >
          <Lightbulb className="w-8 h-8 text-yellow-400 mr-3" />
          My AI Development Journey
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4 text-gray-300 text-lg leading-relaxed"
        >
          <p>
            Hello! I'm{' '}
            <span className="font-semibold text-blue-400">Soruj Mahmud</span>,
            an aspiring AI developer currently diving deep into the world of
            artificial intelligence and modern web technologies.
          </p>

          <p>
            My current focus is mastering{" "}
            <span className="font-semibold text-purple-400">LangChain</span> for
            building sophisticated AI applications and exploring{" "}
            <span className="font-semibold text-purple-400">MCP</span> (Model
            Context Protocol) to create intelligent agent systems. I believe AI
            is the future of software development, and I'm excited to be
            learning these cutting-edge technologies.
          </p>

          <p>
            While I'm early in my professional journey, I've built numerous
            projects to solidify my understanding of full-stack development.
            Now, I'm channeling that experience into AI development, combining
            my web skills with artificial intelligence to build smart,
            responsive applications.
          </p>

          <p>
            I'm actively seeking opportunities where I can apply my AI skills,
            learn from experienced developers, and contribute to meaningful
            projects. I'm particularly interested in roles involving AI
            integration, chatbot development, and intelligent system design.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gradient-to-br from-gray-700/50 to-blue-500/10 rounded-xl p-4 border border-blue-500/20 shadow-sm"
              >
                <div className="text-2xl font-bold text-blue-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300 flex items-center justify-center space-x-1 mb-1">
                  <Icon className="w-3 h-3" />
                  <span>{stat.label}</span>
                </div>
                <div className="text-xs text-blue-400">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}