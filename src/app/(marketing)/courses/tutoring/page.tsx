import Link from "next/link";
import { CheckCircleIcon, ClockIcon, UserIcon, StarIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

export default function TutoringPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-red-50/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <AcademicCapIcon className="w-4 h-4 mr-2" />
                Personalized Learning
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                1-on-1
                <span className="block text-[#8B0000]">Tutoring</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Personalized NREMT preparation tailored to your specific needs. Work directly with 
                experienced paramedic instructors to master challenging concepts and build confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-[#8B0000] text-white px-8 py-4 rounded-lg hover:bg-[#A52A2A] transition-colors font-semibold text-center"
                >
                  Schedule Session
                </Link>
                <Link
                  href="/auth/signin"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-[#8B0000] hover:text-[#8B0000] transition-colors font-semibold text-center"
                >
                  Book Online
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  Flexible scheduling
                </div>
                <div className="flex items-center">
                  <UserIcon className="w-4 h-4 mr-2" />
                  1-on-1 attention
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  Custom curriculum
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/course/course-in-action (4).jpg"
                  alt="1-on-1 Tutoring Session"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-bold">$40-60/hr</div>
                  <div className="text-sm opacity-90">Personalized Instruction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutoring Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tutoring Options</h2>
            <p className="text-lg text-gray-600">Choose the format that works best for your learning style</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">EMT-Basic Tutoring</h3>
              <div className="text-3xl font-bold text-[#8B0000] mb-4">$40/hr</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Patient assessment techniques
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Airway management review
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Medical terminology
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Practice exam review
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Test-taking strategies
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-[#8B0000] text-white text-center py-3 rounded-lg hover:bg-[#A52A2A] transition-colors mt-6"
              >
                Book EMT Tutoring
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-[#8B0000] relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#8B0000] text-white px-4 py-1 rounded-full text-xs font-semibold">Most Popular</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Paramedic Tutoring</h3>
              <div className="text-3xl font-bold text-[#8B0000] mb-4">$50/hr</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Advanced cardiac scenarios
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Pharmacology mastery
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Complex medical cases
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Trauma management
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  NREMT strategy coaching
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-[#8B0000] text-white text-center py-3 rounded-lg hover:bg-[#A52A2A] transition-colors mt-6"
              >
                Book Paramedic Tutoring
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Intensive Prep</h3>
              <div className="text-3xl font-bold text-[#8B0000] mb-4">$60/hr</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Last-minute exam prep
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Weak area focus
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Confidence building
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Test anxiety management
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  Same-day scheduling
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full bg-[#8B0000] text-white text-center py-3 rounded-lg hover:bg-[#A52A2A] transition-colors mt-6"
              >
                Book Intensive Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Tutoring Works</h2>
            <p className="text-lg text-gray-600">Simple, flexible, and effective</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Book Session</h3>
              <p className="text-gray-600">Schedule online or call us directly</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">Identify your strengths and weak areas</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Plan</h3>
              <p className="text-gray-600">Personalized study plan created for you</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Master & Pass</h3>
              <p className="text-gray-600">Build confidence and pass your exam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Tutoring Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;The 1-on-1 tutoring was a game-changer. My tutor identified exactly what I was struggling with and helped me master it.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Jennifer L.</div>
              <div className="text-sm text-gray-600">Paramedic Graduate</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Failed the NREMT twice before finding ABCEMS. Three tutoring sessions later, I passed with confidence!&rdquo;
              </p>
              <div className="font-semibold text-gray-900">David K.</div>
              <div className="text-sm text-gray-600">EMT-Basic Graduate</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Tutoring FAQ</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">How long are tutoring sessions?</h3>
              <p className="text-gray-600">Standard sessions are 1-2 hours, but we can customize based on your needs and availability.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Can I schedule sessions online?</h3>
              <p className="text-gray-600">Yes! Use our online booking system or call us directly. We offer both virtual and in-person sessions.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">What if I need to cancel?</h3>
              <p className="text-gray-600">We require 24-hour notice for cancellations. Same-day cancellations may be subject to a fee.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Do you offer package deals?</h3>
              <p className="text-gray-600">Yes! Save money with our 5-session and 10-session packages. Contact us for pricing details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Personalized Success?</h2>
          <p className="text-lg mb-8 opacity-90">
            Get the individual attention you need to master the NREMT and advance your EMS career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/auth/signin"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8B0000] transition-colors"
            >
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
