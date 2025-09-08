import Link from "next/link";
import Image from "next/image";

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <Image
          src="/images/hero/hero-large-awesome.jpg"
          alt="ABCEMS Training in Action"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Learn From Real Paramedics
              <span className="block text-[#DAA520]">Who&apos;ve Been There</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100 max-w-4xl mx-auto">
              Our instructors combine field expertise and teaching experience to get you exam-ready and confident.
            </p>
            <div className="mt-10">
              <Link
                href="#instructors"
                className="rounded-md bg-[#DAA520] px-8 py-4 text-lg font-semibold text-[#8B0000] shadow-lg hover:bg-[#B8860B] transition-colors"
              >
                Meet Our Instructors
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section id="instructors" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Instructors</h2>
            <p className="text-xl text-gray-600">Real paramedics with real field experience</p>
          </div>
          
          <div className="space-y-16">
            {/* Captain Jake Hempstead */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                    <Image
                      src="/images/instructors/captain-jake-hempstead.jpg"
                      alt="Captain Jake Hempstead"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#8B0000] mb-2">Captain Jake Hempstead</h3>
                    <p className="text-gray-600 mb-4">Founder & Lead Instructor</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">Veteran</span>
                      <span className="bg-[#DAA520] text-[#8B0000] px-3 py-1 rounded-full text-sm font-semibold">Paramedic</span>
                      <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">Captain</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-[#8B0000] mb-6">Captain Jake Hempstead</h3>
                <div className="space-y-4 text-lg text-gray-600 mb-8">
                  <p>
                    Veteran, paramedic, and EMS instructor based in Texas. Captain Jake Hempstead founded ABCEMS to help students 
                    pass the NREMT with confidence using real-world field experience and proven prep strategies.
                  </p>
                  <p>
                    With decades of experience in emergency medical services, Captain Hempstead brings both the technical 
                    expertise and the teaching skills needed to prepare students for success in their EMS careers.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-[#8B0000] mb-4">Teaching Strengths</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Scenario-based teaching with real-world applications
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Test-smart strategies and exam preparation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Clear real-world application of concepts
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Student-centered approach with personalized support
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lieutenant Brian Collins */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                    <Image
                      src="/images/instructors/lieutenant-brian-collins.jpg"
                      alt="Lieutenant Brian Collins"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#8B0000] mb-2">Lieutenant Brian Collins</h3>
                    <p className="text-gray-600 mb-4">Instructor</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">Paramedic</span>
                      <span className="bg-[#DAA520] text-[#8B0000] px-3 py-1 rounded-full text-sm font-semibold">Lieutenant</span>
                      <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">Instructor</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-bold text-[#8B0000] mb-6">Lieutenant Brian Collins</h3>
                <div className="space-y-4 text-lg text-gray-600 mb-8">
                  <p>
                    Experienced paramedic and instructor who brings real-world field experience to the classroom. 
                    Lieutenant Collins specializes in helping students understand complex EMS concepts through practical application.
                  </p>
                  <p>
                    Known for his systematic approach to teaching and attention to detail, Lieutenant Collins ensures 
                    students master both the theoretical knowledge and practical skills needed for EMS success.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-[#8B0000] mb-4">Teaching Strengths</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Systematic approach to complex EMS concepts
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Attention to detail and precision in instruction
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Practical application of theoretical knowledge
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Real-world field experience and leadership
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Driver/FEO Jeff Carter */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#8B0000] mb-6">Driver/FEO Jeff Carter</h3>
                <div className="space-y-4 text-lg text-gray-600 mb-8">
                  <p>
                    Experienced instructor and tutor who works directly with students to build confidence and understanding. 
                    Jeff brings a hands-on approach to teaching that helps students master complex EMS concepts.
                  </p>
                  <p>
                    Known for his approachable teaching style and deep content knowledge, Jeff specializes in helping 
                    students find confidence through targeted tutoring support and personalized instruction.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-[#8B0000] mb-4">Teaching Strengths</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Deep content knowledge across all EMS topics
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Approachable teaching style that builds rapport
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Helps students find confidence through targeted support
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Hands-on instruction with real-world scenarios
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                    <Image
                      src="/images/instructors/driver-feo-jeff-carter.jpg"
                      alt="Driver/FEO Jeff Carter"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#8B0000] mb-2">Driver/FEO Jeff Carter</h3>
                    <p className="text-gray-600 mb-4">Instructor & Tutor</p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">Paramedic</span>
                      <span className="bg-[#DAA520] text-[#8B0000] px-3 py-1 rounded-full text-sm font-semibold">Driver/FEO</span>
                      <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">Tutor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course in Action */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Training in Action</h2>
            <p className="text-xl text-gray-600">Real-world EMS training with hands-on experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/course/course-in-action.jpg"
                  alt="ABCEMS Course in Action"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Hands-On Learning</h3>
              <p className="text-gray-600">
                Students engage in real-world scenarios and practical exercises that prepare them for actual emergency situations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/course/students-learning.jpg"
                  alt="Students Learning EMS Skills"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Expert Instruction</h3>
              <p className="text-gray-600">
                Our experienced instructors provide personalized guidance and real-world insights that go beyond textbook learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teaching Philosophy</h2>
            <p className="text-xl text-gray-600">The ABCEMS approach to EMS education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Scenario-Based Learning</h3>
              <p className="text-gray-600">
                Real-world scenarios and case studies that prepare you for actual emergency situations, not just test questions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Clarity Over Clutter</h3>
              <p className="text-gray-600">
                Clear, focused instruction that cuts through confusion and helps you understand the essential concepts.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Confidence Over Memorization</h3>
              <p className="text-gray-600">
                Teaching the &ldquo;why&rdquo; and &ldquo;how&rdquo; not just the &ldquo;what&rdquo; — building true understanding and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Trust Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Students Trust Us</h2>
            <p className="text-xl text-gray-600">The credibility that comes from real experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Veteran-Led</h3>
              <p className="text-gray-600">Paramedic-founded credibility with military precision and dedication to excellence.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Real Emergency Experience</h3>
              <p className="text-gray-600">Hands-on instruction from educators who have responded to real emergencies in the field.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Proven Instructor Support</h3>
              <p className="text-gray-600">Testimonials that specifically mention instructor support and availability for student questions.</p>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Student Testimonial</h3>
              <p className="text-lg text-gray-700 italic mb-4">
                &ldquo;Captain Hempstead and Jeff Carter will tell you everything you need to know and more to be successful on the exam as long as you pay attention do the homework and use the resources that they give you.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000]">— Zyan Nelson, Paramedic Graduate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-[#8B0000]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Train With Real Paramedics?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Learn from instructors who know EMS from the ground up — with real field experience, 
            proven teaching methods, and a commitment to your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/courses"
              className="bg-[#DAA520] text-[#8B0000] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8860B] transition-colors"
            >
              Enroll in a Course
            </Link>
            <Link
              href="/courses/tutoring"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#8B0000] transition-colors"
            >
              Book a Tutoring Session
            </Link>
          </div>
          <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-white font-semibold mb-2">Speak with an instructor today</p>
            <p className="text-red-100">
              Call us at <span className="font-semibold text-white">(469) 400-8195</span> to learn more about our courses 
              and how our experienced instructors can help you achieve your EMS certification goals.
            </p>
          </div>
          <p className="text-lg text-red-100 mt-8">
            Veteran-owned · Paramedic-founded · Real field experience
          </p>
        </div>
      </section>
    </div>
  );
}
