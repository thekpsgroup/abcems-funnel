import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, StarIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content - Grows to fill available space */}
      <main className="flex-1">
        {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-red-50/30 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/hero-large-awesome.jpg"
            alt="EMS Training in Action"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Master Your
                <span className="block text-[#8B0000]">NREMT Exam</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Texas-based, veteran-owned EMS training led by experienced paramedics.
                Proven methods to help you pass with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href="/courses"
                  className="bg-[#8B0000] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#A52A2A] transition-all duration-300 inline-flex items-center justify-center group shadow-lg text-sm sm:text-base"
                >
                  Explore Courses
                  <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-[#8B0000] hover:text-[#8B0000] transition-colors shadow-lg text-sm sm:text-base text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border-4 sm:border-8 border-white/50 backdrop-blur-sm max-w-md mx-auto lg:max-w-none">
                <img
                  src="/images/course/course-in-action (1).jpg"
                  alt="EMS Training Session"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating Elements - Hidden on mobile, visible on larger screens */}
              <div className="hidden sm:block absolute -top-4 -right-4 bg-[#8B0000] text-white px-3 sm:px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xs sm:text-sm font-semibold">95% Pass Rate</div>
              </div>
              <div className="hidden sm:block absolute -bottom-4 -left-4 bg-white text-gray-900 px-3 sm:px-4 py-2 rounded-lg shadow-lg border">
                <div className="text-xs sm:text-sm font-semibold">Certified Instructors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#8B0000] mb-1 sm:mb-2">95%</div>
              <div className="text-sm sm:text-base text-gray-600">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#8B0000] mb-1 sm:mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#8B0000] mb-1 sm:mb-2">10+</div>
              <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#8B0000] mb-1 sm:mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose ABCEMS?</h2>
            <p className="text-lg sm:text-xl text-gray-600">Real paramedics teaching real medicine</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <UsersIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Expert Instructors</h3>
              <p className="text-sm sm:text-base text-gray-600">Learn from experienced paramedics with decades of real-world emergency medicine experience.</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <CheckCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Proven Results</h3>
              <p className="text-sm sm:text-base text-gray-600">95% pass rate with structured learning paths designed specifically for NREMT success.</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-gray-100 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <StarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Personalized Support</h3>
              <p className="text-sm sm:text-base text-gray-600">One-on-one mentoring and 24/7 support to ensure you master every concept.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Courses Section */}
      <section id="courses" className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Courses</h2>
            <p className="text-base sm:text-lg text-gray-600">Choose the program that fits your needs</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/images/course/course-in-action (2).jpg"
                  alt="EMT-Basic Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <div className="bg-[#8B0000] text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold">
                    EMT-Basic
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#8B0000] mb-2">EMT-Basic Prep</h3>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">$200</p>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">1-day intensive program with live instruction</p>
                <Link
                  href="/courses/emt-prep"
                  className="block w-full bg-[#8B0000] text-white text-center py-2 rounded-lg hover:bg-[#A52A2A] transition-colors text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/images/course/course-in-action (3).jpg"
                  alt="Paramedic Training"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <div className="bg-[#8B0000] text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold">
                    Paramedic
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#8B0000] mb-2">Paramedic Prep</h3>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">$400</p>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">2-day intensive scenario-based training</p>
                <Link
                  href="/courses/paramedic-prep"
                  className="block w-full bg-[#8B0000] text-white text-center py-2 rounded-lg hover:bg-[#A52A2A] transition-colors text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src="/images/course/course-in-action (4).jpg"
                  alt="1-on-1 Tutoring Session"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <div className="bg-[#8B0000] text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-semibold">
                    1-on-1
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-[#8B0000] mb-2">1-on-1 Tutoring</h3>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">$40-60/hr</p>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Personalized support tailored to your needs</p>
                <Link
                  href="/courses/tutoring"
                  className="block w-full bg-[#8B0000] text-white text-center py-2 rounded-lg hover:bg-[#A52A2A] transition-colors text-sm sm:text-base"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-12 sm:py-16 bg-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Start Your Journey?</h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
            Join hundreds of successful EMS professionals who trusted ABCEMS with their NREMT preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/auth/signin"
              className="bg-white text-[#8B0000] px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8B0000] transition-colors text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Students Say</h2>
            <p className="text-lg sm:text-xl text-gray-600">Real stories from real EMS professionals</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">
                &ldquo;ABCEMS transformed my approach to NREMT preparation. The instructors are phenomenal and the structured approach made all the difference. I passed on my first attempt!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 border-2 border-[#8B0000]/20 shadow-md">
                  <img
                    src="/images/instructors/captain-jake-hempstead.jpg"
                    alt="Captain Jake Hempstead"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Captain Jake Hempstead</div>
                  <div className="text-xs sm:text-sm text-gray-600">EMT-Basic, Austin TX</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">
                &ldquo;The one-on-one tutoring was incredible. They identified my weak areas and helped me master them completely. Worth every penny!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 border-2 border-[#8B0000]/20 shadow-md">
                  <img
                    src="/images/instructors/driver-feo-jeff-carter.jpg"
                    alt="Driver Feo Jeff Carter"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Driver Feo Jeff Carter</div>
                  <div className="text-xs sm:text-sm text-gray-600">Paramedic, Dallas TX</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 italic">
                &ldquo;I was struggling with the psychomotor portion, but ABCEMS made it crystal clear. Their hands-on approach is exactly what I needed.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 border-2 border-[#8B0000]/20 shadow-md">
                  <img
                    src="/images/instructors/lieutenant-brian-collins.jpg"
                    alt="Lieutenant Brian Collins"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Lieutenant Brian Collins</div>
                  <div className="text-xs sm:text-sm text-gray-600">EMT-Basic, Houston TX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-600">Everything you need to know about our programs</p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long are the courses?</h3>
              <p className="text-gray-600">Our EMT-Basic Prep is a 1-day intensive program. Paramedic Prep is a 2-day intensive scenario-based training. 1-on-1 tutoring is flexible and customized to your schedule.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer payment plans?</h3>
              <p className="text-gray-600">Yes, we offer flexible payment plans for all our programs. Contact us to discuss options that work best for your situation.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I don&apos;t pass?</h3>
              <p className="text-gray-600">We offer a 30-day money-back guarantee for our main programs. If you don&apos;t pass, we&apos;ll work with you to identify areas for improvement and provide additional support at no extra cost.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are the instructors certified?</h3>
              <p className="text-gray-600">All our instructors are certified paramedics with extensive real-world experience. Many have been EMS educators for over 10 years and are recognized leaders in their field.</p>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* Footer - Always at bottom */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
                <img
                  src="/logo.jpg"
                  alt="ABCEMS Logo"
                  className="h-10 sm:h-12 w-auto rounded-lg shadow-md"
                />
                <div className="text-xl sm:text-2xl font-bold text-[#8B0000]">ABCEMS</div>
              </div>
              <p className="text-sm sm:text-base text-gray-400">
                Texas-based EMS training led by experienced paramedics.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Courses</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/courses/emt-prep" className="block hover:text-white transition-colors text-sm sm:text-base">EMT-Basic Prep</Link>
                <Link href="/courses/paramedic-prep" className="block hover:text-white transition-colors text-sm sm:text-base">Paramedic Prep</Link>
                <Link href="/courses/tutoring" className="block hover:text-white transition-colors text-sm sm:text-base">1-on-1 Tutoring</Link>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/about" className="block hover:text-white transition-colors text-sm sm:text-base">About</Link>
                <Link href="/instructors" className="block hover:text-white transition-colors text-sm sm:text-base">Instructors</Link>
                <Link href="/contact" className="block hover:text-white transition-colors text-sm sm:text-base">Contact</Link>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h3>
              <div className="space-y-2 text-gray-400">
                <Link href="/faq" className="block hover:text-white transition-colors text-sm sm:text-base">FAQ</Link>
                <Link href="/testimonials" className="block hover:text-white transition-colors text-sm sm:text-base">Testimonials</Link>
                <div className="text-sm">(469) 400-8195</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 ABCEMS Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}