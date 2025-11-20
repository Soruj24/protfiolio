// app/auth/signup/page.tsx - Project-Focused Portfolio
import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/SignUpForm";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join My Journey | Soruj Mahmud - Project Portfolio",
  description: "Explore my projects and connect with me. No corporate experience, just pure passion for coding.",
};

export default async function SignUpPage() {
  const session = await auth();

  if (session) {
    redirect("/projects");
  }

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <SignUpForm />
        </div>
      </div>

      {/* Project Showcase Side Panel */}
      <div className="hidden lg:flex flex-1 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-900 dark:via-purple-900 dark:to-cyan-900" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyan-300 rounded-full blur-2xl animate-bounce" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-300 rounded-full blur-2xl animate-ping" />
        </div>

        {/* Project Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="max-w-md">
            {/* Personal Brand */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg" />
              </div>
              <div>
                <span className="text-xl font-bold">Soruj Mahmud</span>
                <p className="text-sm text-white/80">Passionate Self-Taught Developer</p>
              </div>
            </div>

            {/* Project-Focused Highlights */}
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Built with Passion, Not Experience
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🔥</span>
                  </div>
                  <div>
                    <div className="font-semibold">25+ Personal Projects</div>
                    <div className="text-sm text-white/80">From simple apps to complex systems</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <div className="font-semibold">Modern Tech Stack</div>
                    <div className="text-sm text-white/80">Next.js, React, Node.js, MongoDB</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold">Continuous Learning</div>
                    <div className="text-sm text-white/80">Always exploring new technologies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Categories */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-lg font-bold">15+</div>
                <div className="text-xs text-white/80">Web Apps</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-lg font-bold">8+</div>
                <div className="text-xs text-white/80">APIs</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-lg font-bold">5+</div>
                <div className="text-xs text-white/80">Mobile</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-lg font-bold">7+</div>
                <div className="text-xs text-white/80">Full Stack</div>
              </div>
            </div>

            {/* Personal Statement */}
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <blockquote className="text-sm italic text-white/90">
                I believe in learning by building. Every project is a step forward in my coding journey. No corporate experience, just pure dedication to mastering my craft.
              </blockquote>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="absolute bottom-8 left-12 right-12 z-10">
          <div className="flex justify-between text-white/60 text-sm">
            <Link href="/projects" className="hover:text-white transition-colors">View Projects</Link>
            <Link href="/about" className="hover:text-white transition-colors">My Journey</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Collaborate</Link>
          </div>
        </div>
      </div>
    </div>
  );
}