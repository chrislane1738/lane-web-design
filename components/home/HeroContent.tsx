"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const WELCOME_LINES = [
  "Welcome to Lane Web Design",
  "Loading page content...",
  "Connecting to server...",
  "Page loaded successfully.",
];

export default function HeroContent() {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [termLine, setTermLine] = useState(0);
  const [progress, setProgress] = useState(0);
  const [blinkVisible, setBlinkVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setDialogVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!dialogVisible) return;
    if (termLine < WELCOME_LINES.length) {
      const t = setTimeout(() => setTermLine((l) => l + 1), 600);
      return () => clearTimeout(t);
    }
  }, [dialogVisible, termLine]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 2));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setBlinkVisible((v) => !v), 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8"
      style={{
        background: "var(--win-desktop)",
        fontFamily: "Tahoma, Verdana, sans-serif",
      }}
    >
      {/* Desktop shortcut icons (decorative) */}
      <div
        className="absolute top-32 left-4 flex flex-col gap-4"
        style={{ fontSize: 10, color: "#fff" }}
        aria-hidden="true"
      >
        {[
          { icon: "🖥️", label: "My Computer" },
          { icon: "🌐", label: "Internet\nExplorer" },
          { icon: "📁", label: "My Documents" },
          { icon: "🗑️", label: "Recycle Bin" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-0.5" style={{ width: 56, textAlign: "center" }}>
            <div style={{ fontSize: 28 }}>{item.icon}</div>
            <span style={{ fontSize: 10, textShadow: "1px 1px 2px #000", lineHeight: 1.2, whiteSpace: "pre-line" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main welcome dialog / window */}
      {dialogVisible && !minimized && (
        <div
          className="win-window"
          style={{ width: "min(680px, 96vw)", position: "relative" }}
          role="dialog"
          aria-label="Welcome to Lane Web Design"
        >
          {/* Title bar */}
          <div className="win-titlebar flex items-center justify-between px-2" style={{ minHeight: 22 }}>
            <div className="flex items-center gap-1.5">
              <div
                style={{
                  width: 14,
                  height: 14,
                  background: "linear-gradient(135deg, #4488FF, #FFAA00)",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.4)",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 11, fontWeight: "bold" }}>
                Welcome to Lane Web Design
              </span>
            </div>
            <div className="flex gap-0.5">
              <button
                aria-label="Minimize window"
                onClick={() => setMinimized(true)}
                className="win-button"
                style={{ width: 16, height: 14, minWidth: 0, padding: "0 3px", fontSize: 9 }}
              >
                _
              </button>
              <button
                aria-label="Maximize window"
                className="win-button"
                style={{ width: 16, height: 14, minWidth: 0, padding: "0 3px", fontSize: 9 }}
              >
                □
              </button>
              <button
                aria-label="Close window"
                onClick={() => setDialogVisible(false)}
                className="win-button"
                style={{
                  width: 16,
                  height: 14,
                  minWidth: 0,
                  padding: "0 2px",
                  fontSize: 9,
                  background: "#C75050",
                  color: "white",
                  borderTopColor: "#E08080",
                  borderLeftColor: "#E08080",
                }}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Menu bar inside window */}
          <div className="win-menubar flex items-center px-1" style={{ height: 20 }}>
            {["File", "Edit", "Help"].map((m) => (
              <span key={m} className="px-2 py-0.5 cursor-default hover:bg-win-highlight hover:text-white" style={{ fontSize: 11 }}>
                {m}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="p-4 flex flex-col gap-4" style={{ background: "var(--win-silver-light)" }}>
            {/* Hero banner area */}
            <div
              className="win-inset p-4"
              style={{ background: "var(--win-white)", textAlign: "center" }}
            >
              {/* Marquee */}
              <div
                style={{
                  background: "var(--win-navy)",
                  color: "#00FF00",
                  fontFamily: "Courier New, monospace",
                  fontSize: 11,
                  padding: "2px 0",
                  overflow: "hidden",
                  marginBottom: 8,
                }}
              >
                <div className="win-marquee-inner">
                  &nbsp;&nbsp;&nbsp;*** WELCOME TO LANE WEB DESIGN ***&nbsp;&nbsp;&nbsp;
                  Custom Web Design for Small Businesses in Concord, CA and the Bay Area&nbsp;&nbsp;&nbsp;
                  *** Fast. Affordable. Built to Grow. ***&nbsp;&nbsp;&nbsp;
                  Call (925) 542-2284 &nbsp;&nbsp;&nbsp;
                  Email: chris@clanewebdesign.com &nbsp;&nbsp;&nbsp;
                </div>
              </div>

              <h1 style={{ fontSize: 22, fontWeight: "bold", color: "var(--win-navy)", fontFamily: "Tahoma, Verdana, sans-serif", marginBottom: 4 }}>
                Websites That Feel Like Your Business
              </h1>
              <p style={{ fontSize: 11, color: "#000", marginBottom: 12, lineHeight: 1.5 }}>
                Handcrafted web design for small businesses in Concord and the Bay Area.
                <br />
                Distinctive and built to grow with you.
              </p>

              {/* Counter / hit counter style */}
              <div
                style={{
                  display: "inline-block",
                  background: "#000",
                  color: "#00FF00",
                  fontFamily: "Courier New, monospace",
                  fontSize: 12,
                  padding: "2px 8px",
                  border: "2px inset #666",
                  letterSpacing: 4,
                  marginBottom: 12,
                }}
                aria-label="Visitor counter"
              >
                0 0 3 4 7 8 2
              </div>
              <div style={{ fontSize: 9, color: "#666", marginBottom: 12 }}>You are visitor #34,782</div>

              {/* CTA Buttons */}
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/contact"
                  className="win-button-primary"
                  style={{ textDecoration: "none", fontSize: 11, padding: "4px 16px" }}
                >
                  Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="win-button"
                  style={{ textDecoration: "none", fontSize: 11, padding: "4px 16px" }}
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* Status / terminal lines */}
            <div
              className="win-inset p-2"
              style={{ background: "#000", fontFamily: "Courier New, monospace", fontSize: 11, color: "#00FF00", minHeight: 80 }}
              aria-label="System status output"
            >
              {WELCOME_LINES.slice(0, termLine).map((line, i) => (
                <div key={i}>
                  C:\WEBSITE&gt; <span style={{ color: "#fff" }}>{line}</span>
                </div>
              ))}
              {termLine <= WELCOME_LINES.length && (
                <div>
                  C:\WEBSITE&gt; <span style={{ visibility: blinkVisible ? "visible" : "hidden" }}>█</span>
                </div>
              )}
            </div>

            {/* Progress bar section */}
            <div>
              <div style={{ fontSize: 11, marginBottom: 4 }}>Loading awesome web design resources...</div>
              <div
                className="win-inset"
                style={{ height: 16, overflow: "hidden", position: "relative" }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "var(--win-navy)",
                    backgroundImage: "repeating-linear-gradient(90deg, var(--win-navy) 0px, var(--win-navy) 14px, #1C52A0 14px, #1C52A0 16px)",
                    transition: "width 0.08s linear",
                  }}
                />
              </div>
              <div style={{ fontSize: 10, color: "#666", marginTop: 2 }}>{progress}% complete</div>
            </div>

            {/* Bottom buttons */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 6, borderTop: "1px solid var(--win-silver-dark)", paddingTop: 8 }}>
              <Link href="/contact" className="win-button-primary" style={{ textDecoration: "none", fontSize: 11, padding: "3px 12px" }}>
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
          <div className="win-statusbar flex items-center gap-4" style={{ fontSize: 10 }}>
            <span>Done</span>
            <span style={{ marginLeft: "auto" }}>Internet</span>
          </div>
        </div>
      )}

      {/* Taskbar at bottom */}
      <div
        className="win-taskbar fixed bottom-0 left-0 right-0 flex items-center px-1 gap-1"
        style={{ height: 28, zIndex: 100 }}
        role="toolbar"
        aria-label="Taskbar"
      >
        {/* Start button */}
        <button
          className="win-button"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "2px 8px",
            fontWeight: "bold",
            fontSize: 11,
            minWidth: 0,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              background: "linear-gradient(135deg, #FF4444 0%, #FF8800 25%, #44FF44 50%, #4444FF 75%)",
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <span>Start</span>
        </button>

        {/* Separator */}
        <div style={{ width: 1, height: 18, background: "var(--raised-dark)", marginLeft: 2, marginRight: 2 }} />

        {/* Quick launch */}
        {minimized && (
          <button
            className="win-button"
            onClick={() => { setMinimized(false); setDialogVisible(true); }}
            style={{ fontSize: 10, padding: "1px 6px", minWidth: 0 }}
          >
            Welcome to Lane Web Design
          </button>
        )}

        {/* Clock on right */}
        <div
          className="win-inset ml-auto"
          style={{ padding: "1px 6px", fontSize: 10, whiteSpace: "nowrap" }}
        >
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </section>
  );
}
