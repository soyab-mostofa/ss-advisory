'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface TextRevealAnimationProps {
  text: string;
  className?: string;
  highlightStart?: string;
  highlightEnd?: string;
}

const TextRevealAnimation: React.FC<TextRevealAnimationProps> = ({ 
  text, 
  className = '', 
  highlightStart, 
  highlightEnd 
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

      // Create a temporary span to measure text width
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.fontSize = window.innerWidth >= 768 ? '48px' : '24px';
      tempSpan.style.fontWeight = '300';
      tempSpan.style.lineHeight = window.innerWidth >= 768 ? '58px' : '29px';
      document.body.appendChild(tempSpan);

      const containerWidth = container.offsetWidth;
      let currentLineWidth = 0;

      words.forEach((word, index) => {
        tempSpan.textContent = word;
        const wordWidth = tempSpan.offsetWidth;
        const spaceWidth = index > 0 ? tempSpan.offsetWidth / word.length * 1 : 0; // Approximate space width

        if (currentLine.length === 0 || currentLineWidth + spaceWidth + wordWidth <= containerWidth) {
          currentLine.push(word);
          currentLineWidth += (currentLine.length > 1 ? spaceWidth : 0) + wordWidth;
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

    const spans = containerRef.current.querySelectorAll('.word-span');
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
    
    // Set initial state for all spans
    gsap.set(spans, {
      y: 100,
      skewY: 7,
    });
    
    // Set initial state for highlight spans (they start as regular color)
    gsap.set([...startHighlightSpans, ...endHighlightSpans], {
      color: '#b5bac5',
      opacity: 1
    });

    // Create master timeline (paused initially)
    const masterTl = gsap.timeline({ paused: true });
    
    // Phase 1: Text reveal animation
    masterTl.to(spans, {
      y: 0,
      skewY: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
    
    // Phase 2: Starting highlight fade in from left (after text reveal)
    if (startHighlightSpans.length > 0) {
      masterTl.to(startHighlightSpans, {
        color: '#0d1321',
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          amount: 0.2,
          from: "start"
        }
      }, ">+=0.3"); // Start 0.3s after text reveal completes
    }
    
    // Phase 3: Ending highlight fade in from right (after starting highlight)
    if (endHighlightSpans.length > 0) {
      masterTl.to(endHighlightSpans, {
        color: '#0d1321',
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          amount: 0.2,
          from: "end"
        }
      }, ">+=0.2"); // Start 0.2s after starting highlight completes
    }

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            masterTl.play();
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.8, // Trigger when 80% of the element is visible
        rootMargin: '0px'
      }
    );

    observer.observe(container);

    return () => {
      masterTl.kill();
      observer.disconnect();
    };
  }, [wrappedLines, highlightStart, highlightEnd, text]);

  // Helper function to determine initial word color (all start as regular color)
  const getInitialWordColor = () => {
    // All words start with the regular color, highlights will be animated via GSAP
    return 'text-[#b5bac5]';
  };

  return (
    <div ref={containerRef} className={`gsap-text-reveal ${className}`}>
      {wrappedLines.map((line, lineIndex) => (
        <div key={lineIndex} className="line overflow-hidden h-[29px] md:h-[58px]">
          {line.map((word, wordIndex) => {
            const colorClass = getInitialWordColor();
            return (
              <span
                key={`${lineIndex}-${wordIndex}`}
                className={`word-span ${colorClass} inline-block text-[24px] md:text-[48px] leading-[29px] md:leading-[58px] font-medium  mr-[0.25em]`}
              >
                {word}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TextRevealAnimation;