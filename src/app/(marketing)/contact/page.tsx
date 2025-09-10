import Link from "next/link";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact ABCEMS</h1>
          <p className="text-xl text-gray-600">
            Ready to start your EMS training journey? We&apos;re here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">(469) 400-8195</p>
                  <p className="text-sm text-gray-500">Monday - Friday, 9:00 AM - 6:00 PM CST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@abcemssolutions.com</p>
                  <p className="text-sm text-gray-500">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service Area</h3>
                  <p className="text-gray-600">Dallas-Fort Worth Metroplex</p>
                  <p className="text-sm text-gray-500">Online courses available nationwide</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/courses" className="block text-[#8B0000] hover:underline">View All Courses</Link>
                <Link href="/instructors" className="block text-[#8B0000] hover:underline">Meet Our Instructors</Link>
                <Link href="/faq" className="block text-[#8B0000] hover:underline">Frequently Asked Questions</Link>
                <Link href="/refund-policy" className="block text-[#8B0000] hover:underline">Refund Policy</Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course Interest
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent">
                  <option>Select a course</option>
                  <option>EMT-Basic Prep ($200)</option>
                  <option>Paramedic Prep ($400)</option>
                  <option>1-on-1 Tutoring ($40-60/hr)</option>
                  <option>Group Training</option>
                  <option>Just browsing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="Tell us about your goals, timeline, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B0000] text-white py-4 rounded-lg hover:bg-[#A52A2A] transition-colors font-semibold"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-500 text-center">
                We&apos;ll respond within 24 hours. For urgent questions, please call us directly.
              </p>
            </form>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-20 text-center">
          <div className="bg-[#8B0000]/10 border border-[#8B0000]/20 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Immediate Assistance?</h3>
            <p className="text-gray-600 mb-4">
              For urgent questions about upcoming classes or enrollment deadlines:
            </p>
            <a
              href="tel:469-400-8195"
              className="inline-flex items-center bg-[#8B0000] text-white px-6 py-3 rounded-lg hover:bg-[#A52A2A] transition-colors font-semibold"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              Call (469) 400-8195
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}