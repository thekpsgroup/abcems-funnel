import Link from "next/link";

export default function ParamedicPrepPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Master the
              <span className="block text-[#DAA520]">Paramedic Exam</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100 max-w-4xl mx-auto">
              A focused, two-day intensive designed to prepare paramedic students for the NREMT-P — 
              <span className="block mt-2 font-semibold">taught by experienced paramedics with real-world expertise.</span>
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
                Speak With an Instructor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Paramedic Preparation</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                This intensive course is designed for students who are completing paramedic training or reattempting the NREMT-P exam. 
                Our advanced curriculum goes beyond basic preparation to build the critical thinking and clinical decision-making skills 
                essential for paramedic-level practice.
              </p>
              <p className="text-lg text-gray-600">
                We focus on <span className="font-semibold text-[#8B0000]">scenario-based learning</span>, 
                <span className="font-semibold text-[#8B0000]"> critical thinking under pressure</span>, and 
                <span className="font-semibold text-[#8B0000]"> exam strategy coaching</span> that transforms 
                knowledge into confident clinical practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Curriculum</h2>
            <p className="text-xl text-gray-600">Comprehensive paramedic-level preparation for the NREMT-P</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Advanced Airway & Ventilation</h3>
              <p className="text-gray-600">
                Master advanced airway management, mechanical ventilation, and complex respiratory emergencies with hands-on scenarios.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Cardiology & Pharmacology</h3>
              <p className="text-gray-600">
                Deep dive into cardiac emergencies, ECG interpretation, and advanced pharmacology with real-world case studies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Medical & Trauma Simulations</h3>
              <p className="text-gray-600">
                Complex case simulations covering medical emergencies, trauma management, and multi-system patient care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Pediatric & Geriatric Care</h3>
              <p className="text-gray-600">
                Specialized training for pediatric and geriatric patients with age-specific protocols and considerations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">NREMT-Style Practice</h3>
              <p className="text-gray-600">
                Extensive practice with NREMT-style questions and exam strategy coaching to maximize your test performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Homework & Practice Packets</h3>
              <p className="text-gray-600">
                Comprehensive homework assignments and practice packets to reinforce learning and build confidence.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Intensive 2-Day Format</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#8B0000] font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Two Consecutive Days</h3>
                    <p className="text-gray-600">
                      Intensive 8-hour sessions over two consecutive days for maximum learning retention and focus.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#8B0000] font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Interactive Learning</h3>
                    <p className="text-gray-600">
                      Combination of lecture, case scenarios, and exam prep drills with real-world application.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[#8B0000] font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Instructor-Led Sessions</h3>
                    <p className="text-gray-600">
                      Live Zoom or in-person sessions led by experienced paramedics with immediate feedback and guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-6">Daily Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Day 1</span>
                  <span className="text-gray-600">Advanced Medical & Pharmacology</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Day 2</span>
                  <span className="text-gray-600">Trauma & Exam Strategy</span>
                </div>
                <div className="bg-[#8B0000] text-white p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold">Both Days Include:</p>
                  <p className="text-sm">• Case scenario practice</p>
                  <p className="text-sm">• NREMT-style questions</p>
                  <p className="text-sm">• Critical thinking exercises</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Prerequisites</h2>
            <p className="text-xl text-gray-600">Advanced requirements for paramedic-level training</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Paramedic Training</h3>
              <p className="text-gray-600">
                Must be enrolled in or have completed a paramedic training program with strong foundation in EMT-level knowledge.
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
                Laptop or computer with reliable internet connection for Zoom option and digital materials.
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
                Dedication to intensive learning and preparation for the challenging NREMT-P examination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ABCEMS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ABCEMS for Paramedic Prep?</h2>
            <p className="text-xl text-gray-600">Advanced training designed by paramedics for future paramedics</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Veteran-Owned</h3>
              <p className="text-gray-600">Texas-rooted, veteran-owned business with military precision and dedication to excellence.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Paramedic-Founded</h3>
              <p className="text-gray-600">Designed by experienced paramedics who understand the challenges of advanced EMS practice.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Confidence Building</h3>
              <p className="text-gray-600">Emphasis on building confidence through understanding, not rote memorization.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Proven Success</h3>
              <p className="text-gray-600">Proven track record with first-time passes and successful retake victories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Paramedic Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from paramedics who passed with confidence</p>
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
                &ldquo;I passed the NREMT-P on my first try after this course — the scenarios made all the difference. 
                The advanced case studies prepared me for real-world paramedic practice.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000]">Jennifer L.</div>
              <div className="text-sm text-gray-600">Paramedic, Austin</div>
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
                &ldquo;After multiple failed attempts, ABCEMS finally gave me the tools to succeed. 
                The intensive format and real-world scenarios built my confidence for the exam.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000]">Marcus T.</div>
              <div className="text-sm text-gray-600">Paramedic, Houston</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Enrollment */}
      <section id="enrollment" className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing & Enrollment</h2>
            <p className="text-xl text-gray-600">Advanced training investment for paramedic certification</p>
          </div>
          
          <div className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Paramedic NREMT-P Prep Course</h3>
            <div className="text-5xl font-bold text-[#DAA520] mb-6">$400</div>
            <p className="text-xl text-red-100 mb-8">
              Intensive 2-day program with advanced scenarios, practice questions, and comprehensive study materials.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">What&apos;s Included:</h4>
                <ul className="text-left space-y-1 text-red-100">
                  <li>• 2 intensive 8-hour days</li>
                  <li>• Advanced case scenarios</li>
                  <li>• NREMT-style practice questions</li>
                  <li>• Comprehensive study materials</li>
                  <li>• Homework & practice packets</li>
                  <li>• Exam strategy coaching</li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Add-On Services:</h4>
                <ul className="text-left space-y-1 text-red-100">
                  <li>• 1-on-1 Paramedic Tutoring: $60/hr</li>
                  <li>• Additional practice scenarios</li>
                  <li>• Exam scheduling assistance</li>
                  <li>• Career guidance & mentorship</li>
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
            <p className="text-xl text-gray-600">Get answers about our paramedic prep course</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Is this course right for me if I&apos;ve failed before?</h3>
              <p className="text-gray-600">
                Absolutely! Our intensive format is specifically designed to help students who have struggled with the NREMT-P. 
                We focus on building confidence and understanding rather than just memorization.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Can I take this course if I&apos;m not in Texas?</h3>
              <p className="text-gray-600">
                Yes! We offer live Zoom sessions for students nationwide. Our online format maintains the same intensive, 
                interactive learning experience as our in-person classes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Do you provide study guides?</h3>
              <p className="text-gray-600">
                Yes! All students receive comprehensive study materials, practice packets, and homework assignments 
                designed to reinforce the intensive classroom learning.
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
            Secure Your Paramedic Certification
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            You&apos;ve put in the work to become a paramedic — now secure your certification with the confidence to pass the NREMT. 
            Join successful paramedics who chose ABCEMS for their advanced preparation.
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
            Veteran-owned · Paramedic-founded · Advanced EMS training
          </p>
        </div>
      </section>
    </div>
  );
}
