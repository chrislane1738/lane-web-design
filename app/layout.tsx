import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lane Web Design | Professional Web Design & Development",
  description:
    "Lane Web Design builds modern, high-performance websites that grow your business. Web design, development, SEO, and ongoing support.",
  openGraph: {
    title: "Lane Web Design | Professional Web Design & Development",
    description:
      "We build modern, high-performance websites that grow your business.",
    type: "website",
    locale: "en_US",
    siteName: "Lane Web Design",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lane Web Design | Professional Web Design & Development",
    description:
      "We build modern, high-performance websites that grow your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
