export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "booking" | "invisalign" | "location" | "consultation";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-request-appointment",
    category: "booking",
    question: "How can I request an appointment?",
    answer:
      "You can submit an appointment request through our online booking form on this website by choosing your preferred date, preferred time window, and treatment interest. Our reception team in Saibaba Colony will then follow up by phone or WhatsApp to confirm your specific consultation time and answer any preliminary questions.",
  },
  {
    id: "faq-enquire-invisalign",
    category: "invisalign",
    question: "How can I enquire about Invisalign?",
    answer:
      "You can select 'Invisalign® & Clear Aligners' in our appointment request form or click any 'Enquire About Invisalign' button on this site. During your in-person consultation, Dr. Preethi will evaluate your bite, discuss digital scan possibilities, and outline a clear roadmap tailored to your orthodontic goals.",
  },
  {
    id: "faq-clinic-location",
    category: "location",
    question: "Where is the clinic located?",
    answer:
      "Dr. Preethi’s Dentistry is located in Saibaba Colony, Coimbatore, Tamil Nadu 641011. The clinic is easily accessible with convenient local parking and prominent neighborhood landmarks. An interactive Google Maps directions tool is available in our Contact section below.",
  },
  {
    id: "faq-what-to-bring",
    category: "consultation",
    question: "What should I bring to my consultation?",
    answer:
      "Please bring any recent dental records, X-rays taken within the past year, and a list of current medications or health conditions you may have. If you wear existing retainers or nightguards, bringing those along is also very helpful for clinical assessment.",
  },
  {
    id: "faq-contact-reception",
    category: "booking",
    question: "How can I contact the reception team?",
    answer:
      "Our reception team can be reached by telephone at +91 94420 12345 during clinic working hours (Monday through Saturday, 09:30 AM to 08:00 PM). You can also connect directly via our official WhatsApp consultation link for prompt assistance.",
  },
  {
    id: "faq-change-appointment",
    category: "booking",
    question: "How can I change my appointment request?",
    answer:
      "If you need to reschedule or modify your appointment request, please contact our reception desk by phone or WhatsApp at least 24 hours prior to your slot. Our clinic staff will promptly help you choose a convenient alternate date or time.",
  },
];

