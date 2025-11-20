// components/layout/NewsletterSection.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SatelliteDish, Mail, Send, Sparkles, Rocket } from "lucide-react";

interface NewsletterSectionProps {
  email: string;
  setEmail: (email: string) => void;
  isSubscribed: boolean;
  handleSubscribe: (e: React.FormEvent) => void;
}

export default function NewsletterSection({
  email,
  setEmail,
  isSubscribed,
  handleSubscribe,
}: NewsletterSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="border-b border-white/10 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <NewsletterHeader />
          
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 text-sm px-4 py-1">
            <Rocket className="w-3 h-3 mr-1" />
            COSMIC NEWSLETTER
          </Badge>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quantum Circle
            </span>
          </motion.h2>

          <motion.p
            className="text-blue-200 mb-8 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Get interstellar updates on cutting-edge projects, cosmic coding
            insights, and exclusive access to the digital universe. No spam,
            just stellar content.
          </motion.p>

          <NewsletterForm
            email={email}
            setEmail={setEmail}
            isSubscribed={isSubscribed}
            handleSubscribe={handleSubscribe}
          />

          <motion.p
            className="text-sm text-blue-300 mt-4 flex items-center justify-center space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>
              Join 2,847 cosmic developers. Unsubscribe with one quantum
              pulse.
            </span>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}

// Newsletter Header Component
const NewsletterHeader = () => (
  <motion.div
    className="flex justify-center mb-6"
    whileHover={{ scale: 1.1 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative">
      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/25">
        <SatelliteDish className="w-10 h-10 text-white" />
      </div>
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Sparkles className="w-3 h-3 text-yellow-800" />
      </motion.div>

      {/* Orbiting elements */}
      <motion.div
        className="absolute -inset-4 border-2 border-cyan-400/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  </motion.div>
);

// Newsletter Form Component
const NewsletterForm = ({
  email,
  setEmail,
  isSubscribed,
  handleSubscribe,
}: NewsletterSectionProps) => (
  <motion.form
    onSubmit={handleSubscribe}
    className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
  >
    <div className="flex-1 relative">
      <Mail className="w-5 h-5 absolute left-3 top-3.5 text-gray-400" />
      <Input
        type="email"
        placeholder="your.quantum@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:bg-white/15 focus:border-cyan-400 backdrop-blur-sm"
      />
    </div>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        type="submit"
        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 whitespace-nowrap"
        disabled={isSubscribed}
      >
        <AnimatePresence mode="wait">
          {isSubscribed ? (
            <motion.div
              key="subscribed"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center"
            >
              <div className="w-4 h-4 mr-2 bg-white rounded-full animate-pulse" />
              Transmission Sent!
            </motion.div>
          ) : (
            <motion.div
              key="subscribe"
              initial={{ scale: 1 }}
              className="flex items-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Beam Me Up
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  </motion.form>
);