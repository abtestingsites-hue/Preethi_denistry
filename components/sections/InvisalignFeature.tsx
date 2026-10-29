"use client";

import React from "react";
import { ArrowUpRight, Sparkles, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AlignerGraphic } from "@/components/ui/AlignerGraphic";

interface InvisalignFeatureProps {
  onEnquireInvisalign: () => void;
}

export const InvisalignFeature: React.FC<InvisalignFeatureProps> = ({
  onEnquireInvisalign,
}) => {
  return (
    <section id="invisalign" className="bg-[#111310] text-white py-20 sm:py-28 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#5C7651]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dark Editorial Typography & Action (6 cols) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#C7DDB0] tracking-wider uppercase font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#C7DDB0]" />
              <span>SIGNATURE ORTHODONTICS</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white font-sans leading-[1.1]">
                A clearer path to your smile.
              </h2>
              <p className="text-lg sm:text-xl font-serif italic text-[#C7DDB0]">
                Discreet. Removable. Custom-calibrated.
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#E8E9E5]/80 leading-relaxed max-w-lg font-normal">
              Invisalign® clear aligners offer a modern, wire-free alternative to traditional braces. Utilizing advanced 3D digital treatment scanning, each clear tray is customized to guide your teeth into optimal biological alignment with minimal disruption to your daily lifestyle.
            </p>

            {/* Key Advantages */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                <span className="w-5 h-5 rounded-full bg-[#C7DDB0] text-[#111310] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Virtually invisible transparent design for professional confidence</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                <span className="w-5 h-5 rounded-full bg-[#C7DDB0] text-[#111310] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Easily removable for dining, brushing, and special occasions</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white">
                <span className="w-5 h-5 rounded-full bg-[#C7DDB0] text-[#111310] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <span>Digital 3D simulation of your planned smile progress before starting</span>
              </div>
            </div>

            {/* CTA & Suitability Disclaimer */}
            <div className="pt-4 space-y-4">
              <Button
                variant="pistachio"
                size="lg"
                onClick={onEnquireInvisalign}
                rightIcon={<ArrowUpRight className="w-4 h-4 text-[#252724]" />}
              >
                Enquire About Invisalign®
              </Button>

              <div className="flex items-start gap-2 text-[11px] text-[#858780] max-w-md">
                <AlertCircle className="w-3.5 h-3.5 text-[#C7DDB0] shrink-0 mt-0.5" />
                <span>
                  * Invisalign treatment suitability is determined following a comprehensive clinical evaluation by Dr. Preethi in Saibaba Colony, Coimbatore.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Animated Clear Aligner Graphic & 3-Step Journey (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-8">
            {/* The SVG Aligner Artwork */}
            <AlignerGraphic />

            {/* 3-Step Consultation Journey Bar */}
            <div className="w-full max-w-md grid grid-cols-3 gap-2.5 p-3 rounded-clinic bg-white/5 border border-white/10 text-center">
              <div className="space-y-1">
                <span className="text-[10px] text-[#C7DDB0] font-mono block">STEP 01</span>
                <span className="text-xs font-medium text-white block">Digital 3D Scan</span>
              </div>
              <div className="space-y-1 border-x border-white/10">
                <span className="text-[10px] text-[#C7DDB0] font-mono block">STEP 02</span>
                <span className="text-xs font-medium text-white block">Custom Trays</span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-[#C7DDB0] font-mono block">STEP 03</span>
                <span className="text-xs font-medium text-white block">Straight Smile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
