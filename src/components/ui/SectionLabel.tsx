import React from 'react';

interface SectionLabelProps {
  label: string;
  showLine?: boolean;
  lineWidth?: string;
  textSize?: string;
  className?: string;
  variant?: 'light' | 'dark';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  showLine = true,
  lineWidth = 'w-[100px] md:w-[191px]',
  textSize = 'text-sm md:text-lg lg:text-xl',
  className,
  variant = 'light'
}) => {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center gap-3 md:gap-3 ${className || ''}`}>
      <div className={`flex items-center gap-2 rounded-l-lg px-3 py-[6px] pr-[60px] ${
        isDark 
          ? 'bg-gradient-to-r from-white/10 to-[#0d1321]/10' 
          : 'bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]'
      }`}>
        <div className={`w-2 h-2 rounded-full ${
          isDark ? 'bg-[#d4e4ff]' : 'bg-[#204199]'
        }`} />
        <span className={`font-medium font-urbanist ${textSize} ${
          isDark ? 'text-white' : 'text-[#041e3a]'
        }`}>{label}</span>
      </div>
      {showLine && (
        <div className={`h-px ${lineWidth} ${
          isDark 
            ? 'bg-gradient-to-r from-white/30 to-[#0d1321]/30' 
            : 'bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]'
        }`} />
      )}
    </div>
  );
};

export default SectionLabel;