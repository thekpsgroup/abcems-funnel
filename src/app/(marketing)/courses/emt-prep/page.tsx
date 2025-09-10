import Link from "next/link";
import { CheckCircleIcon, ClockIcon, UsersIcon, StarIcon } from "@heroicons/react/24/outline";

export default function EMTBasicPrepPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-red-50/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[#8B0000] text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <StarIcon className="w-4 h-4 mr-2" />
                Most Popular Course
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                EMT-Basic
                <span className="block text-[#8B0000]">Prep Course</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Master the NREMT EMT-Basic examination with our intensive 1-day program.
                Led by experienced Texas paramedics with a proven 95% pass rate.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/auth/signin"
                  className="bg-[#8B0000] text-white px-8 py-4 rounded-lg hover:bg-[#A52A2A] transition-colors font-semibold text-center"
                >
                  Enroll Now - $200
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-[#8B0000] hover:text-[#8B0000] transition-colors font-semibold text-center"
                >
                  Ask Questions
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  1-day intensive
                </div>
                <div className="flex items-center">
                  <UsersIcon className="w-4 h-4 mr-2" />
                  Small class sizes
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  95% pass rate
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/course/course-in-action (2).jpg"
                  alt="EMT-Basic Training Session"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-bold">$200</div>
                  <div className="text-sm opacity-90">Complete Course Package</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">3-Week Live Instruction</h3>
                    <p className="text-gray-600">Interactive sessions with experienced paramedic instructors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Comprehensive Study Guide</h3>
                    <p className="text-gray-600">200+ page study guide covering all NREMT topics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Practice Exams</h3>
                    <p className="text-gray-600">Multiple practice tests with detailed explanations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Homework Packet</h3>
                    <p className="text-gray-600">Weekly assignments to reinforce learning</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Retakes</h3>
                    <p className="text-gray-600">Unlimited retakes until you pass (within 1 year)*</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-gray-600">Direct access to instructors for questions</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Schedule</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Week 1: Foundations</h3>
                    <p className="text-gray-600">Medical terminology, anatomy, patient assessment</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Week 2: Emergency Procedures</h3>
                    <p className="text-gray-600">Airway management, cardiac emergencies, trauma care</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Week 3: Test Preparation</h3>
                    <p className="text-gray-600">Practice exams, test strategies, final review</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Class Schedule</h3>
                  <p className="text-gray-600 mb-2">Monday, Wednesday, Friday</p>
                  <p className="text-gray-600 mb-2">6:00 PM - 9:00 PM CST</p>
                  <p className="text-sm text-gray-500">Available online via Zoom or in-person in DFW area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Student Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;Passed on my first try! The instructors really know how to break down complex topics.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Sarah M.</div>
              <div className="text-sm text-gray-600">EMT-Basic Graduate</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                &ldquo;The practice exams were spot-on. I felt completely prepared for the real test.&rdquo;
              </p>
              <div className="font-semibold text-gray-900">Michael R.</div>
              <div className="text-sm text-gray-600">EMT-Basic Graduate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your EMT Career?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of successful EMT-Basic graduates who trusted ABCEMS with their NREMT preparation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signin"
              className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Enroll Today
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
    </div>
  );
}
