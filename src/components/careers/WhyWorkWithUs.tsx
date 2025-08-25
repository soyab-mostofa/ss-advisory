'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';
import { gsap } from 'gsap';
import ValueCard from '@/components/services/ValueCard';
import InfiniteScroll from '../ui/InfiniteScroll';

const WhyWorkWithUs = () => {
  const values = [
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.'
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet consectetur. Aenean habitant neque tincidunt viverra.'
    }
  ];

  // Carousel state and refs
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % values.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isMobile, values.length]);

  // GSAP animation for carousel transitions
  const animateToIndex = useCallback((index: number) => {
    if (!contentRef.current || !isMobile) return;
    
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    
    timelineRef.current = gsap.timeline();
    timelineRef.current.to(contentRef.current, {
      x: `-${index * 100}%`,
      duration: 0.5,
      ease: 'power2.out'
    });
  }, [isMobile]);

  useEffect(() => {
    animateToIndex(currentIndex);
  }, [currentIndex, animateToIndex]);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
  }, [values.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % values.length);
  }, [values.length]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-start bg-[#f8f8f8] px-4 md:px-[120px] py-[60px] md:py-[100px] w-full md:w-[1440px] gap-8 md:gap-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center self-stretch gap-4 md:gap-6">
        {/* Section Title */}
        <div className="flex items-center gap-3 w-full md:w-[387px]">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-l-lg px-3 py-[6px] pr-[60px] bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]">
              <div className="w-2 h-2 rounded-full bg-[#204199]" />
              <p className="text-lg md:text-xl leading-6 md:leading-7 text-[#041e3a] font-urbanist">
                SERVICES
              </p>
            </div>
            <div className="w-[120px] md:w-[191px] h-px bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]" />
          </div>
        </div>
        
        {/* Title */}
        <h2 className="flex-grow text-3xl md:text-6xl leading-[40px] md:leading-[77px] tracking-[-1.5px] md:tracking-[-2.56px] font-semibold text-[#535967] font-urbanist">
          Why Work With Us?
        </h2>
      </div>
      
      {/* Mobile Carousel */}
        <InfiniteScroll direction='left'  className='md:hidden flex'>
          {values.map((value, index) => (
            <ValueCard
            className='ml-4'
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </InfiniteScroll>
      
      {/* Desktop Grid */}
      <div className="hidden md:flex flex-col items-start self-stretch -mr-px gap-8">
        {/* First Row */}
        <div className="flex items-center self-stretch gap-8">
          {values.slice(0, 3).map((value, index) => (
            <ValueCard
              key={`row1-${index}`}
              title={value.title}
              description={value.description}
              className="flex-shrink-0"
            />
          ))}
        </div>
        
        {/* Second Row */}
        <div className="flex items-center self-stretch gap-8">
          {values.slice(3, 6).map((value, index) => (
            <ValueCard
              key={`row2-${index}`}
              title={value.title}
              description={value.description}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;