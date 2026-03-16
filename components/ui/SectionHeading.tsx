import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl text-charcoal mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div
        className={clsx(
          "w-12 h-1 bg-terracotta rounded-full mb-6",
          align === "center" && "mx-auto",
        )}
      />
      {subtitle && (
        <p
          className={clsx(
            "text-charcoal-light text-lg max-w-2xl",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
