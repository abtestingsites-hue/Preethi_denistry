"use client";

import React, { useState } from "react";
import Image from "next/image";
import { clinicGalleryImages, ClinicImageItem } from "@/data/clinicImages";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { Maximize2, MapPin, Building } from "lucide-react";

export const ClinicMosaic: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % clinicGalleryImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + clinicGalleryImages.length) % clinicGalleryImages.length
    );
  };

  // Select key representative clinic spaces for the asymmetric mosaic
  const heroImage = clinicGalleryImages[0]; // Reception Lounge
  const portraitImage = clinicGalleryImages[1]; // Dental Operatory
  const supporting1 = clinicGalleryImages[2]; // Invisalign Display
  const supporting2 = clinicGalleryImages[4]; // Consultation Suite

  return (
    <section id="gallery" className="bg-[#F8F8F4] py-20 sm:py-28 border-b border-[#E8E9E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Asymmetric Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] font-semibold tracking-widest text-[#5C7651] uppercase block">
              CLINIC ARCHITECTURE & FACILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#252724] font-sans">
              A closer look at your care space.
            </h2>
          </div>

          <div className="lg:col-span-4 text-xs sm:text-sm text-[#858780] leading-relaxed">
            <p>
              Contemporary interior architecture featuring warm off-white walls, acoustic muted olive ceiling details, and hospital-grade operatory hygiene in Saibaba Colony.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Image Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Tile 1: Dominant Landscape (8 cols, 2 rows) */}
          <div
            onClick={() => handleOpenLightbox(0)}
            className="md:col-span-8 group relative rounded-clinic-lg overflow-hidden bg-white border border-[#E8E9E5] shadow-subtle hover:shadow-card transition-all duration-300 min-h-[320px] sm:min-h-[420px] cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`View photo: ${heroImage.title}`}
          >
            <Image
              src={heroImage.fallbackUrl}
              alt={heroImage.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111310]/80 via-transparent to-transparent" />

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-[#252724] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7DDB0] block">
                RECEPTION & LOUNGE
              </span>
              <h3 className="text-base sm:text-lg font-semibold tracking-tight text-white mt-0.5">
                {heroImage.title}
              </h3>
              <p className="text-xs text-[#E8E9E5]/80 mt-1 line-clamp-1">
                {heroImage.description}
              </p>
            </div>
          </div>

          {/* Tile 2: Tall Portrait Operatory (4 cols) */}
          <div
            onClick={() => handleOpenLightbox(1)}
            className="md:col-span-4 group relative rounded-clinic-lg overflow-hidden bg-white border border-[#E8E9E5] shadow-subtle hover:shadow-card transition-all duration-300 min-h-[320px] sm:min-h-[420px] cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`View photo: ${portraitImage.title}`}
          >
            <Image
              src={portraitImage.fallbackUrl}
              alt={portraitImage.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111310]/80 via-transparent to-transparent" />

            <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-[#252724] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Maximize2 className="w-4 h-4" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7DDB0] block">
                TREATMENT SUITE
              </span>
              <h3 className="text-base font-semibold tracking-tight text-white mt-0.5">
                {portraitImage.title}
              </h3>
            </div>
          </div>

          {/* Tile 3: Supporting Aligner Corner (6 cols) */}
          <div
            onClick={() => handleOpenLightbox(2)}
            className="md:col-span-6 group relative rounded-clinic-lg overflow-hidden bg-white border border-[#E8E9E5] shadow-subtle hover:shadow-card transition-all duration-300 min-h-[240px] sm:min-h-[280px] cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`View photo: ${supporting1.title}`}
          >
            <Image
              src={supporting1.fallbackUrl}
              alt={supporting1.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111310]/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7DDB0] block">
                ORTHODONTIC SUITE
              </span>
              <h3 className="text-sm sm:text-base font-semibold tracking-tight text-white mt-0.5">
                {supporting1.title}
              </h3>
            </div>
          </div>

          {/* Tile 4: Supporting Private Consultation Desk (6 cols) */}
          <div
            onClick={() => handleOpenLightbox(4)}
            className="md:col-span-6 group relative rounded-clinic-lg overflow-hidden bg-white border border-[#E8E9E5] shadow-subtle hover:shadow-card transition-all duration-300 min-h-[240px] sm:min-h-[280px] cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`View photo: ${supporting2.title}`}
          >
            <Image
              src={supporting2.fallbackUrl}
              alt={supporting2.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111310]/80 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#C7DDB0] block">
                CONSULTATION DESK
              </span>
              <h3 className="text-sm sm:text-base font-semibold tracking-tight text-white mt-0.5">
                {supporting2.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Footer Meta Note */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#858780] border-t border-[#E8E9E5]">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4 text-[#5C7651]" />
            <span>Click any tile to open the accessible full-resolution clinic lightbox</span>
          </div>
          <span className="font-mono text-[11px] text-[#252724]">
            Saibaba Colony, Coimbatore · Photography Archive
          </span>
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox */}
      <GalleryLightbox
        images={clinicGalleryImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

