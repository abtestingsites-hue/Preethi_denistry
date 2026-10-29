import React from "react";
import { CheckCircle2, Calendar, Clock, User, Phone, Sparkles, RefreshCw } from "lucide-react";
import { AppointmentSubmissionResponse, formatAppointmentDate } from "@/lib/appointmentService";
import { clinicInfo } from "@/data/clinicInfo";

interface ConfirmationCardProps {
  response: AppointmentSubmissionResponse;
  onReset: () => void;
}

export function ConfirmationCard({ response, onReset }: ConfirmationCardProps) {
  const { referenceNumber, data } = response;

  return (
    <div className="bg-white rounded-3xl border border-[#E5EAE4] p-6 sm:p-8 space-y-6 shadow-card animate-in fade-in duration-300">
      {/* Success Badge & Headline */}
      <div className="text-center space-y-3">
        <div className="w-14 h-14 mx-auto rounded-full bg-[#EAF3E9] border border-[#B8D8B5] flex items-center justify-center text-[#466A45]">
          <CheckCircle2 className="w-8 h-8 text-[#668C63]" />
        </div>
        <div className="space-y-1">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#668C63]">
            Request Received · Pending Clinical Confirmation
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#111311]">
            Thank You, {data.patientName.split(" ")[0]}
          </h3>
          <p className="text-sm text-[#666B66] max-w-md mx-auto">
            Your appointment consultation request has been recorded for Dr. Preethi’s clinical team.
          </p>
        </div>
      </div>

      {/* Reference Strip */}
      <div className="p-4 rounded-2xl bg-[#F7FAF7] border border-[#E5EAE4] flex items-center justify-between text-xs sm:text-sm">
        <span className="text-[#666B66]">Booking Reference</span>
        <span className="font-mono font-bold text-[#111311] tracking-wider bg-white px-3 py-1 rounded-lg border border-[#E5EAE4]">
          {referenceNumber}
        </span>
      </div>

      {/* Request Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        <div className="p-3.5 rounded-xl bg-[#F7FAF7] border border-[#E5EAE4]/60 space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#666B66] flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#668C63]" />
            Requested Treatment
          </span>
          <p className="font-medium text-[#111311]">{data.preferredTreatment}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#F7FAF7] border border-[#E5EAE4]/60 space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#666B66] flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-[#668C63]" />
            Preferred Date
          </span>
          <p className="font-medium text-[#111311]">
            {formatAppointmentDate(data.preferredDate)}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#F7FAF7] border border-[#E5EAE4]/60 space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#666B66] flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-[#668C63]" />
            Preferred Window
          </span>
          <p className="font-medium text-[#111311]">{data.preferredTimeWindow}</p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#F7FAF7] border border-[#E5EAE4]/60 space-y-1">
          <span className="text-[11px] font-medium uppercase tracking-wider text-[#666B66] flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-[#668C63]" />
            Contact Number
          </span>
          <p className="font-medium text-[#111311]">{data.mobileNumber}</p>
        </div>
      </div>

      {/* Reassurance Notice Box */}
      <div className="p-4 rounded-2xl bg-[#EAF3E9]/80 border border-[#B8D8B5]/60 text-xs text-[#466A45] leading-relaxed space-y-1.5">
        <p className="font-semibold flex items-center gap-1.5">
          <span>Important Confirmation Notice:</span>
        </p>
        <p>
          This is an appointment consultation request. Our clinic receptionist in Saibaba Colony will
          reach out to you by phone or WhatsApp to finalize your consultation timing and provide visit guidelines.
        </p>
        <p className="text-[11px] text-[#666B66] pt-1">
          Need immediate assistance? Call reception directly at{" "}
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="font-semibold text-[#111311] underline underline-offset-2"
          >
            {clinicInfo.phoneDisplay}
          </a>
          .
        </p>
      </div>

      {/* Reset CTA */}
      <div className="text-center pt-2">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#668C63] hover:text-[#466A45] py-2 px-4 rounded-full hover:bg-[#F7FAF7] transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Submit Another Request</span>
        </button>
      </div>
    </div>
  );
}

