'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollTriggeredAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  threshold?: number;
  delay?: number;
}

export const useScrollTrigger = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const refresh = () => {
    setIsVisible(false);
    // Force re-trigger of intersection observer
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold }
      );
      observer.observe(ref.current);
    }
  };

  return { ref, isVisible, refresh };
};

const ScrollTriggeredAnimation: React.FC<ScrollTriggeredAnimationProps> = ({
  children,
  className = '',
  animationType = 'fadeIn',
  threshold = 0.1,
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollTrigger(threshold);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animationType) {
        case 'fadeIn':
          return `${baseClass} opacity-0`;
        case 'slideUp':
          return `${baseClass} opacity-0 translate-y-8`;
        case 'slideLeft':
          return `${baseClass} opacity-0 translate-x-8`;
        case 'slideRight':
          return `${baseClass} opacity-0 -translate-x-8`;
        case 'scale':
          return `${baseClass} opacity-0 scale-95`;
        default:
          return `${baseClass} opacity-0`;
      }
    }
    
    return `${baseClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollTriggeredAnimation;