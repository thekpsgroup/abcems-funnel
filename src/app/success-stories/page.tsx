import Link from "next/link";

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              From Struggle to Success
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              Real students. Real challenges. Real results with ABCEMS.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 1 - The Persistent Paramedic */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">DW</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#8B0000]">The Persistent Paramedic</h2>
                  <p className="text-xl text-gray-600">Deandre Washington</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">The Challenge</h3>
                  <p className="text-red-700">
                    On his 6th attempt at the Paramedic exam, Deandre was feeling stuck and losing confidence. 
                    Despite multiple attempts, he couldn&apos;t break through the barrier to pass the NREMT-P exam.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">The ABCEMS Solution</h3>
                  <p className="text-blue-700">
                    Enrolled in the Paramedic Prep course + tutoring with Captain Hempstead. Received personalized 
                    support, structured study plans, and one-on-one guidance to address specific knowledge gaps.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">The Outcome</h3>
                  <p className="text-green-700">
                    Passed the exam and became a certified paramedic. Now credits ABCEMS with finally helping 
                    him break through after multiple failed attempts.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                &ldquo;I was on my 6th attempt at the paramedic exam. With ABCEMS&apos;s prep course and tutoring, 
                I finally passed. Mr. Hempstead was always available to answer questions and explain things. 
                Money well spent — I recommend this to anyone struggling with the registry.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#8B0000]">Deandre Washington</p>
                  <p className="text-gray-600">Certified Paramedic</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">6th Attempt</p>
                  <p className="text-lg font-bold text-green-600">→ PASSED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2 - The First-Time Passer */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  &ldquo;This course is built to target exactly what&apos;s on the exam and how to approach questions. 
                  I failed twice before, then passed on my first attempt after ABCEMS. Give your money to ABC, not the NREMT.&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#8B0000]">Devin Jarrett</p>
                    <p className="text-gray-600">Certified EMT</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Failed Twice</p>
                    <p className="text-lg font-bold text-green-600">→ First Try PASS</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#8B0000] font-bold text-xl">DJ</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#8B0000]">The First-Time Passer</h2>
                  <p className="text-xl text-gray-600">Devin Jarrett</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">The Challenge</h3>
                  <p className="text-red-700">
                    Had failed the EMT exam twice before joining ABCEMS. Needed a different approach to 
                    understand test-taking strategies and exam content.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">The ABCEMS Solution</h3>
                  <p className="text-blue-700">
                    Took the EMT-Basic Prep course, focused on test-taking strategies and scenario-based learning. 
                    Learned how to approach questions systematically and identify key information.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">The Outcome</h3>
                  <p className="text-green-700">
                    Passed on his first attempt after completing the ABCEMS course. Now understands the 
                    strategic approach needed for NREMT success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3 - The Confidence Builder */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">CC</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#8B0000]">The Confidence Builder</h2>
                  <p className="text-xl text-gray-600">Chris Cricca</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">The Challenge</h3>
                  <p className="text-red-700">
                    Needed a structured program to build confidence and tackle complex paramedic content. 
                    Wanted to feel fully prepared for the National Registry Paramedic exam.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">The ABCEMS Solution</h3>
                  <p className="text-blue-700">
                    Enrolled in prep classes, received clear explanations and focused study plans. 
                    Gained systematic understanding of paramedic protocols and emergency procedures.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">The Outcome</h3>
                  <p className="text-green-700">
                    Passed the National Registry Paramedic exam and now thrives as a certified paramedic. 
                    Feels fully prepared to excel in his EMS career.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                &ldquo;The prep classes were invaluable in building my confidence and skills. Thanks to ABCEMS, 
                I passed the National Registry Paramedic exam and feel fully prepared to excel in my career.&rdquo;
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#8B0000]">Chris Cricca</p>
                  <p className="text-gray-600">Certified Paramedic</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Confidence Built</p>
                  <p className="text-lg font-bold text-green-600">→ Career Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 4 - The Tutoring Advantage */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                  &ldquo;If you want to pass NREMT-P on your first try, this is the method. The tutoring made the 
                  registry exam feel easy. I passed in 110 questions on the first try, nearly 100% confident in every answer.&rdquo;
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#8B0000]">Zyan Nelson</p>
                    <p className="text-gray-600">Certified Paramedic</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">110 Questions</p>
                    <p className="text-lg font-bold text-green-600">→ First Try PASS</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#8B0000] font-bold text-xl">ZN</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#8B0000]">The Tutoring Advantage</h2>
                  <p className="text-xl text-gray-600">Zyan Nelson</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">The Challenge</h3>
                  <p className="text-red-700">
                    Preparing for NREMT-P and overwhelmed by the extensive exam content. Needed personalized 
                    guidance to focus on the most important material and test-taking strategies.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">The ABCEMS Solution</h3>
                  <p className="text-blue-700">
                    Attended multiple tutoring sessions with Captain Hempstead and Jeff Carter. Practiced 
                    scenarios, reviewed homework, and had questions answered in a one-on-one setting.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">The Outcome</h3>
                  <p className="text-green-700">
                    Passed on the first try in 110 questions with nearly 100% confidence in every answer. 
                    The personalized tutoring approach made the exam feel manageable and straightforward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success by the Numbers</h2>
            <p className="text-xl text-gray-600">Real results from real students</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-2">Multiple Attempts</h3>
              <p className="text-gray-600">Students who struggled with multiple failed attempts finally pass with our support</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-2">First-Time Passes</h3>
              <p className="text-gray-600">Students achieve first-time success with our proven methods and strategies</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-2">Personalized Support</h3>
              <p className="text-gray-600">One-on-one tutoring and small class sizes ensure individual attention</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-2">Career Ready</h3>
              <p className="text-gray-600">Students feel confident and prepared to excel in their EMS careers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section - Your Story Next */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">You Could Be Our Next Success Story</h2>
          <p className="text-xl text-gray-200 mb-8">
            Whether it&apos;s your first attempt or your sixth, we&apos;ve helped students at every stage succeed. 
            Your success story starts with taking the first step.
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
