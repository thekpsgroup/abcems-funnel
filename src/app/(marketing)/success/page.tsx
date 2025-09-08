import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-kps-navy mb-2">Payment Successful!</h1>
          <p className="text-gray-600">
            Thank you for enrolling in ABCEMS Solutions. You will receive a confirmation email with your homework packet shortly.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/dashboard" 
            className="block w-full bg-kps-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors"
          >
            Go to Dashboard
          </Link>
          <Link 
            href="/" 
            className="block w-full border-2 border-kps-navy text-kps-navy py-3 px-6 rounded-lg font-semibold hover:bg-kps-navy hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
