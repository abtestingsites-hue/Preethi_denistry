"use client";

import React from "react";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AlignerGraphic } from "@/components/ui/AlignerGraphic";

interface FinalCTAProps {
  onBookAppointment: () => void;
  onContactClinic: () => void;
}

export function FinalCTA({
  onBookAppointment,
  onContactClinic,
}: FinalCTAProps) {
  return (
    <section
      aria-label="Final Appointment Call to Action"
      className="relative py-24 lg:py-32 bg-[#111411] text-white overflow-hidden"
    >
      {/* Background Decorative Aligner Arcs & Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#668C63]/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#B8D8B5]/10 rounded-full blur-2xl" />

        {/* Floating Aligner Tray Visual in Background */}
        <div className="absolute -bottom-10 right-10 opacity-20 hidden md:block">
          <AlignerGraphic size="xl" animated={true} />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-[0.2em] uppercase text-[#B8D8B5]">
          <Sparkles className="w-3.5 h-3.5 text-[#B8D8B5]" />
          <span>START YOUR SMILE CONSULTATION</span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] text-balance">
          Your Smile Journey <br />
          <span className="italic font-light text-[#B8D8B5]">Starts Here.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg md:text-xl text-[#E5EAE4]/85 leading-relaxed max-w-2xl mx-auto font-light">
          Take the next step toward understanding your dental care options with a consultation at Dr. Preethi’s Dentistry in Saibaba Colony, Coimbatore.
        </p>

        {/* CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            onClick={onBookAppointment}
            className="w-full sm:w-auto bg-[#668C63] hover:bg-[#466A45] text-white shadow-elevated px-8 py-4"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Book an Appointment
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={onContactClinic}
            className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-[#B8D8B5] px-8 py-4"
          >
            Contact the Clinic
          </Button>
        </div>

        {/* Clinic Location Footnote */}
        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-[#E5EAE4]/60">
          <MapPin className="w-3.5 h-3.5 text-[#B8D8B5]" />
          <span>Saibaba Colony, Coimbatore · Unhurried 1-on-1 Consultations</span>
        </div>
      </div>
    </section>
  );
}

