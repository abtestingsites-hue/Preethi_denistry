# Dr. Preethi’s Dentistry — Version 2 (Frontend Experience)
**Client:** Dr. Preethi’s Dentistry, Saibaba Colony, Coimbatore  
**Development Partner:** ARTIBOTS INNOVATION PRIVATE LIMITED (CIN: U28299TZ2025PTC035623)  
**Project:** Premium Dental Clinic Website — Version 2  
**Design Direction:** Luxury Minimalism × Cinematic Motion × Invisalign-Inspired Visual Storytelling  
**Scope:** Frontend Only (Production-grade Next.js 14 App Router, TypeScript, Tailwind CSS, Lucide Icons)

---

## 1. Executive Summary

Version 2 represents a complete frontend redesign of the digital presence for **Dr. Preethi’s Dentistry**, Saibaba Colony, Coimbatore.

Moving away from the legacy olive-dominant palette of Version 1, Version 2 establishes a high-contrast editorial healthcare aesthetic founded on:
- **White-first minimalism** (`#FFFFFF`, `#F7FAF7`)
- **Soft surgical green surfaces** (`#EAF3E9`)
- **Primary pastel green accents** (`#B8D8B5`)
- **Signature brand green** (`#668C63`) with deep forest hover (`#466A45`)
- **Crisp near-black editorial typography** (`#111311`) and dark cinematic feature surfaces (`#111411`)
- **Custom translucent Invisalign® clear aligner vector geometry** (`AlignerGraphic`)
- **Authentic clinic photography references** representing the actual Saibaba Colony interior architecture (reception, dental chairs, lighting, glass partitions, Invisalign branding)

---

## 2. Design System Tokens — Version 2

| Token Name | Hex Code | Utility Class | Semantic Purpose |
| :--- | :--- | :--- | :--- |
| **Primary Background** | `#FFFFFF` | `bg-white` / `bg-clinic-bg` | Main canvas, high-whitespace editorial spacing |
| **Secondary Background** | `#F7FAF7` | `bg-clinic-secondary` | Alternating section backgrounds, KPI strip, cards |
| **Soft Green Surface** | `#EAF3E9` | `bg-clinic-surface` | Badge backgrounds, accent containers, quote mark surfaces |
| **Primary Pastel Green**| `#B8D8B5` | `bg-clinic-pastel` | Aligner accents, highlight rings, tag borders |
| **Brand Green** | `#668C63` | `bg-clinic-brand` / `text-clinic-brand` | Primary CTA buttons, active tabs, icon highlights |
| **Deep Green Hover** | `#466A45` | `hover:bg-clinic-hover` | Button interactive hover states, emphasized links |
| **Primary Text** | `#111311` | `text-clinic-text` | Editorial serif headlines, primary copy |
| **Secondary Text** | `#666B66` | `text-clinic-muted` | Sub-headlines, descriptions, metadata |
| **Fine Borders** | `#E5EAE4` | `border-clinic-border` | Hairline dividers, card outlines |
| **Dark Feature Section**| `#111411` | `bg-clinic-dark` | Cinematic video hero, final CTA banner, luxury footer |
| **White on Dark** | `#FFFFFF` | `text-white` | Hero typography, dark feature copy |

---

## 3. Required Page Architecture & Section Directory

The homepage strictly follows the 14-section sequence requested:

1. **SECTION 01 — AnnouncementMarquee (`components/layout/AnnouncementMarquee.tsx`)**
   - Positioned **above the main navigation bar**.
   - Seamless infinite scrolling marquee with duplicate array sets (no jumping/hiccup).
   - Pauses on hover; respects `prefers-reduced-motion`.
   - Optional dismiss button and direct "Book Consultation" shortcut.
   - Centralized announcements loaded from `data/announcementsData.ts`.

2. **SECTION 02 — SiteHeader & MobileNavigation (`components/layout/SiteHeader.tsx`, `MobileNavigation.tsx`)**
   - Positioned directly beneath the announcement strip.
   - Sticky navigation with `backdrop-blur-md bg-white/95` on scroll.
   - Refined brand wordmark with custom aligner curve insignia.
   - Smooth anchor navigation across Home, About, Treatments, Invisalign, Clinic Gallery, Patient Stories, Contact.
   - Primary CTA: "Book Appointment".
   - Accessible slide-out mobile drawer with ESC key and keyboard traps.

3. **SECTION 03 — CinematicHero (`components/sections/CinematicHero.tsx`)**
   - Primary visual statement with background video playback (`autoPlay`, `muted`, `loop`, `playsInline`, `poster`).
   - Graceful static fallback if video loading is deferred or restricted.
   - Oversized editorial typography: **Your Smile.** / *Reimagined.*
   - Floating translucent clear-aligner vector (`AlignerGraphic`) with subtle floating motion and refractive gradients.
   - All primary CTAs ("Book Your Consultation", "Explore Invisalign", "Discover Our Clinic") visible above the fold on desktop.
   - Compact Saibaba Colony location indicator and animated scroll indicator.

4. **SECTION 04 — TrustMetrics (`components/sections/TrustMetrics.tsx`)**
   - Horizontal trust indicators with 4 verified pillars:
     1. `Invisalign®` — Clear Aligner Consultations
     2. `6 Core Disciplines` — Comprehensive Dentistry
     3. `1-on-1` — Dedicated Consultations
     4. `Saibaba Colony` — Modern Clinic Facility
   - Strict clinical integrity adherence (no fabricated numbers or unverified statistics).

5. **SECTION 05 — ClinicIntroduction (`components/sections/ClinicIntroduction.tsx`)**
   - High-end editorial split layout.
   - Heading: **Modern Dentistry. A More Personal Experience.**
   - Left: Authentic clinic photography with architectural rounded crop and floating sterilization badge.
   - Right: Concise patient-centered narrative, 3 clinical value points, and "Discover Our Clinic" CTA.

6. **SECTION 06 — InvisalignFeature (`components/sections/InvisalignFeature.tsx`)**
   - Signature visual feature on soft green surface (`#EAF3E9`).
   - Heading: **A Clearer Approach to Your Smile.**
   - 3 structured orthodontic pillars: Clear-aligner consultation, personalized 3D treatment planning, journey guidance.
   - Clinical disclaimer: *"Treatment suitability requires an individualized clinical assessment by a qualified dental professional."*
   - CTA: "Enquire About Invisalign" (pre-fills treatment selection in booking form).

7. **SECTION 07 — TreatmentPortfolio (`components/sections/TreatmentPortfolio.tsx`)**
   - Heading: **Care Tailored to Your Smile.**
   - Asymmetrical editorial grid highlighting 6 verified disciplines:
     1. Invisalign® & Clear Aligners (Featured wide)
     2. General Dentistry
     3. Cosmetic Dentistry
     4. Preventive Dental Care
     5. Restorative Dentistry
     6. Smile Makeovers (Featured wide)
   - Gentle image zoom on hover and "Explore Treatment" trigger.
   - Detailed modal (`TreatmentDetailModal`) with clinical benefits, what-to-expect steps, and direct booking trigger.

8. **SECTION 08 — ClinicGallery (`components/sections/ClinicGallery.tsx`)**
   - **Dedicated, full-width section** separate from the About section.
   - Heading: **Inside Our World of Care.**
   - 7 filter categories: All Spaces, Reception, Waiting Area, Treatment Rooms, Dental Equipment, Invisalign Experience, Clinic Interiors.
   - Editorial masonry layout with large spotlight image.
   - Lightbox Modal (`GalleryLightbox`) with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), body scroll lock, image counter, and accessible buttons.

9. **SECTION 09 — TestimonialsSection (`components/sections/TestimonialsSection.tsx`)**
   - Heading: **Trusted Through Patient Experiences.**
   - Verified patient feedback cards (KR, AM, SP) with initials, treatment tag, review source attribution, and verification badge.
   - Interactive carousel controls with keyboard access and patient index switcher.
   - CTA linking to verified Google Maps public review profile.

10. **SECTION 10 — AppointmentBooking (`components/sections/AppointmentBooking.tsx`)**
    - Primary conversion section in a two-column desktop layout.
    - Left: Authentic clinic image, reassurance points, and direct reception contact details.
    - Right: Structured `AppointmentForm` with:
      * Full name validation (letters only, min 2 chars)
      * Indian 10-digit mobile validation (`^[6-9]\d{9}$`)
      * Preferred treatment dropdown (pre-fillable via props)
      * Preferred appointment date (blocks past dates)
      * Preferred time window (Morning, Afternoon, Evening)
      * Optional email and message notes
      * Consent acknowledgement checkbox with Privacy Policy link
      * Loading spinner during mock submission
      * `ConfirmationCard` displaying booking reference code (`DPD-2026-XXXX`) and clear notification that request is pending clinical confirmation.

11. **SECTION 11 — ContactMap (`components/sections/ContactMap.tsx`)**
    - Heading: **Visit Us in Coimbatore.**
    - Coordinated two-panel layout:
      * Panel 1: Dr. Preethi’s Dentistry, Saibaba Colony address, phone, email, consultation hours, directions link, WhatsApp chat link.
      * Panel 2: Embedded Google Maps iframe with rounded corners, thin border, "Open in Google Maps" external link, and offline fallback card.

12. **SECTION 12 — FAQAccordion (`components/sections/FAQAccordion.tsx`)**
    - Heading: **Questions Before Your Visit?**
    - Accessible WAI-ARIA accordion with smooth height transition and thin dividers.
    - Answers the 6 clinic-approved questions regarding appointment requests, Invisalign, location, what to bring, reception contact, and rescheduling.

13. **SECTION 13 — FinalCTA (`components/sections/FinalCTA.tsx`)**
    - Near-black background (`#111411`) visually connected to hero.
    - Headline: **Your Smile Journey Starts Here.**
    - Subtle pastel-green aligner vectors and ambient refractive glows.
    - CTAs: "Book an Appointment" and "Contact the Clinic".

14. **SECTION 14 — SiteFooter (`components/layout/SiteFooter.tsx`)**
    - Luxury dark footer with brand wordmark, quick links, treatment list, Saibaba Colony location, consultation hours, and legal links (`/privacy`, `/terms`).
    - Formal copyright attribution for Dr. Preethi's Dentistry and ARTIBOTS INNOVATION PRIVATE LIMITED (CIN: U28299TZ2025PTC035623).

---

## 4. Technology Stack & Organization

```
Phase 2/
├── app/
│   ├── globals.css              # Version 2 design tokens, custom scrollbars, reduced motion
│   ├── layout.tsx               # DM Sans & Cormorant Garamond fonts, Schema.org Dentist metadata
│   ├── page.tsx                 # Homepage integrating Sections 01 through 14
│   ├── robots.ts                # Search engine crawlers directive
│   ├── sitemap.ts               # XML sitemap generator
│   ├── privacy/page.tsx         # Dedicated Patient Privacy Policy
│   └── terms/page.tsx           # Dedicated Terms of Service & Clinical Disclaimer
├── components/
│   ├── booking/
│   │   ├── AppointmentForm.tsx  # Inline validation, Indian mobile regex, mock submit
│   │   ├── AppointmentModal.tsx # Mobile/Quick booking dialog
│   │   └── ConfirmationCard.tsx # Booking reference and reassurance card
│   ├── gallery/
│   │   └── GalleryLightbox.tsx  # Accessible full-screen image viewer with keyboard navigation
│   ├── layout/
│   │   ├── AnnouncementMarquee.tsx # Section 01 marquee above navbar
│   │   ├── MobileNavigation.tsx    # Responsive slide-out menu drawer
│   │   ├── SiteFooter.tsx          # Section 14 luxury dark footer
│   │   └── SiteHeader.tsx          # Section 02 sticky navbar
│   ├── sections/
│   │   ├── AppointmentBooking.tsx  # Section 10 booking conversion
│   │   ├── CinematicHero.tsx       # Section 03 cinematic video hero
│   │   ├── ClinicGallery.tsx       # Section 08 dedicated gallery
│   │   ├── ClinicIntroduction.tsx  # Section 05 editorial split layout
│   │   ├── ContactMap.tsx          # Section 11 contact & embedded map
│   │   ├── FAQAccordion.tsx        # Section 12 accessible accordion
│   │   ├── FinalCTA.tsx            # Section 13 near-black banner
│   │   ├── InvisalignFeature.tsx   # Section 06 clear aligner experience
│   │   ├── TestimonialsSection.tsx # Section 09 verified feedback carousel
│   │   ├── TreatmentPortfolio.tsx  # Section 07 asymmetrical 6-discipline grid
│   │   └── TrustMetrics.tsx        # Section 04 KPI trust strip
│   ├── treatments/
│   │   └── TreatmentDetailModal.tsx # Detailed modal for treatment exploration
│   └── ui/
│       ├── AlignerGraphic.tsx      # Custom SVG translucent orthodontic clear aligner
│       ├── BackToTop.tsx           # Floating scroll-to-top button
│       ├── Badge.tsx               # Refined pastel pill badge
│       ├── Button.tsx              # Luxury button component
│       ├── FloatingContactBar.tsx  # Mobile sticky bottom contact bar
│       └── SectionHeading.tsx      # Consistent editorial section header
├── data/
│   ├── announcementsData.ts     # Clinic-approved marquee text
│   ├── clinicImages.ts          # Authentic clinic interior photo registry
│   ├── clinicInfo.ts            # Central clinic configuration & phone/hours
│   ├── faqData.ts               # Approved FAQ Q&A entries
│   ├── testimonialsData.ts      # Approved patient feedback entries
│   └── treatmentsData.ts        # 6 clinical disciplines with benefits & steps
├── lib/
│   ├── appointmentService.ts    # Typed appointment validation & mock adapter
│   └── utils.ts                 # ClassName merger (clsx + tailwind-merge)
├── next.config.mjs              # Image domains configuration
├── tailwind.config.ts           # Version 2 custom palette, animations & keyframes
└── tsconfig.json                # TypeScript compiler configuration
```

---

## 5. Frontend Mock Adapters & Future Integration Guide

In compliance with the frontend-only project scope, backend services, live databases, and actual SMS/WhatsApp dispatchers are intentionally excluded.

### Connecting to Production Services Later:
To connect real backend APIs in a subsequent development phase:
1. Open [`lib/appointmentService.ts`](file:///d:/Dental_clinic/Phase%202/lib/appointmentService.ts).
2. Replace the simulated `setTimeout` in `submitAppointmentRequest()` with your production API call:
   ```typescript
   export async function submitAppointmentRequest(formData: AppointmentFormData): Promise<AppointmentSubmissionResponse> {
     // Validate first
     const validationErrors = validateAppointmentForm(formData);
     if (Object.keys(validationErrors).length > 0) throw new Error(...);

     const response = await fetch('/api/appointments', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     });
     return await response.json();
   }
   ```
3. Update [`data/clinicInfo.ts`](file:///d:/Dental_clinic/Phase%202/data/clinicInfo.ts) with final confirmed landline/mobile numbers, email addresses, and confirmed street address.

---

## 6. Build and Verification Results

- **Compiler:** Next.js 14.2.15 (React 18.3.1, TypeScript 5.6.3)
- **Static Pages Generated:** 8/8 (`/`, `/_not-found`, `/privacy`, `/terms`, `/robots.txt`, `/sitemap.xml`)
- **Lint & Type Check:** 0 errors, 0 warnings.
- **Build Status:** Clean production build succeeded.

