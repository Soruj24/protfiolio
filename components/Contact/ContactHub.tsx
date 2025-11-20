import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/Contact/ContactForm";
import { communicationPortals } from "@/data/contactData";
import { SatelliteDish, Atom } from "lucide-react";

const MotionCard = motion(Card);
const MotionDiv = motion.div;

const ContactHub = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Communication Portals */}
          <div className="lg:col-span-1 space-y-6">
            <MotionCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50"
            >
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <SatelliteDish className="w-5 h-5 text-purple-400" />
                  <span>AI Communication</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {communicationPortals?.map((portal, index) => {
                  const Icon = portal.icon;
                  return (
                    <MotionDiv
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group p-4 rounded-xl bg-slate-700/30 border border-slate-600/50 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 bg-gradient-to-r ${portal.color} rounded-lg flex items-center justify-center`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-white">
                            {portal?.title}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {portal?.description}
                          </div>
                        </div>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30 text-xs">
                          {portal?.action}
                        </Badge>
                      </div>
                    </MotionDiv>
                  );
                })}
              </CardContent>
            </MotionCard>
          </div>

          {/* Main AI Contact Console */}
          <div className="lg:col-span-2">
            <MotionCard
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 relative overflow-hidden"
            >
              {/* Animated AI Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-pulse"></div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-white flex items-center space-x-2">
                  <motion.div
                    className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Atom className="w-4 h-4 text-white" />
                  </motion.div>
                  <span>Initiate AI Project</span>
                </CardTitle>
                <p className="text-gray-400">
                  Ready to build intelligent solutions? Share your vision and
                  let&apos;s create AI-powered magic together with LangChain and
                  MCP.
                </p>
              </CardHeader>
              <CardContent className="relative z-10">
                <ContactForm />
                {/* <AITransmissionStatus /> */}
              </CardContent>
            </MotionCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHub;
