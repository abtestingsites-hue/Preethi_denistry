import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "brand" | "pastel" | "pistachio" | "sage" | "dark" | "outline" | "white";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "pistachio",
  size = "md",
  className,
  icon,
}) => {
  const variantStyles = {
    brand: "bg-[#5C7651] text-white",
    pistachio: "bg-[#C7DDB0] text-[#252724]",
    pastel: "bg-[#C7DDB0] text-[#252724]",
    sage: "bg-[#A9C49A] text-[#252724]",
    dark: "bg-[#252724] text-white",
    white: "bg-white text-[#252724] border border-[#E8E9E5] shadow-sm",
    outline: "border border-[#E8E9E5] text-[#252724] bg-white/70",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium tracking-wide",
    md: "text-xs px-3.5 py-1 font-medium tracking-wide",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
