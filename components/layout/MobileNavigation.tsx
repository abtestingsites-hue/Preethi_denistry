"use client";

import React, { useEffect } from "react";
import { X, Calendar, Phone, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";
import { Button } from "@/components/ui/Button";

interface NavLinkItem {
  name: string;
  href: string;
}

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkItem[];
  onNavigate: (href: string) => void;
  onBookAppointment: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  navLinks,
  onNavigate,
  onBookAppointment,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-[#111310]/50 backdrop-blur-xs transition-opacity duration-200"
      aria-modal="true"
      role="dialog"
      aria-label="Mobile Navigation"
    >
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-float flex flex-col justify-between p-6 overflow-y-auto border-l border-[#E8E9E5]">
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-5 border-b border-[#E8E9E5]">
            <div>
              <span className="text-sm font-semibold tracking-tight text-[#252724] block">
                {clinicInfo.name}
              </span>
              <span className="text-[11px] text-[#5C7651] flex items-center gap-1 mt-0.5 font-medium">
                <MapPin className="w-3 h-3" />
                {clinicInfo.locality}, {clinicInfo.city}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 rounded-full text-[#252724] hover:bg-[#F8F8F4] border border-[#E8E9E5] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  onClose();
                  onNavigate(link.href);
                }}
                className="w-full text-left px-3 py-3 rounded-lg text-sm font-medium text-[#252724] hover:bg-[#F8F8F4] hover:text-[#5C7651] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#858780]" />
              </button>
            ))}
          </nav>

          {/* Invisalign Highlight Box */}
          <div className="mt-6 p-4 rounded-clinic bg-[#F8F8F4] border border-[#E8E9E5]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#252724]">
              <Sparkles className="w-3.5 h-3.5 text-[#5C7651]" />
              <span>Invisalign® Consultations</span>
            </div>
            <p className="text-[11px] text-[#858780] mt-1.5 leading-relaxed">
              Discreet orthodontic smile evaluations available in Saibaba Colony, Coimbatore.
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-[#E8E9E5] space-y-3">
          <Button
            variant="dark"
            size="md"
            className="w-full text-xs font-medium"
            leftIcon={<Calendar className="w-4 h-4 text-[#C7DDB0]" />}
            onClick={() => {
              onClose();
              onBookAppointment();
            }}
          >
            Book an Appointment
          </Button>

          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#E8E9E5] text-xs font-medium text-[#252724] hover:bg-[#F8F8F4] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#5C7651]" />
            <span>Call Reception</span>
          </a>
        </div>
      </div>
    </div>
  );
};
