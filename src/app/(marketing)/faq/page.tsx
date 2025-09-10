import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about ABCEMS training programs
          </p>
        </div>

        <div className="space-y-8">
          {/* General Questions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How long are the courses?</h3>
                <p className="text-gray-600">Our EMT-Basic Prep is a 1-day intensive program. Paramedic Prep is a 2-day intensive weekend format. 1-on-1 tutoring is flexible and customized to your schedule.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What is your pass rate?</h3>
                <p className="text-gray-600">We maintain a 95% first-time pass rate on the NREMT examination. This is significantly higher than the national average of approximately 70%.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Are the instructors certified?</h3>
                <p className="text-gray-600">All our instructors are certified paramedics with extensive real-world experience. Many have been EMS educators for over 10 years and are recognized leaders in their field.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer online classes?</h3>
                <p className="text-gray-600">Yes! We offer both in-person classes in the DFW area and live online sessions via Zoom. Online students receive the same quality instruction and materials as in-person students.</p>
              </div>
            </div>
          </div>

          {/* Payment & Enrollment */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment & Enrollment</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer payment plans?</h3>
                <p className="text-gray-600">Yes, we offer flexible payment plans for all our programs. Contact us to discuss options that work best for your situation. We also offer group discounts for departments and organizations.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I need to reschedule?</h3>
                <p className="text-gray-600">We understand that schedules change. You can transfer to a future class at no additional cost with at least 48 hours notice. Emergency situations are handled case-by-case.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Is there a refund policy?</h3>
                <p className="text-gray-600">Yes, we offer a comprehensive refund policy. Full refunds are available within 72 hours of enrollment if no materials have been accessed. See our <Link href="/refund-policy" className="text-[#8B0000] hover:underline">Refund Policy</Link> for complete details.</p>
              </div>
            </div>
          </div>

          {/* Course Specific */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Specific</h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What materials do I need?</h3>
                <p className="text-gray-600">All study materials are included in your course fee. This includes our comprehensive study guide, practice exams, and homework packets. You may want to have a current EMT or Paramedic textbook for reference.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I don&apos;t pass the NREMT?</h3>
                <p className="text-gray-600">We offer free retakes of our courses for up to one year. We&apos;ll work with you to identify areas for improvement and provide additional support at no extra cost. Our goal is your success.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I get continuing education credits?</h3>
                <p className="text-gray-600">Our courses are designed for NREMT preparation. For continuing education credits, please contact us to discuss specific requirements and accreditation needs.</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer group training?</h3>
                <p className="text-gray-600">Absolutely! We provide customized training for fire departments, EMS agencies, and healthcare organizations. Group rates start at 25% off for 10 or more students.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="bg-[#8B0000] text-white p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-8 opacity-90">
              Our team is here to help you succeed. Reach out today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:469-400-8195"
                className="bg-white text-[#8B0000] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call (469) 400-8195
              </a>
              <a
                href="mailto:info@abcemssolutions.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8B0000] transition-colors inline-flex items-center justify-center"
              >
                <EnvelopeIcon className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}