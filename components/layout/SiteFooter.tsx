"use client";

import React from "react";
import Link from "next/link";
import { clinicInfo, agencyCredit } from "@/data/clinicInfo";
import { treatmentsData } from "@/data/treatmentsData";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

export const SiteFooter: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-[#111310] text-[#E8E9E5] pt-16 pb-24 md:pb-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Clinic Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C7DDB0] text-[#111310] flex items-center justify-center font-serif text-lg font-semibold">
                P
              </div>
              <div>
                <span className="block text-base font-semibold tracking-tight text-white font-sans">
                  {clinicInfo.name}
                </span>
                <span className="block text-[11px] text-[#C7DDB0] font-medium tracking-wider uppercase">
                  {clinicInfo.locality} · {clinicInfo.city}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#858780] leading-relaxed max-w-sm">
              Contemporary dental care and Invisalign® clear aligner consultations in Saibaba Colony, Coimbatore. Designed around patient comfort, acoustic tranquility, and individual smile health.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C7DDB0]">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#C7DDB0]" />
              <span>Hospital-grade sterilization & doctor-led consultations</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-[#858780]">
              <li>
                <button
                  onClick={() => handleScrollTo("hero")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("about")}
                  className="hover:text-white transition-colors"
                >
                  About the Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("invisalign")}
                  className="hover:text-white transition-colors"
                >
                  Invisalign® Focus
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("treatments")}
                  className="hover:text-white transition-colors"
                >
                  Treatment Rail
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("gallery")}
                  className="hover:text-white transition-colors"
                >
                  Clinic Mosaic
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("stories")}
                  className="hover:text-white transition-colors"
                >
                  Patient Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("faq")}
                  className="hover:text-white transition-colors"
                >
                  Patient FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Treatments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Clinical Services
            </h3>
            <ul className="space-y-2 text-xs text-[#858780]">
              {treatmentsData.map((t) => (
                <li key={t.id}>
                  <button
                    onClick={() => handleScrollTo("treatments")}
                    className="hover:text-white transition-colors text-left"
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Saibaba Colony Clinic
            </h3>
            <div className="space-y-2.5 text-xs text-[#858780]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C7DDB0] shrink-0 mt-0.5" />
                <span>{clinicInfo.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C7DDB0] shrink-0" />
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {clinicInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C7DDB0] shrink-0" />
                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {clinicInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#C7DDB0] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Opening Hours</span>
                  {clinicInfo.openingHours.map((h, i) => (
                    <span key={i} className="block text-[11px] text-[#858780]">
                      {h.day}: {h.hours}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#858780]">
          <div className="flex flex-wrap items-center gap-4">
            <p>
              © {new Date().getFullYear()} {clinicInfo.name}. All rights reserved.
            </p>
            <span>·</span>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Use
            </Link>
          </div>

          <div className="text-center md:text-right">
            <span>Engineered by </span>
            <span className="text-[#C7DDB0] font-medium">
              {agencyCredit.name}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
