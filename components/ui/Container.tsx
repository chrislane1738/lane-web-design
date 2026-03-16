import { clsx } from "clsx";
import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("max-w-6xl mx-auto px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
