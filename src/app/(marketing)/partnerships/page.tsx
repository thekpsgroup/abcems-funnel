import Link from "next/link";

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Partnerships That Build Stronger Teams
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              DFW fire departments and EMS agencies trust ABCEMS as their exam prep partner.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
              >
                Contact Our Partnerships Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With ABCEMS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With ABCEMS</h2>
            <p className="text-xl text-gray-600">The advantages of choosing ABCEMS as your training partner</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Veteran-Owned Credibility</h3>
                  <p className="text-gray-600">Paramedic-founded company with deep understanding of EMS challenges and real-world experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Municipal Experience</h3>
                  <p className="text-gray-600">Proven history of supporting municipal and department-level training with established partnerships across Texas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Flexible Delivery</h3>
                  <p className="text-gray-600">Zoom or in-person options to accommodate department schedules and training requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Proven Success Rates</h3>
                  <p className="text-gray-600">Students pass faster, departments save resources, and agencies strengthen their reputation with higher pass rates.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-6">Partnership Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Reduced training costs for your department</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Higher pass rates and faster certification</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Streamlined enrollment and reporting</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ongoing support and relationship management</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Flexible scheduling and delivery options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">Multiple ways to partner with ABCEMS</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Department Contracts</h3>
              <p className="text-gray-600 mb-6">
                Long-term training agreements for ongoing certification support. 
                Includes bulk pricing, priority scheduling, and dedicated account management.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Annual training contracts</li>
                <li>• Bulk enrollment discounts</li>
                <li>• Priority scheduling</li>
                <li>• Dedicated support team</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Referral Relationships</h3>
              <p className="text-gray-600 mb-6">
                Ongoing referral partnerships where departments direct students to ABCEMS 
                for exam prep, with benefits for both the department and students.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Student referral discounts</li>
                <li>• Department revenue sharing</li>
                <li>• Co-marketing opportunities</li>
                <li>• Performance tracking</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Co-Branded Programs</h3>
              <p className="text-gray-600 mb-6">
                Custom training programs co-branded with your department or agency. 
                Includes specialized curriculum and joint marketing opportunities.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Custom curriculum development</li>
                <li>• Joint marketing materials</li>
                <li>• Department branding options</li>
                <li>• Exclusive training programs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Referral Benefits</h2>
            <p className="text-xl text-gray-600">How referral partnerships benefit everyone</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4">For Agencies</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Reduce training costs</li>
                <li>• Higher pass rates</li>
                <li>• Strengthened reputation</li>
                <li>• Revenue sharing opportunities</li>
                <li>• Streamlined training process</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4">For Students</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Discounted rates through department</li>
                <li>• Proven training methods</li>
                <li>• Unlimited retakes until pass</li>
                <li>• Flexible scheduling options</li>
                <li>• Expert instruction and support</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4">For ABCEMS</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Expanded reach and impact</li>
                <li>• Stronger community relationships</li>
                <li>• Consistent student pipeline</li>
                <li>• Enhanced credibility</li>
                <li>• Long-term partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build the Future of EMS Together</h2>
          <p className="text-xl text-gray-200 mb-8">
            Ready to establish a partnership that benefits your department, your students, and the EMS community? 
            Contact our partnerships team to discuss opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
            >
              Start a Partnership
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#8B0000] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
