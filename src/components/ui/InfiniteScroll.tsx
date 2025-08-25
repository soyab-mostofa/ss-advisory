'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

interface InfiniteScrollProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  speed = 50,
  direction = 'left',
  className = '',
  pauseOnHover = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  const setupAnimation = useCallback(() => {
    if (!containerRef.current || !contentRef.current) return;

    const content = contentRef.current;
    
    // Kill existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Get content width for seamless looping
    const contentWidth = content.scrollWidth / 2; // Divide by 2 because we duplicate content
    
    // Set up GSAP timeline for infinite scroll
    timelineRef.current = gsap.timeline({ repeat: -1 });
    
    const duration = contentWidth / speed;
    const xMovement = direction === 'left' ? -contentWidth : contentWidth;
    
    timelineRef.current.to(content, {
      x: xMovement,
      duration,
      ease: 'none',
    });

    // Reset position for seamless loop
    timelineRef.current.set(content, { x: 0 });
  }, [speed, direction]);

  const handleResize = useCallback(() => {
    // Debounce resize handling
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    
    // Small delay to ensure DOM has updated
    setTimeout(() => {
      setupAnimation();
    }, 100);
  }, [setupAnimation]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    
    setupAnimation();

    // Set up ResizeObserver for responsive handling
    if (containerRef.current) {
      resizeObserverRef.current = new ResizeObserver(handleResize);
      resizeObserverRef.current.observe(containerRef.current);
    }

    // Window resize fallback
    window.addEventListener('resize', handleResize);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [setupAnimation, handleResize]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover && timelineRef.current) {
      timelineRef.current.pause();
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover && timelineRef.current) {
      timelineRef.current.resume();
    }
  }, [pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden w-full ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={contentRef}
        className="flex will-change-transform"
        style={{
          transform: 'translateZ(0)', // Force hardware acceleration
        }}
      >
        {/* Original content */}
        <div className="flex shrink-0">{children}</div>
        {/* Duplicated content for seamless loop */}
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
export type { InfiniteScrollProps };