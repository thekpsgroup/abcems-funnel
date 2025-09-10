export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-spacing-lg bg-gradient-to-br from-gray-50 to-red-50/30 gradient-overlay">
        <div className="container-standard">
          <div className="text-center">
            <h1 className="h1 text-center text-gray-900 vr-lg animate-fade-in-up">
              Pass the NREMT with Confidence
            </h1>
            <p className="body-text text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Veteran-owned. Built by a paramedic. Train smarter, not harder. Serving DFW.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-spacing">
        <div className="container-standard">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="card card-elevated p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="h3 text-brand-red vr-md">EMT Prep Course</h2>
              <p className="body-text text-gray-700 vr-lg">
                $200 · 1-day live Zoom or in-person. Includes study guide & homework packet. Unlimited retakes until you pass (within 1 year)*
              </p>
            </div>
            <div className="card card-elevated p-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="h3 text-brand-red vr-md">Paramedic Prep Course</h2>
              <p className="body-text text-gray-700 vr-lg">
                $400 · Scenario-based prep with test strategy coaching. Includes homework, unlimited retakes (within 1 year)*
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Discount Section */}
      <section className="section-spacing-sm bg-gray-50">
        <div className="container-standard">
          <div className="text-center">
            <p className="body-text-sm text-gray-600 italic animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              Group/Department: 25% off for 10+ trainees.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}