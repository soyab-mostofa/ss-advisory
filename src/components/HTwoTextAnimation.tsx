'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface HTwoTextAnimationProps {
  text: string;
  className?: string;
  highlightStart?: string;
  highlightEnd?: string;
  dark?: boolean;
}

const HTwoTextAnimation: React.FC<HTwoTextAnimationProps> = ({ 
  text, 
  className = '', 
  highlightStart, 
  highlightEnd,
  dark
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wrappedLines, setWrappedLines] = useState<string[][]>([]);

  useEffect(() => {
    const wrapText = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const words = text.split(' ');
      const lines: string[][] = [];
      let currentLine: string[] = [];

      // Create a temporary span to measure text width with exact styling
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.top = '-9999px';
      tempSpan.style.left = '-9999px';
      tempSpan.style.fontSize = window.innerWidth >= 768 ? '64px' : '40px';
      tempSpan.style.fontWeight = '600';
      tempSpan.style.lineHeight = window.innerWidth >= 768 ? '77px' : '48px';
      tempSpan.style.letterSpacing = window.innerWidth >= 768 ? '-2.56px' : '-1.6px';
      tempSpan.style.fontFamily = 'Urbanist, sans-serif';
      tempSpan.style.whiteSpace = 'nowrap';
      document.body.appendChild(tempSpan);

      // Measure actual space width
      tempSpan.textContent = ' ';
      const spaceWidth = tempSpan.offsetWidth;

      // Calculate margin width (0.25em converted to pixels)
      const fontSize = window.innerWidth >= 768 ? 64 : 40;
      const marginWidth = fontSize * 0.25; // 0.25em in pixels

      const containerWidth = container.offsetWidth;
      let currentLineWidth = 0;

      words.forEach((word, index) => {
        tempSpan.textContent = word;
        const wordWidth = tempSpan.offsetWidth;
        
        // Calculate total width needed for this word including spacing
        const wordTotalWidth = wordWidth + (currentLine.length > 0 ? spaceWidth + marginWidth : 0);

        if (currentLine.length === 0 || currentLineWidth + wordTotalWidth <= containerWidth) {
          currentLine.push(word);
          currentLineWidth += wordWidth + (currentLine.length > 1 ? spaceWidth + marginWidth : 0);
        } else {
          lines.push([...currentLine]);
          currentLine = [word];
          currentLineWidth = wordWidth;
        }
      });

      if (currentLine.length > 0) {
        lines.push(currentLine);
      }

      document.body.removeChild(tempSpan);
      setWrappedLines(lines);
    };

    wrapText();
    window.addEventListener('resize', wrapText);

    return () => {
      window.removeEventListener('resize', wrapText);
    };
  }, [text]);

  useEffect(() => {
    if (!containerRef.current || wrappedLines.length === 0) return;

    const spans = containerRef.current.querySelectorAll('.h2-word-span');
    const container = containerRef.current;
    
    // Get highlight spans
    const startHighlightSpans = highlightStart ? 
      Array.from(spans).filter((span, index) => {
        const startWords = highlightStart.split(' ');
        return index < startWords.length;
      }) : [];
    
    const endHighlightSpans = highlightEnd ? 
      Array.from(spans).filter((span, index) => {
        const endWords = highlightEnd.split(' ');
        const totalWords = text.split(' ').length;
        return index >= totalWords - endWords.length;
      }) : [];
    
    // Set initial state for all spans - reveal from above with cheese up effect
    // Initial state is now set above with color handling
    
    // Set initial state for highlight spans (they start as regular color)
    gsap.set([...startHighlightSpans, ...endHighlightSpans], {
      color: dark ? '#ffffff': "#535967", // Default gray color
      opacity: 0
    });
    
    // Set initial color for all spans based on dark mode
    gsap.set(spans, {
      y: -60, // Start from above (negative Y)
      opacity: 0,
      skewY: -3, // Slight negative skew for upward motion
      color: dark ? '#000000' : '#000000' // Start with black for both modes
    });

    // Create master timeline (paused initially)
    const masterTl = gsap.timeline({ paused: true });
    
    // Phase 1: Text reveal animation from above with cheese up easing
    masterTl.to(spans, {
      y: 0,
      opacity: 1,
      skewY: 0,
      color: dark ? '#ffffff' : '#000000', // Fade to white for dark mode, black for light mode
      duration: 1.2,
      ease: "power4.out", // Cheese up easing - smooth deceleration
      stagger: {
        amount: 0.4,
        from: "start"
      }
    });
    
    // Phase 2: Starting highlight color change (after text reveal)
    if (startHighlightSpans.length > 0) {
      masterTl.to(startHighlightSpans, {
        color: dark ? '#cccccc' : '#535967', // Light gray for dark mode, dark gray for light mode
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          amount: 0.2,
          from: "start"
        }
      }, ">+=0.3"); // Start 0.3s after text reveal completes
    }
    
    // Phase 3: Ending highlight color change (after starting highlight)
    if (endHighlightSpans.length > 0) {
      masterTl.to(endHighlightSpans, {
        color: dark ? '#6ba3f5' : '#204199', // Light blue for dark mode, dark blue for light mode
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          amount: 0.2,
          from: "end"
        }
      }, ">+=0.2"); // Start 0.2s after starting highlight completes
    }

    // ScrollTrigger to trigger animation on scroll
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top 70%", // Trigger when 30% of element is visible (100% - 30% = 70%)
      end: "bottom 20%",
      onEnter: () => {
        masterTl.play();
      },
      once: true // Only animate once
    });

    return () => {
      masterTl.kill();
      scrollTrigger.kill();
    };
  }, [wrappedLines, highlightStart, highlightEnd, text, dark]);

  // Helper function to determine initial word color
  const getInitialWordColor = () => {
    // All words start with black color, highlights will be animated via GSAP
    // The actual color transition happens via GSAP animation
    return dark ? 'text-black' : 'text-black';
  };

  return (
    <h2 ref={containerRef} className={`gsap-h2-reveal font-urbanist font-semibold text-[40px] leading-[48px] md:text-[64px] md:leading-[77px] tracking-[-1.6px] md:tracking-[-2.56px] ${className}`}>
      {wrappedLines.map((line, lineIndex) => (
        <div key={lineIndex} className="line overflow-hidden h-[48px] md:h-[77px]">
          {line.map((word, wordIndex) => {
            const colorClass = getInitialWordColor();
            return (
              <span
                key={`${lineIndex}-${wordIndex}`}
                className={`h2-word-span ${colorClass} inline-block mr-[0.25em]`}
              >
                {word}
              </span>
            );
          })}
        </div>
      ))}
    </h2>
  );
};

export default HTwoTextAnimation;