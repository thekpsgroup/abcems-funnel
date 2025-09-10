import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and ABCEMS Solutions LLC, 
            a Texas limited liability company (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using our website, 
            services, or educational programs, you agree to be bound by these Terms and our Privacy Policy. 
            If you do not agree to these Terms, you may not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
          <p className="mb-4">ABCEMS Solutions LLC provides:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Emergency Medical Services (EMS) education and training programs</li>
            <li>NREMT examination preparation courses</li>
            <li>EMT-Basic and Paramedic certification training</li>
            <li>One-on-one tutoring services</li>
            <li>Educational materials, study guides, and practice examinations</li>
            <li>Online learning platform and course management system</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Eligibility and Registration</h2>
          <p className="mb-4">To use our services, you must:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Be at least 18 years of age or have parental/guardian consent</li>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Be responsible for all activities under your account</li>
            <li>Meet any prerequisite requirements for specific courses</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Course Enrollment and Payment</h2>
          <p className="mb-4">Course enrollment is subject to the following terms:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Payment is due in full upon enrollment unless other arrangements are made</li>
            <li>Course fees are non-transferable between students</li>
            <li>We reserve the right to cancel courses due to insufficient enrollment</li>
            <li>Pricing is subject to change without notice for future enrollments</li>
            <li>Group discounts and payment plans may be available upon request</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Policy</h2>
          <p className="mb-4">Our refund policy is governed by Texas law and includes:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Full refund available within 72 hours of enrollment if no course materials have been accessed</li>
            <li>Partial refunds may be available for course cancellations by the Company</li>
            <li>No refunds for completed courses or courses with more than 50% completion</li>
            <li>Medical or emergency withdrawals will be considered on a case-by-case basis</li>
            <li>Processing fees and third-party charges are non-refundable</li>
          </ul>
          <p className="mb-6">
            For detailed refund terms, please refer to our separate <Link href="/refund-policy" className="text-[#8B0000] hover:underline">Refund Policy</Link>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Student Responsibilities and Conduct</h2>
          <p className="mb-4">Students are expected to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Attend all scheduled classes and complete required coursework</li>
            <li>Maintain professional conduct during all interactions</li>
            <li>Respect intellectual property rights of course materials</li>
            <li>Not share login credentials or course access with unauthorized persons</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Report any technical issues or concerns promptly</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property Rights</h2>
          <p className="mb-6">
            All course materials, including but not limited to curricula, study guides, practice exams, videos, 
            presentations, and documentation, are the exclusive property of ABCEMS Solutions LLC and are protected 
            by United States and international copyright laws. Students are granted a limited, non-exclusive, 
            non-transferable license to access and use course materials solely for personal educational purposes. 
            Reproduction, distribution, or commercial use of any materials is strictly prohibited.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Certification and Accreditation</h2>
          <p className="mb-6">
            ABCEMS Solutions LLC provides preparatory education for NREMT examinations. Successful completion of 
            our courses does not guarantee passage of the NREMT examination or automatic certification. Students 
            must separately apply for and pass the appropriate NREMT examination. We are not responsible for 
            changes to NREMT requirements, examination content, or certification processes.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
          <p className="mb-6">
            TO THE MAXIMUM EXTENT PERMITTED BY TEXAS LAW, ABCEMS SOLUTIONS LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, 
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
            DATA, OR USE, ARISING OUT OF OR RELATING TO THESE TERMS OR THE USE OF OUR SERVICES, REGARDLESS OF THE 
            THEORY OF LIABILITY AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL 
            LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
          <p className="mb-6">
            You agree to indemnify, defend, and hold harmless ABCEMS Solutions LLC, its officers, directors, employees, 
            and agents from and against any and all claims, damages, losses, costs, and expenses (including reasonable 
            attorneys&apos; fees) arising out of or relating to your use of our services, violation of these Terms, or 
            infringement of any rights of another party.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Privacy and Data Protection</h2>
          <p className="mb-6">
            Your privacy is important to us. Our collection, use, and protection of your personal information is 
            governed by our <Link href="/privacy" className="text-[#8B0000] hover:underline">Privacy Policy</Link>, 
            which is incorporated into these Terms by reference. By using our services, you consent to the 
            collection and use of your information as described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination</h2>
          <p className="mb-6">
            We reserve the right to terminate or suspend your access to our services at any time, with or without 
            cause, and with or without notice. You may terminate your account at any time by contacting us. Upon 
            termination, your right to access and use our services will immediately cease, and any outstanding 
            fees will remain due and payable.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the State of Texas, 
            without regard to its conflict of law principles. Any disputes arising out of or relating to these 
            Terms or our services shall be resolved through binding arbitration in accordance with the rules of 
            the American Arbitration Association, conducted in Texas. The prevailing party shall be entitled to 
            recover reasonable attorneys&apos; fees and costs.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Force Majeure</h2>
          <p className="mb-6">
            We shall not be liable for any delay or failure to perform our obligations under these Terms if such 
            delay or failure results from circumstances beyond our reasonable control, including but not limited to 
            acts of God, natural disasters, war, terrorism, labor disputes, government actions, or technical failures.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Modifications to Terms</h2>
          <p className="mb-6">
            We reserve the right to modify these Terms at any time. Material changes will be communicated to users 
            via email or website notification at least 30 days prior to the effective date. Continued use of our 
            services after such changes constitutes acceptance of the modified Terms. If you do not agree to the 
            changes, you must discontinue use of our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Severability</h2>
          <p className="mb-6">
            If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining 
            provisions shall continue in full force and effect. The invalid provision shall be replaced with 
            a valid provision that most closely approximates the intent of the original provision.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Contact Information</h2>
          <p className="mb-4">
            For questions regarding these Terms of Service, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="font-semibold mb-2">ABCEMS Solutions LLC</p>
            <p>Email: legal@abcemssolutions.com</p>
            <p>Phone: (469) 400-8195</p>
            <p>Mailing Address: [Texas Business Address]</p>
          </div>

          <p className="text-sm text-gray-600 italic">
            These Terms of Service are governed by Texas law and constitute the entire agreement between you and ABCEMS Solutions LLC.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="bg-[#8B0000] text-white px-8 py-3 rounded-lg hover:bg-[#A52A2A] transition-colors inline-flex items-center"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
