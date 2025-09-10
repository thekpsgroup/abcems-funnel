import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="section-spacing-lg bg-gradient-to-br from-gray-50 to-red-50/30 gradient-overlay">
        <div className="container-standard">
          <div className="text-center">
            <h1 className="h1 text-center text-gray-900 vr-lg animate-fade-in-up">
              About ABCEMS
            </h1>
            <p className="body-text text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Veteran-owned EMS training founded by experienced Texas paramedics
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-spacing">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="h2 text-gray-900 vr-lg">Our Mission</h2>
              <p className="body-text text-gray-600 vr-xl">
                To provide exceptional EMS education that prepares students for successful careers in emergency medical services.
                We believe in training smarter, not harder, with proven methods that get results.
              </p>

              <h2 className="h2 text-gray-900 vr-lg">Our Values</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">•</span>
                  <span className="body-text">Excellence in education and student outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">•</span>
                  <span className="body-text">Veteran and military family support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">•</span>
                  <span className="body-text">Real-world experience in every lesson</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">•</span>
                  <span className="body-text">Personalized attention for every student</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-red mr-3 mt-1">•</span>
                  <span className="body-text">Commitment to NREMT success</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="h2 text-gray-900 vr-lg">Why Choose ABCEMS?</h2>
              <div className="space-y-6 animate-stagger">
                <div className="card card-elevated p-6">
                  <h3 className="h4 text-gray-900">95% Pass Rate</h3>
                  <p className="body-text-sm text-gray-600">Our students consistently outperform national averages</p>
                </div>
                <div className="card card-elevated p-6">
                  <h3 className="h4 text-gray-900">Experienced Instructors</h3>
                  <p className="body-text-sm text-gray-600">All instructors are active or retired paramedics</p>
                </div>
                <div className="card card-elevated p-6">
                  <h3 className="h4 text-gray-900">Texas-Based</h3>
                  <p className="body-text-sm text-gray-600">Understanding of local protocols and requirements</p>
                </div>
                <div className="card card-elevated p-6">
                  <h3 className="h4 text-gray-900">Veteran-Owned</h3>
                  <p className="body-text-sm text-gray-600">Supporting those who serve our communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing-sm bg-brand-red">
        <div className="container-standard">
        <div className="text-center">
          <Link
            href="/contact"
            className="btn btn-cta btn-secondary"
          >
            Get in Touch
          </Link>
        </div>
        </div>
      </section>
    </main>
  );
}