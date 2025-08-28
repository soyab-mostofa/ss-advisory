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
      title: "Comprehensive Accounting Services",
      description:
        "Complete bookkeeping and financial reporting solutions to keep your business organized and compliant.",
      features: [
        "Monthly bookkeeping and reconciliation",
        "Financial statement preparation",
        "Cash flow management and analysis",
        "Accounts payable and receivable management",
      ],
      image: "/images/megv1vhw-9xzmxbt.png",
    },
    {
      title: "Strategic Tax Planning",
      description:
        "Proactive tax strategies and preparation services to minimize your tax liability while ensuring compliance.",
      features: [
        "Individual and business tax preparation",
        "Quarterly tax planning and estimates",
        "Tax optimization strategies",
        "Multi-state tax compliance",
      ],
      image: "/images/megv1vhw-9xzmxbt.png",
    },
    {
      title: "Business Advisory & Consulting",
      description:
        "Strategic business guidance to help you make informed decisions and drive growth.",
      features: [
        "Financial analysis and reporting",
        "Business performance metrics",
        "Growth strategy development",
        "Cash flow forecasting",
      ],
      image: "/images/megv1vhw-9xzmxbt.png",
    },
    {
      title: "Payroll Processing",
      description:
        "Reliable payroll services ensuring accurate and timely compensation for your employees.",
      features: [
        "Bi-weekly and monthly payroll processing",
        "Tax withholding and remittance",
        "Employee benefits administration",
        "Payroll tax compliance",
      ],
      image: "/images/megv1vhw-9xzmxbt.png",
    },
    {
      title: "Compliance & Regulatory Services",
      description:
        "Comprehensive compliance support to ensure your business meets all regulatory requirements.",
      features: [
        "Regulatory compliance reviews",
        "Audit preparation and support",
        "Documentation and filing services",
        "Internal controls assessment",
      ],
      image: "/images/megv1vhw-9xzmxbt.png",
    },
    {
      title: "Financial Reporting & Analysis",
      description:
        "Detailed financial insights and reporting to help you understand and improve your business performance.",
      features: [
        "Monthly financial statements",
        "Budget vs. actual analysis",
        "Key performance indicators (KPIs)",
        "Management reporting dashboards",
      ],
      image: "/images/megv1vhw-9xzmxbt.png",
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
