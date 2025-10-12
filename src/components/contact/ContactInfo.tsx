import { Phone, Mail, MapPin } from "lucide-react";
import TextRevealAnimation from "../TextRevealAnimation";
import SectionLabel from "../ui/SectionLabel";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start gap-12 lg:gap-20 w-full max-w-md">
      {/* Header Section */}
      <div className="flex flex-col items-start gap-2 md:gap-6 w-full">
        {/* Section Title */}
        <SectionLabel
          label="Contact Us"
          showLine={true}
          lineWidth="flex-1"
          className="py-2.5 w-full max-w-96"
        />

        {/* Main Title */}
        <TextRevealAnimation
          text="Get in touch with our expert team for personalized accounting solutions."
          className="text-3xl sm:text-4xl lg:text-5xl font-medium  w-full max-w-md"
          highlightStart="Get in touch"
          highlightEnd="accounting solutions."
        />
      </div>

      {/* Contact Details */}
      <div className="flex flex-col gap-8 lg:gap-10 w-full">
        {/* Call Us */}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded p-3">
              <Phone className="md:w-7  w-4 h-4 md:h-7 text-blue-500" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-600">
                Call Us
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-900">
                +880 1752-143459
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-6 w-full">
            Lorem ipsum dolor sit amet consectetur. Sit ullamcorper at tellus ac
            convallis platea eget. Ut.
          </p>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded p-3">
              <Mail className="md:w-7  w-4 h-4 md:h-7 text-blue-500" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-600">
                Email
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-900">
                example@email.com
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-6 w-full">
            Lorem ipsum dolor sit amet consectetur. Sit ullamcorper at tellus ac
            convallis platea eget. Ut.
          </p>
        </div>

        {/* Office */}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 rounded p-3">
              <MapPin className="md:w-7  w-4 h-4 md:h-7 text-blue-500" />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-600">
                Office
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-900 leading-5 sm:leading-6">
                House 654 (3rd Floor), Road 09 Mirpur DOHS, Dhaka 1216
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200"></div>
          <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-5 sm:leading-6 w-full">
            Lorem ipsum dolor sit amet consectetur. Sit ullamcorper at tellus ac
            convallis platea eget. Ut.
          </p>
        </div>
      </div>
    </div>
  );
}
