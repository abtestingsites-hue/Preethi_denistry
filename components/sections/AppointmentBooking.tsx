"use client";

import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { AppointmentForm } from "@/components/booking/AppointmentForm";
import {
  Phone,
  Clock,
  Sparkles,
  CalendarCheck,
  ShieldCheck,
  MapPin,
} from "lucide-react";

interface AppointmentBookingProps {
  initialTreatmentId?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialTreatmentId,
}) => {
  return (
    <section
      id="booking-section"
      className="bg-white py-20 sm:py-28 border-b border-[#E8E9E5] relative overflow-hidden"
    >
      {/* Floating Pistachio-Green Decorative Geometric Accent */}
      <div className="hidden lg:block absolute -top-12 -right-12 w-96 h-96 rounded-full bg-[#C7DDB0]/30 -z-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Headline, Details & Reassurance (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase block">
                APPOINTMENT REQUEST · COIMBATORE
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#252724] font-sans leading-[1.12]">
                Let’s make time for your smile.
              </h2>
              <p className="text-xs sm:text-sm text-[#858780] leading-relaxed max-w-md pt-1">
                Choose a day and time window that suits your calendar. Our clinic reception team in Saibaba Colony will contact you via phone or WhatsApp to coordinate your confirmed consultation.
              </p>
            </div>

            {/* Practical Consultation Perks */}
            <div className="space-y-4 pt-2 border-t border-[#E8E9E5]">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0 mt-0.5">
                  <CalendarCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#252724] block">
                    Personalized Scheduling
                  </span>
                  <p className="text-[11px] text-[#858780] leading-relaxed">
                    Morning, afternoon, and evening windows available Monday through Saturday.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#252724] block">
                    Zero Clinical Pressure
                  </span>
                  <p className="text-[11px] text-[#858780] leading-relaxed">
                    Consultations are diagnostic discussions focused on your oral health priorities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#252724] block">
                    Invisalign® Smile Evaluations
                  </span>
                  <p className="text-[11px] text-[#858780] leading-relaxed">
                    Digital smile scans and alignment discussions available upon request.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Telephone Quick Call Box */}
            <div className="p-5 rounded-clinic bg-[#F8F8F4] border border-[#E8E9E5] space-y-2">
              <span className="text-xs font-semibold text-[#252724] block">
                Prefer to book over the phone?
              </span>
              <p className="text-xs text-[#858780]">
                Speak directly with our clinic receptionist for same-day availability or directions.
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#5C7651] hover:text-[#252724] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5C7651]" />
                  <span>Call Reception ({clinicInfo.phoneDisplay})</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Appointment Form on Light Canvas (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8F8F4] rounded-clinic-xl p-6 sm:p-10 border border-[#E8E9E5] shadow-card">
              <AppointmentForm initialTreatmentId={initialTreatmentId} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
