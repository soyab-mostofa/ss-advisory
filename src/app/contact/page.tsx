import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import MapSection from '@/components/contact/MapSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-4">
      {/* Main Contact Section */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-16  lg:px-16 xl:px-32 py-12 lg:py-20">
        {/* Left Side - Contact Info */}
        <div className="w-full lg:w-auto  lg:flex-1">
          <ContactInfo />
        </div>
        
        {/* Vertical Divider - Hidden on mobile */}
        <div className="hidden lg:block w-px h-[700px] bg-gray-200 flex-shrink-0" aria-hidden="true"></div>
        
        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-auto lg:flex-1 lg:max-w-lg">
          <ContactForm />
        </div>
      </div>
      
      {/* Map Section */}
      <MapSection />
    </div>
  );
}