import Link from "next/link";

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Group Training That Scales
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              Discounted EMS prep courses for fire departments, EMS agencies, and municipal partners across Texas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
              >
                Request a Group Quote
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#8B0000] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-gray-600">Organizations that trust ABCEMS for their training needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-2">Fire Departments</h3>
              <p className="text-gray-600">Municipal and volunteer fire departments across Texas</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-2">EMS Agencies</h3>
              <p className="text-gray-600">Municipal EMS agencies and private ambulance services</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-2">Training Coordinators</h3>
              <p className="text-gray-600">Officers managing multiple students and certification programs</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-2">Corporate Medical</h3>
              <p className="text-gray-600">Companies with onsite medical staff and emergency response teams</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Group Training */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of Group Training</h2>
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
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Bulk Discounts</h3>
                  <p className="text-gray-600">Significant savings for departments and agencies with 10+ students. 25% discount on group enrollments.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">In-person or live Zoom options to accommodate shift schedules and department needs.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Consistent Training</h3>
                  <p className="text-gray-600">Scenario-based training that aligns entire teams with standardized protocols and procedures.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                  <svg className="w-6 h-6 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Proven Track Record</h3>
                  <p className="text-gray-600">Established partnerships with DFW municipalities and consistent high pass rates.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-6">Group Training Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Reduced per-student costs</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Streamlined enrollment process</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Coordinated scheduling</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Team-based learning environment</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Progress tracking and reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Packages */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Group Packages</h2>
            <p className="text-xl text-gray-600">Tailored training solutions for your organization</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">EMT-Basic Group Courses</h3>
              <p className="text-gray-600 mb-6">
                3-week comprehensive EMT prep programs designed for fire departments and EMS agencies. 
                Includes study materials, homework packets, and group support.
              </p>
              <div className="bg-[#DAA520] text-[#8B0000] px-4 py-2 rounded-lg font-semibold mb-4">
                25% Group Discount
              </div>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Live instruction via Zoom or in-person</li>
                <li>• Comprehensive study materials</li>
                <li>• Group enrollment management</li>
                <li>• Progress tracking and reporting</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Paramedic Group Prep</h3>
              <p className="text-gray-600 mb-6">
                2-day intensive paramedic prep courses with scenario-based learning and test strategy coaching. 
                Perfect for agencies upgrading their EMS capabilities.
              </p>
              <div className="bg-[#8B0000] text-white px-4 py-2 rounded-lg font-semibold mb-4">
                25% Group Discount
              </div>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Advanced scenario-based training</li>
                <li>• Test strategy and confidence building</li>
                <li>• Unlimited retakes until pass</li>
                <li>• Customized scheduling options</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Custom Programs</h3>
              <p className="text-gray-600 mb-6">
                Tailored training solutions based on your agency&apos;s specific needs. 
                Includes bundled tutoring support and specialized workshops.
              </p>
              <div className="bg-[#DAA520] text-[#8B0000] px-4 py-2 rounded-lg font-semibold mb-4">
                Custom Pricing
              </div>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Agency-specific curriculum</li>
                <li>• Bundled tutoring support</li>
                <li>• Flexible delivery formats</li>
                <li>• Ongoing partnership support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study / Partnership Callout */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl font-bold text-[#8B0000] mb-6">Trusted by DFW Municipalities</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              We&apos;ve partnered with municipal agencies in the DFW area to deliver reliable, high-pass-rate prep courses 
              to entire cohorts of EMTs and paramedics. Our proven track record speaks for itself.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B0000] mb-2">10+</div>
                <p className="text-gray-600">Municipal Partners</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B0000] mb-2">500+</div>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B0000] mb-2">95%+</div>
                <p className="text-gray-600">Pass Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Train Your Team?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Get a custom quote for your organization&apos;s training needs. We&apos;ll work with you to create 
            a program that fits your schedule, budget, and requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
          >
            Request Group Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
