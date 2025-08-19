import { Phone } from 'lucide-react';

interface ServicesFooterProps {
  className?: string;
}

export default function ServicesFooter({ className = '' }: ServicesFooterProps) {
  return (
    <>
      {/* Footer Section */}
      <section className={`bg-[#0d1321] text-white py-16 md:py-20 ${className}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - CTA */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300">
                Let&apos;s discuss how our strategic solutions can drive your success.
              </p>
              <button className="bg-[#ff6b35] hover:bg-[#e55a2b] text-white px-8 py-4 rounded-lg font-semibold transition-colors">
                Get Started Today
              </button>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#ff6b35]" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#ff6b35]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>contact@ssadvisory.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#ff6b35]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Our Services</h3>
                <ul className="space-y-2 text-gray-300">
                  <li><a href="#" className="hover:text-[#ff6b35] transition-colors">Strategic Planning</a></li>
                  <li><a href="#" className="hover:text-[#ff6b35] transition-colors">Business Consulting</a></li>
                  <li><a href="#" className="hover:text-[#ff6b35] transition-colors">Digital Transformation</a></li>
                  <li><a href="#" className="hover:text-[#ff6b35] transition-colors">Process Optimization</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="bg-[#0a0f1a] text-gray-400 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2024 SS Advisory. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#ff6b35] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}