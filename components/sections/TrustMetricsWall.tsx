"use client";

import React from "react";
import { ShieldCheck, Sparkles, MapPin, Heart } from "lucide-react";

export const TrustMetricsWall: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#E8E9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetrical Editorial Number Wall */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Large Featured Metric (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8F8F4] rounded-clinic-lg p-8 sm:p-12 border border-[#E8E9E5] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase block">
                CORE CLINICAL COMMITMENT
              </span>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-serif font-normal text-[#252724] tracking-tight">
                100<span className="text-[#5C7651] font-sans font-semibold">%</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#252724] font-sans">
                Doctor-Led, Unrushed Consultations
              </h3>
              <p className="text-xs sm:text-sm text-[#858780] leading-relaxed max-w-lg">
                Every consultation is conducted directly with Dr. Preethi in our private Saibaba Colony suite. We review oral health history, lifestyle factors, and aesthetic goals thoroughly without time pressure.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E8E9E5] flex items-center gap-3 text-xs text-[#252724]">
              <div className="w-8 h-8 rounded-full bg-[#C7DDB0] flex items-center justify-center shrink-0 text-[#252724]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-medium">
                Hospital-grade autoclave sterilization protocols for every procedure.
              </span>
            </div>
          </div>

          {/* Right: Two Smaller Stacked Metric Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* Upper Stacked Metric */}
            <div className="flex-1 bg-white rounded-clinic-lg p-6 sm:p-8 border border-[#E8E9E5] shadow-subtle flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase">
                  VERIFIED CLINIC FACILITY
                </span>
                <span className="p-2 rounded-full bg-[#C7DDB0]/40 text-[#5C7651]">
                  <MapPin className="w-4 h-4" />
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif text-[#252724] font-normal">
                  Saibaba Colony
                </div>
                <p className="text-xs text-[#858780] mt-1.5 leading-relaxed">
                  Centrally located in Coimbatore with calm acoustic interiors, muted olive ceiling trim, and easy accessibility.
                </p>
              </div>
            </div>

            {/* Lower Stacked Metric */}
            <div className="flex-1 bg-[#252724] text-white rounded-clinic-lg p-6 sm:p-8 border border-[#111310] shadow-card flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-widest text-[#C7DDB0] uppercase">
                  ORTHODONTIC FOCUS
                </span>
                <span className="p-2 rounded-full bg-white/10 text-[#C7DDB0]">
                  <Sparkles className="w-4 h-4" />
                </span>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif text-white font-normal">
                  Invisalign® Consultations
                </div>
                <p className="text-xs text-[#E8E9E5]/80 mt-1.5 leading-relaxed">
                  Modern digital clear aligner evaluations for discreet, wire-free tooth alignment tailored to your schedule.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Trust Statement Underneath */}
        <div className="mt-8 p-5 sm:p-6 rounded-clinic-lg bg-[#F8F8F4] border border-[#E8E9E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 text-[#252724]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-semibold text-[#252724] block">
                Ethical Healthcare & Conservative Dental Philosophy
              </span>
              <span className="text-[11px] sm:text-xs text-[#858780] block">
                We advocate tooth-preserving care and discuss all options openly before any treatment begins.
              </span>
            </div>
          </div>

          <span className="text-[11px] font-mono text-[#5C7651] uppercase tracking-wider bg-white px-3 py-1.5 rounded-full border border-[#E8E9E5] shrink-0">
            Verified Practice
          </span>
        </div>
      </div>
    </section>
  );
};

