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
    
    // Set initial state
    gsap.set(spans, {
      y: 100,
      skewY: 7,
    });

    // Create timeline (paused initially)
    const tl = gsap.timeline({ paused: true });
    
    tl.to(spans, {
      y: 0,
      skewY: 0,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.8, // Trigger when 30% of the element is visible
        rootMargin: '0px'
      }
    );

    observer.observe(container);

    return () => {
      tl.kill();
      observer.disconnect();
    };
  }, [wrappedLines]);

  // Helper function to determine word color
  const getWordColor = (word: string, lineIndex: number, wordIndex: number) => {
    const allWords = text.split(' ');
    let globalWordIndex = 0;
    
    // Calculate global word index
    for (let i = 0; i < lineIndex; i++) {
      globalWordIndex += wrappedLines[i].length;
    }
    globalWordIndex += wordIndex;
    
    // Check if word is in highlightStart
    if (highlightStart) {
      const startWords = highlightStart.split(' ');
      if (globalWordIndex < startWords.length) {
        return 'text-[#0d1321]';
      }
    }
    
    // Check if word is in highlightEnd
    if (highlightEnd) {
      const endWords = highlightEnd.split(' ');
      const totalWords = allWords.length;
      if (globalWordIndex >= totalWords - endWords.length) {
        return 'text-[#0d1321]';
      }
    }
    
    return 'text-[#b5bac5]';
  };

  return (
    <div ref={containerRef} className={`gsap-text-reveal ${className}`}>
      {wrappedLines.map((line, lineIndex) => (
        <div key={lineIndex} className="line overflow-hidden h-[29px] md:h-[58px]">
          {line.map((word, wordIndex) => {
            const colorClass = getWordColor(word, lineIndex, wordIndex);
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