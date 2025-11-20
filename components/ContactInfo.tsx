"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"; 
import {
  Mail, 
  Github,
  Linkedin,
  Twitter, 
  Calendar, 
  Copy,
  CheckCircle2, 
  Download, 
  Brain,
  Rocket,
  Sparkles,
  Cpu,
  Network,
  Satellite,
  Orbit,
  Binary,
  Palette,
  Database,
  Cloud,
  Terminal,
  Bot,
  Workflow,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactInfo() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState(true);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [connectionStatus, setConnectionStatus] = useState("connecting");

  useEffect(() => {
    const timer = setTimeout(() => {
      setConnectionStatus("connected");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  // Interactive contact methods with unique features
  const contactMethods = [
    {
      icon: Mail,
      title: "Quantum Mail",
      description: "Encrypted & AI-prioritized responses",
      value: "sorujmahmudb2h@gmail.com",
      link: "sorujmahmudb2h@gmail.com",
      action: "Launch Comms",
      copyText: "sorujmahmudb2h@gmail.com",
      badge: "⚡ AI Enhanced",
      features: ["Smart Sorting", "24h Response", "Encrypted"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Satellite,
      title: "Neural Call",
      description: "Voice & video with real-time translation",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      action: "Initiate Call",
      copyText: "+15551234567",
      badge: "🌐 Global",
      features: ["Multi-language", "HD Video", "Screen Share"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Orbit,
      title: "Digital Presence",
      description: "Remote-first, globally connected",
      value: "New York, NY",
      link: "https://maps.google.com/?q=New+York,NY",
      action: "View Orbit",
      copyText: "New York, NY",
      badge: "🛰️ Remote",
      features: ["Flexible TZ", "Async Work", "Global Teams"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI Assistant",
      description: "Smart project matching & scoping",
      value: "Available 24/7",
      link: "#ai-chat",
      action: "Chat Now",
      badge: "🤖 AI Powered",
      features: ["Instant Quotes", "Tech Stack Advice", "Timeline Estimate"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Workflow,
      title: "Project Portal",
      description: "Collaborative workspace access",
      value: "Real-time updates",
      link: "#portal",
      action: "Enter Portal",
      badge: "🚀 Live",
      features: ["File Sharing", "Progress Tracking", "Team Chat"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Binary,
      title: "Code Repository",
      description: "Git access & collaboration",
      value: "GitHub & GitLab",
      link: "https://github.com/sorujmahmud",
      action: "View Code",
      badge: "💻 Open Source",
      features: ["Code Review", "CI/CD Setup", "Pair Programming"],
      color: "from-gray-700 to-gray-900",
    },
  ];

  // Enhanced social links with interactive elements
  const socialLinks = [
    {
      icon: Github,
      name: "Code Universe",
      url: "https://github.com/sorujmahmud",
      description: "Open source galaxies",
      metric: "2.4k Stars",
      color: "bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white shadow-lg",
      badge: "🚀 15 repos",
      status: "active",
      pulse: true,
    },
    {
      icon: Linkedin,
      name: "Professional Network",
      url: "https://linkedin.com/in/sorujmahmud",
      description: "Industry connections",
      metric: "500+ Connections",
      color: "bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg",
      badge: "💼 Hiring",
      status: "active",
      pulse: true,
    },
    {
      icon: Twitter,
      name: "Tech Insights",
      url: "https://twitter.com/sorujmahmud",
      description: "Future trends & thoughts",
      metric: "1.2k Followers",
      color: "bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white shadow-lg",
      badge: "📈 Trending",
      status: "active",
      pulse: true,
    },
    {
      icon: Bot,
      name: "AI Projects",
      url: "https://discord.com/users/sorujmahmud",
      description: "ML & automation demos",
      metric: "soruj#1234",
      color: "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white shadow-lg",
      badge: "🤖 Live Bots",
      status: "online",
      pulse: true,
    },
    {
      icon: Palette,
      name: "Design Portfolio",
      url: "https://sorujmahmud.vercel.app",
      description: "UI/UX & creative work",
      metric: "50+ Projects",
      color: "bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg",
      badge: "🎨 Interactive",
      status: "updated",
      pulse: false,
    },
    {
      icon: Cloud,
      name: "Cloud Deployments",
      url: "https://calendly.com/soruj",
      description: "Infrastructure & DevOps",
      metric: "AWS Certified",
      color: "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg",
      badge: "☁️ Scalable",
      status: "available",
      pulse: true,
    },
  ];

  // Interactive skills with hover effects
  const skills = [
    { 
      name: "Full-Stack Development", 
      level: 95,
      icon: Terminal,
      description: "End-to-end web solutions",
      projects: 45,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "React & Next.js", 
      level: 90,
      icon: Cpu,
      description: "Modern frontend architectures",
      projects: 38,
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "TypeScript", 
      level: 88,
      icon: Binary,
      description: "Type-safe development",
      projects: 32,
      color: "from-blue-600 to-indigo-600"
    },
    { 
      name: "Node.js & Backend", 
      level: 85,
      icon: Database,
      description: "Scalable server solutions",
      projects: 28,
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "UI/UX Design", 
      level: 80,
      icon: Palette,
      description: "User-centered design",
      projects: 22,
      color: "from-pink-500 to-rose-500"
    },
    { 
      name: "DevOps & AWS", 
      level: 75,
      icon: Cloud,
      description: "Cloud infrastructure",
      projects: 18,
      color: "from-orange-500 to-amber-500"
    },
  ];

  const availabilityStatus = isAvailable 
    ? {
        status: "🚀 Available for Launch",
        description: "Ready to embark on new cosmic journeys",
        color: "bg-gradient-to-r from-green-500 to-emerald-500",
        icon: Rocket,
        gradient: "from-green-50 to-emerald-50/50 border-green-200",
      }
    : {
        status: "🌙 In Deep Work Mode",
        description: "Focused on delivering excellence",
        color: "bg-gradient-to-r from-yellow-500 to-amber-500",
        icon: Brain,
        gradient: "from-yellow-50 to-amber-50/50 border-yellow-200",
      };

  return (
    <div className="space-y-6">
      {/* Connection Status */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                connectionStatus === "connected" ? "bg-green-400 animate-pulse" : "bg-yellow-400 animate-ping"
              }`} />
              <div>
                <div className="font-semibold">Digital Presence Status</div>
                <div className="text-sm text-gray-300">
                  {connectionStatus === "connected" ? "All systems operational" : "Establishing connection..."}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Contact Methods */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/50 to-purple-50/50 border-blue-100">
        <CardHeader className="border-b border-blue-200/50">
          <CardTitle className="flex items-center text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            <Network className="w-6 h-6 mr-2 text-blue-600" />
            Digital Communication Hub
            <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">
              {contactMethods.length} channels active
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative p-4 border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 bg-white hover:scale-105 cursor-pointer"
                onClick={() => method.action && window.open(method.link, method.link.startsWith('http') ? '_blank' : '_self')}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex space-x-1">
                      {method.copyText && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-1 h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(method.copyText!, method.title);
                          }}
                        >
                          {copiedField === method.title ? (
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-400" />
                          )}
                        </Button>
                      )}
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 text-lg mb-2">
                    {method.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {method.features?.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="text-xs bg-blue-50 text-blue-700">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-semibold text-sm">
                      {method.value}
                    </span>
                    {method.action && (
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${method.color} text-white hover:opacity-90 transition-all duration-300`}
                      >
                        {method.action}
                        <Rocket className="w-3 h-3 ml-1" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interactive Skills Matrix */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-6 h-6 mr-2 text-purple-600" />
            Tech Stack & Expertise
            <Badge variant="secondary" className="ml-2">
              Interactive
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Skills Visualization */}
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onMouseEnter={() => setActiveSkill(index)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${skill.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {skill.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {skill.projects} projects
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          {skill.level}%
                        </div>
                        <div className="text-xs text-gray-500">mastery</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:brightness-110`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    {activeSkill === index && (
                      <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200 animate-in fade-in duration-300">
                        <div className="text-sm text-gray-700">
                          {skill.description}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tech Ecosystem Visualization */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-4 text-center">
                Tech Ecosystem
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <Database className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">15+</div>
                  <div className="text-sm text-gray-600">Databases</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <Cloud className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">8+</div>
                  <div className="text-sm text-gray-600">Cloud Services</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <Bot className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">12+</div>
                  <div className="text-sm text-gray-600">AI Tools</div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                  <Workflow className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Frameworks</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Universe */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50/30 border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
            <Sparkles className="w-6 h-6 mr-2 text-purple-600" />
            Digital Universe
            <Badge variant="secondary" className="ml-2 bg-purple-100 text-purple-700">
              Connect Everywhere
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${social.color} ${
                  social.pulse ? 'animate-pulse hover:animate-none' : ''
                }`}
                onClick={() => window.open(social.url, '_blank')}
              >
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-3">
                    <social.icon className="w-6 h-6" />
                    <div>
                      <div className="font-bold text-lg">{social.name}</div>
                      <div className="text-sm opacity-90">{social.description}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium">
                      {social.metric}
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white border-0">
                      {social.badge}
                    </Badge>
                  </div>
                </div>
                
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Launch Panel */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Rocket className="w-6 h-6 mr-2 text-yellow-400" />
            Quick Launch
            <Badge variant="secondary" className="ml-2 bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
              Instant Access
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              className="h-16 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white border-0 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Link>
            </Button>
            
            <Button 
              className="h-16 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white border-0 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="mailto:soruj@example.com?subject=Project%20Inquiry&body=Hi%20Soruj,%20I'd%20like%20to%20discuss%20a%20project...">
                <Mail className="w-5 h-5 mr-2" />
                Quick Email
              </Link>
            </Button>
            
            <Button 
              className="h-16 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="https://calendly.com/soruj" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" />
                Book Call
              </Link>
            </Button>
            
            <Button 
              className="h-16 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white border-0 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="#ai-chat">
                <Bot className="w-5 h-5 mr-2" />
                AI Assistant
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}