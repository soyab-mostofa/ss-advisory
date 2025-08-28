import React from 'react';
import { Quote } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';
import HTwoTextAnimation from '../HTwoTextAnimation';

interface TestimonialData {
  id: number;
  text: string;
  name: string;
  company: string;
  avatar: string;
}

const CareerTestimonials: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      id: 1,
      text: "Working at SS Advisory has been incredibly rewarding. The mentorship program helped me advance from junior to senior accountant, and the team's collaborative approach makes complex projects manageable.",
      name: "Sarah Chen",
      company: "Senior Tax Accountant",
      avatar: "https://cdn.pixabay.com/photo/2023/11/02/00/19/ai-generated-8359510_1280.jpg"
    },
    {
      id: 2,
      text: "The work-life balance here is exceptional. SS Advisory truly values their employees' well-being while maintaining the highest standards of professional service for our clients.",
      name: "Michael Rodriguez",
      company: "Audit Manager",
      avatar: "https://cdn.pixabay.com/photo/2023/11/02/00/19/ai-generated-8359510_1280.jpg"
    },
    {
      id: 3,
      text: "I appreciate the diverse client portfolio and continuous learning opportunities. Every day brings new challenges that help me grow as a compliance specialist.",
      name: "Emily Watson",
      company: "Compliance Specialist",
      avatar: "https://cdn.pixabay.com/photo/2023/11/02/00/19/ai-generated-8359510_1280.jpg"
    }
  ];

  return (
    <section className="bg-[#0d1321] px-4 py-16 md:px-[120px] md:py-[100px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-6">
          {/* Section Label */}
          <SectionLabel 
            label="TESTIMONIALS" 
            variant="dark" 
          />
          
          {/* Section Title */}
         <HTwoTextAnimation text="Employee Testimonial" className='w-full' dark />    
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center rounded-xl bg-white p-6"
            >
              {/* Quote Icon */}
              <div className="mb-3 flex h-15 w-15 items-center justify-center">
                <Quote className="h-15 w-15 text-[#204199]" fill="currentColor" />
              </div>

              {/* Testimonial Content */}
              <div className="flex w-full flex-col items-center gap-4">
                {/* Testimonial Text */}
                <p className="w-full max-w-[331px] text-center font-urbanist text-lg leading-[25px] text-[#535967]">
                  {testimonial.text}
                </p>

                {/* Divider Line */}
                <div className="h-px w-full bg-[#dde2eb]"></div>

                {/* Profile Section */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-17 w-17 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h4 className="font-urbanist text-xl font-bold text-[#204199]">
                      {testimonial.name}
                    </h4>
                    <p className="font-urbanist text-base text-[#535967]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTestimonials;