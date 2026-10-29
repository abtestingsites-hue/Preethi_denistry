"use client";

import React from "react";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import { SmileIllustration } from "@/components/ui/SmileIllustration";
import { clinicInfo } from "@/data/clinicInfo";

interface FinalCTAProps {
  onBookAppointment: () => void;
  onContactClinic: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onBookAppointment,
  onContactClinic,
}) => {
  return (
    <section className="bg-[#111310] text-white pt-24 pb-20 sm:pt-32 sm:pb-28 relative overflow-hidden text-center border-b border-white/10">
      {/* Background Soft Pistachio Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#5C7651]/15 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-[#C7DDB0] tracking-wider uppercase font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#C7DDB0]" />
          <span>Saibaba Colony, Coimbatore</span>
        </div>

        {/* Oversized Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white font-sans leading-[1.08]">
          Your smile deserves thoughtful care.
        </h2>

        {/* Large Pistachio Smile Curve SVG Motif */}
        <div className="py-2">
          <SmileIllustration variant="smileCurveLarge" />
        </div>

        <p className="text-sm sm:text-base text-[#E8E9E5]/80 max-w-xl mx-auto leading-relaxed font-normal">
          From discreet Invisalign® clear aligner consultations to gentle preventive cleanings, experience dentistry designed around your comfort.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookAppointment}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#C7DDB0] text-[#111310] hover:bg-white transition-all duration-200 text-xs sm:text-sm font-medium shadow-float active:scale-[0.98]"
          >
            <span>Book an Appointment</span>
            <ArrowUpRight className="w-4 h-4 text-[#111310]" />
          </button>

          <button
            onClick={onContactClinic}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Locate Our Clinic</span>
          </button>
        </div>
      </div>
    </section>
  );
};
