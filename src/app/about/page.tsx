import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "About Us - SS Advisory | Expert Accounting & Tax Professionals",
  description:
    "Learn about SS Advisory's team of experienced CPAs and tax professionals. Discover our commitment to providing comprehensive accounting, tax planning, and compliance services for businesses of all sizes.",
  keywords:
    "about SS Advisory, CPA firm, accounting professionals, tax experts, business advisory team, accounting firm history, certified public accountants",

  openGraph: {
    title: "About Us - SS Advisory | Expert Accounting & Tax Professionals",
    description:
      "Learn about SS Advisory's team of experienced CPAs and tax professionals committed to providing comprehensive accounting and tax services.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Us - SS Advisory | Expert Accounting & Tax Professionals",
    description:
      "Learn about SS Advisory's team of experienced CPAs and tax professionals committed to providing comprehensive accounting and tax services.",
  },
};

const AboutHero = () => {
  return (
    <PageHero
      sectionLabel="ABOUT US"
      title="Dedicated to empowering businesses through expert accounting guidance and reliable, results-focused financial solutions."
      highlightedText="Dedicated to"
      imageSrc="/images/megv1vhw-9xzmxbt.png"
      imageAlt="Professional accounting team at work"
      useTextReveal={true}
    />
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <About />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default AboutPage;
