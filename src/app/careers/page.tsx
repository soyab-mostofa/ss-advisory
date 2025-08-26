import type { Metadata } from 'next';
import React from "react";
import CareerHero from "@/components/careers/CareerHero";
import WhyWorkWithUs from "@/components/careers/WhyWorkWithUs";
import OpeningRoles from "@/components/careers/OpeningRoles";
import CareerTestimonials from "@/components/careers/CareerTestimonials";

export const metadata: Metadata = {
  title: 'Careers - SS Advisory | Join Our Financial Advisory Team',
  description: 'Explore career opportunities at SS Advisory. Join our team of financial professionals and help clients achieve their financial goals. View open positions and apply today.',
  keywords: 'financial advisor jobs, careers SS Advisory, financial planning careers, investment advisor positions, finance jobs',

  openGraph: {
    title: 'Careers - SS Advisory | Join Our Financial Advisory Team',
    description: 'Explore career opportunities at SS Advisory. Join our team of financial professionals and help clients achieve their financial goals.',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Careers - SS Advisory | Join Our Financial Advisory Team',
    description: 'Explore career opportunities at SS Advisory. Join our team of financial professionals and help clients achieve their financial goals.',
  }
};

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <CareerHero />
      <WhyWorkWithUs />
      <OpeningRoles />
      <CareerTestimonials />
    </div>
  );
};

export default CareersPage;
