export default function CareersPage() {
  return (
    <div className="flex flex-col items-center bg-white w-full min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#204199] mb-6">
            Join Our Team
          </h1>
          <p className="text-lg text-[#545660] max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team. 
            Explore opportunities to make a meaningful impact in the financial advisory space.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#f8f8f8] rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#204199] mb-4">
              Why Work With Us?
            </h2>
            <ul className="space-y-3 text-[#545660]">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#204199] rounded-full mt-2 flex-shrink-0"></div>
                <span>Collaborative and supportive work environment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#204199] rounded-full mt-2 flex-shrink-0"></div>
                <span>Opportunities for professional growth and development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#204199] rounded-full mt-2 flex-shrink-0"></div>
                <span>Competitive compensation and benefits</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#204199] rounded-full mt-2 flex-shrink-0"></div>
                <span>Work-life balance and flexible arrangements</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-[#eef8ff] rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#204199] mb-4">
              Current Openings
            </h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-[#d4e4ff]">
                <h3 className="font-semibold text-[#204199] mb-2">Financial Advisor</h3>
                <p className="text-sm text-[#545660] mb-2">Full-time • Remote/Hybrid</p>
                <p className="text-[#545660] text-sm">Help clients achieve their financial goals through personalized advisory services.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-[#d4e4ff]">
                <h3 className="font-semibold text-[#204199] mb-2">Investment Analyst</h3>
                <p className="text-sm text-[#545660] mb-2">Full-time • On-site</p>
                <p className="text-[#545660] text-sm">Conduct market research and analysis to support investment strategies.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-[#d4e4ff]">
                <h3 className="font-semibold text-[#204199] mb-2">Client Relations Manager</h3>
                <p className="text-sm text-[#545660] mb-2">Full-time • Hybrid</p>
                <p className="text-[#545660] text-sm">Build and maintain strong relationships with our valued clients.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-[#204199] rounded-xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Ready to Apply?
            </h2>
            <p className="text-white/90 mb-6">
              Send us your resume and a cover letter explaining why you'd be a great fit for our team.
            </p>
            <button className="bg-white text-[#204199] px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}