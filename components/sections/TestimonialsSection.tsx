"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ExternalLink, Sparkles } from "lucide-react";
import { testimonialsData, testimonialsConfig } from "@/data/testimonialsData";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      aria-label="Verified Patient Testimonials"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-20 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#668C63]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{testimonialsConfig.eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111311] tracking-tight leading-[1.15]">
            {testimonialsConfig.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#666B66] leading-relaxed pt-1">
            {testimonialsConfig.subheading}
          </p>
        </div>

        {/* Editorial Feature Testimonial Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Active Testimonial Card (8 cols) */}
          <div className="lg:col-span-8 bg-[#F7FAF7] rounded-3xl border border-[#E5EAE4] p-8 sm:p-12 flex flex-col justify-between shadow-subtle relative overflow-hidden">
            {/* Background Decorative Quote Mark */}
            <div className="absolute top-6 right-6 text-[#EAF3E9] pointer-events-none -z-0">
              <Quote className="w-24 h-24 sm:w-32 sm:h-32 rotate-180" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Star Rating & Treatment Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1 text-[#668C63]">
                  {[...Array(currentTestimonial.ratingStars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EAF3E9] text-[#466A45] border border-[#B8D8B5]/50">
                  {currentTestimonial.treatmentTag}
                </span>
              </div>

              {/* Patient Feedback Quote */}
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#111311] leading-relaxed italic">
                &ldquo;{currentTestimonial.feedbackText}&rdquo;
              </blockquote>
            </div>

            {/* Author Footer & Navigation Controls */}
            <div className="relative z-10 pt-8 mt-6 border-t border-[#E5EAE4] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#668C63] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {currentTestimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#111311]">
                    {currentTestimonial.patientName}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-[#666B66]">
                    <span className="flex items-center gap-1 text-[#466A45] font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#668C63]" />
                      {currentTestimonial.source}
                    </span>
                    <span>·</span>
                    <span>{currentTestimonial.dateTag}</span>
                  </div>
                </div>
              </div>

              {/* Carousel Next / Prev Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={handlePrev}
                  aria-label="Previous patient story"
                  className="p-2.5 rounded-full bg-white border border-[#E5EAE4] text-[#111311] hover:bg-[#EAF3E9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#666B66] px-1">
                  0{activeIndex + 1} / 0{testimonialsData.length}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next patient story"
                  className="p-2.5 rounded-full bg-white border border-[#E5EAE4] text-[#111311] hover:bg-[#EAF3E9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Side Column: Patient Index Selector & Verified Review Hub (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="p-6 rounded-3xl bg-[#F7FAF7] border border-[#E5EAE4] space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111311]">
                Patient Perspectives
              </h3>
              <div className="space-y-2">
                {testimonialsData.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "w-full text-left p-3 rounded-xl transition-all text-xs flex items-center justify-between",
                      activeIndex === idx
                        ? "bg-white text-[#111311] font-semibold border border-[#B8D8B5] shadow-sm"
                        : "text-[#666B66] hover:bg-white/60 hover:text-[#111311]"
                    )}
                  >
                    <span className="truncate">{item.patientName} — {item.treatmentTag}</span>
                    <span className="font-mono text-[10px] text-[#668C63]">0{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Verified Public Profile Card */}
            <div className="p-6 rounded-3xl bg-[#EAF3E9]/80 border border-[#B8D8B5]/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#466A45] uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-[#668C63]" />
                <span>Verified Feedback Policy</span>
              </div>
              <p className="text-xs text-[#666B66] leading-relaxed">
                {testimonialsConfig.disclaimer}
              </p>
              <div className="pt-1">
                <a
                  href={testimonialsConfig.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#466A45] hover:text-[#111311] underline underline-offset-4 transition-colors"
                >
                  <span>Read Public Clinic Profile on Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

