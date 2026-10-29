import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "pastel" | "pistachio" | "outline" | "dark" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C7651] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-sm px-6 py-2.5 gap-2",
      lg: "text-base px-8 py-3.5 gap-2.5",
    };

    const variantStyles = {
      primary:
        "bg-[#5C7651] text-white hover:bg-[#495F40] shadow-sm hover:shadow-subtle",
      pistachio:
        "bg-[#C7DDB0] text-[#252724] hover:bg-[#B5CD9E] font-medium shadow-sm",
      pastel:
        "bg-[#C7DDB0] text-[#252724] hover:bg-[#B5CD9E] font-medium shadow-sm",
      dark:
        "bg-[#252724] text-white hover:bg-[#111310] shadow-sm hover:shadow-card",
      outline:
        "border border-[#E8E9E5] bg-white text-[#252724] hover:bg-[#F8F8F4] hover:border-[#5C7651]",
      ghost:
        "text-[#252724] hover:bg-[#F8F8F4] hover:text-[#5C7651]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
