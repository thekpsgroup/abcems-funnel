import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Row - Quick Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-[#DAA520] mb-4">Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/emt-prep" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  EMT Prep
                </Link>
              </li>
              <li>
                <Link href="/courses/paramedic-prep" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Paramedic Prep
                </Link>
              </li>
              <li>
                <Link href="/courses/tutoring" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Tutoring
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#DAA520] mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#DAA520] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Study Guides
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#DAA520] mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-gray-400 hover:text-[#DAA520] transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Row - Legal & Business Info */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Veteran-owned, paramedic-founded, Texas-based EMS training.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a 
                href="tel:469-400-8195" 
                className="text-[#DAA520] hover:text-[#B8860B] transition-colors font-semibold"
              >
                Phone: (469) 400-8195
              </a>
              <a 
                href="mailto:info@abcemssolutions.com" 
                className="text-[#DAA520] hover:text-[#B8860B] transition-colors font-semibold"
              >
                Email: info@abcemssolutions.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Branding & Contact */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.jpg"
                  alt="ABCEMS Logo"
                  className="h-8 w-auto rounded-lg shadow-md"
                />
                <div>
                  <div className="text-lg font-bold text-[#DAA520]">ABCEMS Solutions</div>
                  <div className="text-xs text-gray-400">LLC</div>
                </div>
              </div>
              
              {/* Optional Badges */}
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                  Veteran-Owned
                </div>
                <div className="bg-gradient-to-r from-[#DAA520] to-[#B8860B] text-[#8B0000] px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                  NREMT Prep
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500">
                Copyright © 2025 ABCEMS Solutions LLC. All rights reserved.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Train Smarter, Not Harder
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-gray-800 pt-6 mt-8">
            <div className="text-center">
              <p className="text-xs text-gray-500 leading-relaxed">
                <span className="text-[#DAA520]">*</span> As long as certain conditions are met, all homework must be completed,
                and you must be fully engaged in the program in order to qualify for the unlimited retakes program.
                Unlimited retakes are available within 1 year of course completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
