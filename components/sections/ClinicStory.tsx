"use client";

import React from "react";
import Image from "next/image";
import { clinicGalleryImages } from "@/data/clinicImages";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ClinicStoryProps {
  onDiscoverClinic: () => void;
  onBookAppointment: () => void;
}

export const ClinicStory: React.FC<ClinicStoryProps> = ({
  onDiscoverClinic,
  onBookAppointment,
}) => {
  // Use the verified reception lounge photo from clinicImages
  const loungeImage =
    clinicGalleryImages.find((img) => img.id === "reception-lounge") ||
    clinicGalleryImages[0];

  return (
    <section id="about" className="bg-[#F8F8F4] py-20 sm:py-28 border-b border-[#E8E9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Large Editorial Story & Numbered Principles (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase block">
                PHILOSOPHY & CLINICAL CARE
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#252724] font-sans leading-[1.12]">
                Care that begins with listening.
              </h2>
            </div>

            <div className="space-y-4 max-w-xl text-xs sm:text-sm text-[#858780] leading-relaxed">
              <p>
                At Dr. Preethi’s Dentistry in Saibaba Colony, Coimbatore, we believe the best dental outcomes occur when patients feel genuinely heard, comfortable, and informed about every step of their oral healthcare journey.
              </p>
              <p>
                Our practice is designed around thoughtful restraint: warm off-white walls, acoustic muted olive ceiling details, clean architectural lighting, and ergonomic seating. By removing traditional clinical tension, we create space for calm, clear communication.
              </p>
            </div>

            {/* Vertical Numbered Principles */}
            <div className="space-y-5 pt-2 border-t border-[#E8E9E5]">
              <div className="flex items-start gap-5">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#5C7651] shrink-0 mt-0.5">
                  01
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-[#252724] tracking-tight">
                    Welcoming Clinical Environment
                  </h4>
                  <p className="text-xs text-[#858780] leading-relaxed max-w-md">
                    Thoughtful interior acoustics, peaceful waiting lounge, and hygienic glass partitions designed to eliminate dental anxiety.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#5C7651] shrink-0 mt-0.5">
                  02
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-[#252724] tracking-tight">
                    Individualized Treatment Discussions
                  </h4>
                  <p className="text-xs text-[#858780] leading-relaxed max-w-md">
                    Every smile is biologically unique. Dr. Preethi explains your radiographic scans and treatment choices without pressure or jargon.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-[#5C7651] shrink-0 mt-0.5">
                  03
                </span>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-[#252724] tracking-tight">
                    Patient-Comfort-Focused Experience
                  </h4>
                  <p className="text-xs text-[#858780] leading-relaxed max-w-md">
                    Ergonomic treatment suites, gentle hands-on technique, and dedicated attention during each phase of care.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="dark"
                size="md"
                onClick={onBookAppointment}
                rightIcon={<ArrowUpRight className="w-4 h-4 text-[#C7DDB0]" />}
              >
                Plan Your Consultation
              </Button>
              <button
                onClick={onDiscoverClinic}
                className="text-xs font-semibold text-[#5C7651] hover:text-[#252724] transition-colors underline underline-offset-4"
              >
                View Clinic Spaces & Portfolio →
              </button>
            </div>
          </div>

          {/* Right Column: Narrow Offset Image Column with Pistachio Geometric Shapes (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Background overlapping pistachio geometric card */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-clinic-xl bg-[#C7DDB0] -rotate-2 -z-10" />

            {/* Main Tall Image Card */}
            <div className="relative rounded-clinic-lg overflow-hidden bg-white border border-[#E8E9E5] shadow-card aspect-[3/4]">
              <Image
                src={loungeImage.fallbackUrl}
                alt="Dr. Preethi's Dentistry Reception Lounge and Waiting Area in Saibaba Colony"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#111310]/80 via-transparent to-transparent" />

              {/* Inset Bottom Label */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#C7DDB0] block">
                  INTERIOR ARCHITECTURE
                </span>
                <p className="text-xs font-medium text-white">
                  Saibaba Colony Clinic Reception Lounge
                </p>
                <p className="text-[11px] text-[#E8E9E5]/80 line-clamp-2">
                  Warm off-white walls, muted olive ceiling trim, and comfortable grey upholstered seating.
                </p>
              </div>
            </div>

            {/* Small Floating Detail Note */}
            <div className="mt-4 p-4 rounded-clinic bg-white border border-[#E8E9E5] shadow-subtle flex items-center justify-between text-xs text-[#252724]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#5C7651]" />
                <span className="font-medium">Saibaba Colony, Coimbatore</span>
              </div>
              <span className="text-[11px] text-[#858780]">Est. Care</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

