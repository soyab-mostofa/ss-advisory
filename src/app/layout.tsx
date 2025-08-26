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
  title: "SS Advisory - Expert Financial Guidance & Strategic Advocacy",
  description: "Professional financial advisory services providing strategic guidance, investment planning, and advocacy for your financial future. Expert consultation and personalized solutions.",
  keywords: "financial advisory, investment planning, strategic guidance, financial consultation, wealth management",
  authors: [{ name: "SS Advisory" }],
  robots: "index, follow",
  openGraph: {
    title: "SS Advisory - Expert Financial Guidance & Strategic Advocacy",
    description: "Professional financial advisory services providing strategic guidance, investment planning, and advocacy for your financial future.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SS Advisory - Expert Financial Guidance & Strategic Advocacy",
    description: "Professional financial advisory services providing strategic guidance, investment planning, and advocacy for your financial future.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "SS Advisory",
    "description": "Professional financial advisory services providing strategic guidance, investment planning, and advocacy for your financial future.",
    "url": "https://ss-advisory.com",
    "logo": "https://ss-advisory.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://linkedin.com/company/ss-advisory",
      "https://twitter.com/ssadvisory"
    ],
    "serviceType": [
      "Investment Management",
      "Financial Planning",
      "Retirement Planning",
      "Tax Strategy",
      "Estate Planning",
      "Risk Management"
    ]
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
