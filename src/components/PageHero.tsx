'use client';

import React from 'react';
import TextRevealAnimation from './TextRevealAnimation';
import { SectionLabel } from './ui/SectionLabel';

interface PageHeroProps {
  sectionLabel: string;
  title: string;
  highlightedText?: string;
  regularText?: string;
  imageSrc: string;
  imageAlt: string;
  useTextReveal?: boolean;
  className?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  sectionLabel,
  title,
  highlightedText,
  regularText,
  imageSrc,
  imageAlt,
  useTextReveal = false,
  className = ''
}) => {
  return (
    <section className={`relative px-4 md:px-[120px] py-10 md:py-[40px] pb-16 md:pb-[100px] ${className}`}>
      <div className="flex flex-col gap-8 md:gap-[45px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-6">
          {/* Section Title */}
          <div className="md:py-[10px] md:w-[387px]">
            <SectionLabel 
              label={sectionLabel} 
              lineWidth="w-[100px] md:w-[191px]"
              className="md:py-[10px] md:w-[387px]"
            />
          </div>
          
          {/* Main Heading */}
          <div className="flex-1 md:w-[789px]">
            <div className="text-3xl md:text-[48px] md:leading-[58px] md:tracking-[-1.92px] font-medium font-urbanist">
              {useTextReveal ? (
                <TextRevealAnimation 
                  text={title}
                  highlightStart={highlightedText || ''}
                  className="w-full"
                />
              ) : (
                <p>
                  {highlightedText && (
                    <span className="text-[#0d1321]">{highlightedText}&nbsp;</span>
                  )}
                  {regularText && (
                    <span className="text-[#b5bac5]">{regularText}</span>
                  )}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Main Image */}
        <div className="w-full">
          <img 
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[250px] md:h-[460px] object-cover rounded-lg"
          />
        </div>
      </div>
      
      {/* Decorative Vector */}
      <div className="absolute bottom-10 right-4 md:bottom-10 md:right-10 w-[100px] md:w-[212px] h-[100px] md:h-[211px]">
        <img 
          src="/images/blur-vector.svg" 
          alt="Decorative vector" 
          className="w-full h-full backdrop-blur-xs bg-gray-50/20" 
        />
      </div>
    </section>
  );
};

export default PageHero;