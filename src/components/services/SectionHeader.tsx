'use client';

import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import TextRevealAnimation from '../TextRevealAnimation';

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
      <div className="md:w-[387px]">
        <SectionLabel 
          label={sectionLabel} 
          lineWidth="w-[100px] md:w-[191px]" 
          textSize="text-xs sm:text-sm md:text-lg lg:text-xl"
          className="md:py-[10px] md:w-[387px]"
        />
      </div>
      
      {/* Main Title */}
      <div className="flex-1">
        <TextRevealAnimation highlightEnd='Core Values' className='text-xl sm:text-2xl md:text-4xl lg:text-[64px] lg:tracking-[-2.56px] font-semibold text-[#535967]' text={title}/>
      </div>
    </div>
  );
};

export default SectionHeader;
export type { SectionHeaderProps };