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
    <section className="bg-white" style={{ width: '1454px', height: '1093px' }}>
      <div className="flex flex-col items-start" style={{ padding: '100px 120px', rowGap: '64px', flexGrow: 1 }}>
        {/* Section Header */}
        <div className="flex items-center self-stretch" style={{ columnGap: '24px' }}>
          <div className="flex items-center" style={{ columnGap: '12px', width: '387px' }}>
            <div className="inline-flex items-center" style={{
              columnGap: '8px',
              borderRadius: '8px 0px 0px 8px',
              padding: '6px 60px 6px 12px',
              backgroundImage: 'linear-gradient(90deg, #2041991a 0%, #ffffff1a 100%)'
            }}>
              <div className="w-2 h-2 bg-[#204199] rounded-full flex-shrink-0"></div>
              <span className="font-urbanist text-[20px] leading-[28px] text-[#041e3a]">
                SERVICES
              </span>
            </div>
            <div className="flex-shrink-0" style={{
              width: '191px',
              height: '1px',
              backgroundImage: 'linear-gradient(90deg, #ffffff4d 0%, #2041994d 100%)'
            }}></div>
          </div>
          <h2 className="flex-grow font-urbanist font-semibold" style={{
            fontSize: '64px',
            lineHeight: '77px',
            letterSpacing: '-2.56px',
            color: '#000000'
          }}>
            <span style={{ color: '#535967' }}>Expertise&nbsp;</span>
            <span style={{ color: '#204199' }}>You Can Trust</span>
          </h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col items-start self-stretch" style={{ rowGap: '48px' }}>
          {services.map((service, index) => {
            const isExpanded = expandedService === service.id;
            return (
              <React.Fragment key={service.id}>
                {/* Service Item */}
                {!isExpanded ? (
                  <div className="flex items-center self-stretch cursor-pointer group" style={{ columnGap: '32px' }} onClick={() => toggleService(service.id)}>
                    {/* Left Section */}
                    <div className="flex items-center" style={{ columnGap: '72px', width: '687px' }}>
                      <p className="font-urbanist font-medium" style={{
                        fontSize: '24px',
                        lineHeight: '34px',
                        color: '#535967',
                        width: '31px'
                      }}>
                        {service.number}
                      </p>
                      <p className="flex-grow font-urbanist font-bold" style={{
                        fontSize: '40px',
                        lineHeight: '40px',
                        letterSpacing: '-1.6px',
                        color: '#0d1321'
                      }}>
                        {service.title}
                      </p>
                    </div>
                    
                    {/* Right Section */}
                    <div className="flex items-center" style={{ columnGap: '47px' }}>
                      <p className="font-urbanist" style={{
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: '#535967',
                        width: '378px'
                      }}>
                        {service.description}
                      </p>
                      <div className="inline-flex items-center rounded-full border-2 group-hover:bg-[#204199] transition-all duration-300" style={{
                        borderColor: '#4d67ad',
                        backgroundColor: '#eef8ff',
                        padding: '6px',
                        columnGap: '10px'
                      }}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="transition-all duration-300">
                          <path d="M13.3333 26.6667L26.6667 13.3333M26.6667 13.3333H16.6667M26.6667 13.3333V23.3333" stroke="#535967" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Expanded Service */
                  <div className="flex flex-col items-start self-stretch" style={{ rowGap: '40px' }}>
                    {/* Service Header */}
                    <div className="flex items-center self-stretch cursor-pointer" style={{ columnGap: '32px' }} onClick={() => toggleService(service.id)}>
                      {/* Left Section */}
                      <div className="flex items-center" style={{ columnGap: '72px', width: '687px' }}>
                        <p className="font-urbanist font-medium" style={{
                          fontSize: '24px',
                          lineHeight: '34px',
                          color: '#535967',
                          width: '31px'
                        }}>
                          {service.number}
                        </p>
                        <p className="flex-grow font-urbanist font-bold" style={{
                          fontSize: '40px',
                          lineHeight: '40px',
                          letterSpacing: '-1.6px',
                          color: '#0d1321'
                        }}>
                          {service.title}
                        </p>
                      </div>
                      
                      {/* Right Section */}
                      <div className="flex items-center" style={{ columnGap: '47px' }}>
                        <p className="font-urbanist" style={{
                          fontSize: '20px',
                          lineHeight: '28px',
                          color: '#535967',
                          width: '378px'
                        }}>
                          {service.description}
                        </p>
                        <div className="inline-flex items-center rounded-full" style={{
                          backgroundColor: '#204199',
                          padding: '8px',
                          columnGap: '10px'
                        }}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ transform: 'rotate(-45deg)' }}>
                            <path d="M13.3333 26.6667L26.6667 13.3333M26.6667 13.3333H16.6667M26.6667 13.3333V23.3333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Expanded Content */}
                    <div className="inline-flex items-end self-stretch" style={{ columnGap: '135px', marginRight: '104px' }}>
                      {/* Image */}
                      <div className="flex flex-col items-end justify-center" style={{ width: '584px', rowGap: '10px' }}>
                        {service.image && (
                          <Image
                            src={service.image}
                            alt={service.title}
                            width={481}
                            height={200}
                            className="rounded-xl object-cover"
                            style={{ width: '481px', height: '200px' }}
                          />
                        )}
                      </div>
                      
                      {/* Tags */}
                      <div className="flex flex-col items-start" style={{ rowGap: '16px' }}>
                        {service.tags && (
                          <>
                            {/* First Row */}
                            <div className="inline-flex items-center self-stretch gap-2" >
                              {service.tags.slice(0, 2).map((tag, tagIndex) => (
                                <div key={tagIndex} className="inline-flex items-center rounded-full border" style={{
                                  borderColor: '#dde2eb',
                                  padding: '3px 11px',
                                  backgroundImage: 'linear-gradient(90deg, #2041991a 0%, #ffffff1a 100%)',
                                  columnGap: '10px'
                                }}>
                                  <p className="font-urbanist" style={{
                                    fontSize: '16px',
                                    lineHeight: '24px',
                                    color: '#535967'
                                  }}>
                                    {tag}
                                  </p>
                                </div>
                              ))}
                            </div>
                            
                            {/* Second Row */}
                            {service.tags.length > 2 && (
                              <div className="flex items-center self-stretch gap-2" >
                                {service.tags.slice(2, 5).map((tag, tagIndex) => (
                                  <div key={tagIndex + 2} className="inline-flex items-center rounded-full border" style={{
                                    borderColor: '#dde2eb',
                                    padding: '3px 11px',
                                    backgroundImage: 'linear-gradient(90deg, #2041991a 0%, #ffffff1a 100%)',
                                    columnGap: '10px'
                                  }}>
                                    <p className="font-urbanist" style={{
                                      fontSize: '16px',
                                      lineHeight: '24px',
                                      color: '#535967'
                                    }}>
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