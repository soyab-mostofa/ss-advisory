'use client';

import React, { useState } from 'react';

// Simple chevron down SVG component
const ChevronDown = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
    question: "What types of financial services do you offer?",
    answer: "We offer comprehensive financial services including investment management, financial planning, retirement planning, tax optimization, and wealth preservation strategies tailored to your specific needs."
  },
  {
    id: 2,
    question: "How does your advocacy service work?",
    answer: "Our advocacy team supports clients in legal, regulatory, and business matters to protect their interests and resolve challenges."
  },
  {
    id: 3,
    question: "Who can benefit from your services?",
    answer: "Our services are designed for individuals, families, and businesses seeking professional financial guidance, from young professionals starting their wealth journey to established entrepreneurs and retirees."
  },
  {
    id: 4,
    question: "How do you customize your financial solutions?",
    answer: "We begin with a comprehensive assessment of your financial situation, goals, and risk tolerance. Then we develop personalized strategies that align with your unique circumstances and objectives."
  },
  {
    id: 5,
    question: "What makes SS Advisory different from other firms?",
    answer: "Our commitment to personalized service, transparent communication, and innovative financial strategies sets us apart. We prioritize long-term relationships and deliver results that exceed expectations."
  }
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
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a] rounded-l-lg py-1.5 px-3 pr-6 sm:pr-15">
            <div className="w-2 h-2 bg-[#204199] rounded-full"></div>
            <span className="text-[#041e3a] text-lg sm:text-xl font-medium font-['Urbanist']">
              FAQ
            </span>
          </div>
          <div className="w-[150px] sm:w-[250px] h-px bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]"></div>
        </div>
        <h2 className="text-3xl sm:text-6xl font-semibold font-['Urbanist'] leading-[40px] sm:leading-[77px] tracking-[-1.2px] sm:tracking-[-2.56px] sm:flex-1">
          <span className="text-[#535967]">What You&nbsp;</span>
          <span className="text-[#204199]">Need to Know</span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-17">
        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <img 
            src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20business%20meeting%20two%20men%20in%20suits%20discussing%20financial%20documents%20laptop%20modern%20office%20setting%20corporate%20environment%20consultation&image_size=portrait_4_3" 
            alt="Business consultation meeting"
            className="w-full h-[280px] sm:w-[445px] sm:h-[558px] rounded-xl object-cover"
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
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                {/* Answer Content - Expandable */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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