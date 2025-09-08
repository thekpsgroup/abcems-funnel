import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Real Students. Real Success.
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              Hear from students who passed their EMT and Paramedic exams with ABCEMS.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Authentic testimonials from real ABCEMS students</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Deandre Washington */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">DW</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B0000]">Deandre Washington</h3>
                  <p className="text-gray-600">Paramedic Student</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                &ldquo;I was on my 6th attempt at the paramedic exam. With ABCEMS&apos;s prep course and tutoring, I finally passed. Mr. Hempstead was always available to answer questions and explain things. Money well spent — I recommend this to anyone struggling with the registry.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">6th attempt → PASSED</span>
              </div>
            </div>

            {/* Devin Jarrett */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#8B0000] font-bold text-xl">DJ</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B0000]">Devin Jarrett</h3>
                  <p className="text-gray-600">Paramedic Student</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                &ldquo;This course is built to target exactly what&apos;s on the exam and how to approach questions. I failed twice before, then passed on my first attempt after ABCEMS. Give your money to ABC, not the NREMT.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">Failed twice → PASSED on first try</span>
              </div>
            </div>

            {/* Chris Cricca */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">CC</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B0000]">Chris Cricca</h3>
                  <p className="text-gray-600">Paramedic Student</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                &ldquo;The prep classes were invaluable in building my confidence and skills. Thanks to ABCEMS, I passed the National Registry Paramedic exam and feel fully prepared to excel in my career.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">Confidence built → Career ready</span>
              </div>
            </div>

            {/* Zyan Nelson */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#8B0000] font-bold text-xl">ZN</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#8B0000]">Zyan Nelson</h3>
                  <p className="text-gray-600">Paramedic Student</p>
                </div>
              </div>
              <blockquote className="text-lg text-gray-700 leading-relaxed">
                &ldquo;If you want to pass NREMT-P on your first try, this is the method. The tutoring made the registry exam feel easy. I passed in 110 questions on the first try, nearly 100% confident in every answer.&rdquo;
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">110 questions → First try PASS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Testimonials Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mission is measured by your success. These are just a few of the many stories from students who achieved their EMT and Paramedic certifications with ABCEMS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-2">Real Results</h3>
              <p className="text-gray-600">
                Students who struggled with multiple attempts finally pass with our proven methods and personalized support.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-2">Personal Support</h3>
              <p className="text-gray-600">
                Our instructors are always available to answer questions and provide the guidance you need to succeed.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-2">Proven Methods</h3>
              <p className="text-gray-600">
                Our courses target exactly what&apos;s on the exam and teach you how to approach questions strategically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes ABCEMS Different</h2>
            <p className="text-xl text-gray-600">The factors that lead to student success</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-6">Why Students Choose ABCEMS</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-2">Unlimited Retakes Until You Pass</h4>
                    <p className="text-gray-600">We stand behind our training with unlimited retakes until you pass the NREMT exam.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-2">Real Paramedic Instructors</h4>
                    <p className="text-gray-600">Learn from current and former paramedics who understand what it takes to pass and succeed in EMS.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-2">Targeted Exam Preparation</h4>
                    <p className="text-gray-600">Our courses focus specifically on what&apos;s on the NREMT exam and how to approach questions strategically.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-2">Personalized Support</h4>
                    <p className="text-gray-600">One-on-one tutoring and small class sizes ensure you get the attention and support you need.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#8B0000] to-[#A52A2A] p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Student Success Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Students pass after multiple failed attempts</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>First-time pass rates with our methods</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Confidence building and career preparation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-[#DAA520] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Veteran-owned, paramedic-founded expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join the students who have achieved their EMT and Paramedic certifications with ABCEMS.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/courses"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
            >
              View Courses
            </Link>
            <Link
              href="/courses/tutoring"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#8B0000] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors"
            >
              Book Tutoring
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}