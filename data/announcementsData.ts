/**
 * Dr. Preethi's Dentistry — Scrolling Promotional Announcements
 *
 * NOTE FOR CLINIC ADMINISTRATORS:
 * All announcement items below must be clinic-approved.
 * In accordance with ethical medical regulations, no unverified discounts,
 * time-limited deals, or free claims are permitted.
 */

export interface AnnouncementItem {
  id: string;
  badge?: string;
  text: string;
  highlight?: string;
  ctaText?: string;
  ctaAction?: "book" | "invisalign" | "contact";
}

export const clinicAnnouncements: AnnouncementItem[] = [
  {
    id: "announcement-invisalign",
    badge: "Invisalign® Focus",
    text: "Invisalign® Consultations at Dr. Preethi’s Dentistry · Discover Your Smile Possibilities",
    highlight: "Saibaba Colony, Coimbatore",
    ctaText: "Book Consultation",
    ctaAction: "book",
  },
  {
    id: "announcement-care",
    badge: "Clinical Philosophy",
    text: "Precision Orthodontics & Gentle Aesthetic Dentistry · Thoughtful, Personalized Care",
    highlight: "Now Welcoming Enquiries",
    ctaText: "Enquire Online",
    ctaAction: "book",
  },
  {
    id: "announcement-facility",
    badge: "Clinic Environment",
    text: "Modern Ergonomic Operatories & Advanced Digital Smile Planning",
    highlight: "Saibaba Colony",
    ctaText: "Explore Spaces",
    ctaAction: "invisalign",
  },
];

