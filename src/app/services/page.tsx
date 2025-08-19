'use client';

import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import CoreValues from '@/components/services/CoreValues';
import Testimonials from '@/components/Testimonials';

const ServicesPage = () => {
  const services = [
    {
      title: "Investment Management",
      description: "Comprehensive portfolio management tailored to your risk tolerance and financial goals.",
      features: [
        "Diversified portfolio construction",
        "Risk assessment and management",
        "Performance monitoring and reporting",
        "Tax-efficient investment strategies"
      ],
      image: "/images/investment-management.png"
    },
    {
      title: "Financial Planning",
      description: "Strategic financial roadmaps to help you achieve your short and long-term objectives.",
      features: [
        "Goal-based financial planning",
        "Cash flow analysis and budgeting",
        "Debt management strategies",
        "Emergency fund planning"
      ],
      image: "/images/financial-planning.png"
    },
    {
      title: "Retirement Planning",
      description: "Secure your future with comprehensive retirement planning and wealth preservation strategies.",
      features: [
        "401(k) and IRA optimization",
        "Social Security planning",
        "Healthcare cost planning",
        "Estate planning coordination"
      ],
      image: "/images/retirement-planning.png"
    },
    {
      title: "Tax Strategy",
      description: "Minimize your tax burden through strategic planning and optimization techniques.",
      features: [
        "Tax-loss harvesting",
        "Asset location strategies",
        "Charitable giving planning",
        "Business tax optimization"
      ],
      image: "/images/tax-strategy.png"
    },
    {
      title: "Estate Planning",
      description: "Protect and transfer your wealth efficiently to future generations.",
      features: [
        "Will and trust creation",
        "Beneficiary designations",
        "Tax-efficient wealth transfer",
        "Legacy planning strategies"
      ],
      image: "/images/estate-planning.png"
    },
    {
      title: "Risk Management",
      description: "Comprehensive insurance and risk assessment to protect your financial well-being.",
      features: [
        "Life and disability insurance",
        "Property and casualty review",
        "Liability protection strategies",
        "Business continuity planning"
      ],
      image: "/images/risk-management.png"
    }
  ];

  const coreValues = [
    {
      icon: "/images/meh65pgq-0jv0fmr.svg",
      title: "Client-First Approach",
      description: "We prioritize your financial goals and objectives above all else, ensuring every recommendation serves your best interests."
    },
    {
      icon: "/images/meh65pgq-3dijsh8.svg",
      title: "Transparent Communication",
      description: "Clear, honest communication about fees, strategies, and market conditions helps you make informed financial decisions."
    },
    {
      icon: "/images/meh65pgq-3qqmufv.svg",
      title: "Fiduciary Responsibility",
      description: "As fiduciaries, we are legally and ethically bound to act in your best interest at all times."
    },
    {
      icon: "/images/meh65pgq-5h8z45g.svg",
      title: "Long-term Partnership",
      description: "We build lasting relationships focused on your evolving needs throughout different life stages and market cycles."
    },
    {
      icon: "/images/meh65pgq-7z52jg9.svg",
      title: "Evidence-Based Strategies",
      description: "Our investment approach is grounded in academic research and proven methodologies, not market speculation."
    },
    {
      icon: "/images/meh65pgq-9tvih1a.svg",
      title: "Comprehensive Planning",
      description: "We consider all aspects of your financial life to create holistic strategies that address your complete financial picture."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ServicesHero/>
      <ServicesList services={services} />
      <Testimonials />
      <CoreValues coreValues={coreValues} />
    </div>
  );
};

export default ServicesPage;