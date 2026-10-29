"use client";

import React, { useEffect } from "react";
import { X, Calendar, Phone, Sparkles, MapPin } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onBookAppointment: () => void;
}

export function MobileNavigation({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
  onBookAppointment,
}: MobileNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Treatments", id: "treatments" },
    { label: "Invisalign", id: "invisalign" },
    { label: "Clinic Gallery", id: "gallery" },
    { label: "Patient Stories", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden animate-in fade-in duration-200"
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5EAE4]">
        <div className="flex flex-col">
          <span className="font-serif text-xl tracking-tight text-[#111311]">
            Dr. Preethi’s
          </span>
          <span className="text-[10px] tracking-[0.25em] text-[#666B66] uppercase font-semibold">
            Dentistry · Coimbatore
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2 rounded-full text-[#111311] hover:bg-[#EAF3E9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
        <nav aria-label="Mobile Menu Links">
          <ul className="space-y-1">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className={`w-full text-left py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                      isActive
                        ? "bg-[#EAF3E9] text-[#466A45] font-semibold"
                        : "text-[#111311] hover:bg-[#F7FAF7] hover:text-[#466A45]"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Feature badge */}
        <div className="pt-6">
          <div className="p-4 rounded-2xl bg-[#F7FAF7] border border-[#E5EAE4] space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#668C63]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Invisalign® Suite</span>
            </div>
            <p className="text-xs text-[#666B66]">
              Clear aligner consultations and digital treatment planning in Saibaba Colony.
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 border-t border-[#E5EAE4] bg-[#F7FAF7] space-y-3">
        <button
          onClick={() => {
            onClose();
            onBookAppointment();
          }}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#668C63] text-white font-medium hover:bg-[#466A45] shadow-sm transition-colors"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>

        <div className="flex items-center justify-between text-xs text-[#666B66] pt-1">
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-[#111311]"
          >
            <Phone className="w-3.5 h-3.5 text-[#668C63]" />
            <span>{clinicInfo.phoneDisplay}</span>
          </a>
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-[#668C63]" />
            <span>Saibaba Colony</span>
          </div>
        </div>
      </div>
    </div>
  );
}

