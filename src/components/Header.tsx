"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#8B0000] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-[#8B0000]">ABCEMS</div>
                <div className="text-xs text-gray-600">Solutions</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              Home
            </Link>
            
            {/* Courses Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-[#8B0000] transition-colors"
                onMouseEnter={() => setIsCoursesOpen(true)}
                onMouseLeave={() => setIsCoursesOpen(false)}
              >
                Courses
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {isCoursesOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsCoursesOpen(true)}
                  onMouseLeave={() => setIsCoursesOpen(false)}
                >
                  <Link href="/courses/emt-prep" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#8B0000] transition-colors">
                    EMT Prep
                  </Link>
                  <Link href="/courses/paramedic-prep" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#8B0000] transition-colors">
                    Paramedic Prep
                  </Link>
                  <Link href="/courses/tutoring" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#8B0000] transition-colors">
                    Tutoring
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              About
            </Link>
            <Link href="/instructors" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              Instructors
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#8B0000] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/portal" 
              className="text-gray-700 hover:text-[#8B0000] transition-colors font-medium"
            >
              Login
            </Link>
            <Link 
              href="#courses" 
              className="bg-[#8B0000] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#660000] transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#8B0000] hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-[#8B0000] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4">
                <div className="text-gray-700 font-medium mb-2">Courses</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    href="/courses/emt-prep" 
                    className="block text-gray-600 hover:text-[#8B0000] transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    EMT Prep
                  </Link>
                  <Link 
                    href="/courses/paramedic-prep" 
                    className="block text-gray-600 hover:text-[#8B0000] transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Paramedic Prep
                  </Link>
                  <Link 
                    href="/courses/tutoring" 
                    className="block text-gray-600 hover:text-[#8B0000] transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tutoring
                  </Link>
                </div>
              </div>

              <Link 
                href="/about" 
                className="text-gray-700 hover:text-[#8B0000] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/instructors" 
                className="text-gray-700 hover:text-[#8B0000] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Instructors
              </Link>
              <Link 
                href="/resources" 
                className="text-gray-700 hover:text-[#8B0000] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-[#8B0000] transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="border-t border-gray-200 pt-4 px-4 space-y-3">
                <Link 
                  href="/portal" 
                  className="block text-gray-700 hover:text-[#8B0000] transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="#courses" 
                  className="block bg-[#8B0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#660000] transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enroll Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
