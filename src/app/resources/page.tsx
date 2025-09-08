import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Study Smarter, Not Harder
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              Explore study guides, practice tests, and exam prep tools to help you pass the NREMT.
            </p>
          </div>
        </div>
      </section>

      {/* Study Guides & Handouts */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Study Guides & Handouts</h2>
            <p className="text-xl text-gray-600">Comprehensive materials to support your learning journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4">EMT Study Guide</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive EMT-Basic study materials covering all NREMT exam topics with detailed explanations and examples.
              </p>
              <div className="bg-[#DAA520] text-[#8B0000] px-4 py-2 rounded-lg font-semibold">
                Included in EMT Course
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4">Paramedic Study Guide</h3>
              <p className="text-gray-600 mb-6">
                Advanced paramedic study materials with scenario-based learning and test strategy coaching.
              </p>
              <div className="bg-[#8B0000] text-white px-4 py-2 rounded-lg font-semibold">
                Included in Paramedic Course
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4">Homework Packets</h3>
              <p className="text-gray-600 mb-6">
                Structured homework assignments designed to reinforce learning and prepare you for exam success.
              </p>
              <div className="bg-[#DAA520] text-[#8B0000] px-4 py-2 rounded-lg font-semibold">
                Included in All Courses
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#8B0000] p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Complete Study Package</h3>
            <p className="text-lg text-gray-200 mb-6">
              All students enrolled in our courses receive full study packets and homework assignments to reinforce learning and ensure exam success.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center px-6 py-3 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
            >
              View Course Options
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Tests & Prep Materials */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Practice Tests & Prep Materials</h2>
            <p className="text-xl text-gray-600">Test your knowledge with NREMT-style practice questions</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#8B0000] mb-6">NREMT-Style Practice Questions</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-2">Realistic Exam Format</h4>
                    <p className="text-gray-600">Practice questions mirror the actual NREMT exam structure and difficulty level.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-2">Comprehensive Coverage</h4>
                    <p className="text-gray-600">Questions cover all major topics tested on the EMT and Paramedic NREMT exams.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-2">Detailed Explanations</h4>
                    <p className="text-gray-600">Each question includes thorough explanations to help you understand the reasoning.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#8B0000] mb-2">Progress Tracking</h4>
                    <p className="text-gray-600">Monitor your improvement and identify areas that need additional focus.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-xl font-bold text-[#8B0000] mb-4">Need Additional Practice?</h4>
              <p className="text-gray-600 mb-6">
                Our tutoring sessions provide personalized practice with one-on-one guidance on challenging topics and test-taking strategies.
              </p>
              <Link
                href="/courses/tutoring"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-[#8B0000] rounded-lg hover:bg-[#A52A2A] focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-offset-2 transition-colors"
              >
                Learn About Tutoring
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Official Certification Resources */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Official Certification Resources</h2>
            <p className="text-xl text-gray-600">Trusted external resources to guide you through the official process</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4 text-center">Texas DSHS</h3>
              <p className="text-gray-600 mb-6 text-center">
                Texas Department of State Health Services – EMS Exam Information and certification requirements.
              </p>
              <a
                href="https://dshs.texas.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
              >
                Visit DSHS
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4 text-center">National Registry</h3>
              <p className="text-gray-600 mb-6 text-center">
                National Registry of EMTs (NREMT) – Official exam registration and certification portal.
              </p>
              <a
                href="https://nremt.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 bg-[#DAA520] text-[#8B0000] rounded-lg hover:bg-[#C1950A] transition-colors"
              >
                Visit NREMT
              </a>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#8B0000] mb-4 text-center">Skills Packet</h3>
              <p className="text-gray-600 mb-6 text-center">
                Texas EMS Skills Competency Packet – Official DSHS skills evaluation requirements and guidelines.
              </p>
              <a
                href="#"
                className="block w-full text-center px-4 py-2 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Study Tips for Success</h2>
            <p className="text-xl text-gray-600">Proven strategies to maximize your exam preparation</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-6">Effective Study Strategies</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-1">Study in Short, Focused Blocks</h4>
                    <p className="text-gray-600">Break your study time into 25-30 minute focused sessions with short breaks in between.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#8B0000] text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-1">Use Practice Questions Daily</h4>
                    <p className="text-gray-600">Consistent practice with NREMT-style questions builds familiarity and confidence.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-1">Focus on Scenarios, Not Just Memorization</h4>
                    <p className="text-gray-600">Understand how to apply knowledge in real-world emergency situations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-[#8B0000] text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-1">Ask for Tutoring Help on Weak Areas</h4>
                    <p className="text-gray-600">Don&apos;t struggle alone – get personalized help on challenging topics.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#8B0000] mb-6">Exam Day Preparation</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-1">Get Plenty of Rest</h4>
                    <p className="text-gray-600">A well-rested mind performs better on high-stakes exams.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-1">Eat a Good Breakfast</h4>
                    <p className="text-gray-600">Fuel your brain with a nutritious meal before the exam.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#8B0000] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-1">Arrive Early</h4>
                    <p className="text-gray-600">Give yourself time to settle in and review any last-minute notes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#DAA520] rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B0000] mb-1">Stay Calm and Confident</h4>
                    <p className="text-gray-600">Trust your preparation and approach each question methodically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Put These Resources Into Action?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join our courses to get access to comprehensive study materials and expert instruction.
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
