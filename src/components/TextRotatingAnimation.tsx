'use client';

import React, { useEffect, useState } from 'react';

interface TextRotatingAnimationProps {
  texts: string[];
  duration?: number;
  className?: string;
}

export const TextRotatingAnimation: React.FC<TextRotatingAnimationProps> = ({
  texts,
  duration = 6000, // 6 seconds total duration like original
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const intervalDuration = duration / texts.length;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 300); // Animation transition time
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [texts.length, duration]);

  if (texts.length === 0) return null;

  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        className="transition-transform duration-300 ease-out"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
          animation: isAnimating ? 'elastic-bounce 0.6s ease-out' : 'none'
        }}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            className="h-full flex items-center justify-center"
          >
            {text}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes elastic-bounce {
          0% {
            transform: translateY(-${currentIndex * 100}%) scale(1);
          }
          30% {
            transform: translateY(-${(currentIndex + 0.1) * 100}%) scale(1.02);
          }
          60% {
            transform: translateY(-${(currentIndex - 0.05) * 100}%) scale(0.98);
          }
          100% {
            transform: translateY(-${currentIndex * 100}%) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default TextRotatingAnimation;