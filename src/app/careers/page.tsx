import React from "react";
import CareerHero from "@/components/careers/CareerHero";
import WhyWorkWithUs from "@/components/careers/WhyWorkWithUs";
import OpeningRoles from "@/components/careers/OpeningRoles";
import CareerTestimonials from "@/components/careers/CareerTestimonials";

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
