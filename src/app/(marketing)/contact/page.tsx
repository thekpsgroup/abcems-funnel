import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              We&apos;re Here to Help You Succeed
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              Questions about courses, tutoring, or group training? Our team is ready to guide you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact-form"
                className="rounded-md bg-gradient-to-r from-[#DAA520] to-[#B8860B] px-6 py-3 text-lg font-semibold text-[#8B0000] shadow-lg hover:shadow-xl hover:from-[#B8860B] hover:to-[#DAA520] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DAA520] transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach our team</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2 group-hover:text-[#A52A2A] transition-colors">Phone</h3>
              <p className="text-lg text-gray-600 mb-2">Call or text us anytime</p>
              <a 
                href="tel:469-400-8195" 
                className="text-2xl font-bold text-[#8B0000] hover:text-[#A52A2A] transition-colors"
              >
                (469) 400-8195
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#DAA520] to-[#B8860B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2 group-hover:text-[#A52A2A] transition-colors">Email</h3>
              <p className="text-lg text-gray-600 mb-2">Send us a detailed message</p>
              <a 
                href="mailto:info@abcemssolutions.com" 
                className="text-lg font-semibold text-[#8B0000] hover:text-[#A52A2A] transition-colors break-all"
              >
                info@abcemssolutions.com
              </a>
            </div>

            {/* Location */}
            <div className="text-center p-8 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-[#8B0000] to-[#A52A2A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2 group-hover:text-[#A52A2A] transition-colors">Location</h3>
              <p className="text-lg text-gray-600 mb-2">Serving all of Texas</p>
              <p className="text-lg font-semibold text-[#8B0000]">
                Royse City, Texas 75189
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Courses available online via Zoom or in-person
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">We&apos;ll respond within 24 hours</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all duration-200 hover:border-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder="(469) 400-8195"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent transition-all duration-200 hover:border-gray-400 resize-vertical"
                  placeholder="Tell us about your questions, course interests, or how we can help you succeed..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-lg hover:from-[#660000] hover:to-[#8B0000] focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-offset-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* When to Contact Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">When to Contact Us</h2>
            <p className="text-xl text-gray-600">Common reasons students reach out</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Course Questions</h3>
              <p className="text-gray-600">EMT or Paramedic prep details</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Tutoring</h3>
              <p className="text-gray-600">One-on-one personalized support</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Group Training</h3>
              <p className="text-gray-600">Department or group discounts</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8B0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#8B0000] mb-2">Exam Support</h3>
              <p className="text-gray-600">Retake support and prep guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Looking for Quick Answers?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Visit our FAQ page for details on courses, pricing, and retakes.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center px-6 py-3 text-lg font-semibold text-[#8B0000] bg-white border-2 border-[#8B0000] rounded-lg hover:bg-[#8B0000] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-offset-2 transition-colors"
          >
            View FAQ Page
          </Link>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Take the First Step Toward Certification Success</h2>
          <p className="text-xl text-gray-200 mb-8">
            Ready to start your EMS journey? Contact us today to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:469-400-8195"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-[#8B0000] bg-[#DAA520] rounded-lg hover:bg-[#C1950A] focus:outline-none focus:ring-2 focus:ring-[#DAA520] focus:ring-offset-2 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (469) 400-8195
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-[#8B0000] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors"
            >
              Send Message
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
