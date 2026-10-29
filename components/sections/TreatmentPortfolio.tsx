"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Shield, Smile, Crown, Layers } from "lucide-react";
import { treatmentsData, Treatment } from "@/data/treatmentsData";
import { TreatmentDetailModal } from "@/components/treatments/TreatmentDetailModal";
import { cn } from "@/lib/utils";

interface TreatmentPortfolioProps {
  onBookTreatment: (treatmentTitle: string) => void;
}

export function TreatmentPortfolio({
  onBookTreatment,
}: TreatmentPortfolioProps) {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(
    null
  );
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleOpenDetail = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setIsDetailOpen(true);
  };

  const getAccentIcon = (iconType: string) => {
    switch (iconType) {
      case "aligner":
        return <Sparkles className="w-4 h-4 text-[#668C63]" />;
      case "tooth":
        return <Layers className="w-4 h-4 text-[#668C63]" />;
      case "sparkle":
        return <Sparkles className="w-4 h-4 text-[#668C63]" />;
      case "shield":
        return <Shield className="w-4 h-4 text-[#668C63]" />;
      case "crown":
        return <Crown className="w-4 h-4 text-[#668C63]" />;
      case "smile":
        return <Smile className="w-4 h-4 text-[#668C63]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#668C63]" />;
    }
  };

  return (
    <section
      id="treatments"
      aria-label="Treatment Portfolio"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#668C63]">
            <span className="w-6 h-[1.5px] bg-[#668C63]" />
            <span>CLINICAL DISCIPLINES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111311] tracking-tight leading-[1.15]">
            Care Tailored to Your Smile.
          </h2>
          <p className="text-base sm:text-lg text-[#666B66] leading-relaxed pt-1">
            From precision clear aligners to gentle preventive therapy and comprehensive aesthetic
            rehabilitation, our treatments balance biological health with natural aesthetics.
          </p>
        </div>

        {/* Asymmetrical Editorial Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {treatmentsData.map((item, index) => {
            // Layout asymmetry:
            // Item 0 (Invisalign) & Item 5 (Smile Makeovers) are featured 8-col spans
            // Others are 4-col or 6-col spans to create a rhythmic, magazine-like composition
            const isFeaturedWide = item.id === "invisalign" || item.id === "smile-makeovers";
            const colSpanClass = isFeaturedWide
              ? "lg:col-span-7"
              : index === 1
              ? "lg:col-span-5"
              : index === 2
              ? "lg:col-span-4"
              : index === 3
              ? "lg:col-span-4"
              : "lg:col-span-4";

            return (
              <div
                key={item.id}
                className={cn(
                  "group relative rounded-3xl overflow-hidden border border-[#E5EAE4] bg-[#F7FAF7] flex flex-col justify-between transition-all duration-500 hover:shadow-card hover:border-[#B8D8B5]",
                  colSpanClass
                )}
              >
                {/* Image Section */}
                <div
                  className={cn(
                    "relative w-full overflow-hidden bg-[#111411]",
                    isFeaturedWide ? "h-64 sm:h-72 lg:h-80" : "h-56 sm:h-60"
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Badge & Icon Floating Tags */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#668C63] shadow-sm">
                      {getAccentIcon(item.accentIcon)}
                    </div>
                    {item.badge && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#111311] border border-white/40">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-semibold text-[#111311] group-hover:text-[#466A45] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666B66] leading-relaxed line-clamp-3">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Explore Link Trigger */}
                  <div className="pt-2 border-t border-[#E5EAE4]/60 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenDetail(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#466A45] group-hover:text-[#111311] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63] rounded px-1"
                    >
                      <span>Explore Treatment</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <button
                      onClick={() => onBookTreatment(item.title)}
                      className="text-[11px] font-medium text-[#666B66] hover:text-[#111311] underline underline-offset-4"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal Dialog */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onBookTreatment={onBookTreatment}
      />
    </section>
  );
}

