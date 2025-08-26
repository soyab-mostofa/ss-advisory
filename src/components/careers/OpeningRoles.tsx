'use client';

import React from 'react';
import JobCard from './JobCard';
import SectionLabel from '../ui/SectionLabel';

const OpeningRoles = () => {
  const jobListings = [
    {
      title: 'UI/UX Designer',
      tags: ['Onsite', 'Fulltime', 'Dhaka'],
      deadline: '18 Aug 2025',
      description: "We're looking for a creative and user-focused UI/UX Designer to help craft intuitive, elegant, and engaging digital experiences.",
      salary: '60,000'
    },
    {
      title: 'UI/UX Designer',
      tags: ['Onsite', 'Fulltime', 'Dhaka'],
      deadline: '18 Aug 2025',
      description: "We're looking for a creative and user-focused UI/UX Designer to help craft intuitive, elegant, and engaging digital experiences.",
      salary: '60,000'
    }
  ];

  const handleApply = (jobTitle: string) => {
    // Handle job application logic here
    console.log(`Applying for ${jobTitle}`);
  };

  return (
    <div className="flex flex-col items-start px-4 md:px-8 lg:px-[120px] py-8 md:py-12 lg:py-[100px] w-full max-w-[1440px] mx-auto gap-8 lg:gap-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-6 md:gap-0">
        {/* Section Header */}
        <div className="w-full md:w-[387px]">
          <SectionLabel 
            label="OPPORTUNITY" 
            lineWidth="hidden md:block w-[200px]" 
            textSize="text-lg md:text-xl"
            className="md:py-[10px] md:w-[387px]"
          />
        </div>
        
        {/* Title */}
        <div className="w-full md:w-[745px]">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[77px] tracking-[-2.56px] font-semibold font-urbanist">
            <span className="text-[#535967]">Opening&nbsp;</span>
            <span className="text-[#204199]">Roles</span>
          </h2>
        </div>
      </div>
      
      {/* Job Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 md:gap-8 overflow-x-auto">
        {jobListings.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            tags={job.tags}
            deadline={job.deadline}
            description={job.description}
            salary={job.salary}
            onApply={() => handleApply(job.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default OpeningRoles;