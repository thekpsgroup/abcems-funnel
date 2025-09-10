"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [coursesTimeout, setCoursesTimeout] = useState<NodeJS.Timeout | null>(null);
  const { status } = useSession();

  const handleBack = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  const isAuthenticated = status === 'authenticated';

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Enhanced dropdown handling with delay
  const handleCoursesMouseEnter = () => {
    if (coursesTimeout) {
      clearTimeout(coursesTimeout);
      setCoursesTimeout(null);
    }
    setIsCoursesOpen(true);
  };

  const handleCoursesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCoursesOpen(false);
    }, 200); // 200ms delay before closing
    setCoursesTimeout(timeout);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isCoursesOpen && !target.closest('.dropdown-menu') && !target.closest('.dropdown-trigger')) {
        setIsCoursesOpen(false);
        if (coursesTimeout) {
          clearTimeout(coursesTimeout);
          setCoursesTimeout(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCoursesOpen, coursesTimeout]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (coursesTimeout) {
        clearTimeout(coursesTimeout);
      }
    };
  }, [coursesTimeout]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Back Button - Only shown when authenticated */}
          {isAuthenticated && (
            <button
              onClick={handleBack}
              className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 hover:text-[#8B0000] hover:bg-gray-100 transition-colors mr-2"
              aria-label="Go back"
              title="Go back to previous page"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
          )}

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="ABCEMS Logo"
                className="h-10 w-auto rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-[#8B0000] group-hover:text-[#A52A2A] transition-colors">ABCEMS</div>
                <div className="text-xs text-gray-600">Solutions</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="nav-link">
              Home
            </Link>

            {/* Courses Dropdown */}
            <div className="relative">
              <button
                className="nav-link dropdown-trigger flex items-center"
                onMouseEnter={handleCoursesMouseEnter}
                onMouseLeave={handleCoursesMouseLeave}
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                aria-expanded={isCoursesOpen}
                aria-haspopup="true"
                aria-label="Courses menu"
              >
                Courses
                <svg className="w-4 h-4 ml-1 transition-transform" style={{ transform: isCoursesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <div
                className={`dropdown-menu ${isCoursesOpen ? 'open' : ''}`}
                onMouseEnter={handleCoursesMouseEnter}
                onMouseLeave={handleCoursesMouseLeave}
                role="menu"
                aria-hidden={!isCoursesOpen}
              >
                <Link href="/courses" className="dropdown-item font-medium border-b border-gray-100" role="menuitem">
                  All Courses
                </Link>
                <Link href="/courses/emt-prep" className="dropdown-item" role="menuitem">
                  <div className="font-medium">EMT-Basic Prep</div>
                  <div className="text-xs text-gray-500 mt-1">$200 • 1-day intensive</div>
                </Link>
                <Link href="/courses/paramedic-prep" className="dropdown-item" role="menuitem">
                  <div className="font-medium">Paramedic Prep</div>
                  <div className="text-xs text-gray-500 mt-1">$400 • 2-day intensive</div>
                </Link>
                <Link href="/courses/tutoring" className="dropdown-item" role="menuitem">
                  <div className="font-medium">1-on-1 Tutoring</div>
                  <div className="text-xs text-gray-500 mt-1">$40-60/hr • Personalized</div>
                </Link>
              </div>
            </div>

            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/instructors" className="nav-link">
              Instructors
            </Link>
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/auth/signin"
              className="text-gray-700 hover:text-brand-red transition-colors font-medium body-text"
            >
              Login
            </Link>
            <Link
              href="#courses"
              className="btn btn-cta btn-primary"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-brand-red hover:bg-gray-100 transition-colors mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
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

        {/* Mobile Menu Backdrop */}
        <div className={`mobile-menu-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(false)} />

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg`}>
          <nav className="flex flex-col py-4">
            <Link
              href="/"
              className="nav-link mx-4 rounded-none border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="px-4 py-2">
              <div className="text-gray-900 font-medium mb-3 text-sm uppercase tracking-wide">Courses</div>
              <div className="space-y-1">
                <Link
                  href="/courses/emt-prep"
                  className="block text-gray-600 hover:text-brand-red transition-colors py-2 px-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  EMT Prep
                </Link>
                <Link
                  href="/courses/paramedic-prep"
                  className="block text-gray-600 hover:text-brand-red transition-colors py-2 px-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Paramedic Prep
                </Link>
                <Link
                  href="/courses/tutoring"
                  className="block text-gray-600 hover:text-brand-red transition-colors py-2 px-2 rounded-lg hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tutoring
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="nav-link mx-4 rounded-none border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/instructors"
              className="nav-link mx-4 rounded-none border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Instructors
            </Link>
            <Link
              href="/resources"
              className="nav-link mx-4 rounded-none border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="nav-link mx-4 rounded-none"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="border-t border-gray-200 mt-4 pt-4 px-4 space-y-3">
              <Link
                href="/auth/signin"
                className="nav-link w-full text-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="#courses"
                className="btn btn-cta btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Enroll Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
