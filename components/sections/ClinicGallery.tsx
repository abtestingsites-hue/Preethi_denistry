"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Sparkles, MapPin } from "lucide-react";
import {
  clinicGalleryImages,
  clinicGalleryCategories,
  GalleryCategory,
  ClinicImageItem,
} from "@/data/clinicImages";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { cn } from "@/lib/utils";

export function ClinicGallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeCategory === "all"
      ? clinicGalleryImages
      : clinicGalleryImages.filter((img) => img.category === activeCategory);

  const handleOpenLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="gallery"
      aria-label="Dedicated Clinic Architecture and Spaces Gallery"
      className="py-20 lg:py-32 bg-[#F7FAF7] border-b border-[#E5EAE4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#668C63]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CLINIC SPACES & DETAILS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111311] tracking-tight leading-[1.15]">
              Inside Our World of Care.
            </h2>
            <p className="text-base sm:text-lg text-[#666B66] leading-relaxed pt-1">
              Take a closer look at the spaces and details that make your visit to Dr. Preethi’s
              Dentistry distinctive—from our calming reception lounge to precision orthodontic suites.
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#668C63] font-medium shrink-0">
            <MapPin className="w-4 h-4" />
            <span>Saibaba Colony, Coimbatore</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {clinicGalleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]",
                  isActive
                    ? "bg-[#668C63] text-white shadow-sm"
                    : "bg-white text-[#666B66] border border-[#E5EAE4] hover:bg-[#EAF3E9] hover:text-[#111311]"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredImages.map((image, idx) => {
            // Asymmetrical spotlighting:
            // First item (Reception) is 8 cols, second is 4 cols, then 4-4-4 or 6-6
            const isFeatured = idx === 0;
            const gridColClass = isFeatured
              ? "lg:col-span-8 lg:row-span-2"
              : idx === 1
              ? "lg:col-span-4"
              : idx === 2
              ? "lg:col-span-4"
              : "lg:col-span-4";

            return (
              <div
                key={image.id}
                onClick={() => handleOpenLightbox(idx)}
                className={cn(
                  "group relative rounded-3xl overflow-hidden bg-white border border-[#E5EAE4] shadow-subtle hover:shadow-card cursor-pointer transition-all duration-500",
                  gridColClass,
                  isFeatured ? "min-h-[360px] sm:min-h-[460px]" : "min-h-[280px]"
                )}
              >
                {/* Image */}
                <Image
                  src={image.fallbackUrl}
                  alt={image.title}
                  fill
                  loading="lazy"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Subtle Refined Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />

                {/* Corner Zoom Indicator */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#111311] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-sm">
                  <Maximize2 className="w-4 h-4 text-[#668C63]" />
                </div>

                {/* Bottom Caption Pill / Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/50 text-[#111311] shadow-card transition-transform duration-300 transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#668C63]">
                    <span>{image.categoryLabel}</span>
                    <span className="text-[#666B66] font-mono">0{idx + 1}</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-[#111311] pt-0.5 line-clamp-1">
                    {image.title}
                  </h3>
                  <p className="text-xs text-[#666B66] line-clamp-1 pt-0.5">
                    {image.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption Footnote */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#666B66]">
            Click any photograph to view the architectural spaces in full resolution.
          </p>
        </div>
      </div>

      {/* Lightbox Modal Dialog */}
      <GalleryLightbox
        images={filteredImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNextImage}
        onPrev={handlePrevImage}
      />
    </section>
  );
}

