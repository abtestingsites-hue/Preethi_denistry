"use client";

import React from "react";
import { ArrowUpRight, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";
import { SmileIllustration } from "@/components/ui/SmileIllustration";

interface TypographyHeroProps {
  onBookAppointment: () => void;
  onExploreTreatments: () => void;
  onExploreInvisalign: () => void;
}

export const TypographyHero: React.FC<TypographyHeroProps> = ({
  onBookAppointment,
  onExploreTreatments,
  onExploreInvisalign,
}) => {
  return (
    <section
      id="hero"
      className="relative bg-white pt-10 sm:pt-16 pb-20 sm:pb-28 border-b border-[#E8E9E5] overflow-hidden"
    >
      {/* Subtle Architectural Grid Lines & Organic Accents */}
      <div className="absolute top-12 right-1/4 w-80 h-80 rounded-full bg-[#C7DDB0]/20 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-6 left-10 w-64 h-64 rounded-full bg-[#A9C49A]/15 blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Editorial Canvas Card */}
        <div className="bg-[#F8F8F4] rounded-clinic-xl p-6 sm:p-10 lg:p-16 border border-[#E8E9E5] shadow-subtle relative overflow-hidden">
          {/* Top Eyebrow Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-[#E8E9E5]">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5C7651]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#5C7651] uppercase">
                MODERN DENTISTRY · COIMBATORE
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E9E5] text-[11px] sm:text-xs font-medium text-[#252724]">
                <MapPin className="w-3.5 h-3.5 text-[#5C7651]" />
                <span>Saibaba Colony</span>
              </div>
              <button
                onClick={onExploreInvisalign}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#858780] hover:text-[#252724] font-medium transition-colors"
              >
                <span>Invisalign® Focus</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#5C7651]" />
              </button>
            </div>
          </div>

          {/* Central Oversized Typography Grid */}
          <div className="py-10 sm:py-16 space-y-2 sm:space-y-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#252724] leading-[1.05] font-sans">
              <span className="block font-normal">A smile is</span>
              <span className="flex flex-wrap items-center gap-2 sm:gap-4 my-1">
                <span>more than</span>
                <span className="inline-block bg-[#C7DDB0] text-[#252724] font-serif italic px-3 sm:px-6 py-0.5 sm:py-1 rounded-xl sm:rounded-2xl transform -rotate-1 shadow-xs font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
                  a look.
                </span>
              </span>
              <span className="block font-normal text-[#252724]">
                It’s your signature.
              </span>
            </h1>
          </div>

          {/* Hairline Divider */}
          <div className="h-px w-full bg-[#E8E9E5] my-6 sm:my-8" />

          {/* Asymmetric Bottom Row: Action Copy + Custom Architectural Smile Graphic */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-2">
            {/* Left: Supporting Copy & CTAs */}
            <div className="max-w-xl space-y-6">
              <p className="text-sm sm:text-base text-[#858780] leading-relaxed font-normal">
                Thoughtful dental care. Personalized consultations. A welcoming clinical environment designed around your individual comfort and lifelong smile health.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={onBookAppointment}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#252724] text-white hover:bg-[#111310] transition-all duration-200 text-xs sm:text-sm font-medium shadow-card active:scale-[0.98]"
                >
                  <span>Book an appointment</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C7DDB0]" />
                </button>

                <button
                  onClick={onExploreTreatments}
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-[#E8E9E5] bg-white text-[#252724] hover:border-[#5C7651] text-xs sm:text-sm font-medium transition-colors"
                >
                  <span>Explore Treatments</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#5C7651]" />
                </button>
              </div>
            </div>

            {/* Right: Custom Smile Motif & Orbital Alignment Vector */}
            <div className="flex items-center gap-6 self-start md:self-auto">
              {/* Rotating architectural orbit illustration */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#C7DDB0] flex items-center justify-center shadow-card shrink-0 transition-transform duration-500 hover:rotate-12">
                {/* Custom SVG Smile icon */}
                <SmileIllustration variant="smileBadge" className="w-10 h-10 text-[#252724]" />
                {/* Thin dashed orbit ring */}
                <div className="absolute -inset-2 rounded-full border border-dashed border-[#A9C49A] animate-spin-slow pointer-events-none" />
              </div>

              <div className="text-left space-y-1">
                <span className="text-xs font-semibold text-[#252724] tracking-tight block">
                  Dr. Preethi’s Practice
                </span>
                <span className="text-[11px] text-[#858780] block">
                  Contemporary Dentistry
                </span>
                <span className="text-[10px] text-[#5C7651] font-mono tracking-wider block">
                  Saibaba Colony · 641011
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Minimal Scroll Indicator */}
        <div className="mt-8 flex items-center justify-between text-xs text-[#858780] pt-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C7651]" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#252724]">
              No generic stock imagery · Authentic dental care
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Scroll to discover</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#5C7651] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

