"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import CLLogoSVG from "@/components/icons/CLLogoSVG";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  // { href: "/work", label: "Work" },  // Uncomment when portfolio has clients
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50" style={{ background: "var(--nav-bg)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <CLLogoSVG className="w-8 h-8" color="var(--charcoal)" />
          <span
            className="text-lg text-charcoal font-medium tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Lane Web Design
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.href
                  ? "text-terracotta"
                  : "text-charcoal-light hover:text-terracotta"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium bg-terracotta text-white hover:bg-terracotta-dark transition-all duration-200 hover:scale-[1.02]"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-cream/95 backdrop-blur-md">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-terracotta bg-terracotta/5"
                    : "text-charcoal-light hover:text-terracotta"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium bg-terracotta text-white hover:bg-terracotta-dark transition-all"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
