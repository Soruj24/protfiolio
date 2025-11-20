// app/auth/signin/page.tsx - Project Portfolio Version
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SignInForm } from "@/components/SignInForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Continue Journey | Soruj Mahmud - Project Portfolio",
  description: "Sign in to explore my coding journey, project collections, and behind-the-scenes insights.",
};

export default async function SignInPage() {
  const session = await auth();

  if (session) {
    redirect("/projects");
  }

  return (
    <div className="min-h-screen flex bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <SignInForm />
        </div>
      </div>

      {/* Project Journey Side Panel */}
      <div className="hidden lg:flex flex-1 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-900 dark:via-purple-900 dark:to-cyan-900" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyan-300 rounded-full blur-2xl animate-bounce" />
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-300 rounded-full blur-2xl animate-ping" />
        </div>

        {/* Project Journey Content */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="max-w-md">
            {/* Personal Brand */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg" />
              </div>
              <div>
                <span className="text-xl font-bold">Soruj Mahmud</span>
                <p className="text-sm text-white/80">Self-Taught Developer & Project Enthusiast</p>
              </div>
            </div>

            {/* Project Journey Highlights */}
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Continue Your Journey
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📚</span>
                  </div>
                  <div>
                    <div className="font-semibold">Project Collections</div>
                    <div className="text-sm text-white/80">25+ projects organized by tech stack</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🎯</span>
                  </div>
                  <div>
                    <div className="font-semibold">Learning Path</div>
                    <div className="text-sm text-white/80">Follow my coding journey progress</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-lg">💡</span>
                  </div>
                  <div>
                    <div className="font-semibold">Code Insights</div>
                    <div className="text-sm text-white/80">Behind-the-scenes technical decisions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Stats - Real Numbers */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold">15+</div>
                <div className="text-xs text-white/80">React Projects</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold">8+</div>
                <div className="text-xs text-white/80">Full Stack Apps</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold">12+</div>
                <div className="text-xs text-white/80">APIs Built</div>
              </div>
              <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold">5+</div>
                <div className="text-xs text-white/80">Mobile Apps</div>
              </div>
            </div>

            {/* Personal Philosophy */}
            <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🌟</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Learning Through Building</h4>
                  <p className="text-sm text-white/80">
                    No corporate ladder climbed, just countless hours of coding, debugging, and creating. 
                    Every project represents a problem solved and a skill mastered.
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Project Teaser */}
            <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">Latest Project</span>
                <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">Just Launched</span>
              </div>
              <p className="text-sm text-white/80">
                E-commerce platform with real-time inventory & payment integration
              </p>
            </div>
          </div>
        </div>

        {/* Journey Bottom Links */}
        <div className="absolute bottom-8 left-12 right-12 z-10">
          <div className="flex justify-between text-white/60 text-sm">
            <Link href="/projects" className="hover:text-white transition-colors">View Projects</Link>
            <Link href="/journey" className="hover:text-white transition-colors">My Learning Path</Link>
            <Link href="/collaborate" className="hover:text-white transition-colors">Let&apos;s Build</Link>
          </div>
        </div>
      </div>
    </div>
  );
}