import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase",
            align === "center" && "justify-center",
            isDark ? "text-[#B8D8B5]" : "text-[#668C63]"
          )}
        >
          <span className="w-5 h-[1.5px] bg-current inline-block" />
          <span>{eyebrow}</span>
          {align === "center" && (
            <span className="w-5 h-[1.5px] bg-current inline-block" />
          )}
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] text-balance",
          isDark ? "text-white" : "text-[#111311]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed pt-1",
            isDark ? "text-[#E5EAE4]/80" : "text-[#666B66]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

