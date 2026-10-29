"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, X } from "lucide-react";
import { clinicAnnouncements } from "@/data/announcementsData";

interface AnnouncementMarqueeProps {
  onBookClick?: () => void;
  allowDismiss?: boolean;
}

export function AnnouncementMarquee({
  onBookClick,
  allowDismiss = true,
}: AnnouncementMarqueeProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Clinic announcements and consultation advisory"
      className="relative z-50 bg-[#F7FAF7] border-b border-[#E5EAE4] py-2 px-3 overflow-hidden select-none group transition-all duration-300"
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto gap-4">
        {/* Infinite Looping Announcement Container */}
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)]">
          <div className="flex w-max space-x-12 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
            {/* Set 1 */}
            <div className="flex items-center space-x-12 shrink-0">
              {clinicAnnouncements.map((item) => (
                <div key={`set1-${item.id}`} className="flex items-center gap-3 text-xs sm:text-sm text-[#111311]">
                  <span className="inline-flex items-center justify-center p-1 rounded-full bg-[#EAF3E9] text-[#466A45]">
                    <Sparkles className="w-3.5 h-3.5 text-[#668C63]" aria-hidden="true" />
                  </span>
                  {item.badge && (
                    <span className="font-semibold text-[#466A45] tracking-wide uppercase text-[10px] px-2 py-0.5 rounded-full bg-[#B8D8B5]/30">
                      {item.badge}
                    </span>
                  )}
                  <span className="font-medium text-[#111311]">{item.text}</span>
                  {item.highlight && (
                    <span className="font-semibold text-[#668C63] hidden md:inline">
                      · {item.highlight}
                    </span>
                  )}
                  {item.ctaText && onBookClick && (
                    <button
                      onClick={onBookClick}
                      className="inline-flex items-center gap-1 font-semibold text-[#466A45] hover:text-[#111311] underline underline-offset-4 ml-1 transition-colors"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Set 2 (Duplicate for seamless continuous loop) */}
            <div className="flex items-center space-x-12 shrink-0" aria-hidden="true">
              {clinicAnnouncements.map((item) => (
                <div key={`set2-${item.id}`} className="flex items-center gap-3 text-xs sm:text-sm text-[#111311]">
                  <span className="inline-flex items-center justify-center p-1 rounded-full bg-[#EAF3E9] text-[#466A45]">
                    <Sparkles className="w-3.5 h-3.5 text-[#668C63]" />
                  </span>
                  {item.badge && (
                    <span className="font-semibold text-[#466A45] tracking-wide uppercase text-[10px] px-2 py-0.5 rounded-full bg-[#B8D8B5]/30">
                      {item.badge}
                    </span>
                  )}
                  <span className="font-medium text-[#111311]">{item.text}</span>
                  {item.highlight && (
                    <span className="font-semibold text-[#668C63] hidden md:inline">
                      · {item.highlight}
                    </span>
                  )}
                  {item.ctaText && onBookClick && (
                    <button
                      onClick={onBookClick}
                      className="inline-flex items-center gap-1 font-semibold text-[#466A45] hover:text-[#111311] underline underline-offset-4 ml-1 transition-colors"
                    >
                      <span>{item.ctaText}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Dismiss Control */}
        {allowDismiss && (
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss announcement strip"
            className="text-[#666B66] hover:text-[#111311] p-1 rounded-full hover:bg-[#EAF3E9] transition-colors shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </aside>
  );
}

