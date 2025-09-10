import Link from "next/link";

const successStories = [
  {
    name: "Sarah Martinez",
    title: "EMT-Basic Graduate",
    story: "After struggling with traditional classroom settings, I discovered ABCEMS. Their 1-day intensive format was perfect for my busy schedule as a nursing assistant. The instructors were incredible - they brought real emergency room experience to every lesson. I passed my NREMT exam on the first try with a 92%! Now I'm working as an EMT for Dallas Fire Department.",
    achievement: "Passed NREMT Exam - 92% Score",
    image: "/images/students/sarah.jpg",
    graduationDate: "March 2024"
  },
  {
    name: "Mike Rodriguez",
    title: "Paramedic Graduate",
    story: "As a former military medic, I thought I knew emergency medicine. ABCEMS showed me how much more there was to learn. The scenario-based training was exceptional - I felt like I was in real emergency situations. The unlimited retakes policy gave me confidence to really challenge myself. I graduated at the top of my class and now work as a flight paramedic.",
    achievement: "Top of Class Graduate - Flight Paramedic",
    image: "/images/students/mike.jpg",
    graduationDate: "January 2024"
  },
  {
    name: "Jessica Chen",
    title: "EMT-Basic Graduate",
    story: "I was terrified of failing my certification exam. ABCEMS changed everything. The small class sizes meant I got personal attention from instructors who genuinely cared about my success. They helped me overcome my test anxiety and taught me study techniques that actually work. Three months after graduation, I got hired by a busy urban ambulance service.",
    achievement: "Overcame Test Anxiety - Hired by Urban Ambulance Service",
    image: "/images/students/jessica.jpg",
    graduationDate: "February 2024"
  },
  {
    name: "David Thompson",
    title: "Firefighter/EMT",
    story: "ABCEMS helped me transition from volunteer firefighter to certified EMT. The course content was current and relevant to real-world firefighting scenarios. The instructors understood the unique challenges firefighters face. Thanks to their comprehensive training, I passed my exam and now serve as the lead EMT for my fire station.",
    achievement: "Fire Station Lead EMT",
    image: "/images/students/david.jpg",
    graduationDate: "April 2024"
  },
  {
    name: "Amanda Wilson",
    title: "Paramedic Student",
    story: "After failing my paramedic exam twice with another program, I was ready to give up. ABCEMS gave me hope again. Their focused approach and experienced instructors helped me identify my weak areas and develop a study plan that worked. I passed my exam on the first attempt with ABCEMS! The difference was night and day.",
    achievement: "Passed Paramedic Exam After Previous Failures",
    image: "/images/students/amanda.jpg",
    graduationDate: "May 2024"
  },
  {
    name: "Carlos Ramirez",
    title: "EMT Graduate",
    story: "Coming from a non-medical background, I was intimidated by the certification process. ABCEMS made it approachable and achievable. The instructors broke down complex concepts into understandable pieces, and the hands-on training prepared me for real emergencies. Six months after graduation, I'm working as an EMT and loving every shift.",
    achievement: "Non-Medical Background to EMT Success",
    image: "/images/students/carlos.jpg",
    graduationDate: "June 2024"
  }
];

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
          <p className="text-xl text-gray-600">
            Celebrating our graduates and their incredible achievements
          </p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.title}</p>
                    <p className="text-xs text-gray-500">Graduated {story.graduationDate}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="bg-[#DAA520] text-[#8B0000] px-3 py-1 rounded-full text-xs font-semibold inline-block">
                    {story.achievement}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">
                  &ldquo;{story.story}&rdquo;
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>ABCEMS Graduate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Real numbers from real success stories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B0000] mb-2">95%</div>
              <div className="text-sm text-gray-600">First-Time Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B0000] mb-2">150+</div>
              <div className="text-sm text-gray-600">Successful Graduates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B0000] mb-2">50+</div>
              <div className="text-sm text-gray-600">EMS Agencies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#8B0000] mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of successful EMS professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="bg-white text-[#8B0000] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Explore Our Courses
            </Link>
            <Link
              href="/auth/signin"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#8B0000] transition-colors font-semibold"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}