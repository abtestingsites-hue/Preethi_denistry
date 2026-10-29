"use client";

import React from "react";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { clinicInfo } from "@/data/clinicInfo";

interface FloatingContactBarProps {
  onOpenBookingModal: () => void;
}

export function FloatingContactBar({
  onOpenBookingModal,
}: FloatingContactBarProps) {
  return (
    <aside
      aria-label="Quick contact and consultation actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E5EAE4] p-3 shadow-float lg:hidden"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        <a
          href={`tel:${clinicInfo.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-[#111311] hover:text-[#466A45] hover:bg-[#F7FAF7] rounded-lg transition-colors border border-transparent hover:border-[#E5EAE4]"
        >
          <Phone className="w-4 h-4 mb-1 text-[#668C63]" />
          <span>Call</span>
        </a>

        {clinicInfo.socialLinks.whatsapp && (
          <a
            href={clinicInfo.socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 text-xs font-medium text-[#111311] hover:text-[#466A45] hover:bg-[#F7FAF7] rounded-lg transition-colors border border-transparent hover:border-[#E5EAE4]"
          >
            <MessageCircle className="w-4 h-4 mb-1 text-[#668C63]" />
            <span>WhatsApp</span>
          </a>
        )}

        <button
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-2 px-1 text-xs font-semibold text-white bg-[#668C63] hover:bg-[#466A45] rounded-lg shadow-sm transition-colors"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span>Book</span>
        </button>
      </div>
    </aside>
  );
}

