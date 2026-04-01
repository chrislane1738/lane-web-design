"use client";

import Link from "next/link";

const services = [
  {
    icon: "🎨",
    title: "Design",
    description:
      "Beautiful, intuitive designs that capture your brand personality and connect with your customers.",
    shortcut: "Alt+D",
  },
  {
    icon: "💻",
    title: "Development",
    description:
      "Fast, responsive websites built with modern technology that works flawlessly on every device.",
    shortcut: "Alt+V",
  },
  {
    icon: "📊",
    title: "SEO & Support",
    description:
      "Get found online and stay running smoothly with ongoing optimization and maintenance.",
    shortcut: "Alt+S",
  },
];

export default function ServicesTease() {
  return (
    <section
      style={{
        background: "var(--win-silver-light)",
        fontFamily: "Tahoma, Verdana, sans-serif",
        paddingBottom: 60,
      }}
    >
      {/* Page top rule */}
      <div style={{ height: 2, background: "var(--raised-dark)", borderBottom: "1px solid var(--raised-light)" }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
        {/* Section header — styled as a groupbox label */}
        <div style={{ marginBottom: 20 }}>
          <div className="win-titlebar" style={{ marginBottom: 1, fontSize: 12, fontWeight: "bold" }}>
            <span>Services — Lane Web Design</span>
          </div>
          <div
            className="win-panel"
            style={{ padding: "8px 12px", fontSize: 11 }}
          >
            <strong>What We Do</strong> &mdash; Everything you need to stand out online, from first sketch to ongoing growth.
          </div>
        </div>

        {/* Service cards as Windows panels */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          {services.map((service) => (
            <div key={service.title} className="win-window" style={{ overflow: "hidden" }}>
              {/* Title bar */}
              <div className="win-titlebar" style={{ fontSize: 11 }}>
                <span>{service.icon}</span>
                <span>{service.title}</span>
                <div className="flex gap-0.5 ml-auto">
                  <button className="win-button" style={{ width: 14, height: 12, minWidth: 0, padding: "0 2px", fontSize: 8 }}>_</button>
                  <button className="win-button" style={{ width: 14, height: 12, minWidth: 0, padding: "0 2px", fontSize: 8 }}>□</button>
                  <button className="win-button" style={{ width: 14, height: 12, minWidth: 0, padding: "0 2px", fontSize: 8, background: "#C75050", color: "#fff", borderTopColor: "#E08080", borderLeftColor: "#E08080" }}>✕</button>
                </div>
              </div>

              {/* Icon area */}
              <div
                style={{
                  background: "var(--win-white)",
                  textAlign: "center",
                  padding: "16px 8px 12px",
                  borderBottom: "1px solid var(--win-silver-dark)",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 4 }}>{service.icon}</div>
                <div style={{ fontSize: 13, fontWeight: "bold", color: "var(--win-navy)" }}>{service.title}</div>
              </div>

              {/* Content */}
              <div style={{ padding: "10px 12px 12px", fontSize: 11, lineHeight: 1.5 }}>
                <p style={{ marginBottom: 8 }}>{service.description}</p>
                <div className="win-inset" style={{ padding: "2px 6px", fontSize: 10, color: "#666", marginBottom: 8 }}>
                  Keyboard shortcut: <strong>{service.shortcut}</strong>
                </div>
              </div>

              {/* Status bar */}
              <div className="win-statusbar">
                <span>{service.title} module loaded</span>
                <span style={{ marginLeft: "auto" }}>v2.0.1</span>
              </div>
            </div>
          ))}
        </div>

        {/* Table of features */}
        <div className="win-window" style={{ marginTop: 20, overflow: "hidden" }}>
          <div className="win-titlebar" style={{ fontSize: 11 }}>
            <span>📋</span>
            <span>Service Comparison — Microsoft Excel</span>
          </div>
          <div style={{ padding: 8, overflowX: "auto" }}>
            <table className="win-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Professional</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Custom Design", "✓", "✓", "✓"],
                  ["Mobile Responsive", "✓", "✓", "✓"],
                  ["SEO Optimization", "", "✓", "✓"],
                  ["Ongoing Support", "", "", "✓"],
                  ["Performance Tuning", "", "", "✓"],
                ].map(([feat, ...vals]) => (
                  <tr key={feat as string}>
                    <td style={{ fontWeight: "bold" }}>{feat}</td>
                    {vals.map((v, i) => (
                      <td key={i} style={{ textAlign: "center", color: v ? "green" : "#ccc" }}>{v || "—"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="win-statusbar">
            <span>Sheet 1 of 1</span>
            <span style={{ marginLeft: "auto" }}>Ready</span>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link
            href="/services"
            className="win-button"
            style={{ textDecoration: "none", fontSize: 11, padding: "4px 20px", display: "inline-block" }}
          >
            Explore All Services...
          </Link>
        </div>
      </div>
    </section>
  );
}
