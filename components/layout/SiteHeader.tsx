"use client";

import React, { useState, useEffect } from "react";
import { Menu, Calendar, Phone, ArrowUpRight } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";
import { Button } from "@/components/ui/Button";
import { MobileNavigation } from "./MobileNavigation";
import { cn } from "@/lib/utils";

interface SiteHeaderProps {
  onBookAppointmentClick: () => void;
}

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Invisalign®", href: "#invisalign" },
  { name: "Treatments", href: "#treatments" },
  { name: "Our Clinic", href: "#gallery" },
  { name: "Stories", href: "#stories" },
  { name: "Contact", href: "#contact" },
];

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  onBookAppointmentClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-200 bg-white border-b",
          isScrolled
            ? "border-[#E8E9E5] shadow-subtle py-3.5"
            : "border-[#E8E9E5] py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Aligned to Left */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center gap-3 select-none focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center font-serif text-base font-semibold group-hover:bg-[#5C7651] group-hover:text-white transition-colors duration-200">
                P
              </div>
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-semibold tracking-tight text-[#252724] font-sans">
                  {clinicInfo.name}
                </span>
                <span className="text-[10px] text-[#858780] tracking-wider uppercase font-medium">
                  {clinicInfo.locality} · {clinicInfo.city}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links Grouped Right */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="text-xs font-medium text-[#252724] hover:text-[#5C7651] transition-colors duration-150 tracking-wide select-none"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Far Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#858780] hover:text-[#252724] transition-colors px-2 py-1"
              >
                <Phone className="w-3.5 h-3.5 text-[#5C7651]" />
                <span>{clinicInfo.phoneDisplay}</span>
              </a>

              <Button
                variant="dark"
                size="sm"
                className="text-xs font-medium"
                onClick={onBookAppointmentClick}
                rightIcon={<ArrowUpRight className="w-3.5 h-3.5 text-[#C7DDB0]" />}
              >
                Book Appointment
              </Button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation"
                className="lg:hidden p-2 rounded-full text-[#252724] hover:bg-[#F8F8F4] border border-[#E8E9E5] transition-colors"
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        onNavigate={handleScrollTo}
        onBookAppointment={onBookAppointmentClick}
      />
    </>
  );
};
