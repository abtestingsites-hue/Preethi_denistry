"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";
import { faqData } from "@/data/faqData";
import { cn } from "@/lib/utils";

export function FAQAccordion() {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-20 lg:py-32 bg-[#F7FAF7] border-b border-[#E5EAE4]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#668C63]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PATIENT QUESTIONS & ANSWERS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111311] tracking-tight leading-[1.15]">
            Questions Before Your Visit?
          </h2>
          <p className="text-base text-[#666B66] leading-relaxed pt-1">
            Common questions regarding appointment requests, Invisalign consultations, and what to expect when visiting our Saibaba Colony practice.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openIds.includes(item.id);
            const questionId = `faq-q-${item.id}`;
            const answerId = `faq-a-${item.id}`;

            return (
              <div
                key={item.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden bg-white",
                  isOpen
                    ? "border-[#B8D8B5] shadow-card"
                    : "border-[#E5EAE4] hover:border-[#668C63]/40"
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={questionId}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#668C63] font-semibold">
                        0{index + 1}
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-semibold text-[#111311]">
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                        isOpen
                          ? "bg-[#668C63] text-white rotate-180"
                          : "bg-[#EAF3E9] text-[#466A45]"
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </h3>

                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={cn(
                    "transition-all duration-300 ease-in-out px-6 text-sm text-[#666B66] leading-relaxed",
                    isOpen
                      ? "max-h-96 pb-6 pt-1 opacity-100"
                      : "max-h-0 pb-0 pt-0 opacity-0 overflow-hidden"
                  )}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Support Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#E5EAE4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-[#111311] text-left">
            <HelpCircle className="w-5 h-5 text-[#668C63] shrink-0" />
            <span>Have a specific clinical or scheduling question not covered here?</span>
          </div>
          <a
            href="#booking-section"
            className="font-semibold text-[#668C63] hover:text-[#466A45] underline underline-offset-4 shrink-0"
          >
            Ask in Your Appointment Request
          </a>
        </div>
      </div>
    </section>
  );
}

