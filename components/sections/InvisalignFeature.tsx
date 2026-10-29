"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Scan, CalendarCheck, Compass, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AlignerGraphic } from "@/components/ui/AlignerGraphic";

interface InvisalignFeatureProps {
  onEnquireInvisalign: () => void;
}

export function InvisalignFeature({
  onEnquireInvisalign,
}: InvisalignFeatureProps) {
  const invisalignFeatures = [
    {
      step: "01",
      title: "Clear-Aligner Consultation",
      description:
        "Comprehensive oral evaluation, digital bite scans, and one-on-one discussion of your aesthetic and orthodontic aspirations.",
      icon: Scan,
    },
    {
      step: "02",
      title: "Personalized Treatment Planning",
      description:
        "A 3D virtual roadmap simulating tooth movement step-by-step so you can visualize the intended progression prior to tray fabrication.",
      icon: Compass,
    },
    {
      step: "03",
      title: "Guidance Throughout the Journey",
      description:
        "Regular 4–6 week progress check-ins at our Saibaba Colony clinic ensuring your aligners fit comfortably and track predictably.",
      icon: CalendarCheck,
    },
  ];

  return (
    <section
      id="invisalign"
      aria-label="Invisalign Clear Aligner Experience"
      className="py-20 lg:py-32 bg-[#EAF3E9]/60 border-y border-[#E5EAE4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#668C63]">
            <Sparkles className="w-4 h-4 text-[#668C63]" />
            <span>ORTHODONTIC SIGNATURE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111311] tracking-tight leading-[1.15]">
            A Clearer Approach to Your Smile.
          </h2>
          <p className="text-base sm:text-lg text-[#666B66] leading-relaxed pt-1">
            Explore clear-aligner treatment options and learn whether they may be suitable
            for your individual dental needs through a professional consultation in Saibaba Colony.
          </p>
        </div>

        {/* Feature Experience Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Tray & Photography Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#B8D8B5]/60 bg-white shadow-elevated p-3 sm:p-4">
              {/* Authentic Clinic Display Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85"
                  alt="Invisalign Clear Aligner Consultation Suite at Dr. Preethi's Dentistry"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="font-semibold text-[#B8D8B5] uppercase tracking-wider text-[10px]">
                    Discreet Orthodontic System
                  </span>
                  <p className="text-white/90">Removable custom aligners engineered from biocompatible polymers</p>
                </div>
              </div>

              {/* Floating Translucent Aligner Graphic Overlap */}
              <div className="absolute -top-6 -right-6 sm:-right-8 z-20 hidden sm:block">
                <AlignerGraphic size="md" animated={true} />
              </div>
            </div>

            {/* Ambient Green Decorative Accents */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#B8D8B5]/40 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

          {/* Right Column: 3 Guided Feature Pillars & Consultation CTA (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              {invisalignFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="p-5 rounded-2xl bg-white border border-[#E5EAE4] shadow-subtle hover:border-[#B8D8B5] transition-all duration-300 space-y-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EAF3E9] text-[#466A45] flex items-center justify-center text-xs font-bold group-hover:bg-[#B8D8B5]/40 transition-colors">
                          <Icon className="w-4 h-4 text-[#668C63]" />
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-[#111311] group-hover:text-[#466A45] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#668C63]">
                        {item.step}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#666B66] leading-relaxed pl-11">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Medical Transparency Note */}
            <div className="p-4 rounded-xl bg-white/80 border border-[#E5EAE4] flex items-start gap-3 text-xs text-[#666B66]">
              <Info className="w-4 h-4 text-[#668C63] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#111311]">Clinical Advisory:</strong> Clear-aligner treatment suitability requires an individualized clinical assessment and digital diagnostic evaluation by a qualified dental professional.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onEnquireInvisalign}
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Enquire About Invisalign
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

