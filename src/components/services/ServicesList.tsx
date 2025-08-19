'use client';

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface ServicesListProps {
  services: Service[];
  className?: string;
}

const ServicesList: React.FC<ServicesListProps> = ({ services, className = '' }) => {
  return (
    <section className={`bg-[#f8f8f8] px-4 md:px-[120px] py-16 md:py-[100px] ${className}`}>
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-6">
          {/* Section Title */}
          <div className="flex items-center gap-3 md:gap-3 md:w-[387px]">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a] rounded-l-lg px-3 py-[6px] pr-[60px]">
              <div className="w-2 h-2 bg-[#204199] rounded-full"></div>
              <span className="text-[#041e3a] text-lg md:text-xl font-medium">SERVICES</span>
            </div>
            <div className="h-px w-[100px] md:w-[191px] bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]"></div>
          </div>
          
          {/* Main Title */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-[64px] md:leading-[77px] md:tracking-[-2.56px] font-semibold">
              <span className="text-[#535967]">Expertise&nbsp;</span>
              <span className="text-[#204199]">You Can Trust</span>
            </h2>
          </div>
        </div>
        
        {/* Services List */}
        <div className="flex flex-col gap-8 md:gap-12">
          {services.map((service, index) => (
            <div key={index}>
              <div className="flex flex-col gap-6 md:gap-9">
                {/* Service Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[71px]">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-[72px] md:w-[616px]">
                    <span className="text-2xl md:text-2xl font-medium text-[#535967] md:w-[31px]">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl md:text-[40px] md:leading-[40px] md:tracking-[-1.6px] font-bold text-[#0d1321] flex-1">{service.title}</h3>
                  </div>
                  <p className="text-lg md:text-xl md:leading-7 text-[#535967] md:w-[513px] md:h-14 flex items-center">{service.description}</p>
                </div>
                
                {/* Service Content */}
                <div className="flex flex-col justify-between lg:flex-row gap-8 md:gap-[71px] md:ml-[103px]">
                  {/* Text and Features */}
                  <div className="flex flex-col gap-6 md:gap-10">
                    {/* Features List */}
                    <div className="flex flex-col gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <Check className="w-6 h-6 text-[#204199] flex-shrink-0" />
                          <span className="text-lg md:text-xl md:leading-7 text-[#545a62] flex-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Button */}
                    <button className="flex items-center justify-center gap-2 border border-[#204199] bg-[#eef8ff] rounded-xl px-4 py-[15px] w-full md:w-[205px] hover:bg-[#d4e4ff] transition-colors">
                      <ArrowRight className="w-5 h-5 text-[#204199]" />
                      <span className="text-base font-medium text-[#204199]">Learn More</span>
                      <ArrowRight className="w-5 h-5 text-[#204199]" />
                    </button>
                  </div>
                  
                  {/* Service Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={`https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20financial%20service%20${service.title.toLowerCase().replace(/[^a-z0-9]/g, '%20')}%20modern%20office%20business%20setting&image_size=landscape_4_3`}
                      alt={service.title}
                      className="w-full md:w-[540px] h-[250px] md:h-[332px] object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              {index < services.length - 1 && (
                <div className="h-px bg-[#dde2eb] mt-8 md:mt-12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
export type { Service };