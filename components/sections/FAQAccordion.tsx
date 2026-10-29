"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faqData";
import { Plus, Minus, HelpCircle, Phone } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-request-appointment");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-28 border-b border-[#E8E9E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="space-y-3">
          <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase block">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#252724] font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#858780] leading-relaxed max-w-xl">
            Key details regarding appointments, your first dental consultation, clear aligners, and clinic directions.
          </p>
        </div>

        {/* Minimal Typographic Accordion */}
        <div className="divide-y divide-[#E8E9E5] border-y border-[#E8E9E5]">
          {faqData.map((item, idx) => {
            const isOpen = openId === item.id;
            const seqNum = String(idx + 1).padStart(2, "0");

            return (
              <div key={item.id} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-body-${item.id}`}
                  className="w-full text-left flex items-start justify-between gap-6 focus:outline-none group select-none"
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="font-serif text-lg sm:text-xl font-normal text-[#5C7651] mt-0.5 shrink-0">
                      {seqNum}
                    </span>
                    <h3 className="text-base sm:text-lg font-medium text-[#252724] group-hover:text-[#5C7651] transition-colors leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full border border-[#E8E9E5] flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#C7DDB0] text-[#252724] border-[#A9C49A]"
                        : "bg-[#F8F8F4] text-[#858780] group-hover:border-[#5C7651]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-body-${item.id}`}
                    role="region"
                    className="pl-9 sm:pl-12 pr-4 pt-4 text-xs sm:text-sm text-[#858780] leading-relaxed"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Assistance Box */}
        <div className="p-6 rounded-clinic-lg bg-[#F8F8F4] border border-[#E8E9E5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#C7DDB0] text-[#252724] flex items-center justify-center shrink-0">
              <HelpCircle className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-semibold text-[#252724] block">
                Have a specific clinical or scheduling question?
              </span>
              <span className="text-[11px] text-[#858780]">
                Our clinic team is available to assist you directly.
              </span>
            </div>
          </div>

          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#252724] text-white text-xs font-medium hover:bg-[#111310] transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#C7DDB0]" />
            <span>Call Reception</span>
          </a>
        </div>
      </div>
    </section>
  );
};
