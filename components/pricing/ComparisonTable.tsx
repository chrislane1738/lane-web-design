"use client";

import { Check, X } from "lucide-react";

interface ComparisonRow {
  label: string;
  diy: string | boolean;
  agency: string | boolean;
  lane: string | boolean;
}

const rows: ComparisonRow[] = [
  {
    label: "Upfront cost",
    diy: "$0 - $300",
    agency: "$5,000 - $20,000+",
    lane: "$700 - $1,600",
  },
  {
    label: "Monthly cost",
    diy: "$16 - $160/mo",
    agency: "$200 - $500/mo",
    lane: "$29 - $149/mo",
  },
  {
    label: "Custom design",
    diy: false,
    agency: true,
    lane: true,
  },
  {
    label: "You do the work",
    diy: true,
    agency: false,
    lane: false,
  },
  {
    label: "Ongoing support",
    diy: false,
    agency: true,
    lane: true,
  },
  {
    label: "Transparent pricing",
    diy: true,
    agency: false,
    lane: true,
  },
  {
    label: "Direct access to your developer",
    diy: false,
    agency: false,
    lane: true,
  },
  {
    label: "SEO setup included",
    diy: false,
    agency: "Extra cost",
    lane: true,
  },
];

function CellValue({ value, highlight }: { value: string | boolean; highlight?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check size={18} className={highlight ? "text-sage" : "text-charcoal-light/40"} />
    ) : (
      <X size={18} className={highlight ? "text-terracotta/60" : "text-charcoal-light/30"} />
    );
  }
  return (
    <span className={`text-sm ${highlight ? "font-medium text-charcoal" : "text-charcoal-light"}`}>
      {value}
    </span>
  );
}

export default function ComparisonTable() {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden md:block overflow-hidden rounded-2xl border border-border/50 bg-warm-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border/50">
              <th className="text-left text-sm font-medium text-charcoal-light p-5 w-1/4" />
              <th className="text-center text-sm font-medium text-charcoal-light p-5 w-1/4">
                DIY Builders
                <span className="block text-xs font-normal text-charcoal-light/60 mt-0.5">
                  Wix, Squarespace, etc.
                </span>
              </th>
              <th className="text-center text-sm font-medium text-charcoal-light p-5 w-1/4">
                Agencies
                <span className="block text-xs font-normal text-charcoal-light/60 mt-0.5">
                  Bay Area average
                </span>
              </th>
              <th className="text-center p-5 w-1/4 bg-terracotta/5 border-x border-terracotta/10">
                <span
                  className="text-sm font-medium text-terracotta"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lane Web Design
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i < rows.length - 1 ? "border-b border-border/30" : ""}
              >
                <td className="text-sm font-medium text-charcoal p-5">{row.label}</td>
                <td className="text-center p-5">
                  <div className="flex justify-center">
                    <CellValue value={row.diy} />
                  </div>
                </td>
                <td className="text-center p-5">
                  <div className="flex justify-center">
                    <CellValue value={row.agency} />
                  </div>
                </td>
                <td className="text-center p-5 bg-terracotta/5 border-x border-terracotta/10">
                  <div className="flex justify-center">
                    <CellValue value={row.lane} highlight />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden space-y-4">
        {[
          { title: "DIY Builders", subtitle: "Wix, Squarespace, etc.", key: "diy" as const, highlight: false },
          { title: "Agencies", subtitle: "Bay Area average", key: "agency" as const, highlight: false },
          { title: "Lane Web Design", subtitle: "", key: "lane" as const, highlight: true },
        ].map((col) => (
          <div
            key={col.key}
            className={`rounded-2xl p-6 ${
              col.highlight
                ? "bg-charcoal text-cream ring-2 ring-terracotta"
                : "bg-warm-white border border-border/50"
            }`}
          >
            <h4
              className={`text-lg font-medium mb-1 ${col.highlight ? "text-terracotta-light" : "text-charcoal"}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {col.title}
            </h4>
            {col.subtitle && (
              <p className={`text-xs mb-4 ${col.highlight ? "text-cream/50" : "text-charcoal-light/60"}`}>
                {col.subtitle}
              </p>
            )}
            <ul className="space-y-3">
              {rows.map((row) => (
                <li key={row.label} className="flex items-center justify-between text-sm">
                  <span className={col.highlight ? "text-cream/70" : "text-charcoal-light"}>
                    {row.label}
                  </span>
                  <CellValue value={row[col.key]} highlight={col.highlight} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
