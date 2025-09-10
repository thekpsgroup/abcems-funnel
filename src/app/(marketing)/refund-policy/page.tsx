import Link from "next/link";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-[#8B0000]/10 border-l-4 border-[#8B0000] p-6 mb-8">
            <p className="font-semibold text-[#8B0000] mb-2">Important Notice</p>
            <p className="text-gray-700">
              This Refund Policy is governed by Texas law and complies with the Texas Education Code. 
              Please read this policy carefully before enrolling in any courses.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Refund Principles</h2>
          <p className="mb-6">
            ABCEMS Solutions LLC is committed to providing high-quality educational services. This refund policy 
            outlines the circumstances under which refunds may be granted and the procedures for requesting refunds. 
            All refund requests are subject to the terms and conditions outlined herein and applicable Texas law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Full Refund Eligibility</h2>
          <p className="mb-4">You may be eligible for a full refund in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>72-Hour Cooling-Off Period:</strong> Full refund available within 72 hours of enrollment if no course materials have been accessed or downloaded</li>
            <li><strong>Course Cancellation by ABCEMS:</strong> If we cancel a course due to insufficient enrollment, instructor unavailability, or other circumstances beyond student control</li>
            <li><strong>Technical Failure:</strong> If technical issues prevent access to course materials for more than 7 consecutive days and alternative access cannot be provided</li>
            <li><strong>Misrepresentation:</strong> If course content materially differs from advertised description (subject to verification)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Partial Refund Eligibility</h2>
          <p className="mb-4">Partial refunds may be available under the following conditions:</p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Early Withdrawal (Within 25% Completion):</strong> 75% refund if withdrawal occurs before completing 25% of course content</li>
            <li><strong>Mid-Course Withdrawal (25-50% Completion):</strong> 50% refund if withdrawal occurs after 25% but before 50% completion</li>
            <li><strong>Medical Emergency:</strong> Prorated refund based on completion percentage for documented medical emergencies preventing course continuation</li>
            <li><strong>Military Deployment:</strong> Special consideration for active military personnel with deployment orders</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Non-Refundable Circumstances</h2>
          <p className="mb-4">No refunds will be provided in the following situations:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Course completion exceeding 50% of total content</li>
            <li>Failure to attend scheduled classes without prior notification</li>
            <li>Violation of student conduct policies or terms of service</li>
            <li>Failure to pass NREMT examination (courses are preparatory only)</li>
            <li>Change of mind after the 72-hour cooling-off period</li>
            <li>Processing fees, administrative costs, and third-party charges</li>
            <li>Digital materials that have been downloaded or accessed</li>
            <li>One-on-one tutoring sessions that have been conducted</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Refund Request Procedure</h2>
          <p className="mb-4">To request a refund, you must:</p>
          <ol className="list-decimal pl-6 mb-6">
            <li>Submit a written refund request via email to refunds@abcemssolutions.com</li>
            <li>Include your full name, enrollment information, and reason for refund request</li>
            <li>Provide supporting documentation (medical records, military orders, etc.) if applicable</li>
            <li>Submit the request within the applicable time limits specified in this policy</li>
            <li>Cooperate with any reasonable verification procedures</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Refund Processing Timeline</h2>
          <p className="mb-6">
            Approved refunds will be processed according to the following timeline:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Review Period:</strong> 5-10 business days from receipt of complete refund request</li>
            <li><strong>Processing Time:</strong> 7-14 business days after approval for credit card refunds</li>
            <li><strong>Bank Transfer Time:</strong> Additional 3-5 business days depending on financial institution</li>
            <li><strong>Check Refunds:</strong> 14-21 business days for mailed checks (if requested)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Payment Method and Refund Method</h2>
          <p className="mb-6">
            Refunds will be issued to the original payment method whenever possible. If the original payment method 
            is no longer available, alternative arrangements will be made. Processing fees charged by payment 
            processors are non-refundable and may be deducted from the refund amount.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Group Enrollments and Corporate Accounts</h2>
          <p className="mb-6">
            Group enrollments and corporate accounts are subject to separate refund terms as specified in the 
            enrollment agreement. Individual students within group enrollments must coordinate refund requests 
            through the designated group administrator.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Course Transfer and Credit Options</h2>
          <p className="mb-6">
            In lieu of a refund, students may be eligible to transfer their enrollment to a future course offering 
            within 12 months of original enrollment. Transfer fees may apply. Course credits are non-transferable 
            to other individuals and expire 12 months from the date of issuance.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Dispute Resolution</h2>
          <p className="mb-6">
            If you disagree with a refund decision, you may request a review by submitting additional documentation 
            or clarification within 30 days of the initial decision. Final refund decisions will be made by senior 
            management and communicated in writing. Disputes not resolved through this process may be subject to 
            binding arbitration as outlined in our Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Texas Education Code Compliance</h2>
          <p className="mb-6">
            This refund policy complies with applicable provisions of the Texas Education Code and regulations 
            governing private educational institutions. Students have the right to file complaints with the 
            Texas Workforce Commission if they believe this refund policy has been violated.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Special Circumstances</h2>
          <p className="mb-4">Special consideration may be given for refund requests involving:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Death of student or immediate family member</li>
            <li>Serious illness or injury preventing course completion</li>
            <li>Job loss or significant financial hardship</li>
            <li>Natural disasters or other force majeure events</li>
            <li>Documented technical barriers preventing course access</li>
          </ul>
          <p className="mb-6">
            Each special circumstance will be evaluated individually, and refunds are not guaranteed.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Modification of Refund Policy</h2>
          <p className="mb-6">
            ABCEMS Solutions LLC reserves the right to modify this refund policy at any time. Changes will be 
            communicated to enrolled students via email and posted on our website. The refund policy in effect 
            at the time of enrollment will govern that specific enrollment.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
          <p className="mb-4">
            For refund requests or questions about this policy, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="font-semibold mb-2">ABCEMS Solutions LLC - Refund Department</p>
            <p>Email: refunds@abcemssolutions.com</p>
            <p>Phone: (469) 400-8195</p>
            <p>Mailing Address: [Texas Business Address]</p>
            <p className="mt-2 text-sm text-gray-600">Business Hours: Monday-Friday, 9:00 AM - 5:00 PM CST</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <p className="font-semibold text-blue-800 mb-2">Student Rights Notice</p>
            <p className="text-blue-700 text-sm">
              Under Texas law, you have the right to receive a refund in accordance with this policy. 
              If you believe your refund rights have been violated, you may file a complaint with the 
              Texas Workforce Commission, Career Schools and Colleges Division.
            </p>
          </div>

          <p className="text-sm text-gray-600 italic">
            This Refund Policy is governed by Texas law and is subject to applicable federal and state regulations 
            governing educational institutions.
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
