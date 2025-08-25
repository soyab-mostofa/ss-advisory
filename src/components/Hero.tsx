"use client";

import Image from "next/image";
import { useRef, useLayoutEffect, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const contactButtonRef = useRef<HTMLDivElement>(null);
  const rotatingWordMobileRef = useRef<HTMLSpanElement>(null);
  const rotatingWordDesktopRef = useRef<HTMLSpanElement>(null);
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const rotatingWords = ['Results', 'Security', 'Safety'];
  
  // Text rotation effect with proper synchronization
  useEffect(() => {
    const interval = setInterval(() => {
      // Start the animation which will handle the word change at the right moment
      animateWordChange();
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  
  const animateWordChange = useCallback(() => {
    const mobileElement = rotatingWordMobileRef.current;
    const desktopElement = rotatingWordDesktopRef.current;

    if (!mobileElement && !desktopElement) return;

    // Create master timeline that handles both out and in animations with proper timing
    const masterTimeline = gsap.timeline();
    
    // "Out" animation phase
    if (mobileElement) {
      masterTimeline.to(mobileElement, {
        opacity: 0,
        scale: 0.8,
        rotationX: 90,
        filter: "blur(4px)",
        skewX: 10,
        duration: 0.4,
        ease: "power2.in"
      }, 0);
    }

    if (desktopElement) {
      masterTimeline.to(desktopElement, {
        opacity: 0,
        scale: 0.7,
        rotationY: -90,
        filter: "blur(6px)",
        skewY: 15,
        duration: 0.5,
        ease: "power2.in"
      }, 0);
    }

    // Word change happens exactly when out animation completes
    masterTimeline.call(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, [], 0.5); // At 0.5s when out animation is complete

    // "In" animation phase starts immediately after word change
    if (mobileElement) {
      masterTimeline.fromTo(mobileElement, 
        {
          opacity: 0,
          scale: 1.2,
          rotationX: -90,
          filter: "blur(4px)",
          skewX: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotationX: 0,
          filter: "blur(0px)",
          skewX: 0,
          duration: 0.6,
          ease: "back.out(1.7)"
        }, 0.5);
    }

    if (desktopElement) {
      masterTimeline.fromTo(desktopElement,
        {
          opacity: 0,
          scale: 1.3,
          rotationY: 90,
          filter: "blur(6px)",
          skewY: -15
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          filter: "blur(0px)",
          skewY: 0,
          duration: 0.7,
          ease: "back.out(1.7)"
        }, 0.5);
    }
  }, []);

  useGSAP(() => {
    // Mobile animations
    const mobileTimeline = gsap.timeline({ paused: true });
    
    if (mobileContainerRef.current) {
      const mobileElements = {
        strategicText: mobileContainerRef.current.querySelector('[data-animate="strategic-mobile"]'),
        heroImage: mobileContainerRef.current.querySelector('[data-animate="hero-image-mobile"]'),
        resultText: mobileContainerRef.current.querySelector('[data-animate="result-mobile"]'),
        subtitle: mobileContainerRef.current.querySelector('[data-animate="subtitle-mobile"]'),
        description: mobileContainerRef.current.querySelector('[data-animate="description-mobile"]'),
        contactBtn: mobileContainerRef.current.querySelector('[data-animate="contact-mobile"]'),
        advisory: mobileContainerRef.current.querySelector('[data-animate="advisory-mobile"]'),
        decoration: mobileContainerRef.current.querySelector('[data-animate="decoration-mobile"]')
      };

      // Set initial states
      gsap.set(Object.values(mobileElements), { opacity: 0, y: 30 });
      gsap.set(mobileElements.heroImage, { scale: 0.8, rotation: -5 });
      gsap.set(mobileElements.decoration, { scale: 0.5, rotation: 135 });

      mobileTimeline
        .to(mobileElements.strategicText, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to(mobileElements.heroImage, { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4")
        .to(mobileElements.resultText, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to([mobileElements.subtitle, mobileElements.description], { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.2")
        .to(mobileElements.contactBtn, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }, "-=0.1")
        .to(mobileElements.advisory, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2")
        .to(mobileElements.decoration, { opacity: 1, scale: 1, rotation: 180, duration: 0.6, ease: "back.out(1.7)" }, "-=0.3");
    }

    // Desktop animations
    const desktopTimeline = gsap.timeline({ paused: true });
    
    if (desktopContainerRef.current) {
      const desktopElements = {
        strategicText: desktopContainerRef.current.querySelector('[data-animate="strategic-desktop"]'),
        heroImage: desktopContainerRef.current.querySelector('[data-animate="hero-image-desktop"]'),
        resultText: desktopContainerRef.current.querySelector('[data-animate="result-desktop"]'),
        advisory: desktopContainerRef.current.querySelector('[data-animate="advisory-desktop"]'),
        subtitle: desktopContainerRef.current.querySelector('[data-animate="subtitle-desktop"]'),
        description: desktopContainerRef.current.querySelector('[data-animate="description-desktop"]'),
        decoration: desktopContainerRef.current.querySelector('[data-animate="decoration-desktop"]')
      };

      // Set initial states
      gsap.set(Object.values(desktopElements), { opacity: 0, y: 50 });
      gsap.set(desktopElements.heroImage, { scale: 0.7, rotation: -10 });
      gsap.set(desktopElements.decoration, { scale: 0.3, rotation: 135, x: 50 });

      desktopTimeline
        .to(desktopElements.strategicText, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
        .to(desktopElements.heroImage, { opacity: 1, y: 0, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6")
        .to(desktopElements.resultText, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.4")
        .to(desktopElements.advisory, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")
        .to([desktopElements.subtitle, desktopElements.description], { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power2.out" }, "-=0.4")
        .to(desktopElements.decoration, { opacity: 1, scale: 1, rotation: 180, x: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");
    }

    // Contact button hover animation
    if (contactButtonRef.current) {
      const button = contactButtonRef.current;
      const icon = button.querySelector('[data-animate="contact-icon"]');
      
      button.addEventListener('mouseenter', () => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        gsap.to(icon, { x: 3, duration: 0.3, ease: "power2.out" });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(icon, { x: 0, duration: 0.3, ease: "power2.out" });
      });
    }

    // Trigger animations on mount
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    
    const handleResize = () => {
      if (mediaQuery.matches) {
        mobileTimeline.pause();
        desktopTimeline.play();
      } else {
        desktopTimeline.pause();
        mobileTimeline.play();
      }
    };

    handleResize();
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      {/* Mobile Layout */}
      <div ref={mobileContainerRef} className="flex flex-col items-center bg-white w-full mt-  overflow-hidden md:hidden">
        {/* Mobile Hero Content */}
        <div className="relative flex items-center w-full px-4 pt-6 pb-[60px]">
          <div className="flex flex-col flex-grow items-start gap-[30px]">
            <div className="flex flex-col items-start w-full gap-7">
              <div className="flex flex-col items-start w-full gap-6">
                <div className="flex flex-col items-start w-full gap-3">
                  <p data-animate="strategic-mobile" className="text-[#535967] font-urbanist text-[40px] font-bold leading-[40px] tracking-[-1.6px] w-full">
                    Strategic Advice
                  </p>
                  <Image
                    data-animate="hero-image-mobile"
                    src="/images/megv1vhw-qf19f4i.png"
                    alt="Hero image"
                    width={161}
                    height={60}
                    className="rounded-[48px] flex-shrink-0"
                  />
                  <p data-animate="result-mobile" className="text-black font-urbanist text-[40px] font-bold leading-[40px] tracking-[-1.6px] w-full">
                    <span className="text-[#0d1321]">That&nbsp;</span>
                    <span className="text-[#204199]">Drives&nbsp;</span>
                    <span ref={rotatingWordMobileRef} className="text-[#204199] inline-block transform-gpu">{rotatingWords[currentWordIndex]}</span>
                  </p>
                </div>
                <div className="flex flex-col items-start w-full gap-3">
                  <p data-animate="subtitle-mobile" className="text-[#0d1321] font-urbanist text-base font-semibold leading-6 w-[343px]">
                    Expert Financial Guidance & Strategic Advocacy for Your Future
                  </p>
                  <p data-animate="description-mobile" className="text-[#535967] font-urbanist text-sm leading-[22px] w-[343px]">
                    We provide tailored financial solutions and dedicated advocacy services. Empowering individuals and businesses to make confident decisions.
                  </p>
                </div>
              </div>
              <div ref={contactButtonRef} data-animate="contact-mobile" className="flex items-center justify-center gap-2 rounded-xl bg-[#204199] px-4 py-3 w-[181px] h-12 cursor-pointer transition-all duration-300 hover:shadow-lg">
                <p className="text-white font-urbanist text-lg font-medium leading-[25px]">Contact</p>
                <Image
                  data-animate="contact-icon"
                  src="/images/megv1vhw-xry6gqf.svg"
                  alt="Phone icon"
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <p data-animate="advisory-mobile" className="text-[#b5bac5] font-playfair text-[40px] italic leading-[40px] tracking-[-1.6px] w-full">
              Advisory
            </p>
          </div>
          <Image
            data-animate="decoration-mobile"
            src="/images/megv1vhw-a3dhdm1.png"
            alt="Vector decoration"
            width={100}
            height={99}
            className="absolute right-4 bottom-4 flex-shrink-0 rotate-180"
          />
        </div>
      </div>

      {/* Desktop Layout */}
      <div ref={desktopContainerRef} className="hidden md:flex items-start justify-between w-full mt-[107px] pr-10 pl-[120px]">
        <div className="flex flex-col items-start gap-12">
          <div className="flex flex-col items-start w-full gap-6">
            <p data-animate="strategic-desktop" className="text-[#535967] font-urbanist text-[100px] font-bold leading-[100px] tracking-[-4px]">Strategic Advice</p>
            <div className="flex items-center w-full gap-8">
              <Image
                data-animate="hero-image-desktop"
                src="/images/megv1vhw-qf19f4i.png"
                alt="Hero image"
                width={200}
                height={80}
                className="rounded-[100px]"
              />
              <p data-animate="result-desktop" className="text-black font-urbanist text-[100px] font-bold leading-[100px] tracking-[-4px]">
                <span className="text-[#0d1321]">That&nbsp;</span>
                <span className="text-[#204199]">Drives&nbsp;</span>
                <span ref={rotatingWordDesktopRef} className="text-[#204199] inline-block transform-gpu">{rotatingWords[currentWordIndex]}</span>
              </p>
            </div>
          </div>
          <div className="inline-flex items-center w-full gap-[60px] mr-[92px]">
            <p data-animate="advisory-desktop" className="text-[#b5bac5] font-playfair text-[100px] italic leading-[100px] tracking-[-4px]">Advisory</p>
            <div className="inline-flex flex-col items-start gap-4">
              <p data-animate="subtitle-desktop" className="text-[#0d1321] font-urbanist text-lg font-semibold leading-[25px]">Expert Financial Guidance & Strategic Advocacy for Your Future</p>
              <p data-animate="description-desktop" className="text-[#535967] font-urbanist text-base leading-6 w-[511px]">
                We provide tailored financial solutions and dedicated advocacy services.<br />
                Empowering individuals and businesses to make confident decisions.
              </p>
            </div>
          </div>
        </div>
        <Image
          data-animate="decoration-desktop"
          src="/images/megv1vhw-a3dhdm1.png"
          alt="Vector decoration"
          width={212}
          height={211}
          className="mt-[247px] rotate-180"
        />
      </div>
    </div>
  );
};

export default Hero;