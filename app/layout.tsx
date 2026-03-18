import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C75B3A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://clanewebdesign.com"),
  title: {
    default: "Lane Web Design | Web Designer in Concord, CA",
    template: "%s | Lane Web Design",
  },
  description:
    "Custom web design for small businesses in Concord, CA and the Bay Area. Affordable websites built to grow your business. Design, development, SEO, and ongoing support.",
  openGraph: {
    title: "Lane Web Design | Web Designer in Concord, CA",
    description:
      "Custom web design for small businesses in Concord, CA and the Bay Area. Affordable websites built to grow your business.",
    type: "website",
    locale: "en_US",
    siteName: "Lane Web Design",
    url: "https://clanewebdesign.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lane Web Design | Web Designer in Concord, CA",
    description:
      "Custom web design for small businesses in Concord, CA and the Bay Area. Affordable websites built to grow your business.",
  },
  alternates: {
    canonical: "https://clanewebdesign.com",
  },
  other: {
    "geo.region": "US-CA",
    "geo.placename": "Concord",
    "geo.position": "37.9779;-122.0311",
    ICBM: "37.9779, -122.0311",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://clanewebdesign.com/#business",
      name: "Lane Web Design",
      description:
        "Custom web design for small businesses in Concord, CA and the Bay Area.",
      url: "https://clanewebdesign.com",
      telephone: "+1-925-542-2284",
      email: "chris@clanewebdesign.com",
      logo: "https://clanewebdesign.com/icon.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Concord",
        addressRegion: "CA",
        postalCode: "94520",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 37.9779,
        longitude: -122.0311,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Concord",
          containedInPlace: { "@type": "State", name: "California" },
        },
        { "@type": "City", name: "Walnut Creek" },
        { "@type": "City", name: "Pleasant Hill" },
        { "@type": "City", name: "Martinez" },
        { "@type": "City", name: "Clayton" },
        { "@type": "City", name: "Danville" },
        { "@type": "City", name: "San Ramon" },
        { "@type": "Place", name: "East Bay, California" },
        { "@type": "Place", name: "Bay Area, California" },
      ],
      founder: {
        "@type": "Person",
        name: "Chris Lane",
        jobTitle: "Web Designer & Developer",
      },
      knowsAbout: [
        "Web Design",
        "Web Development",
        "Next.js",
        "React",
        "Search Engine Optimization",
        "Small Business Websites",
        "Responsive Web Design",
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://clanewebdesign.com/#website",
      url: "https://clanewebdesign.com",
      name: "Lane Web Design",
      publisher: { "@id": "https://clanewebdesign.com/#business" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSerif.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main className="pt-16 md:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
