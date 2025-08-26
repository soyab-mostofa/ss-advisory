"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import TextRevealAnimation from "../TextRevealAnimation";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      agreeToTerms: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-8 w-full max-w-lg">
      {/* Form Container */}
      <div className="flex flex-col gap-8 lg:gap-10 w-full">
        {/* Form Title */}
        <TextRevealAnimation
          highlightStart="Send Us A"
          highlightEnd="Message"
          text="Send Us A Message"
          fontClass="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight"
        />

        {/* Form Fields */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 lg:gap-6 w-full"
        >
          <div className="flex flex-col gap-5 lg:gap-7 w-full">
            {/* Full Name */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm text-gray-600 leading-5">
                <span>Full Name</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Write your full name"
                  className="flex-1 text-lg text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm text-gray-600 leading-5">
                <span>Email</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Write your email"
                  className="flex-1 text-lg text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm text-gray-600 leading-5">
                <span>Phone</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Write your phone number"
                  className="flex-1 text-lg text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm text-gray-600 leading-5">
                <span>Subject</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Write your subject"
                  className="flex-1 text-lg text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 w-full">
              <label className="text-sm text-gray-600 leading-5">
                <span>Message</span>
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-start gap-2.5 border-b border-gray-200 pb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message"
                  rows={4}
                  className="flex-1 text-lg text-gray-900 placeholder-gray-400 bg-transparent border-none outline-none resize-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2.5 w-full mr-56">
            <div className="relative">
              <input
                type="checkbox"
                id="terms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                className="w-5 h-5 border border-gray-700 rounded appearance-none checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                required
              />
              {formData.agreeToTerms && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <label
              htmlFor="terms"
              className="text-base text-gray-600 leading-6"
            >
              I agree to the{" "}
              <span className="underline">Terms & Conditions</span> and{" "}
              <span className="underline">Privacy Policy</span>.
            </label>
          </div>
        </form>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="flex items-center justify-center gap-2 w-full border border-blue-600 rounded-xl bg-blue-600 px-4 py-4 hover:bg-blue-700 transition-colors"
      >
        <ArrowRight className="w-5 h-5 text-white" />
        <span className="text-base font-medium text-white leading-6">
          Submit
        </span>
        <ArrowRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}
