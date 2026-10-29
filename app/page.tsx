"use client";

import React, { useState } from "react";
import { AnnouncementMarquee } from "@/components/layout/AnnouncementMarquee";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { TrustMetrics } from "@/components/sections/TrustMetrics";
import { ClinicIntroduction } from "@/components/sections/ClinicIntroduction";
import { InvisalignFeature } from "@/components/sections/InvisalignFeature";
import { TreatmentPortfolio } from "@/components/sections/TreatmentPortfolio";
import { ClinicGallery } from "@/components/sections/ClinicGallery";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
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
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);

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
    <div className="flex flex-col min-h-screen">
      {/* SECTION 01 — SCROLLING PROMOTIONAL ANNOUNCEMENT BAR (Above Navbar) */}
      <AnnouncementMarquee onBookClick={() => handleOpenBooking()} />

      {/* SECTION 02 — PREMIUM NAVIGATION */}
      <SiteHeader onBookAppointmentClick={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* SECTION 03 — CINEMATIC VIDEO HERO */}
        <CinematicHero
          onBookAppointment={() => handleOpenBooking()}
          onExploreInvisalign={handleExploreInvisalign}
          onExploreClinic={handleExploreClinic}
        />

        {/* SECTION 04 — TRUST AND CLINIC KPI STRIP */}
        <TrustMetrics />

        {/* SECTION 05 — INTRODUCTION TO THE CLINIC */}
        <ClinicIntroduction
          onDiscoverClinic={handleExploreClinic}
          onBookAppointment={() => handleOpenBooking()}
        />

        {/* SECTION 06 — INVISALIGN FEATURE EXPERIENCE */}
        <InvisalignFeature
          onEnquireInvisalign={() =>
            handleOpenBooking("Invisalign® & Clear Aligners")
          }
        />

        {/* SECTION 07 — TREATMENT PORTFOLIO */}
        <TreatmentPortfolio
          onBookTreatment={(title) => handleOpenBooking(title)}
        />

        {/* SECTION 08 — DEDICATED CLINIC GALLERY */}
        <ClinicGallery />

        {/* SECTION 09 — PATIENT TESTIMONIALS AND REVIEW METRICS */}
        <TestimonialsSection />

        {/* SECTION 10 — APPOINTMENT BOOKING */}
        <AppointmentBooking initialTreatmentId={selectedTreatment} />

        {/* SECTION 11 — CONTACT AND EMBEDDED LOCATION */}
        <ContactMap onBookAppointment={() => handleOpenBooking()} />

        {/* SECTION 12 — FREQUENTLY ASKED QUESTIONS */}
        <FAQAccordion />

        {/* SECTION 13 — FINAL CONVERSION BANNER */}
        <FinalCTA
          onBookAppointment={() => handleOpenBooking()}
          onContactClinic={handleContactClinic}
        />
      </main>

      {/* SECTION 14 — PREMIUM FOOTER */}
      <SiteFooter />

      {/* Persistent Controls & Floating Actions */}
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

