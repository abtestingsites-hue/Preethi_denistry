"use client";

import React from "react";
import { clinicInfo } from "@/data/clinicInfo";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ContactMapProps {
  onBookAppointment: () => void;
}

export const ContactMap: React.FC<ContactMapProps> = ({
  onBookAppointment,
}) => {
  return (
    <section id="contact" className="bg-[#F8F8F4] py-20 sm:py-28 border-b border-[#E8E9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase block">
            LOCATION & CONNECT
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#252724] font-sans">
            We’re here in Saibaba Colony.
          </h2>
          <p className="text-xs sm:text-sm text-[#858780] leading-relaxed">
            Visit our clinic or contact our reception desk for appointments, directions, and general inquiries.
          </p>
        </div>

        {/* Asymmetrical 2-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Address Card */}
              <div className="p-5 rounded-clinic bg-white border border-[#E8E9E5] shadow-xs space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-semibold text-[#252724]">
                    Clinic Location
                  </span>
                </div>
                <div className="pl-10 space-y-1">
                  <p className="text-xs sm:text-sm font-medium text-[#252724]">
                    {clinicInfo.name}
                  </p>
                  <p className="text-xs text-[#858780] leading-relaxed">
                    {clinicInfo.fullAddress}
                  </p>
                  <a
                    href={clinicInfo.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#5C7651] font-medium hover:underline underline-offset-4 pt-1"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Telephone & WhatsApp */}
              <div className="p-5 rounded-clinic bg-white border border-[#E8E9E5] shadow-xs space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-semibold text-[#252724]">
                    Direct Reception
                  </span>
                </div>
                <div className="pl-10 space-y-1">
                  <a
                    href={`tel:${clinicInfo.phoneRaw}`}
                    className="text-xs sm:text-sm font-medium text-[#252724] hover:text-[#5C7651] transition-colors block"
                  >
                    {clinicInfo.phoneDisplay}
                  </a>
                  {clinicInfo.socialLinks.whatsapp && (
                    <a
                      href={clinicInfo.socialLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#5C7651] font-medium hover:underline underline-offset-4 pt-0.5"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>WhatsApp Consultation Enquiry</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-clinic bg-white border border-[#E8E9E5] shadow-xs space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-semibold text-[#252724]">
                    Email Inquiries
                  </span>
                </div>
                <div className="pl-10 space-y-1">
                  <a
                    href={`mailto:${clinicInfo.email}`}
                    className="text-xs sm:text-sm font-medium text-[#252724] hover:text-[#5C7651] transition-colors block"
                  >
                    {clinicInfo.email}
                  </a>
                  <span className="text-[11px] text-[#858780] block">
                    For corporate care & records assistance
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-5 rounded-clinic bg-white border border-[#E8E9E5] shadow-xs space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-semibold text-[#252724]">
                    Clinic Timings
                  </span>
                </div>
                <div className="pl-10 space-y-1.5 pt-1 text-xs text-[#858780]">
                  {clinicInfo.openingHours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span>{h.day}</span>
                      <span className="font-medium text-[#252724]">{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Button
                variant="dark"
                size="md"
                className="w-full sm:w-auto text-xs"
                onClick={onBookAppointment}
                leftIcon={<Calendar className="w-4 h-4 text-[#C7DDB0]" />}
              >
                Book Appointment
              </Button>

              <a
                href={clinicInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="md"
                  className="w-full text-xs"
                  leftIcon={<Navigation className="w-3.5 h-3.5 text-[#5C7651]" />}
                >
                  Open Directions
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Embedded Map with Frame (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative w-full h-full min-h-[420px] rounded-clinic-xl overflow-hidden border border-[#E8E9E5] bg-white shadow-card flex flex-col justify-between">
              {/* Responsive Google Maps Embed with Lazy Loading */}
              <iframe
                title="Dr. Preethi's Dentistry Saibaba Colony Coimbatore Map"
                src="https://maps.google.com/maps?q=Saibaba+Colony+Coimbatore+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover flex-1"
              />

              {/* Offset Footer Strip on Map */}
              <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#E8E9E5] flex items-center justify-between text-xs text-[#252724]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#5C7651]" />
                  <span className="font-medium font-sans">
                    Saibaba Colony, Coimbatore, Tamil Nadu
                  </span>
                </div>
                <a
                  href={clinicInfo.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#5C7651] hover:underline"
                >
                  Directions ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
