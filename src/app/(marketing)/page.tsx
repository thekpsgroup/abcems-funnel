import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Your Path to NREMT
              <span className="block text-[#DAA520]">Success Starts Here</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100 max-w-4xl mx-auto">
              Texas-based, veteran-owned EMS prep led by experienced paramedics — 
              <span className="block mt-2 font-semibold">proven to help students pass the NREMT with confidence.</span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Link
                href="#courses"
                className="rounded-md bg-gradient-to-r from-[#DAA520] to-[#B8860B] px-8 py-4 text-lg font-semibold text-[#8B0000] shadow-lg hover:shadow-xl hover:from-[#B8860B] hover:to-[#DAA520] transition-all duration-300 transform hover:-translate-y-1"
              >
                View Courses
              </Link>
              <Link
                href="#contact"
                className="rounded-md border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#8B0000] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Contact an Instructor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About ABCEMS Solutions</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                Founded by career paramedics and proudly veteran-owned, ABCEMS Solutions delivers 
                <span className="font-semibold text-[#8B0000]"> real-world, scenario-based training</span> that goes beyond memorization.
              </p>
              <p className="text-lg text-gray-600">
                Our mission is simple: prepare you for the field, not just the test. We combine decades of 
                emergency medical experience with proven teaching methods to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview - 3 Card Layout */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path to Success</h2>
            <p className="text-xl text-gray-600">Comprehensive NREMT preparation with proven results</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* EMT-Basic NREMT Prep */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#8B0000] mb-2 group-hover:text-[#A52A2A] transition-colors">EMT-Basic NREMT Prep</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#DAA520] to-[#B8860B] bg-clip-text text-transparent">$200</p>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  3-week program with live Zoom or in-person sessions. Includes study guides + homework packet.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Live instruction (Zoom or in-person)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Study guides & homework packet
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free retakes until you pass
                  </li>
                </ul>
                <Link href="/courses/emt-prep" className="block w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#660000] hover:to-[#8B0000] transition-all duration-200 text-center shadow-md hover:shadow-lg">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Paramedic NREMT Prep */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#8B0000] mb-2 group-hover:text-[#A52A2A] transition-colors">Paramedic NREMT Prep</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#DAA520] to-[#B8860B] bg-clip-text text-transparent">$400</p>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  2-day intensive, scenario-based training with test strategy coaching.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Scenario-based learning
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Test strategy coaching
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited retakes
                  </li>
                </ul>
                <Link href="/courses/paramedic-prep" className="block w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#660000] hover:to-[#8B0000] transition-all duration-200 text-center shadow-md hover:shadow-lg">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Tutoring */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#8B0000] mb-2 group-hover:text-[#A52A2A] transition-colors">1-on-1 Tutoring</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-[#DAA520] to-[#B8860B] bg-clip-text text-transparent">$40-60/hr</p>
                </div>
                <p className="text-gray-600 mb-6 text-center">
                  Personalized support for EMT ($40/hr) or Paramedic ($60/hr) students.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Personalized instruction
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Flexible scheduling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Focus on your weak areas
                  </li>
                </ul>
                <Link href="/courses/tutoring" className="block w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#660000] hover:to-[#8B0000] transition-all duration-200 text-center shadow-md hover:shadow-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Group Discount */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-[#DAA520] text-[#8B0000] px-6 py-3 rounded-full font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Group/Department: 25% off for 10+ trainees
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ABCEMS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ABCEMS?</h2>
            <p className="text-xl text-gray-600">The difference is in our experience and approach</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Veteran-Owned</h3>
              <p className="text-gray-600">Texas-rooted, veteran-owned business with military precision and dedication.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Career Paramedics</h3>
              <p className="text-gray-600">Taught by experienced paramedics with both field and teaching experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Flexible Learning</h3>
              <p className="text-gray-600">Choose Zoom or in-person training to fit your schedule and learning style.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">High Success Rate</h3>
              <p className="text-gray-600">Proven track record with high pass rates and countless success stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Success Stories */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from students who passed their NREMT with confidence</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">
                &ldquo;I passed my paramedic registry on the first try after this course. The scenario-based training was exactly what I needed.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000] group-hover:text-[#A52A2A] transition-colors">Sarah M.</div>
              <div className="text-sm text-gray-600">Paramedic Graduate</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">
                &ldquo;The instructors really care about your success. They worked with me until I passed — never gave up on me.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000] group-hover:text-[#A52A2A] transition-colors">Mike R.</div>
              <div className="text-sm text-gray-600">EMT Graduate</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">
                &ldquo;Truly veteran-owned service. The real-world experience they bring to teaching made all the difference.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000] group-hover:text-[#A52A2A] transition-colors">Jennifer L.</div>
              <div className="text-sm text-gray-600">EMT Graduate</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/testimonials" className="inline-flex items-center text-[#8B0000] font-semibold hover:text-[#660000] transition-colors">
              Read More Success Stories
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Your path to NREMT success in three simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#8B0000] mb-4">Choose Your Course</h3>
              <p className="text-gray-600">
                Select from EMT-Basic, Paramedic, or 1-on-1 tutoring options. 
                All designed to prepare you for the NREMT with confidence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#8B0000] mb-4">Train with Paramedics</h3>
              <p className="text-gray-600">
                Learn from experienced paramedics in live classes and guided practice. 
                Real-world scenarios, not just memorization.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#8B0000] mb-4">Pass with Confidence</h3>
              <p className="text-gray-600">
                Take your NREMT exam with the confidence that comes from 
                proper preparation and real-world training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our programs</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Do I need to already be in an EMT program?</h3>
              <p className="text-gray-600">
                No! Our courses are designed for anyone preparing for the NREMT, whether you&apos;re currently in a program, 
                have completed one, or are studying independently.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">What&apos;s included in the free retakes?</h3>
              <p className="text-gray-600">
                If you don&apos;t pass your NREMT on the first try, you can retake our course at no additional cost 
                until you successfully pass your exam.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Can I take classes online or do I need to come in-person?</h3>
              <p className="text-gray-600">
                You have the flexibility to choose! All our courses are available both via live Zoom sessions 
                and in-person at our DFW training center.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/faq" className="inline-flex items-center text-[#8B0000] font-semibold hover:text-[#660000] transition-colors">
              View Full FAQ
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 bg-[#8B0000]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Launch Your EMS Career?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of successful graduates who chose ABCEMS for their NREMT preparation. 
            Your path to EMS success starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="#courses" className="bg-gradient-to-r from-[#DAA520] to-[#B8860B] text-[#8B0000] px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#B8860B] hover:to-[#DAA520] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Register Today
            </Link>
            <Link href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#8B0000] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Contact Us
            </Link>
          </div>
          <div className="text-center">
            <p className="text-lg text-red-100 mb-2">Or call us directly:</p>
            <a href="tel:469-400-8195" className="text-2xl font-bold text-[#DAA520] hover:text-[#B8860B] transition-colors">
              (469) 400-8195
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
