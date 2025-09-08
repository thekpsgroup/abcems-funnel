import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, StarIcon, UsersIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-[#8B0000]">ABCEMS</div>
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Master Your
              <span className="block text-[#8B0000]">NREMT Exam</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Texas-based, veteran-owned EMS training led by experienced paramedics.
              Proven methods to help you pass with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="bg-[#8B0000] text-white px-8 py-4 rounded-lg hover:bg-[#A52A2A] transition-all duration-300 inline-flex items-center group"
              >
                Explore Courses
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-[#8B0000] hover:text-[#8B0000] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8B0000] mb-2">95%</div>
              <div className="text-gray-600">Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8B0000] mb-2">500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8B0000] mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8B0000] mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ABCEMS?</h2>
            <p className="text-xl text-gray-600">Real paramedics teaching real medicine</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <UsersIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from experienced paramedics with decades of real-world emergency medicine experience.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <CheckCircleIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">95% pass rate with structured learning paths designed specifically for NREMT success.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center mb-6">
                <StarIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Support</h3>
              <p className="text-gray-600">One-on-one mentoring and 24/7 support to ensure you master every concept.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Courses</h2>
            <p className="text-lg text-gray-600">Choose the program that fits your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">EMT-Basic Prep</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">$200</p>
              <p className="text-gray-600 mb-4">3-week intensive program with live instruction</p>
              <Link
                href="/courses/emt-prep"
                className="block w-full bg-[#8B0000] text-white text-center py-2 rounded-lg hover:bg-[#A52A2A] transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">Paramedic Prep</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">$400</p>
              <p className="text-gray-600 mb-4">2-day intensive scenario-based training</p>
              <Link
                href="/courses/paramedic-prep"
                className="block w-full bg-[#8B0000] text-white text-center py-2 rounded-lg hover:bg-[#A52A2A] transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-[#8B0000] mb-2">1-on-1 Tutoring</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">$40-60/hr</p>
              <p className="text-gray-600 mb-4">Personalized support tailored to your needs</p>
              <Link
                href="/courses/tutoring"
                className="block w-full bg-[#8B0000] text-white text-center py-2 rounded-lg hover:bg-[#A52A2A] transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
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

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#8B0000] mb-4">ABCEMS</div>
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