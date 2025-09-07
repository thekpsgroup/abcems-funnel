export default function Home() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold">Pass the NREMT with Confidence</h1>
        <p>Veteran-owned. Built by a paramedic. Train smarter, not harder. Serving DFW.</p>
      </section>
      <section className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">EMT Prep Course</h2>
          <p className="mt-2">$200 · 3-week live Zoom or in-person. Includes study guide & homework packet. Free retakes until you pass.</p>
        </div>
        <div className="border p-6 rounded-xl">
          <h2 className="text-2xl font-semibold">Paramedic Prep Course</h2>
          <p className="mt-2">$400 · Scenario-based prep with test strategy coaching. Includes homework, unlimited retakes.</p>
        </div>
      </section>
      <section className="mt-8">
        <p className="text-sm italic">Group/Department: 25% off for 10+ trainees.</p>
      </section>
    </main>
  );
}
