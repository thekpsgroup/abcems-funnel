import Link from "next/link";

export default function EMTPrepPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Pass the EMT Exam
              <span className="block text-[#DAA520]">With Confidence</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100 max-w-4xl mx-auto">
              A proven 3-week EMT-Basic NREMT Prep course taught by experienced Texas paramedics — 
              <span className="block mt-2 font-semibold">flexible live Zoom or in-person learning.</span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Link
                href="#enrollment"
                className="rounded-md bg-[#DAA520] px-8 py-4 text-lg font-semibold text-[#8B0000] shadow-lg hover:bg-[#B8860B] transition-colors"
              >
                Enroll Now
              </Link>
              <Link
                href="#contact"
                className="rounded-md border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#8B0000] transition-colors"
              >
                Talk to an Instructor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Course Overview</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                This comprehensive EMT-Basic NREMT Prep course is designed for students preparing for the NREMT-EMT exam in Texas. 
                Whether you&apos;re currently enrolled in an EMT program, have completed your training, or are studying independently, 
                this course will prepare you for success.
              </p>
              <p className="text-lg text-gray-600">
                ABCEMS&apos;s scenario-based learning approach focuses on real-world application, not just memorization. 
                Our experienced paramedic instructors bring decades of field experience to help you understand not just 
                <span className="font-semibold text-[#8B0000]"> what</span> to do, but <span className="font-semibold text-[#8B0000]">why</span> you do it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Highlights</h2>
            <p className="text-xl text-gray-600">Comprehensive coverage of all NREMT-EMT exam topics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Airway, Breathing, Circulation</h3>
              <p className="text-gray-600">
                Master the fundamentals of patient assessment, airway management, and circulation support with hands-on practice scenarios.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Trauma & Medical Emergencies</h3>
              <p className="text-gray-600">
                Learn to assess and manage trauma patients, medical emergencies, and special populations with confidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">EMS Operations & Safety</h3>
              <p className="text-gray-600">
                Understand EMS operations, scene safety, communication, and the legal aspects of emergency medical services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Test-Taking Strategies</h3>
              <p className="text-gray-600">
                Master proven strategies for the NREMT exam format, including how to approach scenario-based questions effectively.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Study Guide & Homework</h3>
              <p className="text-gray-600">
                Comprehensive study materials and homework packets included to reinforce learning between sessions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Free Retakes</h3>
              <p className="text-gray-600">
                If you don&apos;t pass on your first attempt, retake the course at no additional cost until you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Format */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Schedule & Format</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#8B0000] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B0000] mb-2">3-Week Program</h3>
                    <p className="text-gray-600">
                      Intensive 3-week program designed to prepare you thoroughly for the NREMT-EMT exam.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#8B0000] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Live Instruction</h3>
                    <p className="text-gray-600">
                      One 8-hour day of live instruction per week, with guided assignments between sessions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#8B0000] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Flexible Learning</h3>
                    <p className="text-gray-600">
                      Choose live Zoom sessions or in-person classes at our DFW training center. 
                      Perfect for working students with busy schedules.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-6">Typical Weekly Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Week 1</span>
                  <span className="text-gray-600">Airway & Breathing</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Week 2</span>
                  <span className="text-gray-600">Trauma & Medical</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-gray-700">Week 3</span>
                  <span className="text-gray-600">Operations & Test Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Requirements</h2>
            <p className="text-xl text-gray-600">What you need to get started</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Education</h3>
              <p className="text-gray-600">
                High school diploma/GED or active enrollment in EMT training program.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Technology</h3>
              <p className="text-gray-600">
                Reliable internet connection and computer/tablet for Zoom option.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Commitment</h3>
              <p className="text-gray-600">
                Dedication to preparing for the NREMT exam and completing assignments.
              </p>
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
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Paramedic-Founded</h3>
              <p className="text-gray-600">Founded and taught by experienced paramedics with real-world field experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">High Pass Rate</h3>
              <p className="text-gray-600">Proven track record with high pass rates and countless success stories.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Real-World Training</h3>
              <p className="text-gray-600">Scenario-based learning that prepares you for the field, not just the test.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from EMT graduates who passed with confidence</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic text-lg">
                &ldquo;I passed the EMT exam on my first try thanks to this course. The scenario-based training made all the difference.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000]">Sarah M.</div>
              <div className="text-sm text-gray-600">EMT Graduate, Dallas</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic text-lg">
                &ldquo;Captain Hempstead and his team gave me the tools I needed to succeed. The real-world experience they bring to teaching is unmatched.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000]">Mike R.</div>
              <div className="text-sm text-gray-600">EMT Graduate, Fort Worth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Enrollment */}
      <section id="enrollment" className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Enrollment</h2>
            <p className="text-xl text-gray-600">Transparent pricing with no hidden fees</p>
          </div>
          
          <div className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">EMT-Basic NREMT Prep Course</h3>
            <div className="text-5xl font-bold text-[#DAA520] mb-6">$200</div>
            <p className="text-xl text-red-100 mb-8">
              Complete 3-week program with study materials, homework packet, and free retakes until you pass.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">What&apos;s Included:</h4>
                <ul className="text-left space-y-1 text-red-100">
                  <li>• 3 weeks of live instruction</li>
                  <li>• Comprehensive study guide</li>
                  <li>• Homework packet</li>
                  <li>• Test-taking strategies</li>
                  <li>• Free retakes until you pass</li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Add-On Services:</h4>
                <ul className="text-left space-y-1 text-red-100">
                  <li>• 1-on-1 EMT Tutoring: $40/hr</li>
                  <li>• Additional study materials</li>
                  <li>• Exam scheduling assistance</li>
                  <li>• Career guidance</li>
                </ul>
              </div>
            </div>
            
            <Link
              href="#contact"
              className="inline-block bg-[#DAA520] text-[#8B0000] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8860B] transition-colors"
            >
              Register Today
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our EMT prep course</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Do I need to be enrolled in EMT training?</h3>
              <p className="text-gray-600">
                No! Our course is designed for anyone preparing for the NREMT-EMT exam, whether you&apos;re currently in a program, 
                have completed one, or are studying independently.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">What if I can&apos;t attend live sessions?</h3>
              <p className="text-gray-600">
                We offer flexible scheduling and can work with your availability. All sessions are recorded for review, 
                and we provide comprehensive study materials for independent learning.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Do you offer tutoring?</h3>
              <p className="text-gray-600">
                Yes! We offer 1-on-1 EMT tutoring at $40/hour for students who need additional support or want to focus on specific areas.
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

      {/* Closing Call-to-Action */}
      <section className="py-20 bg-[#8B0000]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Your EMT Career Starts Here
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don&apos;t leave exam success to chance — let us help you pass with confidence. 
            Join hundreds of successful EMT graduates who chose ABCEMS for their NREMT preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="#enrollment"
              className="bg-[#DAA520] text-[#8B0000] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8860B] transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              href="tel:469-400-8195"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#8B0000] transition-colors"
            >
              Call (469) 400-8195
            </Link>
          </div>
          <p className="text-lg text-red-100">
            Veteran-owned · Paramedic-founded · Texas-based EMS training
          </p>
        </div>
      </section>
    </div>
  );
}
