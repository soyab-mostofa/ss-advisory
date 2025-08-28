import type { Metadata, Viewport } from "next";
import { Urbanist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navigation from "@/components/Navigation";

// Primary font - Urbanist (used extensively throughout the app)
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap", // Optimize font loading
  preload: true,
});

// Secondary font - Playfair Display (used only for italic text in Hero)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Optimize font loading
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SS Advisory - Expert Accounting & Tax Solutions for Business Success",
  description:
    "Professional accounting, tax planning, and compliance services providing comprehensive financial solutions for businesses. Expert CPA consultation and personalized accounting strategies.",
  keywords:
    "accounting services, tax planning, CPA firm, bookkeeping, financial reporting, tax preparation, compliance, business advisory, payroll processing",
  authors: [{ name: "SS Advisory" }],
  robots: "index, follow",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title:
      "SS Advisory - Expert Accounting & Tax Solutions for Business Success",
    description:
      "Professional accounting, tax planning, and compliance services providing comprehensive financial solutions for businesses and individuals.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "SS Advisory - Expert Accounting & Tax Solutions for Business Success",
    description:
      "Professional accounting, tax planning, and compliance services providing comprehensive financial solutions for businesses and individuals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "SS Advisory",
    description:
      "Professional accounting, tax planning, and compliance services providing comprehensive financial solutions for businesses and individuals.",
    url: "https://ss-advisory.com",
    logo: "https://ss-advisory.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-XXX-XXX-XXXX",
      contactType: "customer service",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    sameAs: [
      "https://linkedin.com/company/ss-advisory",
      "https://twitter.com/ssadvisory",
    ],
    serviceType: [
      "Accounting Services",
      "Tax Planning",
      "Bookkeeping",
      "Financial Reporting",
      "Tax Preparation",
      "Compliance Services",
      "Payroll Processing",
      "Business Advisory",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${urbanist.variable} ${playfair.variable} font-urbanist antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
