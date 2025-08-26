'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  easing?: string;
  startDelay?: number;
}

const Counter: React.FC<CounterProps> = ({
  target,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  easing = 'power2.out',
  startDelay = 0
}) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!counterRef.current) return;

    const element = counterRef.current;
    
    // Set initial value
    const counterObj = { value: 0 };
    
    // Create the animation
    const animation = gsap.to(counterObj, {
      value: target,
      duration: duration,
      ease: easing,
      delay: startDelay,
      onUpdate: () => {
        if (element) {
          const currentValue = Math.round(counterObj.value);
          element.textContent = `${prefix}${currentValue}${suffix}`;
        }
      },
      paused: true
    });

    // Create ScrollTrigger
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      onEnter: () => {
        animation.play();
      },
      onLeave: () => {
        // Optional: Reset animation when leaving viewport
        // animation.pause().progress(0);
      },
      onEnterBack: () => {
        // Optional: Replay animation when scrolling back
        // animation.play();
      }
    });

    animationRef.current = animation;

    // Cleanup
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [target, duration, suffix, prefix, easing, startDelay]);

  return (
    <span 
      ref={counterRef} 
      className={`md:w-16 md:inline-block md:text-center ${className}`}
    >
      {prefix}0{suffix}
    </span>
  );
};

export default Counter;