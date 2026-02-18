import { clsx } from "clsx";
import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
  secondary: "bg-muted text-foreground hover:bg-muted-dark",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer text-sm md:text-base",
    variantStyles[variant],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
