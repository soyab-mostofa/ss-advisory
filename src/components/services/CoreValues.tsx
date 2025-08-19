'use client';

import Image from 'next/image';
import React from 'react';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

interface CoreValuesProps {
  coreValues: CoreValue[];
  className?: string;
}

const CoreValues: React.FC<CoreValuesProps> = ({ coreValues, className = '' }) => {
  return (
    <section className={`px-4 md:px-[120px] py-16 md:py-[100px] ${className}`}>
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-6">
          {/* Section Title */}
          <div className="flex items-center gap-3 md:gap-3 md:w-[387px]">
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a] rounded-l-lg px-3 py-[6px] pr-[60px]">
              <div className="w-2 h-2 bg-[#204199] rounded-full"></div>
              <span className="text-[#041e3a] text-lg md:text-xl font-medium">VALUES</span>
            </div>
            <div className="h-px w-[100px] md:w-[191px] bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]"></div>
          </div>
          
          {/* Main Title */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-[64px] md:leading-[77px] md:tracking-[-2.56px] font-semibold text-[#535967]">Our Core Values</h2>
          </div>
        </div>
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white border border-[#d4e4ff] rounded-xl overflow-hidden w-full lg:w-[379px] h-[280px]">
              {/* Card Header with Icon and Decorative Element */}
              <div className="relative bg-[#eef8ff] p-6 flex flex-col gap-[10px]">
                <div className="flex items-center gap-5">
                  <div className="size-16 relative  bg-[#204199] border border-[#4d67ad] rounded-full block items-center justify-center p-6">
                    <Image src="/images/values-star.svg" alt="" className='absolute inset-0 object-cover size-8 translate-x-3 translate-y-3' height={44} width={44} />
                  </div>
                  <h3 className="text-[30px] leading-[42px] font-semibold text-[#1d1f2c]">{value.title}</h3>
                </div>
                {/* Decorative Vector */}
                <img 
                  src="/images/meh65pgq-pvvc68r.png" 
                  alt="" 
                  className="absolute bottom-0 right-0 w-[60px] h-[60px] transform rotate-180"
                />
              </div>
              
              {/* Card Content */}
              <div className="px-6 py-5 flex items-center justify-center">
                <p className="text-xl leading-7 text-[#545660] w-[331px]">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
export type { CoreValue };