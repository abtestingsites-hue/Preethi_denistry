"use client";

import React, { useState } from "react";
import { testimonialsData, testimonialsConfig } from "@/data/testimonialsData";
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, Quote } from "lucide-react";

export const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonialsData[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section id="stories" className="bg-white py-20 sm:py-28 border-b border-[#E8E9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: One Large Featured Quote (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-full bg-[#C7DDB0] text-[#252724]">
                <Quote className="w-4 h-4" />
              </span>
              <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase">
                PATIENT EXPERIENCES · SAIBABA COLONY
              </span>
            </div>

            {/* Oversized Editorial Quote */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#252724] leading-snug italic transition-opacity duration-300">
              “{current.feedbackText}”
            </blockquote>

            {/* Author Attribution */}
            <div className="pt-4 border-t border-[#E8E9E5] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#252724] text-white flex items-center justify-center font-mono text-xs font-semibold">
                  {current.initials}
                </div>
                <div>
                  <span className="block text-sm font-semibold text-[#252724]">
                    {current.patientName}
                  </span>
                  <span className="block text-[11px] text-[#5C7651] font-medium">
                    {current.treatmentTag} · {current.dateTag}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#5C7651] bg-[#F8F8F4] px-3 py-1.5 rounded-full border border-[#E8E9E5]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Patient Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Testimonial Index & Arrow Navigation (4 cols) */}
          <div className="lg:col-span-4 bg-[#F8F8F4] rounded-clinic-lg p-6 sm:p-8 border border-[#E8E9E5] space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#252724] tracking-tight">
                Verified Feedback
              </span>
              <span className="font-mono text-xs text-[#5C7651]">
                {String(currentIndex + 1).padStart(2, "0")} / {String(testimonialsData.length).padStart(2, "0")}
              </span>
            </div>

            {/* Index Tabs */}
            <div className="space-y-2">
              {testimonialsData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-full text-left p-3 rounded-lg text-xs transition-all duration-200 flex items-center justify-between ${
                    idx === currentIndex
                      ? "bg-white text-[#252724] font-semibold border border-[#E8E9E5] shadow-xs"
                      : "text-[#858780] hover:text-[#252724] hover:bg-white/50"
                  }`}
                >
                  <span className="line-clamp-1">{item.treatmentTag}</span>
                  <span className="font-mono text-[11px] text-[#858780]">{item.initials}</span>
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="pt-2 flex items-center justify-between border-t border-[#E8E9E5]">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full bg-white border border-[#E8E9E5] hover:bg-[#C7DDB0] text-[#252724] flex items-center justify-center transition-colors active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full bg-[#252724] hover:bg-[#111310] text-white flex items-center justify-center transition-colors active:scale-95"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-[#C7DDB0]" />
                </button>
              </div>

              <a
                href={testimonialsConfig.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-[#5C7651] hover:text-[#252724] underline underline-offset-4"
              >
                <span>Google Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Ethics Disclaimer */}
        <div className="mt-12 text-center text-[11px] text-[#858780]">
          * Feedback is published solely with patient consent following verified clinical consultations in Saibaba Colony, Coimbatore.
        </div>
      </div>
    </section>
  );
};

