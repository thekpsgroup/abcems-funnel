import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#00438c] to-[#1e5ba8] text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Pass the NREMT with
              <span className="block text-[#cab068]">Confidence</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-blue-100 max-w-3xl mx-auto">
              Veteran-owned. Built by a paramedic. Train smarter, not harder. 
              <span className="block mt-2 font-semibold">Serving DFW and beyond.</span>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#courses"
                className="rounded-md bg-[#cab068] px-6 py-3 text-lg font-semibold text-[#00438c] shadow-lg hover:bg-[#d4c078] transition-colors"
              >
                View Courses
              </Link>
              <Link
                href="#testimonials"
                className="text-lg font-semibold leading-6 text-white hover:text-[#cab068] transition-colors"
              >
                Read Success Stories <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00438c]">95%</div>
              <div className="mt-2 text-lg text-gray-600">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00438c]">500+</div>
              <div className="mt-2 text-lg text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00438c]">10+</div>
              <div className="mt-2 text-lg text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Training Programs</h2>
            <p className="mt-4 text-xl text-gray-600">Comprehensive NREMT preparation with proven results</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* EMT Prep Course */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#00438c]">EMT Prep Course</h3>
                  <span className="text-3xl font-bold text-[#cab068]">$200</span>
                </div>
                <p className="text-gray-600 mb-6">
                  3-week comprehensive EMT-Basic program with live Zoom or in-person sessions. 
                  Includes study guide & homework packet. Free retakes until you pass.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#cab068] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Live instruction (Zoom or in-person)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#cab068] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Study guide & homework packet
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#cab068] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free retakes until you pass
                  </li>
                </ul>
                <button className="w-full bg-[#00438c] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Paramedic Prep Course */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#00438c]">Paramedic Prep Course</h3>
                  <span className="text-3xl font-bold text-[#cab068]">$400</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Advanced scenario-based paramedic prep with test strategy coaching. 
                  Includes homework & unlimited retakes until you pass.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#cab068] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Scenario-based learning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#cab068] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Test strategy coaching
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#cab068] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited retakes
                  </li>
                </ul>
                <button className="w-full bg-[#00438c] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#003366] transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Group Discount */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-[#cab068] text-[#00438c] px-6 py-3 rounded-full font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Group/Department: 25% off for 10+ trainees
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What Our Students Say</h2>
            <p className="mt-4 text-xl text-gray-600">Real testimonials from successful graduates</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex text-[#cab068]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;I would not have passed without this program. The instructors really care about your success.&rdquo;
              </p>
              <div className="font-semibold text-[#00438c]">Sarah M.</div>
              <div className="text-sm text-gray-600">EMT Graduate</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex text-[#cab068]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;The scenario-based prep gave me the confidence I needed. Passed on my first try!&rdquo;
              </p>
              <div className="font-semibold text-[#00438c]">Mike R.</div>
              <div className="text-sm text-gray-600">Paramedic Graduate</div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex text-[#cab068]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;ABCEMS worked with me until I passed — they never gave up on me. Truly veteran-owned service.&rdquo;
              </p>
              <div className="font-semibold text-[#00438c]">Jennifer L.</div>
              <div className="text-sm text-gray-600">EMT Graduate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00438c]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Pass the NREMT?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful graduates who chose ABCEMS for their NREMT preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#cab068] text-[#00438c] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#d4c078] transition-colors">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#00438c] transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#cab068] mb-4">ABCEMS Solutions</h3>
            <p className="text-gray-400 mb-4">
              Veteran-Owned · Train Smarter, Not Harder · Serving DFW
            </p>
            <p className="text-sm text-gray-500">
              © 2024 ABCEMS Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
