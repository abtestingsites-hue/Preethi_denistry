import React from "react";

export const AlignerGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center select-none">
      {/* Outer Orbit Paths */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="185" stroke="#C7DDB0" strokeWidth="1" strokeDasharray="4 8" strokeOpacity="0.4" />
        <circle cx="200" cy="200" r="145" stroke="#A9C49A" strokeWidth="1" strokeDasharray="2 6" strokeOpacity="0.3" />
        <circle cx="345" cy="200" r="4" fill="#C7DDB0" />
        <circle cx="200" cy="55" r="3" fill="#A9C49A" />
      </svg>

      {/* Central Translucent Aligner Graphic */}
      <div className="relative w-72 h-72 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-6 shadow-2xl animate-float">
        <svg
          className="w-full h-full text-[#C7DDB0]"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle glow filter */}
          <defs>
            <filter id="alignerGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Aligner Arch Silhouette */}
          <path
            d="M 40 170 C 40 80, 200 80, 200 170 C 190 175, 175 160, 160 145 C 145 130, 95 130, 80 145 C 65 160, 50 175, 40 170 Z"
            fill="rgba(199, 221, 176, 0.12)"
            stroke="#C7DDB0"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#alignerGlow)"
          />

          {/* Translucent Middle Contour */}
          <path
            d="M 50 162 C 55 95, 185 95, 190 162 C 178 152, 165 142, 150 135 C 135 128, 105 128, 90 135 C 75 142, 62 152, 50 162 Z"
            fill="rgba(255, 255, 255, 0.08)"
            stroke="#A9C49A"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* Individual Tooth Calibration Notches */}
          <line x1="60" y1="140" x2="68" y2="135" stroke="#C7DDB0" strokeWidth="1.5" />
          <line x1="85" y1="120" x2="92" y2="115" stroke="#C7DDB0" strokeWidth="1.5" />
          <line x1="120" y1="110" x2="120" y2="103" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="148" y1="115" x2="155" y2="120" stroke="#C7DDB0" strokeWidth="1.5" />
          <line x1="172" y1="135" x2="180" y2="140" stroke="#C7DDB0" strokeWidth="1.5" />

          {/* Precision Alignment Measurement Crosshairs */}
          <line x1="120" y1="50" x2="120" y2="80" stroke="#858780" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="100" y1="65" x2="140" y2="65" stroke="#858780" strokeWidth="1" />
          <circle cx="120" cy="65" r="3" fill="#C7DDB0" />
        </svg>

        {/* Floating Precision Tag */}
        <div className="absolute -bottom-3 bg-[#252724] border border-[#C7DDB0]/40 rounded-full px-3 py-1 text-[10px] text-[#C7DDB0] font-mono tracking-wider shadow-lg">
          3D SCAN CALIBRATED
        </div>
      </div>
    </div>
  );
};
