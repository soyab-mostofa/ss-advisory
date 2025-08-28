"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { gsap } from "gsap";
import ValueCard from "@/components/services/ValueCard";
import InfiniteScroll from "../ui/InfiniteScroll";
import SectionLabel from "../ui/SectionLabel";
import HTwoTextAnimation from "../HTwoTextAnimation";

const WhyWorkWithUs = () => {
  const values = [
    {
      title: "Professional Growth",
      description:
        "Advance your career with comprehensive training programs, professional certifications support, and mentorship opportunities.",
    },
    {
      title: "Work-Life Balance",
      description:
        "Enjoy flexible working arrangements, competitive leave policies, and a supportive environment that values your personal time.",
    },
    {
      title: "Collaborative Culture",
      description:
        "Work alongside experienced professionals in a team-oriented environment that encourages knowledge sharing and innovation.",
    },
    {
      title: "Competitive Benefits",
      description:
        "Receive comprehensive health coverage, retirement planning assistance, and performance-based incentives.",
    },
    {
      title: "Diverse Clientele",
      description:
        "Gain valuable experience working with clients across various industries, from startups to established enterprises.",
    },
    {
      title: "Technology Forward",
      description:
        "Utilize cutting-edge accounting software and digital tools to deliver efficient, accurate financial solutions.",
    },
  ];

  // Carousel state and refs
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % values.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, values.length]);

  // GSAP animation for carousel transitions
  const animateToIndex = useCallback(
    (index: number) => {
      if (!contentRef.current || !isMobile) return;

      if (timelineRef.current) {
        timelineRef.current.kill();
      }

      timelineRef.current = gsap.timeline();
      timelineRef.current.to(contentRef.current, {
        x: `-${index * 100}%`,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    [isMobile]
  );

  useEffect(() => {
    animateToIndex(currentIndex);
  }, [currentIndex, animateToIndex]);

  // Navigation handlers
  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + values.length) % values.length);
  }, [values.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % values.length);
  }, [values.length]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-start md:items-center  bg-[#f8f8f8] px-4  py-[60px] md:py-[100px] w-full  gap-8 md:gap-16">
      {/* Header */}
      <div className="flex flex-col container mx-auto md:flex-row items-start md:items-center self-stretch gap-6 md:gap-0">
        {/* Section Title */}
        <div className="w-full md:w-[387px]">
          <SectionLabel
            label="BENEFITS"
            lineWidth="w-[120px] md:w-[191px]"
            className="md:py-[10px] md:w-[387px]"
          />
        </div>

        {/* Title */}
        <HTwoTextAnimation text="Why Work With Us?" className="mb-8 w-full md:w-[600px]" />
      </div>

      {/* Mobile Carousel */}
      <InfiniteScroll direction="left" className="md:hidden flex">
        {values.map((value, index) => (
          <ValueCard
            className="ml-4"
            key={index}
            title={value.title}
            description={value.description}
          />
        ))}
      </InfiniteScroll>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-col items-start self-stretch -mr-px gap-8 container mx-auto">
        {/* First Row */}
        <div className="flex items-center self-stretch gap-8">
          {values.slice(0, 3).map((value, index) => (
            <ValueCard
              key={`row1-${index}`}
              title={value.title}
              description={value.description}
              className="flex-shrink-0"
            />
          ))}
        </div>

        {/* Second Row */}
        <div className="flex items-center self-stretch gap-8">
          {values.slice(3, 6).map((value, index) => (
            <ValueCard
              key={`row2-${index}`}
              title={value.title}
              description={value.description}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
