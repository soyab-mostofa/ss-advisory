'use client';

import React from 'react';

interface SectionHeaderProps {
  sectionLabel: string;
  title: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  sectionLabel, 
  title, 
  className = '' 
}) => {
  return (
    <div className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-6 ${className}`}>
      {/* Section Title */}
      <div className="flex items-center gap-3 md:gap-3 md:w-[387px]">
        <div className="flex items-center gap-2 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a] rounded-l-lg px-3 py-[6px] pr-[60px]">
          <div className="w-2 h-2 bg-[#204199] rounded-full"></div>
          <span className="text-[#041e3a] text-xs sm:text-sm md:text-lg lg:text-xl font-medium">
            {sectionLabel}
          </span>
        </div>
        <div className="h-px w-[100px] md:w-[191px] bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]"></div>
      </div>
      
      {/* Main Title */}
      <div className="flex-1">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[64px] lg:leading-[77px] lg:tracking-[-2.56px] font-semibold text-[#535967]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
export type { SectionHeaderProps };