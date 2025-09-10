import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Study Resources</h1>
          <p className="text-xl text-gray-600">
            Additional materials to support your NREMT preparation
          </p>
        </div>

        <div className="text-center">
          <div className="bg-gray-50 p-12 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-gray-600 mb-8">
              We&apos;re developing comprehensive study resources for our students. 
              Check back soon for practice exams, study guides, and more!
            </p>
            <Link
              href="/courses"
              className="bg-[#8B0000] text-white px-8 py-3 rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              View Current Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}