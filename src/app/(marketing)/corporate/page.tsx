import Link from "next/link";

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Corporate EMS Training Solutions
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              Custom packages for corporations, healthcare providers, and organizations seeking EMS certification success.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
              >
                Request a Corporate Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Support</h2>
            <p className="text-xl text-gray-600">Organizations that rely on certified EMS professionals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-2">Corporations</h3>
              <p className="text-gray-600">Companies with onsite EMT/paramedic staff and emergency response teams</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-2">Private Ambulance</h3>
              <p className="text-gray-600">Private ambulance providers and medical transport companies</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-2">Industrial Companies</h3>
              <p className="text-gray-600">Construction, manufacturing, and industrial companies with emergency response teams</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-2">Healthcare Providers</h3>
              <p className="text-gray-600">Healthcare systems and medical facilities with EMS certification needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Training Benefits</h2>
            <p className="text-xl text-gray-600">Why organizations choose ABCEMS for their training needs</p>
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
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600">Custom training programs designed specifically for your company&apos;s needs, schedule, and operational requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Bulk Pricing</h3>
                  <p className="text-gray-600">Significant cost savings with scalable training options and volume discounts for multiple employees.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">Training schedules that accommodate corporate shifts, operational hours, and employee availability.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Proven Outcomes</h3>
                  <p className="text-gray-600">Consistent results for professional staff with higher pass rates and faster certification completion.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-6">Corporate Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Reduced training costs per employee</span>
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
                  <span className="text-gray-700">Onsite or remote training options</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Progress tracking and compliance reporting</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Dedicated account management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Options */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Training Options</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your organization&apos;s needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">EMT-Basic Prep</h3>
              <p className="text-gray-600 mb-6">
                3-week comprehensive EMT prep programs designed for corporate emergency response teams. 
                Includes study materials and flexible scheduling.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Corporate group discounts</li>
                <li>• Flexible scheduling options</li>
                <li>• Onsite or remote delivery</li>
                <li>• Progress tracking and reporting</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Paramedic Intensive</h3>
              <p className="text-gray-600 mb-6">
                2-day intensive paramedic prep courses for advanced medical staff. 
                Scenario-based learning with test strategy coaching.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Advanced scenario training</li>
                <li>• Test strategy and confidence building</li>
                <li>• Unlimited retakes until pass</li>
                <li>• Customized for corporate needs</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Custom Workshops</h3>
              <p className="text-gray-600 mb-6">
                Tailored workshops and tutoring add-ons designed specifically for your organization&apos;s 
                unique requirements and operational needs.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Custom curriculum development</li>
                <li>• Specialized workshops</li>
                <li>• Tutoring support packages</li>
                <li>• Ongoing training partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Corporate Training Success</h2>
            <p className="text-xl text-gray-600">Proven results for professional organizations</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-2">95%+</h3>
              <p className="text-gray-600">Corporate pass rate across all training programs</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-2">50+</h3>
              <p className="text-gray-600">Corporate clients served across Texas</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-2">1000+</h3>
              <p className="text-gray-600">Corporate employees trained and certified</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-2">25%</h3>
              <p className="text-gray-600">Average cost savings with corporate packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Train Smarter. Save Time. Reduce Costs.</h2>
          <p className="text-xl text-gray-200 mb-8">
            Ready to implement a corporate EMS training solution that delivers results? 
            Schedule a consultation to discuss your organization&apos;s specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
