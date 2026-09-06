import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors duration-150 active:scale-[0.98] select-none text-center cursor-pointer";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-xl min-h-[40px]",
    md: "px-5 py-2.5 text-base rounded-xl min-h-[44px]",
    lg: "px-7 py-3.5 text-base md:text-lg rounded-2xl min-h-[50px]",
  };

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover border border-transparent shadow-none",
    secondary:
      "bg-surface text-primary border border-border-subtle hover:border-text-muted/40",
    outline:
      "bg-transparent text-primary border border-border-subtle hover:bg-surface",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
}
