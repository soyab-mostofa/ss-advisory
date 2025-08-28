"use client";

import React, { useState } from "react";
import ImageRevealAnimation from "./ImageRevealAnimation";
import SectionLabel from "./ui/SectionLabel";
import TextRevealAnimation from "./TextRevealAnimation";
import HTwoTextAnimation from "./HTwoTextAnimation";

// Simple chevron down SVG component
const ChevronDown = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What accounting services does SS Advisory provide?",
    answer:
      "We offer comprehensive accounting services including bookkeeping, financial reporting, payroll processing, cash flow management, and monthly financial statements tailored to your business needs.",
  },
  {
    id: 2,
    question: "How can SS Advisory help with tax planning and preparation?",
    answer:
      "Our tax professionals provide strategic tax planning, preparation of all tax returns, compliance reviews, audit support, and tax optimization strategies to minimize your liability while ensuring full compliance.",
  },
  {
    id: 3,
    question: "What types of businesses do you work with?",
    answer:
      "We serve small to medium-sized businesses, startups, established corporations, and individual entrepreneurs across various industries who need professional accounting, tax, and compliance services.",
  },
  {
    id: 4,
    question: "How do you ensure regulatory compliance for my business?",
    answer:
      "We stay current with all regulatory requirements, provide comprehensive compliance reviews, assist with documentation and filing services, and prepare your business for audits to ensure you meet all legal obligations.",
  },
  {
    id: 5,
    question: "What makes SS Advisory different from other accounting firms?",
    answer:
      "Our personalized approach, deep expertise in accounting and tax matters, proactive advisory services, and commitment to helping businesses grow while maintaining compliance sets us apart in the industry.",
  },
];

const FAQ: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(2);

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section className="bg-white py-6 px-4 sm:py-25 sm:px-30 max-w-[1440px] mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:gap-6 sm:mb-16">
        <SectionLabel
          label="FAQ"
          lineWidth="w-[150px] sm:w-[250px]"
          textSize="text-lg sm:text-xl"
        />

        <HTwoTextAnimation
          text="What You Need To Know"
          highlightStart="What You"
          highlightEnd="Need To Know"
          className="text-[#204199] font-urbanist text-2xl font-medium leading-[29px] tracking-[-0.96px] w-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-17">
        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <ImageRevealAnimation
            src="/images/megv1vhw-9xzmxbt.png"
            alt="Accounting consultation meeting"
            className="w-full h-[280px] sm:w-[445px] sm:h-[558px] rounded-xl object-cover"
            borderRadius="0.75rem"
          />
        </div>

        {/* FAQ Items */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          {faqData.map((item) => {
            const isExpanded = expandedItem === item.id;

            return (
              <div
                key={item.id}
                className="border border-[#dde2eb] rounded-xl bg-[#f8f8f8] overflow-hidden transition-all duration-300 ease-in-out"
              >
                {/* Question Header - Always Visible */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={isExpanded}
                >
                  <p className="text-lg sm:text-xl font-medium text-[#1d1f2c] font-['Urbanist'] leading-6 sm:leading-7 pr-3 sm:pr-4">
                    {item.question}
                  </p>
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                    <ChevronDown
                      className={`w-6 h-6 sm:w-7 sm:h-7 text-[#1d1f2c] transition-transform duration-300 ease-in-out ${
                        isExpanded ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>

                {/* Answer Content - Expandable */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                    <div className="w-full h-px bg-[#dde2eb] mb-3 sm:mb-4"></div>
                    <p className="text-base sm:text-lg text-[#535967] font-['Urbanist'] leading-[22px] sm:leading-[25px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
