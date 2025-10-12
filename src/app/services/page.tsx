import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import CoreValues from "@/components/services/CoreValues";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title:
    "Accounting & Tax Services - SS Advisory | Professional Business Solutions",
  description:
    "Comprehensive accounting, tax planning, and compliance services including bookkeeping, financial reporting, tax preparation, audit support, and regulatory compliance. Expert accounting services tailored to your business needs.",
  keywords:
    "accounting services, tax planning, bookkeeping, financial reporting, tax preparation, compliance, audit support, payroll processing, business advisory, regulatory compliance",

  openGraph: {
    title:
      "Accounting & Tax Services - SS Advisory | Professional Business Solutions",
    description:
      "Comprehensive accounting, tax planning, and compliance services including bookkeeping, financial reporting, tax preparation, and audit support.",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Accounting & Tax Services - SS Advisory | Professional Business Solutions",
    description:
      "Comprehensive accounting, tax planning, and compliance services including bookkeeping, financial reporting, tax preparation, and audit support.",
  },
};

const ServicesPage = () => {
  const services = [
    {
      title: "Financial Planning & Advisory",
      description:
        "Strategic financial guidance to help you make informed decisions and achieve your business goals.",
      features: [
        "Comprehensive financial planning",
        "Investment strategy development",
        "Risk assessment and management",
        "Long-term financial goal setting",
      ],
      image: "/images/services/service-1.png",
    },
    {
      title: "Portfolio Management",
      description:
        "Expert portfolio management services to optimize your investments and maximize returns.",
      features: [
        "Asset allocation and diversification",
        "Performance monitoring and reporting",
        "Regular portfolio rebalancing",
        "Market analysis and insights",
      ],
      image: "/images/services/service-2.png",
    },
    {
      title: "Business & Legal Advocacy",
      description:
        "Professional business and legal support to protect your interests and ensure compliance.",
      features: [
        "Business structure consultation",
        "Contract review and negotiation",
        "Regulatory compliance guidance",
        "Legal risk assessment",
      ],
      image: "/images/services/service-3.png",
    },
    {
      title: "Tax & Compliance Services",
      description:
        "Comprehensive tax planning and compliance services to minimize liability and ensure adherence to regulations.",
      features: [
        "Tax planning and optimization",
        "Tax return preparation and filing",
        "Compliance monitoring and reporting",
        "Audit support and representation",
      ],
      image: "/images/services/service-4.png",
    },
  ];

  const coreValues = [
    {
      icon: "/images/meh65pgq-0jv0fmr.svg",
      title: "Accuracy & Precision",
      description:
        "We maintain the highest standards of accuracy in all accounting, tax, and compliance work to ensure your business stays on track.",
    },
    {
      icon: "/images/meh65pgq-3dijsh8.svg",
      title: "Transparent Communication",
      description:
        "Clear, honest communication about your financial position, tax obligations, and compliance requirements helps you make informed business decisions.",
    },
    {
      icon: "/images/meh65pgq-3qqmufv.svg",
      title: "Regulatory Compliance",
      description:
        "We stay current with all tax laws and regulations to ensure your business remains compliant and avoids costly penalties.",
    },
    {
      icon: "/images/meh65pgq-5h8z45g.svg",
      title: "Proactive Advisory",
      description:
        "We provide forward-thinking advice and strategic planning to help your business grow while maintaining financial health.",
    },
    {
      icon: "/images/meh65pgq-7z52jg9.svg",
      title: "Technology-Driven Solutions",
      description:
        "Our modern accounting systems and digital processes ensure efficient, secure, and accessible financial management.",
    },
    {
      icon: "/images/meh65pgq-9tvih1a.svg",
      title: "Comprehensive Support",
      description:
        "We provide end-to-end accounting and tax services, from daily bookkeeping to strategic business planning and compliance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList services={services} />
      <Testimonials />
      <CoreValues coreValues={coreValues} />
    </div>
  );
};

export default ServicesPage;
