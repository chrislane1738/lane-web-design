import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lane Web Design | Handcrafted Websites for Small Business",
  description:
    "Lane Web Design crafts distinctive websites for small businesses in Concord and the Bay Area. Custom design, development, SEO, and ongoing support.",
  openGraph: {
    title: "Lane Web Design | Handcrafted Websites for Small Business",
    description:
      "Crafting distinctive websites that feel like you. Serving Concord and the Bay Area.",
    type: "website",
    locale: "en_US",
    siteName: "Lane Web Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lane Web Design | Handcrafted Websites for Small Business",
    description:
      "Crafting distinctive websites that feel like you. Serving Concord and the Bay Area.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSerif.variable} ${dmSans.variable} antialiased`}>
        <Header />
        <main className="pt-16 md:pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
