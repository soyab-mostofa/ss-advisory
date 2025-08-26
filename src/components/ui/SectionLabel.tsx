import React from 'react';

interface SectionLabelProps {
  label: string;
  showLine?: boolean;
  lineWidth?: string;
  textSize?: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  showLine = true,
  lineWidth = 'w-[100px] md:w-[191px]',
  textSize = 'text-xs sm:text-sm md:text-lg lg:text-xl',
  className
}) => {
  return (
    <div className={`flex items-center gap-3 md:gap-3 ${className || ''}`}>
      <div className="flex items-center gap-2 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a] rounded-l-lg px-3 py-[6px] pr-[60px]">
        <div className="w-2 h-2 bg-[#204199] rounded-full" />
        <span className={`text-[#041e3a] font-medium font-urbanist ${textSize}`}>{label}</span>
      </div>
      {showLine && (
        <div className={`h-px bg-gradient-to-r from-[#ffffff4d] to-[#2041994d] ${lineWidth}`} />
      )}
    </div>
  );
};

export default SectionLabel;