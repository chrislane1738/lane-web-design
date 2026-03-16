import { clsx } from "clsx";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={clsx(
        "bg-card-bg rounded-2xl p-6 shadow-sm",
        hover && "transition-shadow duration-300 hover:shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
}
