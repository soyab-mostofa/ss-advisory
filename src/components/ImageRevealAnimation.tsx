'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

interface ImageRevealAnimationProps {
  src: string;                    // Image source URL
  alt?: string;                   // Image alt text
  aspectRatio?: string;           // Optional aspect ratio (default: '6.3 / 7.1')
  borderRadius?: string;          // Optional border radius (default: '0.38rem')
  triggerPosition?: string;       // Optional scroll trigger position (default: 'top 75%')
  duration?: number;              // Optional animation duration (default: 1)
  ease?: string;                  // Optional easing function (default: 'power4.out')
  className?: string;             // Tailwind CSS classes for responsive sizing and styling
  style?: React.CSSProperties;    // Optional inline styles
}

const ImageRevealAnimation = ({
  src,
  alt = '',
  aspectRatio = '6.3 / 7.1',
  borderRadius = '0.38rem',
  triggerPosition = 'top 75%',
  duration = 1,
  ease = 'power4.out',
  className = '',
  style = {},
}: ImageRevealAnimationProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // Define clip paths with overlapping boundaries to eliminate gaps completely
  const initialClipPaths = [
    "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)",
    "polygon(33.33% 0%, 33.33% 0%, 33.33% 0%, 33.33% 0%)",
    "polygon(66.67% 0%, 66.67% 0%, 66.67% 0%, 66.67% 0%)",
    "polygon(0% 33.33%, 0% 33.33%, 0% 33.33%, 0% 33.33%)",
    "polygon(33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%, 33.33% 33.33%)",
    "polygon(66.67% 33.33%, 66.67% 33.33%, 66.67% 33.33%, 66.67% 33.33%)",
    "polygon(0% 66.67%, 0% 66.67%, 0% 66.67%, 0% 66.67%)",
    "polygon(33.33% 66.67%, 33.33% 66.67%, 33.33% 66.67%, 33.33% 66.67%)",
    "polygon(66.67% 66.67%, 66.67% 66.67%, 66.67% 66.67%, 66.67% 66.67%)"
  ];

  // Final clip paths with aggressive overlaps to eliminate 1px gaps
  const finalClipPaths = [
    "polygon(-1% -1%, 34% -1%, 34% 34%, -1% 34%)",
    "polygon(33% -1%, 67% -1%, 67% 34%, 33% 34%)",
    "polygon(66% -1%, 101% -1%, 101% 34%, 66% 34%)",
    "polygon(-1% 33%, 34% 33%, 34% 67%, -1% 67%)",
    "polygon(33% 33%, 67% 33%, 67% 67%, 33% 67%)",
    "polygon(66% 33%, 101% 33%, 101% 67%, 66% 67%)",
    "polygon(-1% 66%, 34% 66%, 34% 101%, -1% 101%)",
    "polygon(33% 66%, 67% 66%, 67% 101%, 33% 101%)",
    "polygon(66% 66%, 101% 66%, 101% 101%, 66% 101%)"
  ];

  // Animation order for the masks
  const animationOrder = [
    [".m-1"],
    [".m-2", ".m-4"],
    [".m-3", ".m-5", ".m-7"],
    [".m-6", ".m-8"],
    [".m-9"]
  ];

  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    if (!wrapperRef.current) return;
    
    const wrapper = wrapperRef.current;
    const masks = wrapper.querySelectorAll('.mask');
    
    // Set initial clip paths
    masks.forEach((mask, index) => {
      gsap.set(mask, {
        clipPath: initialClipPaths[index],
      });
    });
    
    // Create timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: triggerPosition,
      },
    });
    
    // Animate masks in sequence
    animationOrder.forEach((targets, index) => {
      tl.to(targets.map((cls) => wrapper.querySelectorAll(cls)), {
        clipPath: (i, el) => {
          return finalClipPaths[Array.from(wrapper.querySelectorAll('.mask')).indexOf(el)];
        },
        duration: duration,
        ease: ease,
        stagger: 0.1,
      }, index * 0.125);
    });
    
    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, [duration, ease, triggerPosition]);

  return (
    <div 
      ref={wrapperRef}
      className={`grid items-center justify-items-center overflow-hidden relative ${className}`}
      style={{
        ...style
      }}
    >
      {/* Original image (hidden) */}
      <img 
        src={src} 
        alt={alt} 
        className="original-image w-full h-full opacity-0"
        style={{
          gridArea: '1 / 1 / 2 / 2',
          aspectRatio: aspectRatio,
          borderRadius: borderRadius,
        }}
      />
      
      {/* Mask elements */}
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={`mask-${index + 1}`}
          className={`mask m-${index + 1} w-full h-full bg-cover bg-center z-10`}
          style={{
            gridArea: '1 / 1 / 2 / 2',
            backgroundImage: `url(${src})`,
            borderRadius: borderRadius,
            backgroundPosition: "center",
            backgroundSize: "cover",
            transform: 'scale(1.05) translateZ(0)', // Larger scale + hardware acceleration
            backfaceVisibility: 'hidden',
            willChange: 'clip-path, transform',
            WebkitTransform: 'scale(1.05) translateZ(0)',
            transformStyle: 'preserve-3d',
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            outline: 'none',
            border: 'none',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        />
      ))}
    </div>
  );
};

export default ImageRevealAnimation;