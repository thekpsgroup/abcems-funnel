import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 bg-white">
      {/* Hero Section */}
      <section className="section-spacing-lg bg-gradient-to-br from-gray-50 to-red-50/30 gradient-overlay">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="h1 text-center text-gray-900 vr-lg leading-tight animate-fade-in-up">
              Choose Your
              <span className="block text-brand-red animate-slide-in-left" style={{ animationDelay: '0.2s' }}>EMS Certification Path</span>
            </h1>
            <p className="body-text text-xl text-gray-600 vr-xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              From EMT-Basic to Paramedic — we have the right course for every stage of your EMS career.
              All courses taught by experienced Texas paramedics.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-spacing bg-white">
        <div className="container-wide">
          <div className="text-center vr-2xl">
            <h2 className="h2 text-gray-900 vr-lg">Our Courses</h2>
            <p className="body-text text-xl text-gray-600">Comprehensive training for EMS professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* EMT-Basic Prep */}
            <div className="card card-elevated overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="relative aspect-ratio-4-3 overflow-hidden">
                <img
                  src="/images/course/course-in-action (2).jpg"
                  alt="EMT-Basic Training"
                  className="responsive-img h-full object-cover group-hover:scale-105 transition-transform duration-300 lazy-img loaded"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    EMT-Basic
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="h3 text-brand-red vr-md">EMT-Basic Prep</h3>
                <p className="text-2xl font-bold text-gray-900 vr-lg">$200</p>
                <p className="body-text text-gray-600 vr-xl">1-day intensive program with live instruction</p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">NREMT Exam Preparation</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">Live Zoom or In-Person</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">Experienced Instructors</span>
                  </div>
                </div>
                <Link
                  href="/courses/emt-prep"
                  className="block w-full btn btn-primary text-center mt-6"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Paramedic Prep */}
            <div className="card card-elevated overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative aspect-ratio-4-3 overflow-hidden">
                <img
                  src="/images/course/course-in-action (3).jpg"
                  alt="Paramedic Training"
                  className="responsive-img h-full object-cover group-hover:scale-105 transition-transform duration-300 lazy-img loaded"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Paramedic
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="h3 text-brand-red vr-md">Paramedic Prep</h3>
                <p className="text-2xl font-bold text-gray-900 vr-lg">$400</p>
                <p className="body-text text-gray-600 vr-xl">2-day intensive scenario-based training</p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">Advanced Life Support</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">Scenario-Based Learning</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">Hands-On Practice</span>
                  </div>
                </div>
                <Link
                  href="/courses/paramedic-prep"
                  className="block w-full btn btn-primary text-center mt-6"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* 1-on-1 Tutoring */}
            <div className="card card-elevated overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative aspect-ratio-4-3 overflow-hidden">
                <img
                  src="/images/course/course-in-action (4).jpg"
                  alt="1-on-1 Tutoring Session"
                  className="responsive-img h-full object-cover group-hover:scale-105 transition-transform duration-300 lazy-img loaded"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    1-on-1
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="h3 text-brand-red vr-md">1-on-1 Tutoring</h3>
                <p className="text-2xl font-bold text-gray-900 vr-lg">$40-60/hr</p>
                <p className="body-text text-gray-600 vr-xl">Personalized support tailored to your needs</p>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">Personalized Learning</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">Flexible Scheduling</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-brand-red rounded-full mr-3"></div>
                    <span className="body-text-sm">Targeted Support</span>
                  </div>
                </div>
                <Link
                  href="/courses/tutoring"
                  className="block w-full btn btn-primary text-center mt-6"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-spacing bg-brand-red text-white">
          <div className="container-standard text-center">
            <h2 className="h2 vr-lg">Ready to Start Your EMS Journey?</h2>
            <p className="body-text text-lg vr-xl opacity-90 max-w-2xl mx-auto">
              Join hundreds of successful EMS professionals who trusted ABCEMS with their NREMT preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link
                href="/auth/signin"
                className="btn btn-cta btn-secondary touch-target w-full sm:w-auto"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="btn btn-cta btn-secondary border-2 border-white touch-target w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white section-spacing-sm">
        <div className="container-wide">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 vr-lg">
                <img
                  src="/logo.jpg"
                  alt="ABCEMS Logo"
                  className="h-12 w-auto rounded-lg shadow-md"
                />
                <div className="text-2xl font-bold text-brand-gold">ABCEMS</div>
              </div>
              <p className="body-text-sm text-gray-400">
                Texas-based EMS training led by experienced paramedics.
              </p>
            </div>
            <div>
              <h3 className="h4 text-white vr-lg">Courses</h3>
              <div className="space-y-3 text-gray-400">
                <Link href="/courses/emt-prep" className="block hover:text-brand-gold transition-colors body-text-sm">EMT-Basic Prep</Link>
                <Link href="/courses/paramedic-prep" className="block hover:text-brand-gold transition-colors body-text-sm">Paramedic Prep</Link>
                <Link href="/courses/tutoring" className="block hover:text-brand-gold transition-colors body-text-sm">1-on-1 Tutoring</Link>
              </div>
            </div>
            <div>
              <h3 className="h4 text-white vr-lg">Company</h3>
              <div className="space-y-3 text-gray-400">
                <Link href="/about" className="block hover:text-brand-gold transition-colors body-text-sm">About</Link>
                <Link href="/instructors" className="block hover:text-brand-gold transition-colors body-text-sm">Instructors</Link>
                <Link href="/contact" className="block hover:text-brand-gold transition-colors body-text-sm">Contact</Link>
              </div>
            </div>
            <div>
              <h3 className="h4 text-white vr-lg">Support</h3>
              <div className="space-y-3 text-gray-400">
                <Link href="/faq" className="block hover:text-brand-gold transition-colors body-text-sm">FAQ</Link>
                <Link href="/testimonials" className="block hover:text-brand-gold transition-colors body-text-sm">Testimonials</Link>
                <div className="body-text-sm">(469) 400-8195</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="body-text-sm">&copy; 2024 ABCEMS Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
