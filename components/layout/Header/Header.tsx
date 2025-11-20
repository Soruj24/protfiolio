"use client";

import { useState, useEffect } from "react"; 
import HeaderContent from "./HeaderContent";

const  Header =()=> {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <HeaderContent isScrolled={isScrolled} />;
}

export default Header