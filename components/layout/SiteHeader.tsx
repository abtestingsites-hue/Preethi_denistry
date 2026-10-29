"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  onBookAppointmentClick: () => void;
}

export function SiteHeader({ onBookAppointmentClick }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = [
        "hero",
        "about",
        "treatments",
        "invisalign",
        "gallery",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Treatments", id: "treatments" },
    { label: "Invisalign", id: "invisalign" },
    { label: "Clinic Gallery", id: "gallery" },
    { label: "Patient Stories", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-subtle border-b border-[#E5EAE4]"
            : "bg-white border-b border-[#E5EAE4]/60"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Wordmark / Brand Identity */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63] rounded-lg p-1"
            >
              {/* Brand Aligner Arc Mark */}
              <div className="w-9 h-9 rounded-full bg-[#EAF3E9] border border-[#B8D8B5]/60 flex items-center justify-center text-[#668C63] group-hover:bg-[#B8D8B5]/40 transition-colors">
                <svg
                  className="w-5 h-5 text-[#668C63]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 14c2-5 7-9 12-7 4 1 5 4 4 7-1 2-3 3-5 3s-4-2-6-3-4 0-5 0" />
                </svg>
              </div>

              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl text-[#111311] tracking-tight font-semibold leading-tight group-hover:text-[#466A45] transition-colors">
                  Dr. Preethi’s
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#666B66] font-medium">
                  Dentistry · Coimbatore
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-7"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-sm font-medium transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63] rounded",
                      isActive
                        ? "text-[#466A45] font-semibold"
                        : "text-[#666B66] hover:text-[#111311]"
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#668C63] rounded-full animate-in fade-in" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={onBookAppointmentClick}
                className="hidden sm:inline-flex"
                leftIcon={<Calendar className="w-3.5 h-3.5" />}
              >
                Book Appointment
              </Button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation menu"
                className="lg:hidden p-2 rounded-lg text-[#111311] hover:bg-[#EAF3E9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Drawer Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onBookAppointment={onBookAppointmentClick}
      />
    </>
  );
}

