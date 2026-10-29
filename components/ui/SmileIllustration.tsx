import React from "react";

interface SmileIllustrationProps {
  variant?: "heroSmile" | "orbitalContour" | "smileCurveLarge" | "smileSeparator" | "smileBadge";
  className?: string;
  color?: string;
}

export const SmileIllustration: React.FC<SmileIllustrationProps> = ({
  variant = "heroSmile",
  className = "",
  color = "#252724",
}) => {
  if (variant === "smileSeparator") {
    return (
      <svg
        className={`w-4 h-4 shrink-0 inline-block mx-3 text-[#C7DDB0] ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M4 10c2.5 5 13.5 5 16 0" />
      </svg>
    );
  }

  if (variant === "smileBadge") {
    return (
      <svg
        className={`w-7 h-7 text-[#252724] ${className}`}
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M7 14c3.5 8 14.5 8 18 0" />
        <circle cx="10" cy="11" r="1.5" fill="currentColor" />
        <circle cx="22" cy="11" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "orbitalContour") {
    return (
      <svg
        className={`w-full h-full ${className}`}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Layered concentric facial/smile alignment arcs */}
        <circle cx="200" cy="200" r="170" stroke="#E8E9E5" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="130" stroke="#C7DDB0" strokeWidth="1.5" strokeOpacity="0.7" />
        <circle cx="200" cy="200" r="90" stroke="#A9C49A" strokeWidth="1" strokeDasharray="3 4" />
        
        {/* Dental alignment bezier curve */}
        <path
          d="M70 200 C 130 290, 270 290, 330 200"
          stroke="#252724"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* Calibration anchors */}
        <circle cx="70" cy="200" r="5" fill="#5C7651" />
        <circle cx="200" cy="265" r="5" fill="#C7DDB0" />
        <circle cx="330" cy="200" r="5" fill="#5C7651" />

        {/* Orbit indicator dot */}
        <circle cx="292" cy="108" r="4" fill="#C7DDB0" />
      </svg>
    );
  }

  if (variant === "smileCurveLarge") {
    return (
      <svg
        className={`w-full max-w-2xl mx-auto h-24 ${className}`}
        viewBox="0 0 600 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 30 C 180 120, 420 120, 560 30"
          stroke="#C7DDB0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="40" cy="30" r="6" fill="#C7DDB0" />
        <circle cx="300" cy="97" r="5" fill="#5C7651" />
        <circle cx="560" cy="30" r="6" fill="#C7DDB0" />
      </svg>
    );
  }

  // Default: heroSmile
  return (
    <svg
      className={`w-full h-auto max-w-[280px] sm:max-w-[340px] ${className}`}
      viewBox="0 0 300 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background soft glow pill */}
      <rect x="20" y="30" width="260" height="90" rx="45" fill="#C7DDB0" fillOpacity="0.25" />
      {/* Elegant smile geometry */}
      <path
        d="M50 65 C 100 125, 200 125, 250 65"
        stroke="#252724"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Calibration points */}
      <circle cx="50" cy="65" r="4" fill="#5C7651" />
      <circle cx="150" cy="110" r="4" fill="#C7DDB0" />
      <circle cx="250" cy="65" r="4" fill="#5C7651" />
      <path d="M150 40 L150 48" stroke="#858780" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

