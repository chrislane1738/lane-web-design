"use client";

import Link from "next/link";

export default function HomeCTA() {
  return (
    <section
      style={{
        background: "var(--win-silver-light)",
        fontFamily: "Tahoma, Verdana, sans-serif",
        paddingBottom: 80,
      }}
    >
      <div style={{ height: 2, background: "var(--raised-dark)", borderBottom: "1px solid var(--raised-light)" }} />

      <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 16px" }}>
        {/* Alert / dialog box style CTA */}
        <div className="win-window" style={{ overflow: "hidden" }}>
          {/* Title bar */}
          <div className="win-titlebar flex items-center justify-between px-2" style={{ minHeight: 22 }}>
            <div className="flex items-center gap-1.5">
              <div
                style={{
                  width: 14,
                  height: 14,
                  background: "linear-gradient(135deg, #FFAA00, #FF4400)",
                  borderRadius: 2,
                  border: "1px solid rgba(255,255,255,0.4)",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 11, fontWeight: "bold" }}>
                Lane Web Design — Action Required
              </span>
            </div>
          </div>

          {/* Dialog content */}
          <div style={{ background: "var(--win-silver-light)", padding: 20 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              {/* Warning icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "#FFDD00",
                  border: "3px solid #CC8800",
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                ❗
              </div>

              <div>
                <div style={{ fontSize: 14, fontWeight: "bold", marginBottom: 8, color: "var(--win-navy)" }}>
                  Ready to stand out online?
                </div>
                <p style={{ fontSize: 11, lineHeight: 1.6, marginBottom: 12 }}>
                  Your business deserves a website that feels like yours.
                  Lane Web Design builds distinctive, high-performance websites
                  for small businesses in Concord and the Bay Area.
                </p>
                <p style={{ fontSize: 11, lineHeight: 1.6 }}>
                  Click <strong>OK</strong> to start your project or{" "}
                  <strong>Cancel</strong> to miss out on customers.
                </p>
              </div>
            </div>

            {/* Separator */}
            <div style={{ height: 1, background: "var(--raised-dark)", borderBottom: "1px solid var(--raised-light)", margin: "16px 0" }} />

            {/* More info box */}
            <div className="win-inset" style={{ padding: "6px 10px", fontSize: 10, color: "#444", marginBottom: 16 }}>
              <strong>System Information:</strong> This website was built with Next.js, React, and a lot of care.
              Serving small businesses since 2024. 100% satisfaction guaranteed or your money back.
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
              <Link
                href="/contact"
                className="win-button-primary"
                style={{ textDecoration: "none", fontSize: 11, padding: "4px 20px" }}
              >
                OK
              </Link>
              <button className="win-button" style={{ fontSize: 11 }}>
                Cancel
              </button>
              <button className="win-button" style={{ fontSize: 11 }}>
                Help
              </button>
            </div>
          </div>

          {/* Status bar */}
          <div className="win-statusbar flex items-center" style={{ fontSize: 10 }}>
            <span>Please click OK to continue</span>
            <span style={{ marginLeft: "auto" }}>🔒 Secure Site</span>
          </div>
        </div>

        {/* Web rings & badges (classic era decoration) */}
        <div style={{ textAlign: "center", marginTop: 20, fontSize: 10, color: "#666" }}>
          <div style={{ marginBottom: 8 }}>— This site is best viewed in 800×600 resolution —</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
            {[
              { bg: "#003366", color: "#fff", text: "Netscape\nNavigator\nCompatible" },
              { bg: "#0000AA", color: "#fff", text: "Internet\nExplorer\nOptimized" },
              { bg: "#006600", color: "#fff", text: "Valid\nHTML\n4.01" },
            ].map((badge) => (
              <div
                key={badge.text}
                style={{
                  background: badge.bg,
                  color: badge.color,
                  padding: "4px 8px",
                  fontSize: 9,
                  fontFamily: "Courier New, monospace",
                  border: "2px outset #aaa",
                  whiteSpace: "pre-line",
                  textAlign: "center",
                  lineHeight: 1.2,
                }}
              >
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
