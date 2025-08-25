'use client';

import React from 'react';
import SectionHeader from './SectionHeader';
import ValueCard from './ValueCard';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

interface CoreValuesProps {
  coreValues: CoreValue[];
  className?: string;
}

const CoreValues: React.FC<CoreValuesProps> = ({ coreValues, className = '' }) => {
  return (
    <section className={`px-4 md:px-[120px] py-16 md:py-[100px] ${className}`}>
      <div className="flex flex-col gap-12 md:gap-16">
        {/* Section Header */}
        <SectionHeader 
          sectionLabel="VALUES" 
          title="Our Core Values" 
        />
        
        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
export type { CoreValue, CoreValuesProps };