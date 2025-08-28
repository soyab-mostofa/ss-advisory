"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { SectionLabel } from '@/components/ui/SectionLabel';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
  logo: string;
  quoteIcon: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dora Dybala",
    role: "CEO & Founder",
    company: "SHIPIT",
    text: "SS Advisory transformed our accounting processes and tax strategy. Their expertise in compliance saved us from costly mistakes and streamlined our operations.",
    avatar: "/images/megyde84-rrcf6eb.png",
    logo: "/images/megyde84-pff617o.svg",
    quoteIcon: "/images/megyde84-chqoh82.svg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Business Owner",
    company: "FINTECH",
    text: "Their proactive tax planning and meticulous bookkeeping services have been invaluable to our business growth. SS Advisory truly understands our industry.",
    avatar: "/images/megyde84-7jvgzsr.png",
    logo: "/images/megyde84-oqvono2.svg",
    quoteIcon: "/images/megyde84-lwbnl5n.svg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "TECHCORP",
    text: "From day one, SS Advisory provided comprehensive accounting support and tax guidance that helped us navigate complex regulatory requirements with confidence.",
    avatar: "/images/megv1vhw-tjsfnpp.png",
    logo: "/images/megv1vhw-6lhmxqd.svg",
    quoteIcon: "/images/megyde84-chqoh82.svg"
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "CFO",
    company: "GROWTH",
    text: "Outstanding accounting services and audit preparation. Their attention to detail and compliance expertise gives us peace of mind during tax season.",
    avatar: "/images/megv1vhw-o3h4v7c.png",
    logo: "/images/megyde84-pff617o.svg",
    quoteIcon: "/images/megyde84-lwbnl5n.svg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
    // Reset auto-rotation timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoRotation();
  };

  const startAutoRotation = () => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 3000);
  };

  useEffect(() => {
    startAutoRotation();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pause auto-rotation on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    startAutoRotation();
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonialData = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="flex flex-col items-start w-full bg-[#0d1321] px-4 py-8 gap-8 min-h-[501px] md:px-[120px] md:py-[100px] md:gap-[10px] md:min-h-[560px]">
      <div className="flex flex-col w-full gap-8 md:gap-16">
        {/* Section Header */}
        <SectionLabel 
          label="TESTIMONIALS" 
          variant="dark" 
          lineWidth="w-[149px]" 
          textSize="text-sm md:text-xl" 
          className="md:gap-3"
        />
        
        {/* Testimonial Items */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-[100px]">
          {/* Mobile Layout */}
          <div className="flex flex-col items-start w-full gap-8 md:hidden">
            {/* Mobile Testimonial Card */}
            <div className="flex relative flex-col items-start w-full gap-8 transition-all duration-500 ease-in-out"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
              <div className="relative overflow-hidden rounded-full w-20 h-20">
                <Image
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.name} avatar`}
                  width={80}
                  height={80}
                  className={`rounded-full flex-shrink-0 transition-all duration-500 ease-in-out transform ${
                    isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                  }`}
                />
              </div>
              <div className="flex flex-col w-full gap-5">
                <p className={`text-white font-urbanist text-lg leading-[25px] w-full transition-all duration-500 ease-in-out transform ${
                  isAnimating ? 'translate-y-2 opacity-80' : 'translate-y-0 opacity-100'
                }`}>
                  {currentTestimonial.text}
                </p>
                <div className="w-full h-px bg-[#ffffff1a]"></div>
                <div className="flex items-end justify-between w-full">
                  <div className={`flex flex-col gap-1 transition-all duration-500 ease-in-out transform ${
                    isAnimating ? 'translate-x-2 opacity-80' : 'translate-x-0 opacity-100'
                  }`}>
                    <p className="text-white font-urbanist text-lg leading-[25px] font-semibold">{currentTestimonial.name}</p>
                    <p className="text-white font-urbanist text-sm leading-[22px]">{currentTestimonial.role}</p>
                  </div>
                  <Image 
                    src={currentTestimonial.logo} 
                    alt={`${currentTestimonial.company} logo`} 
                    width={100} 
                    height={30} 
                    className={`flex-shrink-0 transition-all duration-500 ease-in-out transform ${
                      isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                    }`}
                  />
                </div>
              </div>
              {/* Mobile Quote Icon Button */}
              <div className="absolute top-[70px] left-[30px] inline-flex items-center justify-center w-5 h-5 bg-[#204199] rounded-full p-1">
                <Image 
                  src={currentTestimonial.quoteIcon} 
                  alt="Quote icon" 
                  width={12} 
                  height={12}
                />
              </div>
            </div>
            
            {/* Mobile Dots Navigation */}
            <div className="flex items-center justify-center gap-3 w-full">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out transform hover:scale-125 ${
                    index === currentIndex 
                      ? 'bg-[#dde2eb] scale-110' 
                      : index === (currentIndex + 1) % testimonials.length
                      ? 'bg-[#b5bac5]'
                      : 'bg-[#535967]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex md:items-center md:gap-[100px] md:w-full"
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            {/* Main Testimonial */}
            <div className="flex relative items-center gap-[60px] w-[800px] transition-all duration-500 ease-in-out">
              <div className="relative overflow-hidden rounded-full w-[173px] h-[173px]">
                <Image
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.name} avatar`}
                  width={173}
                  height={173}
                  className={`rounded-full flex-shrink-0 transition-all duration-500 ease-in-out transform ${
                    isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                  }`}
                />
              </div>
              <div className="flex flex-col flex-grow gap-6">
                <p className={`text-white font-urbanist text-[32px] leading-[38px] w-[567px] transition-all duration-500 ease-in-out transform ${
                  isAnimating ? 'translate-y-2 opacity-80' : 'translate-y-0 opacity-100'
                }`}>
                  {currentTestimonial.text}
                </p>
                <div className="w-full h-px bg-[#ffffff1a]"></div>
                <div className="flex items-end justify-between w-full">
                  <div className={`flex flex-col gap-1 transition-all duration-500 ease-in-out transform ${
                    isAnimating ? 'translate-x-2 opacity-80' : 'translate-x-0 opacity-100'
                  }`}>
                    <p className="text-white font-urbanist text-xl leading-7 font-semibold">{currentTestimonial.name}</p>
                    <p className="text-white font-urbanist text-base leading-6">{currentTestimonial.role}</p>
                  </div>
                  <Image 
                    src={currentTestimonial.logo} 
                    alt={`${currentTestimonial.company} logo`} 
                    width={133} 
                    height={40} 
                    className={`flex-shrink-0 transition-all duration-500 ease-in-out transform ${
                      isAnimating ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
                    }`}
                  />
                </div>
              </div>
              {/* Desktop Quote Icon Button */}
              <div className="absolute bottom-[17px] left-[63px] inline-flex items-center justify-center w-12 h-12 bg-[#204199] rounded-full p-3">
                <Image 
                  src={currentTestimonial.quoteIcon} 
                  alt="Quote icon" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
            
            {/* Navigation Arrow */}
            <button 
              onClick={nextTestimonial}
              disabled={isAnimating}
              className={`inline-flex items-center justify-center w-24 h-24 bg-[#ffffff1a] rounded-full p-[18px] hover:bg-[#ffffff2a] transition-all duration-300 ease-in-out transform hover:scale-105 ${
                isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
              }`}
            >
              <Image 
                src="/images/megyde84-9vgw2g8.svg" 
                alt="Next testimonial" 
                width={60} 
                height={60}
              />
            </button>
            
            {/* Next Testimonial Preview */}
            <div className="relative transition-all duration-500 ease-in-out transform hover:scale-105">
              <div className="relative overflow-hidden rounded-full w-[173px] h-[173px]">
                <Image
                  src={nextTestimonialData.avatar}
                  alt={`${nextTestimonialData.name} avatar`}
                  width={173}
                  height={173}
                  className={`rounded-full flex-shrink-0 transition-all duration-500 ease-in-out transform ${
                    isAnimating ? 'scale-110 opacity-90' : 'scale-100 opacity-70'
                  }`}
                />
              </div>
              <div className="absolute bottom-[17px] left-[63px] inline-flex items-center justify-center w-12 h-12 bg-[#204199] rounded-full p-3">
                <Image 
                  src={nextTestimonialData.quoteIcon} 
                  alt="Quote icon" 
                  width={24} 
                  height={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;