"use client";

import DeviceMockup from "./DeviceMockup";

interface ProjectCardProps {
  title: string;
  category: string;
  gradient: string;
  large?: boolean;
}

export default function ProjectCard({
  title,
  category,
  gradient,
  large = false,
}: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-warm-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className={`relative ${large ? "aspect-[4/3]" : "aspect-[3/2]"} p-6 flex items-center justify-center`}>
        <DeviceMockup gradient={gradient} className="w-full max-w-sm" />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-cream font-medium text-sm px-5 py-2 border border-cream/40 rounded-full">
            View Project
          </span>
        </div>
      </div>

      <div className="p-5">
        <p className="text-xs font-medium text-terracotta uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3
          className="text-lg text-charcoal"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
