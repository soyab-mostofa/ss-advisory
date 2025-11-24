import type { Metadata } from "next";
import CareerHero from "@/components/careers/CareerHero";
import WhyWorkWithUs from "@/components/careers/WhyWorkWithUs";
import OpeningRoles from "@/components/careers/OpeningRoles";

export const metadata: Metadata = {
  title: "Careers - SS Advisory | Join Our Accounting & Tax Team",
  description:
    "Explore career opportunities at SS Advisory. Join our team of accounting and tax professionals and help businesses achieve financial success. View open positions and apply today.",
  keywords:
    "accounting jobs, tax professional careers, bookkeeper positions, CPA jobs, accounting firm careers, tax preparation jobs, compliance specialist positions",

  openGraph: {
    title: "Careers - SS Advisory | Join Our Accounting & Tax Team",
    description:
      "Explore career opportunities at SS Advisory. Join our team of accounting and tax professionals and help businesses achieve financial success.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers - SS Advisory | Join Our Accounting & Tax Team",
    description:
      "Explore career opportunities at SS Advisory. Join our team of accounting and tax professionals and help businesses achieve financial success.",
  },
};

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <CareerHero />
      <WhyWorkWithUs />
      <OpeningRoles />
    </div>
  );
};

export default CareersPage;
