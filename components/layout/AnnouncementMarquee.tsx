"use client";

import React from "react";
import { SmileIllustration } from "@/components/ui/SmileIllustration";
import { clinicInfo } from "@/data/clinicInfo";
import { ArrowUpRight } from "lucide-react";

interface AnnouncementMarqueeProps {
  onBookClick: () => void;
}

const ANNOUNCEMENT_ITEMS = [
  "INVISALIGN® CLEAR ALIGNER CONSULTATIONS",
  "PREVENTIVE & AESTHETIC DENTAL CARE",
  "SAIBABA COLONY, COIMBATORE",
  "HOSPITAL-GRADE STERILIZATION PROTOCOLS",
  "UNRUSHED DOCTOR DISCUSSIONS",
  "DISCOVER YOUR SMILE POSSIBILITIES",
];

export const AnnouncementMarquee: React.FC<AnnouncementMarqueeProps> = ({
  onBookClick,
}) => {
  return (
    <aside
      aria-label="Clinic announcements and consultations"
      className="relative z-50 bg-white border-b border-[#E8E9E5] text-[#252724] text-[11px] sm:text-xs font-medium tracking-wider uppercase overflow-hidden select-none"
    >
      <div className="max-w-full flex items-center py-2.5">
        {/* Left static location indicator */}
        <div className="hidden md:flex items-center gap-2 pl-6 pr-4 shrink-0 bg-white z-10 border-r border-[#E8E9E5]">
          <span className="w-2 h-2 rounded-full bg-[#C7DDB0] animate-pulse" />
          <span className="text-[11px] font-semibold text-[#5C7651] tracking-widest">
            {clinicInfo.locality}
          </span>
        </div>

        {/* Continuous looping marquee */}
        <div className="flex-1 overflow-hidden relative group cursor-pointer" onClick={onBookClick}>
          <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
            {/* Sequence 1 */}
            <div className="flex items-center shrink-0">
              {ANNOUNCEMENT_ITEMS.map((text, idx) => (
                <span key={`seq1-${idx}`} className="inline-flex items-center">
                  <span className="hover:text-[#5C7651] transition-colors">{text}</span>
                  <SmileIllustration variant="smileSeparator" />
                </span>
              ))}
              <span className="inline-flex items-center text-[#5C7651] font-semibold underline underline-offset-4 mr-4">
                REQUEST CONSULTATION <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </span>
              <SmileIllustration variant="smileSeparator" />
            </div>

            {/* Sequence 2 (seamless clone) */}
            <div className="flex items-center shrink-0">
              {ANNOUNCEMENT_ITEMS.map((text, idx) => (
                <span key={`seq2-${idx}`} className="inline-flex items-center">
                  <span className="hover:text-[#5C7651] transition-colors">{text}</span>
                  <SmileIllustration variant="smileSeparator" />
                </span>
              ))}
              <span className="inline-flex items-center text-[#5C7651] font-semibold underline underline-offset-4 mr-4">
                REQUEST CONSULTATION <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </span>
              <SmileIllustration variant="smileSeparator" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
