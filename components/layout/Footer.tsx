import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--win-silver)",
        fontFamily: "Tahoma, Verdana, sans-serif",
        borderTop: "2px solid var(--raised-darkest)",
        paddingBottom: 40,
      }}
    >
      {/* Taskbar-style top bar */}
      <div
        className="win-statusbar"
        style={{
          fontSize: 10,
          padding: "3px 12px",
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <span>Lane Web Design — Concord, CA 94520</span>
        <span>(925) 542-2284</span>
        <a
          href="mailto:chris@clanewebdesign.com"
          className="win-link"
          style={{ marginLeft: "auto" }}
        >
          chris@clanewebdesign.com
        </a>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {/* Brand */}
          <div className="win-panel" style={{ padding: 12 }}>
            <div className="win-titlebar" style={{ fontSize: 11, marginBottom: 8 }}>
              <span>🏢</span>
              <span>Lane Web Design</span>
            </div>
            <p style={{ fontSize: 11, lineHeight: 1.5, color: "#333" }}>
              Custom web design for small businesses in Concord, Walnut Creek, Pleasant Hill, and the greater East Bay.
            </p>
            <div style={{ marginTop: 8 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#000",
                  color: "#00FF00",
                  fontFamily: "Courier New, monospace",
                  fontSize: 10,
                  padding: "1px 6px",
                  border: "1px inset #666",
                  letterSpacing: 2,
                }}
              >
                Est. 2024
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="win-panel" style={{ padding: 12 }}>
            <div className="win-titlebar" style={{ fontSize: 11, marginBottom: 8 }}>
              <span>🔗</span>
              <span>Quick Links</span>
            </div>
            <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="win-link"
                  style={{ fontSize: 11 }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="win-panel" style={{ padding: 12 }}>
            <div className="win-titlebar" style={{ fontSize: 11, marginBottom: 8 }}>
              <span>📞</span>
              <span>Get in Touch</span>
            </div>
            <div style={{ fontSize: 11, display: "flex", flexDirection: "column", gap: 4 }}>
              <a href="mailto:chris@clanewebdesign.com" className="win-link">
                chris@clanewebdesign.com
              </a>
              <a href="tel:+19255422284" className="win-link">
                (925) 542-2284
              </a>
              <span style={{ color: "#333" }}>Concord, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom rule + copyright */}
        <div
          style={{
            height: 2,
            background: "var(--raised-dark)",
            borderBottom: "1px solid var(--raised-light)",
            margin: "16px 0 8px",
          }}
        />
        <div style={{ textAlign: "center", fontSize: 10, color: "#666" }}>
          &copy; {new Date().getFullYear()} Lane Web Design. All rights reserved. &nbsp;|&nbsp;
          Best viewed in 800&times;600 &nbsp;|&nbsp; Windows 2000 Compatible
        </div>
      </div>
    </footer>
  );
}
