"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";

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
    name: "Khalid Hossain",
    role: "CEO & Founder at Jamroll",
    company: "Jamroll",
    text: "Professional, reliable, and attentive—SS Advisory helped me achieve my financial goals while advocating for my best interests.",
    avatar: "/images/services/testimonials/khalid-hossain.png",
    logo: "/images/home/logos/jamroll.svg",
    quoteIcon: "/images/services/testimonials/quote.svg",
  },
  {
    id: 2,
    name: "Dora Dybala",
    role: "CEO & Founder",
    company: "Company",
    text: "Professional, reliable, and attentive—SS Advisory helped me achieve my financial goals while advocating for my best interests.",
    avatar: "/images/services/testimonials/dora-dybala.png",
    logo: "/images/services/testimonials/logo.svg",
    quoteIcon: "/images/services/testimonials/quote.svg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
    // Reset auto-rotation timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoRotation();
  };

  const startAutoRotation = () => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
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
  const nextTestimonialData =
    testimonials[(currentIndex + 1) % testimonials.length];

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
            <div
              className="flex relative flex-col items-start w-full gap-8 transition-all duration-500 ease-in-out"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative overflow-hidden rounded-full w-20 h-20">
                <Image
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.name} avatar`}
                  width={80}
                  height={80}
                  className={`rounded-full flex-shrink-0 transition-all duration-700 ease-out transform ${
                    isAnimating
                      ? "translate-x-8 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                />
              </div>
              <div className="flex flex-col w-full gap-5">
                <p
                  className={`text-white font-urbanist text-lg leading-[25px] w-full transition-all duration-700 ease-out transform ${
                    isAnimating
                      ? "translate-x-12 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  {currentTestimonial.text}
                </p>
                <div className="w-full h-px bg-[#ffffff1a]"></div>
                <div className="flex items-end justify-between w-full">
                  <div
                    className={`flex flex-col gap-1 transition-all duration-700 ease-out transform ${
                      isAnimating
                        ? "translate-x-16 opacity-0"
                        : "translate-x-0 opacity-100"
                    }`}
                  >
                    <p className="text-white font-urbanist text-lg leading-[25px] font-semibold">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-white font-urbanist text-sm leading-[22px]">
                      {currentTestimonial.role}
                    </p>
                  </div>
                  <Image
                    src={currentTestimonial.logo}
                    alt={`${currentTestimonial.company} logo`}
                    width={100}
                    height={30}
                    className={`flex-shrink-0 transition-all duration-700 ease-out transform ${
                      isAnimating
                        ? "translate-x-20 opacity-0"
                        : "translate-x-0 opacity-100"
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
                      ? "bg-[#dde2eb] scale-110"
                      : index === (currentIndex + 1) % testimonials.length
                      ? "bg-[#b5bac5]"
                      : "bg-[#535967]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div
            className="hidden md:flex md:items-center md:gap-[100px] md:w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Main Testimonial */}
            <div className="flex relative items-center gap-[60px] w-[800px] transition-all duration-700 ease-out">
              <div className="relative overflow-hidden rounded-full w-[173px] h-[173px]">
                <Image
                  src={currentTestimonial.avatar}
                  alt={`${currentTestimonial.name} avatar`}
                  width={173}
                  height={173}
                  className={`rounded-full flex-shrink-0 transition-all duration-700 ease-out transform ${
                    isAnimating
                      ? "translate-x-12 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                />
              </div>
              <div className="flex flex-col flex-grow gap-6">
                <p
                  className={`text-white font-urbanist text-[32px] leading-[38px] w-[567px] transition-all duration-700 ease-out transform ${
                    isAnimating
                      ? "translate-x-16 opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  {currentTestimonial.text}
                </p>
                <div className="w-full h-px bg-[#ffffff1a]"></div>
                <div className="flex items-end justify-between w-full">
                  <div
                    className={`flex flex-col gap-1 transition-all duration-700 ease-out transform ${
                      isAnimating
                        ? "translate-x-20 opacity-0"
                        : "translate-x-0 opacity-100"
                    }`}
                  >
                    <p className="text-white font-urbanist text-xl leading-7 font-semibold">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-white font-urbanist text-base leading-6">
                      {currentTestimonial.role}
                    </p>
                  </div>
                  <Image
                    src={currentTestimonial.logo}
                    alt={`${currentTestimonial.company} logo`}
                    width={133}
                    height={40}
                    className={`flex-shrink-0 transition-all duration-700 ease-out transform ${
                      isAnimating
                        ? "translate-x-24 opacity-0"
                        : "translate-x-0 opacity-100"
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
              className={`flex items-center justify-center w-24 h-24 bg-[#ffffff1a] rounded-full p-[18px] hover:bg-[#ffffff2a] transition-all duration-300 ease-in-out transform hover:scale-105 flex-shrink-0 ${
                isAnimating ? "opacity-50 cursor-not-allowed" : "opacity-100"
              }`}
              style={{ minWidth: "96px", minHeight: "96px" }}
            >
              <Image
                src="/images/megyde84-9vgw2g8.svg"
                alt="Next testimonial"
                width={60}
                height={60}
              />
            </button>

            {/* Next Testimonial Preview */}
            <div className="relative transition-all duration-700 ease-out transform hover:scale-105">
              <div className="relative overflow-hidden rounded-full w-[173px] h-[173px]">
                <Image
                  src={nextTestimonialData.avatar}
                  alt={`${nextTestimonialData.name} avatar`}
                  width={173}
                  height={173}
                  className={`rounded-full flex-shrink-0 transition-all duration-700 ease-out transform ${
                    isAnimating
                      ? "-translate-x-8 opacity-100"
                      : "translate-x-0 opacity-70"
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
