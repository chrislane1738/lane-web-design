"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function WinTitlebarDots() {
  return (
    <div className="flex gap-0.5">
      <button
        aria-label="Minimize"
        className="win-button"
        style={{
          width: 16,
          height: 14,
          minWidth: 0,
          padding: "0 3px",
          fontSize: 9,
          lineHeight: 1,
        }}
      >
        _
      </button>
      <button
        aria-label="Maximize"
        className="win-button"
        style={{
          width: 16,
          height: 14,
          minWidth: 0,
          padding: "0 3px",
          fontSize: 9,
          lineHeight: 1,
        }}
      >
        □
      </button>
      <button
        aria-label="Close"
        className="win-button"
        style={{
          width: 16,
          height: 14,
          minWidth: 0,
          padding: "0 2px",
          fontSize: 9,
          lineHeight: 1,
          background: "#C75050",
          color: "white",
          borderTopColor: "#E08080",
          borderLeftColor: "#E08080",
        }}
      >
        ✕
      </button>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ fontFamily: "Tahoma, Verdana, sans-serif" }}>
      {/* Title bar */}
      <div className="win-titlebar flex items-center justify-between px-2 py-0.5" style={{ minHeight: 22 }}>
        <div className="flex items-center gap-1.5">
          {/* IE-style icon */}
          <div
            style={{
              width: 14,
              height: 14,
              background: "linear-gradient(135deg, #4488FF 0%, #FFAA00 100%)",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.4)",
              flexShrink: 0,
            }}
          />
          <span style={{ fontSize: 11, fontWeight: "bold", color: "#fff", letterSpacing: 0 }}>
            Lane Web Design — Microsoft Internet Explorer
          </span>
        </div>
        <WinTitlebarDots />
      </div>

      {/* Menu bar */}
      <div
        className="win-menubar flex items-center gap-0 px-1"
        style={{ height: 20, fontSize: 11 }}
      >
        {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
          <span
            key={item}
            className="px-2 py-0.5 cursor-default select-none hover:bg-win-highlight hover:text-white"
            style={{ fontSize: 11 }}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Address bar / nav */}
      <div
        className="flex items-center gap-1 px-2 py-1"
        style={{ background: "var(--win-silver)", borderBottom: "1px solid var(--win-silver-dark)" }}
      >
        {/* Toolbar buttons */}
        <div className="flex items-center gap-0.5 mr-1">
          {["◀ Back", "▶ Forward", "✕ Stop", "⟳ Refresh"].map((btn) => (
            <button key={btn} className="win-button" style={{ padding: "1px 6px", fontSize: 10, minWidth: 0 }}>
              {btn}
            </button>
          ))}
        </div>

        {/* Address field label */}
        <span style={{ fontSize: 11, whiteSpace: "nowrap" }}>Address</span>

        {/* Address bar */}
        <div
          className="win-inset flex items-center flex-1 px-1"
          style={{ height: 20, fontSize: 11, overflow: "hidden" }}
        >
          <span style={{ color: "var(--win-navy)", fontSize: 11, whiteSpace: "nowrap" }}>
            http://www.clanewebdesign.com{pathname}
          </span>
        </div>

        <button className="win-button" style={{ padding: "1px 8px", fontSize: 10, minWidth: 0 }}>
          Go
        </button>
      </div>

      {/* Navigation tabs */}
      <nav
        style={{
          background: "var(--win-silver-light)",
          borderBottom: "2px solid var(--win-silver-dark)",
          display: "flex",
          alignItems: "flex-end",
          gap: 0,
          padding: "4px 4px 0",
        }}
        aria-label="Main navigation"
      >
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              style={{
                display: "inline-block",
                padding: "3px 10px",
                fontSize: 11,
                fontFamily: "Tahoma, Verdana, sans-serif",
                background: isActive ? "var(--win-silver-light)" : "var(--win-silver)",
                borderTop: "1px solid " + (isActive ? "var(--raised-light)" : "var(--raised-dark)"),
                borderLeft: "1px solid " + (isActive ? "var(--raised-light)" : "var(--raised-dark)"),
                borderRight: "1px solid var(--raised-dark)",
                borderBottom: isActive ? "2px solid var(--win-silver-light)" : "1px solid var(--raised-dark)",
                color: isActive ? "var(--win-black)" : "var(--win-gray-text, #555)",
                marginBottom: isActive ? -2 : 0,
                position: "relative",
                zIndex: isActive ? 1 : 0,
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          );
        })}

        {/* Get Started button in toolbar */}
        <div className="ml-auto flex items-center pb-1 pr-1">
          <Link
            href="/contact"
            className="win-button-primary"
            style={{
              display: "inline-block",
              textDecoration: "none",
              fontSize: 11,
              padding: "3px 10px",
            }}
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Mobile menu toggle */}
      {mobileOpen && (
        <div
          className="md:hidden win-panel"
          style={{ padding: 8 }}
        >
          <nav className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`block px-3 py-1 text-xs ${pathname === link.href ? "win-selected" : "hover:bg-win-highlight hover:text-white"}`}
                style={{ textDecoration: "none", color: pathname === link.href ? "#fff" : "#000", fontSize: 11 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
