import { clsx } from "clsx";
import Link from "next/link";
import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-white hover:bg-terracotta-dark shadow-md hover:shadow-lg",
  secondary:
    "bg-sage text-white hover:bg-sage-dark shadow-md hover:shadow-lg",
  outline:
    "border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white",
};

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center px-7 py-3 rounded-full font-medium transition-all duration-200 cursor-pointer text-sm md:text-base hover:scale-[1.02] active:scale-[0.98]",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
