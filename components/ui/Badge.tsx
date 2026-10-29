import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "pastel" | "dark" | "outline";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "pastel",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    brand: "bg-[#668C63] text-white",
    pastel: "bg-[#EAF3E9] text-[#466A45] border border-[#B8D8B5]/40",
    dark: "bg-[#111411] text-white",
    outline: "bg-white text-[#111311] border border-[#E5EAE4]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#668C63] animate-pulse"
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

