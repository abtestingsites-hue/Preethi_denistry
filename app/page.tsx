"use client";

import React, { useState } from "react";
import { AnnouncementMarquee } from "@/components/layout/AnnouncementMarquee";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { TypographyHero } from "@/components/sections/TypographyHero";
import { TrustMetricsWall } from "@/components/sections/TrustMetricsWall";
import { ClinicStory } from "@/components/sections/ClinicStory";
import { InvisalignFeature } from "@/components/sections/InvisalignFeature";
import { TreatmentRail } from "@/components/sections/TreatmentRail";
import { ClinicMosaic } from "@/components/sections/ClinicMosaic";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { AppointmentBooking } from "@/components/sections/AppointmentBooking";
import { ContactMap } from "@/components/sections/ContactMap";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingContactBar } from "@/components/ui/FloatingContactBar";
import { AppointmentModal } from "@/components/booking/AppointmentModal";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(
    undefined
  );

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleOpenBooking = (treatmentTitle?: string) => {
    setSelectedTreatment(treatmentTitle);
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      // On desktop, scroll smoothly to the conversion booking section
      scrollToSection("booking-section");
    } else {
      // On mobile / small tablet, open the dedicated booking modal
      setIsModalOpen(true);
    }
  };

  const handleExploreTreatments = () => {
    scrollToSection("treatments");
  };

  const handleExploreInvisalign = () => {
    scrollToSection("invisalign");
  };

  const handleExploreClinic = () => {
    scrollToSection("gallery");
  };

  const handleContactClinic = () => {
    scrollToSection("contact");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F4] text-[#252724]">
      {/* SECTION 01 — ANNOUNCEMENT MARQUEE (White, grey border, smile separators) */}
      <AnnouncementMarquee onBookClick={() => handleOpenBooking()} />

      {/* SECTION 02 — MINIMAL FLOATING NAVIGATION */}
      <SiteHeader onBookAppointmentClick={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* SECTION 03 — TYPOGRAPHY-ONLY HERO (Strictly no hero photo/video) */}
        <TypographyHero
          onBookAppointment={() => handleOpenBooking()}
          onExploreTreatments={handleExploreTreatments}
          onExploreInvisalign={handleExploreInvisalign}
        />

        {/* SECTION 04 — TRUST METRICS NUMBER WALL (Asymmetric 7-col + 5-col) */}
        <TrustMetricsWall />

        {/* SECTION 05 — ABOUT: SPLIT EDITORIAL STORY (Care that begins with listening) */}
        <ClinicStory
          onDiscoverClinic={handleExploreClinic}
          onBookAppointment={() => handleOpenBooking()}
        />

        {/* SECTION 06 — INVISALIGN: SIGNATURE DARK FEATURE (A clearer path to your smile) */}
        <InvisalignFeature
          onEnquireInvisalign={() =>
            handleOpenBooking("Invisalign® & Clear Aligners")
          }
        />

        {/* SECTION 07 — TREATMENTS: HORIZONTAL DISCOVERY RAIL (Scroll snap cards 01-06) */}
        <TreatmentRail
          onBookTreatment={(title) => handleOpenBooking(title)}
        />

        {/* SECTION 08 — CLINIC GALLERY: ASYMMETRIC MOSAIC (Editorial photo compositions) */}
        <ClinicMosaic />

        {/* SECTION 09 — TESTIMONIALS: HORIZONTAL STORYTELLING (1 large quote left, index right) */}
        <TestimonialSlider />

        {/* SECTION 10 — APPOINTMENT BOOKING (Floating pistachio panel & validation) */}
        <AppointmentBooking initialTreatmentId={selectedTreatment} />

        {/* SECTION 11 — CONTACT: ASYMMETRIC MAP LAYOUT (Saibaba Colony coordinates & cards) */}
        <ContactMap onBookAppointment={() => handleOpenBooking()} />

        {/* SECTION 12 — FAQ: MINIMAL TYPOGRAPHIC ACCORDION (Numbered 01-06) */}
        <FAQAccordion />

        {/* SECTION 13 — FINAL CTA (Dramatic near-black banner with oversized smile curve) */}
        <FinalCTA
          onBookAppointment={() => handleOpenBooking()}
          onContactClinic={handleContactClinic}
        />
      </main>

      {/* SECTION 14 — EDITORIAL FOOTER (Near-black #111310 with Artibots credit) */}
      <SiteFooter />

      {/* Persistent Floating Utility Controls */}
      <BackToTop />
      <FloatingContactBar onOpenBookingModal={() => handleOpenBooking()} />

      {/* Responsive Booking Modal Dialog */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTreatmentId={selectedTreatment}
      />
    </div>
  );
}
