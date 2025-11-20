"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FooterMain from "./FooterMain";
import FooterBottom from "./FooterBottom";
import NewsletterSection from "./NewsletterSection";
import BackgroundElements from "./BackgroundElements";

interface FooterContentProps {
  isVisible: boolean;
  activeOrbit: number;
}

export default function FooterContent({
  isVisible,
  activeOrbit,
}: FooterContentProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      <BackgroundElements />

      <NewsletterSection
        email={email}
        setEmail={setEmail}
        isSubscribed={isSubscribed}
        handleSubscribe={handleSubscribe}
      />

      <FooterMain hoveredLink={hoveredLink} setHoveredLink={setHoveredLink} />

      <FooterBottom />
    </footer>
  );
}
