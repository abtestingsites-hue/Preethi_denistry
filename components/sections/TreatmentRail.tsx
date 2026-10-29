"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { treatmentsData, Treatment } from "@/data/treatmentsData";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { TreatmentDetailModal } from "@/components/treatments/TreatmentDetailModal";
import { cn } from "@/lib/utils";

interface TreatmentRailProps {
  onBookTreatment: (treatmentTitle: string) => void;
}

export const TreatmentRail: React.FC<TreatmentRailProps> = ({
  onBookTreatment,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleOpenDetail = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
    setIsModalOpen(true);
  };

  // Surface alternation: white, pistachio, offwhite
  const cardThemes = [
    { bg: "bg-[#FFFFFF]", border: "border-[#E8E9E5]", text: "text-[#252724]", badge: "bg-[#F8F8F4]" },
    { bg: "bg-[#C7DDB0]", border: "border-[#A9C49A]", text: "text-[#252724]", badge: "bg-white" },
    { bg: "bg-[#F8F8F4]", border: "border-[#E8E9E5]", text: "text-[#252724]", badge: "bg-white" },
    { bg: "bg-[#FFFFFF]", border: "border-[#E8E9E5]", text: "text-[#252724]", badge: "bg-[#F8F8F4]" },
    { bg: "bg-[#F8F8F4]", border: "border-[#E8E9E5]", text: "text-[#252724]", badge: "bg-white" },
    { bg: "bg-[#FFFFFF]", border: "border-[#E8E9E5]", text: "text-[#252724]", badge: "bg-[#F8F8F4]" },
  ];

  return (
    <section id="treatments" className="bg-white py-20 sm:py-28 border-b border-[#E8E9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase block">
              TREATMENT DISCOVERY RAIL
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#252724] font-sans">
              Care designed for longevity & aesthetics.
            </h2>
            <p className="text-xs sm:text-sm text-[#858780] leading-relaxed">
              Explore our six core clinical services. Use pointer, touch, or arrows to browse.
            </p>
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll treatments left"
              className="w-11 h-11 rounded-full border border-[#E8E9E5] bg-[#F8F8F4] hover:bg-[#C7DDB0] text-[#252724] flex items-center justify-center transition-colors shadow-xs active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll treatments right"
              className="w-11 h-11 rounded-full border border-[#E8E9E5] bg-[#252724] hover:bg-[#111310] text-white flex items-center justify-center transition-colors shadow-xs active:scale-95"
            >
              <ArrowRight className="w-4 h-4 text-[#C7DDB0]" />
            </button>
          </div>
        </div>

        {/* Horizontal Rail Container */}
        <div
          ref={scrollContainerRef}
          className="horizontal-rail flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scroll-smooth focus:outline-none"
          tabIndex={0}
          aria-label="Horizontal treatment portfolio list"
        >
          {treatmentsData.map((treatment, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            const seqNum = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={treatment.id}
                className={cn(
                  "shrink-0 snap-start w-[300px] sm:w-[360px] rounded-clinic-lg p-7 border shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between select-none",
                  theme.bg,
                  theme.border,
                  theme.text
                )}
              >
                <div>
                  {/* Sequence Number & Badge */}
                  <div className="flex items-center justify-between pb-6 border-b border-black/10">
                    <span className="font-serif text-3xl sm:text-4xl font-normal text-[#252724]">
                      {seqNum}
                    </span>
                    {treatment.badge ? (
                      <span className={cn("text-[10px] font-medium px-2.5 py-1 rounded-full border border-black/10", theme.badge)}>
                        {treatment.badge}
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-[#858780] tracking-wider uppercase">
                        CLINICAL
                      </span>
                    )}
                  </div>

                  {/* Thumbnail Visual */}
                  <div className="relative w-full h-44 rounded-clinic overflow-hidden my-6 border border-black/5 bg-[#E8E9E5]">
                    <Image
                      src={treatment.image}
                      alt={treatment.imageAlt}
                      fill
                      sizes="360px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold tracking-tight text-[#252724] font-sans">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-[#252724]/80 mt-2 line-clamp-3 leading-relaxed">
                    {treatment.shortDescription}
                  </p>
                </div>

                {/* Bottom Card Actions */}
                <div className="pt-6 border-t border-black/10 flex items-center justify-between mt-6">
                  <button
                    onClick={() => handleOpenDetail(treatment)}
                    className="text-xs font-semibold text-[#252724] hover:text-[#5C7651] inline-flex items-center gap-1 transition-colors underline underline-offset-4"
                  >
                    <span>Explore Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookTreatment(treatment.title)}
                    className="px-4 py-2 rounded-full bg-[#252724] text-white hover:bg-[#111310] text-[11px] font-medium transition-colors"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Rail Footer Guidance */}
        <div className="mt-4 flex items-center justify-between text-xs text-[#858780]">
          <span>Drag or scroll horizontally to explore all 6 treatment categories</span>
          <span className="font-mono text-[11px] text-[#5C7651]">01 — 06</span>
        </div>
      </div>

      {/* Deep Exploration Modal */}
      <TreatmentDetailModal
        treatment={selectedTreatment}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBookTreatment={onBookTreatment}
      />
    </section>
  );
};

