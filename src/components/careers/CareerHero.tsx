'use client';

import React from 'react';
import PageHero from '@/components/PageHero';

const CareerHero = () => {
  return (
     <PageHero
      sectionLabel="SERVICES"
      title="Dedicated to empowering clients through strategic financial guidance and reliable, results-focused advocacy."
      highlightedText="Dedicated to"
      imageSrc="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20financial%20advisory%20office%20meeting%20room%20with%20modern%20furniture%20laptops%20documents%20business%20atmosphere%20clean%20corporate%20style&image_size=landscape_16_9"
      imageAlt="Professional financial advisory meeting"
      useTextReveal={true}
    />
  );
};

export default CareerHero;