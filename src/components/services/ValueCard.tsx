'use client';

import Image from 'next/image';
import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  className?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`bg-white border border-[#d4e4ff] rounded-xl overflow-hidden w-full lg:w-[379px] h-[280px] ${className}`}>
      {/* Card Header with Icon and Decorative Element */}
      <div className="relative bg-[#eef8ff] p-6 flex flex-col gap-[10px]">
        <div className="flex items-center gap-5">
          <div className="size-16 relative bg-[#204199] border border-[#4d67ad] rounded-full flex items-center justify-center">
            <Image 
              src="/images/values-star.svg" 
              alt="" 
              className="size-8" 
              height={32} 
              width={32} 
            />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] lg:leading-[42px] font-semibold text-[#1d1f2c]">
            {title}
          </h3>
        </div>
        {/* Decorative Vector */}
        <Image 
          src="/images/meh65pgq-pvvc68r.png" 
          alt="" 
          className="absolute bottom-0 right-0 w-[60px] h-[60px] transform rotate-180"
          width={60}
          height={60}
        />
      </div>
      
      {/* Card Content */}
      <div className="px-6 py-5 flex items-center justify-center">
        <p className="text-xs sm:text-sm md:text-lg lg:text-xl lg:leading-7 text-[#545660] w-[331px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
export type { ValueCardProps };