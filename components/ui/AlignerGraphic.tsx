import React from "react";
import { cn } from "@/lib/utils";

interface AlignerGraphicProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

export function AlignerGraphic({
  className,
  size = "md",
  animated = true,
}: AlignerGraphicProps) {
  const sizeMap = {
    sm: "w-28 h-20",
    md: "w-48 h-32",
    lg: "w-72 h-48",
    xl: "w-96 h-64",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center select-none pointer-events-none",
        sizeMap[size],
        animated && "animate-float",
        className
      )}
      aria-hidden="true"
    >
      {/* Background Soft Refractive Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#B8D8B5]/25 to-[#EAF3E9]/40 blur-2xl rounded-full transform scale-90" />

      {/* Clear Aligner Tray SVG with Precision Dental Scallops */}
      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_12px_28px_rgba(102,140,99,0.18)]"
      >
        <defs>
          {/* Glass Translucent Gradient */}
          <linearGradient id="alignerGlassGrad" x1="20" y1="20" x2="300" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#EAF3E9" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#B8D8B5" stopOpacity="0.3" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#B8D8B5" stopOpacity="0.4" />
          </linearGradient>

          {/* Tray Edge Reflection Gradient */}
          <linearGradient id="trayRimGrad" x1="0" y1="0" x2="320" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#B8D8B5" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#668C63" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#B8D8B5" stopOpacity="0.8" />
          </linearGradient>

          {/* Tooth Ridge Highlight */}
          <linearGradient id="ridgeHighlight" x1="160" y1="20" x2="160" y2="180" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>

          {/* Subtle Inner Glow Filter */}
          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Parabolic Smile Arc (Orthodontic Aligner Contour) */}
        <path
          d="M 40 185 
             C 45 130, 80 50, 160 40 
             C 240 50, 275 130, 280 185
             C 260 178, 230 165, 215 155
             C 185 135, 135 135, 105 155
             C 90 165, 60 178, 40 185 Z"
          fill="url(#alignerGlassGrad)"
          stroke="url(#trayRimGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Precision Gingival Scallop Line (Anterior to Posterior) */}
        <path
          d="M 52 175
             Q 58 152, 68 148
             Q 80 144, 92 135
             Q 106 124, 122 118
             Q 140 110, 160 110
             Q 180 110, 198 118
             Q 214 124, 228 135
             Q 240 144, 252 148
             Q 262 152, 268 175"
          stroke="url(#trayRimGrad)"
          strokeWidth="1.2"
          strokeDasharray="4 2"
          opacity="0.85"
        />

        {/* Incisal Cusp Edges & Micro-Contours */}
        <g opacity="0.75" stroke="#FFFFFF" strokeWidth="1.2">
          {/* Central Incisors */}
          <path d="M 148 42 Q 160 38, 172 42" />
          <path d="M 160 40 L 160 70" strokeOpacity="0.4" strokeDasharray="2 2" />

          {/* Lateral Incisors */}
          <path d="M 124 50 Q 138 45, 148 42" />
          <path d="M 172 42 Q 182 45, 196 50" />

          {/* Canines */}
          <path d="M 100 66 Q 112 56, 124 50" />
          <path d="M 196 50 Q 208 56, 220 66" />

          {/* Premolars & Molars Arch */}
          <path d="M 78 95 Q 88 80, 100 66" />
          <path d="M 220 66 Q 232 80, 242 95" />

          <path d="M 58 135 Q 68 115, 78 95" />
          <path d="M 242 95 Q 252 115, 262 135" />
        </g>

        {/* Translucent Surface Light Refraction Arc */}
        <path
          d="M 75 140 C 105 75, 215 75, 245 140"
          stroke="url(#ridgeHighlight)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Precision Laser-Etched Measurement Grid Points */}
        <circle cx="160" cy="52" r="1.5" fill="#668C63" opacity="0.7" />
        <circle cx="130" cy="62" r="1.2" fill="#668C63" opacity="0.6" />
        <circle cx="190" cy="62" r="1.2" fill="#668C63" opacity="0.6" />
        <circle cx="106" cy="80" r="1.2" fill="#668C63" opacity="0.5" />
        <circle cx="214" cy="80" r="1.2" fill="#668C63" opacity="0.5" />
      </svg>
    </div>
  );
}

