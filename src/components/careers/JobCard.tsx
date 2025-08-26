'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight} from 'lucide-react';

interface JobCardProps {
  title: string;
  tags: string[];
  deadline: string;
  description: string;
  salary: string;
  currency?: string;
  period?: string;
  onApply?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  tags,
  deadline,
  description,
  salary,
  currency = '৳',
  period = '/Month',
  onApply
}) => {
  return (
    <div className="flex flex-col items-start border border-[#dde2eb] rounded-xl bg-[#f8f8f8] p-[23px] gap-5 w-full sm:w-[400px] md:w-[450px] lg:w-[536px]">
      {/* Job Info */}
      <div className="flex flex-col items-start self-stretch gap-3">
        {/* Job Header */}
        <div className="flex flex-col items-start self-stretch gap-3">
          {/* Title */}
          <h3 className="self-stretch text-2xl leading-[34px] font-semibold text-[#0d1321] font-urbanist">
            {title}
          </h3>
          
          {/* Tags and Date */}
          <div className="flex flex-col md:flex-row md:items-center self-stretch md:justify-between gap-2 md:gap-0">
            {/* Tags */}
            <div className="inline-flex items-center gap-3">
              {tags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <span className="text-lg leading-[25px] text-[#535967] font-dm-sans">
                    {tag}
                  </span>
                  {index < tags.length - 1 && (
                    <div className="relative w-px h-4">
                      <div className="absolute top-2 -left-2 w-4 h-px bg-[#dde2eb] rotate-90" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Deadline */}
            <p className="text-lg leading-[25px]">
              <span className="text-[#ff0000] font-semibold font-urbanist">Deadline:</span>
              <span className="text-[#545660] font-dm-sans">&nbsp;</span>
              <span className="text-[#545660] font-urbanist">{deadline}</span>
            </p>
          </div>
        </div>
        
        {/* Description */}
        <p className="self-stretch text-base leading-6 text-[#535967] font-urbanist">
          {description}
        </p>
      </div>
      
      {/* Divider */}
      <div className="self-stretch h-px bg-[#dde2eb]" />
      
      {/* Salary and Apply */}
      <div className="flex items-center self-stretch justify-between">
        {/* Salary Info */}
        <div className="inline-flex items-center gap-1">
          <span className="text-2xl leading-[34px] font-bold text-[#1d3b8b] font-urbanist">
            {currency}{salary}
          </span>
          <span className="text-lg leading-[25px] text-[#545660] font-urbanist">
            {period}
          </span>
        </div>
        
        {/* Apply Button */}
        <button
          onClick={onApply}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#204199] px-4 py-3 hover:bg-[#1d3b8b] transition-colors"
        >
          <span className="text-base leading-6 font-medium text-white font-urbanist">
            Apply Now
          </span>
         <ArrowRight className='size-4'/>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
export type { JobCardProps };