"use client";

import React from "react";
import { Sparkles, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";

export function TrustMetrics() {
  const trustIndicators = [
    {
      id: "invisalign-focus",
      value: "Invisalign®",
      label: "Clear Aligner Consultations",
      description: "Digital smile mapping and discreet custom trays",
      icon: Sparkles,
      accent: "#668C63",
    },
    {
      id: "disciplines",
      value: "6 Core Disciplines",
      label: "Comprehensive Dentistry",
      description: "Orthodontics, cosmetic, preventive & restorative care",
      icon: ShieldCheck,
      accent: "#668C63",
    },
    {
      id: "personal-care",
      value: "1-on-1",
      label: "Dedicated Consultations",
      description: "Unhurried, personal attention with Dr. Preethi",
      icon: HeartHandshake,
      accent: "#668C63",
    },
    {
      id: "location-hygiene",
      value: "Saibaba Colony",
      label: "Modern Clinic Facility",
      description: "Coimbatore · Hospital-grade sterilization protocols",
      icon: MapPin,
      accent: "#668C63",
    },
  ];

  return (
    <section
      aria-label="Clinic Trust Indicators and Commitments"
      className="bg-[#F7FAF7] border-b border-[#E5EAE4] py-10 lg:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustIndicators.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white p-6 rounded-2xl border border-[#E5EAE4] shadow-subtle hover:shadow-card hover:border-[#B8D8B5] transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF3E9] flex items-center justify-center text-[#668C63] group-hover:bg-[#B8D8B5]/30 transition-colors">
                    <Icon className="w-5 h-5 text-[#668C63]" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#B8D8B5]" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#111311] tracking-tight group-hover:text-[#466A45] transition-colors">
                    {item.value}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#668C63]">
                    {item.label}
                  </p>
                  <p className="text-xs text-[#666B66] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Integrity Note */}
        <p className="text-center text-[11px] text-[#666B66]/80 pt-6">
          Patient consultations in Saibaba Colony, Coimbatore · Adhering to clinical ethics and transparent care.
        </p>
      </div>
    </section>
  );
}

