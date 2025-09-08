import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="/logo.jpg"
                  alt="ABCEMS Logo"
                  className="h-10 w-auto rounded-lg shadow-md"
                />
                <span className="text-2xl font-bold text-[#8B0000]">ABCEMS</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-600 hover:text-[#8B0000] transition-colors">About</Link>
              <Link href="/courses" className="text-gray-600 hover:text-[#8B0000] transition-colors">Courses</Link>
              <Link href="/instructors" className="text-gray-600 hover:text-[#8B0000] transition-colors">Instructors</Link>
              <Link href="/contact" className="text-gray-600 hover:text-[#8B0000] transition-colors">Contact</Link>
            </div>
            <Link
              href="/auth/signin"
              className="bg-[#8B0000] text-white px-6 py-2 rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-50 to-red-50/30 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Choose Your
                <span className="block text-[#8B0000]">EMS Certification Path</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From EMT-Basic to Paramedic — we have the right course for every stage of your EMS career.
                All courses taught by experienced Texas paramedics.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h2>
              <p className="text-xl text-gray-600">Comprehensive training for EMS professionals</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* EMT-Basic Prep */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/course/course-in-action (2).jpg"
                    alt="EMT-Basic Training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      EMT-Basic
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">EMT-Basic Prep</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-4">$200</p>
                  <p className="text-gray-600 mb-4">3-week intensive program with live instruction</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      NREMT Exam Preparation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      Live Zoom or In-Person
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      Experienced Instructors
                    </div>
                  </div>
                  <Link
                    href="/courses/emt-prep"
                    className="block w-full bg-[#8B0000] text-white text-center py-3 rounded-lg hover:bg-[#A52A2A] transition-colors mt-4"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* Paramedic Prep */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/course/course-in-action (3).jpg"
                    alt="Paramedic Training"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Paramedic
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Paramedic Prep</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-4">$400</p>
                  <p className="text-gray-600 mb-4">2-day intensive scenario-based training</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      Advanced Life Support
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      Scenario-Based Learning
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      Hands-On Practice
                    </div>
                  </div>
                  <Link
                    href="/courses/paramedic-prep"
                    className="block w-full bg-[#8B0000] text-white text-center py-3 rounded-lg hover:bg-[#A52A2A] transition-colors mt-4"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              {/* 1-on-1 Tutoring */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/course/course-in-action (4).jpg"
                    alt="1-on-1 Tutoring Session"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      1-on-1
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#8B0000] mb-2">1-on-1 Tutoring</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-4">$40-60/hr</p>
                  <p className="text-gray-600 mb-4">Personalized support tailored to your needs</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      Personalized Learning
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      Flexible Scheduling
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#8B0000] rounded-full mr-2"></div>
                      Targeted Support
                    </div>
                  </div>
                  <Link
                    href="/courses/tutoring"
                    className="block w-full bg-[#8B0000] text-white text-center py-3 rounded-lg hover:bg-[#A52A2A] transition-colors mt-4"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#8B0000] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your EMS Journey?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of successful EMS professionals who trusted ABCEMS with their NREMT preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signin"
                className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8B0000] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.jpg"
                  alt="ABCEMS Logo"
                  className="h-12 w-auto rounded-lg shadow-md"
                />
                <div className="text-2xl font-bold text-[#8B0000]">ABCEMS</div>
              </div>
              <p className="text-gray-400">
                Texas-based EMS training led by experienced paramedics.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Courses</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/courses/emt-prep" className="block hover:text-white transition-colors">EMT-Basic Prep</Link>
                <Link href="/courses/paramedic-prep" className="block hover:text-white transition-colors">Paramedic Prep</Link>
                <Link href="/courses/tutoring" className="block hover:text-white transition-colors">1-on-1 Tutoring</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/about" className="block hover:text-white transition-colors">About</Link>
                <Link href="/instructors" className="block hover:text-white transition-colors">Instructors</Link>
                <Link href="/contact" className="block hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/faq" className="block hover:text-white transition-colors">FAQ</Link>
                <Link href="/testimonials" className="block hover:text-white transition-colors">Testimonials</Link>
                <div className="text-sm">(469) 400-8195</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ABCEMS Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
