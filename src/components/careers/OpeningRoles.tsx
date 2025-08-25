'use client';

import React from 'react';
import JobCard from './JobCard';

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
        <div className="flex items-center gap-3 w-full md:w-[387px]">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-l-lg px-3 py-[6px] pr-[60px] bg-gradient-to-r from-[#2041991a] to-[#ffffff1a]">
              <div className="w-2 h-2 rounded-full bg-[#204199]" />
              <p className="text-lg md:text-xl leading-7 text-[#041e3a] font-urbanist">
                OPPORTUNITY
              </p>
            </div>
            <div className="hidden md:block w-[200px] h-px bg-gradient-to-r from-[#ffffff4d] to-[#2041994d]" />
          </div>
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