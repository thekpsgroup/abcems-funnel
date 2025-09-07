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
              Real Stories of
              <span className="block text-[#DAA520]">Student Success</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100 max-w-4xl mx-auto">
              Hear from students who transformed their EMS careers with ABCEMS — 
              <span className="block mt-2 font-semibold">from struggling with multiple attempts to confident first-time passes.</span>
            </p>
            <div className="mt-10">
              <Link
                href="/courses"
                className="rounded-md bg-[#DAA520] px-8 py-4 text-lg font-semibold text-[#8B0000] shadow-lg hover:bg-[#B8860B] transition-colors"
              >
                Join Their Success
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <p className="text-xl text-gray-600">Real testimonials from students who achieved their certification goals</p>
          </div>
          
          <div className="space-y-12">
            {/* Deandre Washington */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                &ldquo;I really ABC EMS SOLUTIONS for all the help with passing my national registry. I was on my 6th attempt and with the help of the test prep course along with the tutoring that was offered I was able to obtain my paramedic! Mr. Hempstead was always readily available to answer questions and explain things so that I&apos;d have better understanding. It was money well spent, and I&apos;d recommend him to anyone struggling with the national registry!&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#8B0000] text-lg">Deandre Washington</div>
                  <div className="text-sm text-gray-600">Paramedic Graduate</div>
                </div>
                <div className="bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  6th Attempt → Success
                </div>
              </div>
            </div>

            {/* Devin Jarrett */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                &ldquo;ABC EMS Solutions is a very worthwhile course. It is built from the ground up to talk specifically about important content that is on the exam. This course also contains tips on how questions are crafted/how to approach questions on the exam. Captain Hempstead is incredibly knowledgeable and is able to easily explain and pass on the information contained in the course. This is not a skill every teacher has. I took the exam 2× before the class and passed on my first attempt after. Give your money to ABC instead of the NREMT.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#8B0000] text-lg">Devin Jarrett</div>
                  <div className="text-sm text-gray-600">Paramedic Graduate</div>
                </div>
                <div className="bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  2 Failed Attempts → First Try Success
                </div>
              </div>
            </div>

            {/* Chris Cricca */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                &ldquo;I am thrilled to share my outstanding experience with ABC EMS Solutions! Their comprehensive and well-structured program was instrumental in helping me pass the National Registry Paramedic exam. From the start, the instructors demonstrated a deep understanding of the material and provided clear, concise explanations of complex concepts. The prep classes were invaluable in building my confidence and skills. I truly appreciate their dedication to student success. Thanks to ABC EMS Solutions, I am now a certified paramedic and feel fully prepared to excel in my career. I highly recommend their program!&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#8B0000] text-lg">Chris Cricca</div>
                  <div className="text-sm text-gray-600">Paramedic Graduate</div>
                </div>
                <div className="bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  First-Time Pass
                </div>
              </div>
            </div>

            {/* Zyan Nelson */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-[#DAA520]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                &ldquo;Man to anyone, who TRULY wants to pass NREMT-P first try and make it feel like you have the answers to the test. I cannot emphasize how important the tutoring session was. Captain Hempstead and Jeff Carter will tell you everything you need to know and more to be successful on the exam as long as you pay attention do the homework and use the resources that they give you. If you put the effort and time in and make the most of every resource the registry exam will feel beyond easy. I went to every tutor&apos;s session texted them endless questions and did even more tutoring which all paid off. Did it in 110 questions first try and was just about 100% confident in the choices I picked whether from seeing it on the homework or hearing it in tutoring. They are the method to pass this exam I couldn&apos;t recommend it enough. Thank you, CPT Hempstead and Jeff Carter.&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#8B0000] text-lg">Zyan Nelson</div>
                  <div className="text-sm text-gray-600">Paramedic Graduate</div>
                </div>
                <div className="bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  110 Questions → First Try
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600">The numbers speak for themselves</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-[#8B0000] mb-2">6th Attempt</div>
              <div className="text-lg text-gray-600 mb-4">Maximum Attempts</div>
              <p className="text-sm text-gray-500">
                Students who have struggled with multiple attempts find success with our comprehensive approach.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-[#8B0000] mb-2">110 Questions</div>
              <div className="text-lg text-gray-600 mb-4">Minimum Pass</div>
              <p className="text-sm text-gray-500">
                Students achieve confident first-time passes with our test-taking strategies and preparation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="text-4xl font-bold text-[#8B0000] mb-2">100%</div>
              <div className="text-lg text-gray-600 mb-4">Confidence Level</div>
              <p className="text-sm text-gray-500">
                Students report feeling completely prepared and confident in their exam choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Success Factors */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes the Difference</h2>
            <p className="text-xl text-gray-600">The ABCEMS approach that leads to success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Test Strategy</h3>
              <p className="text-gray-600">Understanding how questions are crafted and the best approach to answer them.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Personal Tutoring</h3>
              <p className="text-gray-600">One-on-one support with Captain Hempstead and Jeff Carter for personalized guidance.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Comprehensive Resources</h3>
              <p className="text-gray-600">Homework, practice materials, and unlimited access to instructors for questions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Real-World Experience</h3>
              <p className="text-gray-600">Instructors with actual field experience who understand both the test and the job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-[#8B0000]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Whether you&apos;re on your first attempt or your sixth, ABCEMS has the proven methods and dedicated instructors 
            to help you achieve your paramedic certification goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/courses"
              className="bg-[#DAA520] text-[#8B0000] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8860B] transition-colors"
            >
              View Our Courses
            </Link>
            <Link
              href="/courses/tutoring"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#8B0000] transition-colors"
            >
              Get Personal Tutoring
            </Link>
          </div>
          <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-white font-semibold mb-2">Don&apos;t struggle alone</p>
            <p className="text-red-100">
              Call us at <span className="font-semibold text-white">(469) 400-8195</span> to speak with Captain Hempstead 
              and learn how we can help you pass your NREMT exam with confidence.
            </p>
          </div>
          <p className="text-lg text-red-100 mt-8">
            Veteran-owned · Paramedic-founded · Proven results
          </p>
        </div>
      </section>
    </div>
  );
}
