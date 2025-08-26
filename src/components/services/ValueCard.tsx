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
    <div className={`bg-white border border-[#d4e4ff] rounded-xl overflow-hidden max-w-[300px] md:max-w-[379px] h-64  md:h-[280px] ${className}`}>
      {/* Card Header with Icon and Decorative Element */}
      <div className="relative bg-[#eef8ff] p-6 flex flex-col gap-[10px]">
        <div className="flex items-center gap-5">
            <Image 
              src="/star-icon.svg" 
              alt="" 
              className=" size-10 md:size-16" 
              height={32} 
              width={32} 
            />
          
          <h3 className="min-w-0 text-base sm:text-xl  font-semibold text-[#1d1f2c] whitespace-normal break-words hyphens-auto">
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
      <div className="px-6 max-w-fit py-5 flex items-center justify-center">
        <p className="text-sm md:text-lg lg:text-xl lg:leading-7 text-[#545660] whitespace-normal break-words font-normal hyphens-auto w-full sm:w-[331px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
export type { ValueCardProps };