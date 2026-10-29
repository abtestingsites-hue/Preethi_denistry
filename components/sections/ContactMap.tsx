"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Sparkles,
  Calendar,
  AlertCircle,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { clinicInfo } from "@/data/clinicInfo";

interface ContactMapProps {
  onBookAppointment: () => void;
}

export function ContactMap({ onBookAppointment }: ContactMapProps) {
  const [mapError, setMapError] = useState(false);

  return (
    <section
      id="contact"
      aria-label="Contact Information and Location"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#668C63]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LOCATION & REACHABILITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111311] tracking-tight leading-[1.15]">
            Visit Us in Coimbatore.
          </h2>
          <p className="text-base sm:text-lg text-[#666B66] leading-relaxed pt-1">
            Conveniently situated in Saibaba Colony with accessible parking and calm clinical surroundings.
            Reach out by phone, WhatsApp, or request an appointment online.
          </p>
        </div>

        {/* Two Coordinated Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Panel 1: Comprehensive Clinic Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-[#F7FAF7] rounded-3xl border border-[#E5EAE4] p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-subtle">
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#668C63]">
                  Consultation Practice
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#111311]">
                  {clinicInfo.name}
                </h3>
                <p className="text-xs text-[#666B66]">
                  Lead Clinician: {clinicInfo.leadDentist}
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3E9] text-[#466A45] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#668C63]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111311]">Clinic Location</h4>
                    <p className="text-[#666B66]">{clinicInfo.fullAddress}</p>
                    <a
                      href={clinicInfo.googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#668C63] hover:text-[#466A45] mt-1 underline underline-offset-2"
                    >
                      <span>Get Driving Directions</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3E9] text-[#466A45] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#668C63]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111311]">Telephone</h4>
                    <a
                      href={`tel:${clinicInfo.phoneRaw}`}
                      className="text-[#666B66] hover:text-[#111311] block"
                    >
                      {clinicInfo.phoneDisplay}
                    </a>
                    <span className="text-[11px] text-[#666B66]">
                      Reception hours: Mon–Sat, 09:30 AM – 08:00 PM
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3E9] text-[#466A45] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#668C63]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111311]">Email Enquiries</h4>
                    <a
                      href={`mailto:${clinicInfo.email}`}
                      className="text-[#666B66] hover:text-[#111311] block"
                    >
                      {clinicInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3E9] text-[#466A45] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#668C63]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#111311]">Consultation Hours</h4>
                    <div className="space-y-1 text-xs text-[#666B66] mt-1">
                      {clinicInfo.openingHours.map((h, i) => (
                        <p key={i}>
                          <span className="font-medium text-[#111311]">{h.day}:</span>{" "}
                          {h.hours}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel CTA */}
            <div className="pt-6 border-t border-[#E5EAE4] space-y-3">
              <Button
                variant="primary"
                size="md"
                onClick={onBookAppointment}
                className="w-full"
                leftIcon={<Calendar className="w-4 h-4" />}
              >
                Book Appointment Online
              </Button>
            </div>
          </div>

          {/* Panel 2: Responsive Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden border border-[#E5EAE4] bg-white shadow-subtle min-h-[420px] sm:min-h-[480px]">
            {/* Map Frame Container */}
            <div className="relative flex-1 w-full h-full min-h-[380px]">
              {!mapError ? (
                <iframe
                  title="Dr. Preethi's Dentistry Google Maps Location in Saibaba Colony"
                  src={clinicInfo.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full absolute inset-0"
                  onError={() => setMapError(true)}
                />
              ) : (
                /* Fallback Location Card */
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#F7FAF7] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#EAF3E9] flex items-center justify-center text-[#668C63]">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-semibold text-[#111311]">
                    Interactive Map Offline
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666B66] max-w-sm">
                    {clinicInfo.name} is located at {clinicInfo.fullAddress}. Click below to navigate directly using your device’s map app.
                  </p>
                  <a
                    href={clinicInfo.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#668C63] text-white text-xs font-semibold hover:bg-[#466A45] transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              )}
            </div>

            {/* Map Bottom Bar */}
            <div className="p-4 bg-white border-t border-[#E5EAE4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-[#666B66]">
                Saibaba Colony, Coimbatore · Easy on-street & nearby parking available
              </span>

              <a
                href={clinicInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#668C63] hover:text-[#466A45] shrink-0"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

