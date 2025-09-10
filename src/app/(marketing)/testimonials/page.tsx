import Link from "next/link";
import { TestimonialCard } from "@/components/TestimonialCard";

const testimonials = [
  {
    text: "ABCEMS was a game-changer for my NREMT exam prep. The instructors were incredibly knowledgeable and the 1-day intensive format fit perfectly with my schedule. I passed on my first try with a 95%! The unlimited retakes policy gave me complete peace of mind.",
    author: "Sarah M., EMT-Basic Graduate",
    rating: 5,
    source: "Google Review"
  },
  {
    text: "As a working paramedic, I needed a course that was efficient and effective. ABCEMS delivered exactly that. The scenario-based training was outstanding and the instructors brought real-world experience to every session. Highly recommend!",
    author: "Mike R., Paramedic Student",
    rating: 5,
    source: "Facebook Review"
  },
  {
    text: "The personal attention and small class sizes made all the difference. I went from struggling with test anxiety to passing confidently. The study materials were comprehensive and the support team was always available. Worth every penny!",
    author: "Jessica L., EMT-Basic Graduate",
    rating: 5,
    source: "Google Review"
  },
  {
    text: "Outstanding program! The instructors are former paramedics with years of experience. They don't just teach you the material - they teach you how to think like an EMT. The 95% pass rate speaks for itself.",
    author: "David K., Fire Department EMT",
    rating: 5,
    source: "Facebook Review"
  },
  {
    text: "I was skeptical about a 1-day course, but it was perfect for my learning style. Intensive, focused, and incredibly effective. The homework and study guides were excellent. I passed with flying colors!",
    author: "Amanda T., EMT Student",
    rating: 5,
    source: "Google Review"
  },
  {
    text: "ABCEMS helped me achieve my dream of becoming a paramedic. The program was challenging but incredibly rewarding. The instructors were patient, knowledgeable, and genuinely cared about our success. Thank you!",
    author: "Carlos M., Paramedic Graduate",
    rating: 5,
    source: "Facebook Review"
  },
  {
    text: "Best investment I've made in my career. The course content was current, relevant, and well-organized. The practice exams were spot-on for the real NREMT. I felt completely prepared walking into my exam.",
    author: "Rachel S., EMT-Basic Graduate",
    rating: 5,
    source: "Google Review"
  },
  {
    text: "The unlimited retakes policy took away all the stress of failing. Knowing I could retake the course for free gave me the confidence to really push myself. ABCEMS stands behind their students 100%.",
    author: "Tyler B., Paramedic Student",
    rating: 5,
    source: "Facebook Review"
  },
  {
    text: "From day one, I knew I made the right choice. The small class sizes meant personalized attention, and the instructors were amazing at explaining complex concepts. Five stars doesn't do this program justice!",
    author: "Lisa P., EMT Graduate",
    rating: 5,
    source: "Google Review"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Student Testimonials</h1>
          <p className="text-xl text-gray-600 mb-8">
            Real stories from real EMS professionals who chose ABCEMS
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2">5.0 out of 5 stars</span>
            </div>
            <span>•</span>
            <span>Based on 150+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard testimonial={testimonial} />
              <div className="mt-4 text-center">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-gray-500">{testimonial.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of successful EMS professionals who chose ABCEMS for their certification journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-[#8B0000] text-white px-8 py-4 rounded-lg hover:bg-[#A52A2A] transition-colors font-semibold"
            >
              View Our Courses
            </Link>
            <Link
              href="/auth/signin"
              className="border-2 border-[#8B0000] text-[#8B0000] px-8 py-4 rounded-lg hover:bg-[#8B0000] hover:text-white transition-colors font-semibold"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}