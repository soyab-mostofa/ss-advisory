import React from 'react';
import { Quote } from 'lucide-react';
import { SectionLabel } from '@/components/ui/SectionLabel';

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
      text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
      name: "Annette Black",
      company: "ABC Pharmacy",
      avatar: "https://cdn.pixabay.com/photo/2023/11/02/00/19/ai-generated-8359510_1280.jpg"
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
      name: "Annette Black",
      company: "ABC Pharmacy",
      avatar: "https://cdn.pixabay.com/photo/2023/11/02/00/19/ai-generated-8359510_1280.jpg"
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
      name: "Annette Black",
      company: "ABC Pharmacy",
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
            lineWidth="w-[149px]" 
            textSize="text-xl" 
          />
          
          {/* Section Title */}
          <h2 className="flex-1 font-urbanist text-4xl font-semibold leading-[77px] text-white md:text-6xl">
            Employee Testimonial
          </h2>
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