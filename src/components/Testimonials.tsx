"use client";

import Image from "next/image";
import { useState } from "react";

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
    role: "CEO & Founder of Company",
    company: "SHIPIT",
    text: "Professional, reliable, and attentive—SS Advisory helped me achieve my financial goals while advocating for my best interests.",
    avatar: "/images/megyde84-rrcf6eb.png",
    logo: "/images/megyde84-pff617o.svg",
    quoteIcon: "/images/megyde84-chqoh82.svg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Investment Director",
    company: "FINTECH",
    text: "Exceptional service and strategic insights that transformed our portfolio performance. SS Advisory's expertise is unmatched in the industry.",
    avatar: "/images/megyde84-7jvgzsr.png",
    logo: "/images/megyde84-oqvono2.svg",
    quoteIcon: "/images/megyde84-lwbnl5n.svg"
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "TECHCORP",
    text: "Their personalized approach and deep market knowledge helped us navigate complex financial decisions with confidence and success.",
    avatar: "/images/megv1vhw-tjsfnpp.png",
    logo: "/images/megv1vhw-6lhmxqd.svg",
    quoteIcon: "/images/megyde84-chqoh82.svg"
  },
  {
    id: 4,
    name: "Emma Rodriguez",
    role: "CFO",
    company: "GROWTH",
    text: "Outstanding advisory services that delivered measurable results. Their team's dedication to client success is truly remarkable.",
    avatar: "/images/megv1vhw-o3h4v7c.png",
    logo: "/images/megyde84-pff617o.svg",
    quoteIcon: "/images/megyde84-lwbnl5n.svg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const nextTestimonialData = testimonials[(currentIndex + 1) % testimonials.length];

  return (
    <div className="flex flex-col items-start w-full bg-[#0d1321] px-[120px] py-[100px] gap-[10px] min-h-[560px]">
      <div className="flex flex-col w-full gap-16">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-l-lg px-3 py-[6px] pr-[60px] bg-gradient-to-r from-[#ffffff1a] to-[#0d13211a]">
            <div className="w-2 h-2 bg-[#d4e4ff] rounded-full"></div>
            <p className="text-white font-urbanist text-xl leading-7">TESTIMONIALS</p>
          </div>
          <div className="w-[149px] h-px bg-gradient-to-r from-[#ffffff4d] to-[#0d13214d]"></div>
        </div>
        
        {/* Testimonial Items */}
        <div className="flex items-center gap-[100px]">
          {/* Main Testimonial */}
          <div className="flex relative items-center gap-[60px] w-[800px]">
            <Image
              src={currentTestimonial.avatar}
              alt={`${currentTestimonial.name} avatar`}
              width={173}
              height={173}
              className="rounded-full flex-shrink-0"
            />
            <div className="flex flex-col flex-grow gap-6">
              <p className="text-white font-urbanist text-[32px] leading-[38px] w-[567px]">
                {currentTestimonial.text}
              </p>
              <div className="w-full h-px bg-[#ffffff1a]"></div>
              <div className="flex items-end justify-between w-full">
                <div className="flex flex-col gap-1">
                  <p className="text-white font-urbanist text-xl leading-7 font-semibold">{currentTestimonial.name}</p>
                  <p className="text-white font-urbanist text-base leading-6">{currentTestimonial.role}</p>
                </div>
                <Image 
                  src={currentTestimonial.logo} 
                  alt={`${currentTestimonial.company} logo`} 
                  width={133} 
                  height={40} 
                  className="flex-shrink-0"
                />
              </div>
            </div>
            {/* Quote Icon Button */}
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
            className="inline-flex items-center justify-center w-24 h-24 bg-[#ffffff1a] rounded-full p-[18px] hover:bg-[#ffffff2a] transition-colors"
          >
            <Image 
              src="/images/megyde84-9vgw2g8.svg" 
              alt="Next testimonial" 
              width={60} 
              height={60}
            />
          </button>
          
          {/* Next Testimonial Preview */}
          <div className="relative">
            <Image
              src={nextTestimonialData.avatar}
              alt={`${nextTestimonialData.name} avatar`}
              width={173}
              height={173}
              className="rounded-full flex-shrink-0"
            />
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
  );
};

export default Testimonials;