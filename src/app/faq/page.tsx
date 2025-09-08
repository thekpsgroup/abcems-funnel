"use client";

import { useState } from "react";
import Link from "next/link";


const faqSections = {
  general: [
    {
      question: "Do you serve students outside of Texas?",
      answer: "Yes. While we're based in Royse City, Texas, our live Zoom prep courses and tutoring are available to students across Texas and beyond. We've helped students from multiple states pass their NREMT exams."
    },
    {
      question: "Is ABCEMS veteran-owned?",
      answer: "Yes. ABCEMS is a Texas-based, veteran-owned company founded by career paramedics. Our founder, Captain Jake Hempstead, brings both military service and extensive EMS field experience to our training programs."
    },
    {
      question: "What makes ABCEMS different from other prep courses?",
      answer: "We're founded by real paramedics who've been in the field. Our instructors are current or former EMS professionals who understand what it takes to pass the NREMT and succeed in EMS careers. We offer unlimited retakes until you pass, and our small class sizes ensure personalized attention."
    }
  ],
  courses: [
    {
      question: "How long is the EMT Prep course?",
      answer: "Our EMT-Basic prep runs for three weeks, including live instruction and assignments. The course includes comprehensive study materials, homework packets, and NREMT-style practice questions to prepare you thoroughly."
    },
    {
      question: "How long is the Paramedic Prep course?",
      answer: "Our Paramedic prep is a two-day intensive program (8 hours per day). This scenario-based course focuses on advanced test strategies and confidence-building techniques specifically designed for paramedic-level exams."
    },
    {
      question: "Are the courses online or in-person?",
      answer: "Both. Students may attend via live Zoom sessions or join in-person sessions in Texas (location varies). We understand that flexibility is important, so we offer both options to accommodate different learning preferences and schedules."
    },
    {
      question: "What's included in the course materials?",
      answer: "Both courses include comprehensive study guides, homework packets, and NREMT-style practice questions. Our materials are designed by experienced paramedics and updated regularly to reflect current exam standards."
    }
  ],
  tutoring: [
    {
      question: "What is the cost of tutoring?",
      answer: "EMT tutoring is $40/hr and Paramedic tutoring is $60/hr. Our tutoring sessions are one-on-one and customized to your specific needs and learning style."
    },
    {
      question: "How does tutoring work?",
      answer: "Tutoring is one-on-one, customized to your needs, and available by Zoom or in person. We'll assess your current knowledge, identify areas for improvement, and create a personalized study plan to help you succeed."
    },
    {
      question: "When is tutoring available?",
      answer: "Tutoring sessions are scheduled based on your availability and our instructors' schedules. We offer flexible scheduling including evenings and weekends to accommodate working students."
    },
    {
      question: "Can I get tutoring if I'm not enrolled in a course?",
      answer: "Yes. Tutoring is available as a standalone service for students who need focused help on specific topics or want additional support beyond our group courses."
    }
  ],
  examPrep: [
    {
      question: "What if I fail the NREMT exam?",
      answer: "Many of our students come to us after failed attempts. We provide structured prep and tutoring designed to help you pass on your next try. Our instructors understand the stress of retaking exams and will work with you to build confidence and address specific weaknesses."
    },
    {
      question: "Do you provide study guides and practice tests?",
      answer: "Yes. Both courses include study materials, homework, and NREMT-style practice questions. Our practice tests are designed to mirror the actual exam format and difficulty level, giving you realistic preparation."
    },
    {
      question: "How do you help with test anxiety?",
      answer: "Our instructors understand that test anxiety is common with high-stakes exams like the NREMT. We incorporate confidence-building techniques, stress management strategies, and plenty of practice to help you feel prepared and confident on exam day."
    },
    {
      question: "What's your pass rate?",
      answer: "While we don't publish specific statistics, we're proud of our track record of helping students pass the NREMT. Our unlimited retake policy until you pass demonstrates our commitment to your success."
    }
  ],
  enrollment: [
    {
      question: "How do I enroll?",
      answer: "You can enroll directly through our course pages using our secure payment system, or contact us at (469) 400-8195 for assistance. We're happy to answer questions and help you choose the right course for your needs."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes. We offer a 25% discount for groups of 10 or more people enrolling together. This is popular with fire departments and other organizations sending multiple students for training."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards through our secure Stripe payment system. Payment is required at the time of enrollment to secure your spot in the course."
    },
    {
      question: "Do you offer refunds?",
      answer: "Please see our Refund Policy page for details. We want you to be completely satisfied with your training experience and will work with you to resolve any concerns."
    },
    {
      question: "Can I reschedule my course?",
      answer: "We understand that schedules can change. Contact us as soon as possible if you need to reschedule, and we'll work with you to find an alternative date that works for your schedule."
    }
  ]
};

export default function FAQPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionKey: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const toggleItem = (itemKey: string) => {
    setOpenItems(prev => ({
      ...prev,
      [itemKey]: !prev[itemKey]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
              Find quick answers about our courses, tutoring, and exam prep support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          {/* General Questions */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection('general')}
              className="w-full text-left flex items-center justify-between p-6 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              <h2 className="text-2xl font-bold">General Questions</h2>
              <svg
                className={`w-6 h-6 transform transition-transform ${openSections.general ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.general && (
              <div className="mt-4 space-y-4">
                {faqSections.general.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(`general-${index}`)}
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-[#8B0000] pr-4">{item.question}</h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ${openItems[`general-${index}`] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openItems[`general-${index}`] && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Course Questions */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection('courses')}
              className="w-full text-left flex items-center justify-between p-6 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              <h2 className="text-2xl font-bold">Course Questions</h2>
              <svg
                className={`w-6 h-6 transform transition-transform ${openSections.courses ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.courses && (
              <div className="mt-4 space-y-4">
                {faqSections.courses.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(`courses-${index}`)}
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-[#8B0000] pr-4">{item.question}</h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ${openItems[`courses-${index}`] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openItems[`courses-${index}`] && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tutoring Questions */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection('tutoring')}
              className="w-full text-left flex items-center justify-between p-6 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              <h2 className="text-2xl font-bold">Tutoring Questions</h2>
              <svg
                className={`w-6 h-6 transform transition-transform ${openSections.tutoring ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.tutoring && (
              <div className="mt-4 space-y-4">
                {faqSections.tutoring.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(`tutoring-${index}`)}
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-[#8B0000] pr-4">{item.question}</h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ${openItems[`tutoring-${index}`] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openItems[`tutoring-${index}`] && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Exam Prep & Retake Questions */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection('examPrep')}
              className="w-full text-left flex items-center justify-between p-6 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              <h2 className="text-2xl font-bold">Exam Prep & Retake Questions</h2>
              <svg
                className={`w-6 h-6 transform transition-transform ${openSections.examPrep ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.examPrep && (
              <div className="mt-4 space-y-4">
                {faqSections.examPrep.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(`examPrep-${index}`)}
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-[#8B0000] pr-4">{item.question}</h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ${openItems[`examPrep-${index}`] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openItems[`examPrep-${index}`] && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Enrollment & Payment Questions */}
          <div className="mb-12">
            <button
              onClick={() => toggleSection('enrollment')}
              className="w-full text-left flex items-center justify-between p-6 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              <h2 className="text-2xl font-bold">Enrollment & Payment Questions</h2>
              <svg
                className={`w-6 h-6 transform transition-transform ${openSections.enrollment ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openSections.enrollment && (
              <div className="mt-4 space-y-4">
                {faqSections.enrollment.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleItem(`enrollment-${index}`)}
                      className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-[#8B0000] pr-4">{item.question}</h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform flex-shrink-0 ${openItems[`enrollment-${index}`] ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openItems[`enrollment-${index}`] && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Reminder */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have a Question?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Reach out directly at <a href="tel:469-400-8195" className="text-[#8B0000] font-semibold hover:text-[#A52A2A]">(469) 400-8195</a> or <a href="mailto:info@abcemssolutions.com" className="text-[#8B0000] font-semibold hover:text-[#A52A2A]">info@abcemssolutions.com</a>. We&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#8B0000] rounded-lg hover:bg-[#A52A2A] focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-offset-2 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
