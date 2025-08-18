'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  isExpanded?: boolean;
  image?: string;
  tags?: string[];
}

const Services = () => {
  const [expandedService, setExpandedService] = useState<string>('02');

  const services: ServiceItem[] = [
    {
      id: '01',
      number: '01',
      title: 'Financial Planning & Advisory',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.',
      image: '/images/megv1vhw-9xzmxbt.png',
      tags: ['Investment Strategy', 'Retirement Planning', 'Risk Assessment', 'Portfolio Analysis']
    },
    {
      id: '02',
      number: '02',
      title: 'Portfolio Management',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.',
      isExpanded: true,
      image: '/images/portfolio-management.png',
      tags: ['Asset Allocation', 'Performance Tracking', 'Risk Management', 'Market Analysis', 'Diversification']
    },
    {
      id: '03',
      number: '03',
      title: 'Business & Legal Advocacy',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.',
      image: '/images/megv1vhw-9xzmxbt.png',
      tags: ['Corporate Law', 'Contract Review', 'Compliance', 'Legal Advisory']
    },
    {
      id: '04',
      number: '04',
      title: 'Tax & Compliance Services',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.',
      image: '/images/megv1vhw-9xzmxbt.png',
      tags: ['Tax Planning', 'Audit Support', 'Regulatory Compliance', 'Filing Services']
    },
  ];

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? '' : serviceId);
  };

  return (
    <section className="bg-white w-full">
      <div className="flex flex-col items-start px-4 py-12 gap-8 md:px-[120px] md:py-[100px] md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-start self-stretch gap-4 md:flex-row md:items-center md:gap-6">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="inline-flex items-center gap-2 rounded-l-lg px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]">
              <div className="w-2 h-2 bg-[#204199] rounded-full flex-shrink-0"></div>
              <span className="font-urbanist text-sm md:text-[20px] leading-[22px] md:leading-[28px] text-[#041e3a]">
                SERVICES
              </span>
            </div>
            <div className="hidden md:block flex-shrink-0 w-[191px] h-px bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]"></div>
          </div>
          <h2 className="font-urbanist font-semibold text-[40px] leading-[48px] md:text-[64px] md:leading-[77px] tracking-[-1.6px] md:tracking-[-2.56px] text-black">
            <span className="text-[#535967]">Expertise</span>
            <br className="md:hidden" />
            <span className="text-[#535967] hidden md:inline">&nbsp;</span>
            <span className="text-[#204199]">You Can Trust</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col items-start self-stretch gap-8 md:gap-12">
          {services.map((service, index) => {
            const isExpanded = expandedService === service.id;
            return (
              <React.Fragment key={service.id}>
                {/* Service Item */}
                {!isExpanded ? (
                  <div className="flex flex-col md:flex-row md:items-center self-stretch cursor-pointer group gap-4 md:gap-8" onClick={() => toggleService(service.id)}>
                    {/* Header Section - Mobile */}
                    <div className="flex items-center gap-5 md:gap-[72px] md:w-[687px]">
                      <p className="font-urbanist font-medium text-lg md:text-2xl leading-[25px] md:leading-[34px] text-[#535967] w-[31px]">
                        {service.number}
                      </p>
                      <p className="flex-grow font-urbanist font-bold text-2xl md:text-[40px] leading-6 md:leading-10 tracking-[-0.96px] md:tracking-[-1.6px] text-[#0d1321]">
                        {service.title}
                      </p>
                    </div>
                    
                    {/* Description Section */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[47px]">
                      <p className="font-urbanist text-base md:text-xl leading-6 md:leading-7 text-[#535967] md:w-[378px]">
                        {service.description}
                      </p>
                      <div className="hidden md:inline-flex items-center rounded-full border-2 group-hover:bg-[#204199] transition-all duration-300 border-[#4d67ad] bg-[#eef8ff] p-1.5">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="transition-all duration-300">
                          <path d="M13.3333 26.6667L26.6667 13.3333M26.6667 13.3333H16.6667M26.6667 13.3333V23.3333" stroke="#535967" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Expanded Service */
                  <div className="flex flex-col items-start self-stretch gap-6 md:gap-10">
                    {/* Service Header */}
                    <div className="flex flex-col md:flex-row md:items-center self-stretch cursor-pointer gap-4 md:gap-8" onClick={() => toggleService(service.id)}>
                      {/* Header Section */}
                      <div className="flex items-center gap-5 md:gap-[72px] md:w-[687px]">
                        <p className="font-urbanist font-medium text-lg md:text-2xl leading-[25px] md:leading-[34px] text-[#535967] w-[31px]">
                          {service.number}
                        </p>
                        <p className="flex-grow font-urbanist font-bold text-2xl md:text-[40px] leading-6 md:leading-10 tracking-[-0.96px] md:tracking-[-1.6px] text-[#0d1321]">
                          {service.title}
                        </p>
                      </div>
                      
                      {/* Description Section */}
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[47px]">
                        <p className="font-urbanist text-base md:text-xl leading-6 md:leading-7 text-[#535967] md:w-[378px]">
                          {service.description}
                        </p>
                        <div className="hidden md:inline-flex items-center rounded-full bg-[#204199] p-2">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="-rotate-45">
                            <path d="M13.3333 26.6667L26.6667 13.3333M26.6667 13.3333H16.6667M26.6667 13.3333V23.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    <div className="flex flex-col md:flex-row md:items-end self-stretch gap-4 md:gap-[135px]">
                      {/* Image */}
                      <div className="flex flex-col items-center md:items-end justify-center w-full md:w-[584px]">
                        {service.image && (
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={481}
                            height={200}
                            className="rounded-xl object-cover w-full md:w-[481px] h-[200px]"
                          />
                        )}
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-col items-start gap-3 md:gap-4">
                        {service.tags && (
                          <>
                            {/* First Row */}
                            <div className="flex flex-wrap items-center gap-2">
                              {service.tags.slice(0, 2).map((tag, tagIndex) => (
                                <div key={tagIndex} className="inline-flex items-center rounded-full border border-[#dde2eb] px-3 py-1 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]">
                                  <p className="font-urbanist text-sm md:text-base leading-6 text-[#535967]">
                                    {tag}
                                  </p>
                                </div>
                              ))}
                            </div>
                            
                            {/* Second Row */}
                            {service.tags.length > 2 && (
                              <div className="flex flex-wrap items-center gap-2">
                                {service.tags.slice(2, 5).map((tag, tagIndex) => (
                                  <div key={tagIndex + 2} className="inline-flex items-center rounded-full border border-[#dde2eb] px-3 py-1 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]">
                                    <p className="font-urbanist text-sm md:text-base leading-6 text-[#535967]">
                                      {tag}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Divider Line */}
                {index < services.length - 1 && (
                  <div className="self-stretch" style={{ height: '1px', backgroundColor: '#dde2eb' }}></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;