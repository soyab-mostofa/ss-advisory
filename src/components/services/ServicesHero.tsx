'use client';

import React from 'react';
import TextRevealAnimation from '../TextRevealAnimation';

interface ServicesHeroProps {
  className?: string;
}

const ServicesHero: React.FC<ServicesHeroProps> = ({ className = '' }) => {
  return (
    <>
      {/* Navigation */}
      
      {/* Hero Section */}
      <section className={`relative px-4 md:px-[120px] py-10 md:py-[40px] pb-16 md:pb-[100px] ${className}`}>
        <div className="flex flex-col gap-8 md:gap-[45px]">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-6">
            {/* Section Title */}
            <div className="flex items-center gap-3 md:gap-3 md:py-[10px] md:w-[387px]">
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#2041991a] to-[#ffffff1a] rounded-l-lg px-3 py-[6px] pr-[60px]">
                <div className="w-2 h-2 bg-[#204199] rounded-full"></div>
                <span className="text-[#041e3a] text-xs sm:text-sm md:text-lg lg:text-xl font-medium">SERVICES</span>
              </div>
              <div className="h-px w-[100px] md:w-[191px] bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]"></div>
            </div>
            
            {/* Main Heading */}
            <div className="flex-1 md:w-[789px]">
              <div className="text-3xl md:text-[48px] md:leading-[58px] md:tracking-[-1.92px] font-medium">
                <TextRevealAnimation 
                  text="Dedicated to empowering clients through strategic financial guidance and reliable, results-focused advocacy."
                  highlightStart="Dedicated to"
                  className="w-full"
                />
              </div>
            </div>
          </div>
          
          {/* Main Image */}
          <div className="w-full">
            <img 
              src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20financial%20advisory%20office%20meeting%20room%20with%20modern%20furniture%20laptops%20documents%20business%20atmosphere%20clean%20corporate%20style&image_size=landscape_16_9" 
              alt="Professional financial advisory meeting" 
              className="w-full h-[250px] md:h-[460px] object-cover rounded-lg"
            />
          </div>
        </div>
        
        {/* Decorative Vector */}
        <div className="absolute bottom-10 right-4 md:bottom-10 md:right-10 w-[100px] md:w-[212px] h-[100px] md:h-[211px]">
          <img 
            src="/images/blur-vector.svg" 
            alt="Decorative vector" 
            className="w-full h-full backdrop-blur-xs bg-gray-50/20" 
     
          />
        </div>
      </section>
    </>
  );
};

export default ServicesHero;