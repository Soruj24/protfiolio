"use client";

import { useState, useEffect } from "react";
import FooterContent from "./FooterContent";

export default function Footer() {
  const [isVisible, ] = useState(false);
  const [activeOrbit, setActiveOrbit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbit((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <FooterContent isVisible={isVisible} activeOrbit={activeOrbit} />;
}
