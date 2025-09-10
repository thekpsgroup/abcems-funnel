import Link from "next/link";
import { CheckCircleIcon, ClockIcon, UsersIcon, FireIcon } from "@heroicons/react/24/outline";

export default function ParamedicPrepPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-red-50/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FireIcon className="w-4 h-4 mr-2" />
                Advanced Training
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Paramedic
                <span className="block text-[#8B0000]">Prep Course</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Intensive 2-day scenario-based training designed for paramedic students preparing for the 
                NREMT Paramedic examination. Advanced clinical scenarios and test strategy coaching.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/auth/signin"
                  className="bg-[#8B0000] text-white px-8 py-4 rounded-lg hover:bg-[#A52A2A] transition-colors font-semibold text-center"
                >
                  Enroll Now - $400
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-[#8B0000] hover:text-[#8B0000] transition-colors font-semibold text-center"
                >
                  Schedule Consultation
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <ClockIcon className="w-4 h-4 mr-2" />
                  2-day intensive
                </div>
                <div className="flex items-center">
                  <UsersIcon className="w-4 h-4 mr-2" />
                  Max 8 students
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  Scenario-based
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/course/course-in-action (3).jpg"
                  alt="Paramedic Training Session"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-bold">$400</div>
                  <div className="text-sm opacity-90">2-Day Intensive Program</div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Training Components</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Complex Medical Scenarios</h3>
                    <p className="text-gray-600">Advanced cardiac, respiratory, and neurological emergencies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Trauma Management</h3>
                    <p className="text-gray-600">Multi-system trauma, shock management, and critical interventions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Pharmacology Review</h3>
                    <p className="text-gray-600">Drug calculations, administration routes, and contraindications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Test Strategy Coaching</h3>
                    <p className="text-gray-600">NREMT-specific strategies and question analysis techniques</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unlimited Retakes</h3>
                    <p className="text-gray-600">Repeat the course at no additional cost within 1 year</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2-Day Schedule</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Day 1: Medical Emergencies</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>• 9:00 AM - 12:00 PM: Cardiovascular & Respiratory</p>
                      <p>• 1:00 PM - 4:00 PM: Neurological & Endocrine</p>
                      <p>• 4:00 PM - 6:00 PM: Pharmacology & Calculations</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Day 2: Trauma & Testing</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>• 9:00 AM - 12:00 PM: Multi-system Trauma</p>
                      <p>• 1:00 PM - 3:00 PM: Special Populations</p>
                      <p>• 3:00 PM - 6:00 PM: Practice Exams & Review</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Location Options</h3>
                  <p className="text-gray-600 mb-1">In-person: DFW Metro Area</p>
                  <p className="text-gray-600 mb-2">Virtual: Live interactive sessions</p>
                  <p className="text-sm text-gray-500">Weekend format available upon request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Prerequisites</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">Current paramedic student or recent graduate</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
              <p className="text-gray-600">Clinical rotations completed or equivalent experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Materials</h3>
              <p className="text-gray-600">Access to current paramedic textbook and protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B0000] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Take Your Paramedic Career to the Next Level</h2>
          <p className="text-lg mb-8 opacity-90">
            Advanced scenario-based training that prepares you for real-world emergencies and NREMT success.
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
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
