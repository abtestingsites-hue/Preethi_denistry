"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { AppointmentForm } from "./AppointmentForm";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTreatmentId?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  initialTreatmentId,
}: AppointmentModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book an Appointment Consultation"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-elevated z-10 my-8 overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="absolute top-5 right-5 z-20">
          <button
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-2 rounded-full bg-[#F7FAF7] text-[#111311] hover:bg-[#EAF3E9] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#668C63]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-1 sm:p-2">
          <AppointmentForm
            initialTreatmentId={initialTreatmentId}
            onSuccess={() => {
              // Keep open for confirmation card review
            }}
            className="border-none shadow-none p-5 sm:p-8"
          />
        </div>
      </div>
    </div>
  );
}

