"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-white text-[#111311] border border-[#E5EAE4] shadow-float hover:bg-[#EAF3E9] hover:border-[#668C63] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]"
    >
      <ArrowUp className="w-5 h-5 text-[#668C63]" />
    </button>
  );
}

