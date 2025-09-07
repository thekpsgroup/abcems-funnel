import Link from "next/link";

export default function TutoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              One-on-One EMS Tutoring
              <span className="block text-[#DAA520]">That Gets Results</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-red-100 max-w-4xl mx-auto">
              Personalized tutoring sessions with experienced paramedic instructors — 
              <span className="block mt-2 font-semibold">flexible, focused, and built around your needs.</span>
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Link
                href="#booking"
                className="rounded-md bg-[#DAA520] px-8 py-4 text-lg font-semibold text-[#8B0000] shadow-lg hover:bg-[#B8860B] transition-colors"
              >
                Book a Session
              </Link>
              <Link
                href="#contact"
                className="rounded-md border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#8B0000] transition-colors"
              >
                Contact an Instructor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Personalized Learning Support</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-6">
                Our tutoring services are designed for students who need extra help, are retaking the exam, 
                or just want deeper confidence in certain subjects. Whether you&apos;re struggling with specific topics 
                or want to maximize your chances of passing, we&apos;re here to help.
              </p>
              <p className="text-lg text-gray-600">
                Our experienced paramedic instructors provide <span className="font-semibold text-[#8B0000]">customized support</span> 
                that focuses on your weak spots, answers your questions, and teaches you the 
                <span className="font-semibold text-[#8B0000]"> &ldquo;why&rdquo; behind EMS scenarios</span> — 
                not just memorization, but true understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring Options & Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tutoring Options & Pricing</h2>
            <p className="text-xl text-gray-600">Clear, upfront pricing with flexible scheduling</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">EMT Tutoring</h3>
              <div className="text-4xl font-bold text-[#8B0000] mb-6">$40/hr</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li>• One-on-one personalized sessions</li>
                <li>• Focus on weak areas and exam prep</li>
                <li>• EMT-level scenarios and practice</li>
                <li>• Flexible scheduling</li>
                <li>• Zoom or in-person options</li>
              </ul>
              <Link
                href="#booking"
                className="inline-block bg-[#8B0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#660000] transition-colors"
              >
                Book EMT Session
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-[#DAA520]">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#8B0000]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#8B0000] mb-4">Paramedic Tutoring</h3>
              <div className="text-4xl font-bold text-[#8B0000] mb-6">$60/hr</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li>• Advanced paramedic-level instruction</li>
                <li>• Complex scenarios and case studies</li>
                <li>• Cardiology, pharmacology, and advanced topics</li>
                <li>• NREMT-P exam strategy</li>
                <li>• Zoom or in-person options</li>
              </ul>
              <Link
                href="#booking"
                className="inline-block bg-[#DAA520] text-[#8B0000] px-6 py-3 rounded-lg font-semibold hover:bg-[#B8860B] transition-colors"
              >
                Book Paramedic Session
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Flexible Options</h3>
              <p className="text-gray-600 mb-4">
                Sessions available via Zoom or in-person (if local). Bulk session packages available on request for students who want ongoing support.
              </p>
              <p className="text-sm text-gray-500">
                All sessions are led by experienced paramedic instructors with real-world field experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Tutoring Works */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Tutoring Works</h2>
            <p className="text-xl text-gray-600">Simple, straightforward process to get you the help you need</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Choose Your Focus</h3>
              <p className="text-gray-600">
                Select EMT or Paramedic tutoring based on your certification level and specific needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Schedule Your Time</h3>
              <p className="text-gray-600">
                Book a time that works for you with flexible hours available to fit your schedule.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-4">Get Personal Support</h3>
              <p className="text-gray-600">
                Work directly with an instructor on exam prep, scenarios, or your specific weak areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tutoring Helps */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Tutoring Helps</h2>
            <p className="text-xl text-gray-600">The benefits of personalized one-on-one instruction</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Break Down Complex Concepts</h3>
              <p className="text-gray-600 text-sm">
                Complex EMS concepts broken down into simple, understandable steps.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Direct Feedback</h3>
              <p className="text-gray-600 text-sm">
                Immediate feedback from real paramedic instructors with field experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Confidence Boost</h3>
              <p className="text-gray-600 text-sm">
                Build confidence before NREMT testing with personalized support.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Proven Success</h3>
              <p className="text-gray-600 text-sm">
                Track record of students who passed after receiving tutoring support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tutoring Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from students who got the help they needed</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
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
              <p className="text-gray-700 mb-4 italic text-lg">
                &ldquo;After just two tutoring sessions, I finally understood cardiology and passed the exam. 
                The one-on-one attention made all the difference.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000]">Alex R.</div>
              <div className="text-sm text-gray-600">EMT Graduate, Dallas</div>
            </div>

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
              <p className="text-gray-700 mb-4 italic text-lg">
                &ldquo;The one-on-one support gave me the confidence I couldn&apos;t get from just studying alone. 
                My instructor helped me understand the &apos;why&apos; behind each scenario.&rdquo;
              </p>
              <div className="font-semibold text-[#8B0000]">Maria S.</div>
              <div className="text-sm text-gray-600">Paramedic Graduate, Fort Worth</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers about our tutoring services</p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">How do I book a session?</h3>
              <p className="text-gray-600">
                Simply call us at (469) 400-8195 or use our online booking system. We&apos;ll work with you to find a time that fits your schedule.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Can I combine tutoring with a prep course?</h3>
              <p className="text-gray-600">
                Absolutely! Many students take our prep courses and add tutoring sessions for extra support in specific areas where they need help.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#8B0000] mb-3">Is tutoring available outside of Texas?</h3>
              <p className="text-gray-600">
                Yes! We offer Zoom tutoring sessions for students nationwide. Our online format maintains the same personalized, one-on-one experience.
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
      <section id="booking" className="py-20 bg-[#8B0000]">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get the Personal Support You Need to Pass
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don&apos;t struggle alone with difficult concepts. Our experienced paramedic instructors are here to provide 
            the personalized support you need to succeed on your NREMT exam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="tel:469-400-8195"
              className="bg-[#DAA520] text-[#8B0000] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8860B] transition-colors"
            >
              Book a Tutoring Session
            </Link>
            <Link
              href="#contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#8B0000] transition-colors"
            >
              Contact an Instructor
            </Link>
          </div>
          <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg text-white font-semibold mb-2">Ready to get started?</p>
            <p className="text-red-100">
              Call us directly at <span className="font-semibold text-white">(469) 400-8195</span> for immediate scheduling 
              or to discuss your specific tutoring needs.
            </p>
          </div>
          <p className="text-lg text-red-100 mt-8">
            Veteran-owned · Paramedic-founded · Personalized EMS training
          </p>
        </div>
      </section>
    </div>
  );
}
