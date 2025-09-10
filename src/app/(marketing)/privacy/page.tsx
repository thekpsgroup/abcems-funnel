import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            ABCEMS Solutions LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates under Texas law and collects information 
            from users of our website and educational services. We collect the following types of information:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Name, email address, phone number, and mailing address</li>
            <li>Educational background and certification information</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Course progress and performance data</li>
            <li>Communications with our instructors and support staff</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>IP address, browser type, and device information</li>
            <li>Website usage data and analytics</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Login timestamps and session data</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use collected information for the following purposes:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Providing educational services and course materials</li>
            <li>Processing payments and managing your account</li>
            <li>Tracking course progress and issuing certificates</li>
            <li>Communicating about courses, schedules, and updates</li>
            <li>Improving our services and website functionality</li>
            <li>Complying with legal obligations and regulatory requirements</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing and Disclosure</h2>
          <p className="mb-4">We do not sell, trade, or rent your personal information. We may share information in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>With service providers who assist in our operations (payment processors, email services)</li>
            <li>When required by law, court order, or government regulation</li>
            <li>To protect our rights, property, or safety, or that of our users</li>
            <li>With your explicit consent for specific purposes</li>
            <li>In connection with a business transfer or merger (with prior notice)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, 
            secure servers, and regular security assessments. However, no method of transmission over the internet 
            is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Retention</h2>
          <p className="mb-6">
            We retain personal information for as long as necessary to provide our services and comply with legal 
            obligations. Course records and certificates are maintained for a minimum of seven (7) years as required 
            by Texas education regulations. You may request deletion of your personal information, subject to our 
            legal and regulatory obligations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights Under Texas Law</h2>
          <p className="mb-4">Under Texas law, you have the following rights regarding your personal information:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Right to access and receive a copy of your personal information</li>
            <li>Right to correct inaccurate or incomplete information</li>
            <li>Right to request deletion of your personal information (subject to legal requirements)</li>
            <li>Right to opt-out of marketing communications</li>
            <li>Right to file a complaint with appropriate authorities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies and Tracking</h2>
          <p className="mb-6">
            Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, 
            and provide personalized content. You can control cookie settings through your browser preferences. 
            Disabling cookies may affect website functionality and your ability to access certain features.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Third-Party Services</h2>
          <p className="mb-6">
            Our website may contain links to third-party services or integrate with external platforms. This privacy 
            policy does not apply to third-party websites or services. We encourage you to review the privacy policies 
            of any third-party services you interact with.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
          <p className="mb-6">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
            information from children under 18. If we become aware that we have collected personal information from 
            a child under 18, we will take steps to delete such information promptly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, 
            or legal requirements. We will notify users of material changes by posting the updated policy on our 
            website and updating the &ldquo;Last Updated&rdquo; date. Continued use of our services after such changes 
            constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="font-semibold mb-2">ABCEMS Solutions LLC</p>
            <p>Email: privacy@abcemssolutions.com</p>
            <p>Phone: (469) 400-8195</p>
            <p>Mailing Address: [Texas Business Address]</p>
          </div>

          <p className="text-sm text-gray-600 italic">
            This Privacy Policy is governed by Texas law and complies with applicable federal and state privacy regulations.
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
