import Link from "next/link";
import CLLogoSVG from "@/components/icons/CLLogoSVG";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  // { href: "/work", label: "Work" },  // Uncomment when portfolio has clients
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <CLLogoSVG className="w-8 h-8" color="var(--cream)" />
              <span
                className="text-lg text-cream font-medium"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Lane Web Design
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Crafting distinctive websites for small businesses in Concord
              and the Bay Area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-cream text-base font-medium mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm hover:text-terracotta-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-cream text-base font-medium mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get in Touch
            </h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href="mailto:chris@clanewebdesign.com"
                className="hover:text-terracotta-light transition-colors"
              >
                chris@clanewebdesign.com
              </a>
              <a
                href="tel:+19255422284"
                className="hover:text-terracotta-light transition-colors"
              >
                (925) 542-2284
              </a>
              <span>Concord, CA</span>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Lane Web Design. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
