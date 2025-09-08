import Link from "next/link"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-kps-navy mb-2">Authentication Error</h1>
          <p className="text-gray-600">
            There was an error signing you in. This could be due to an invalid or expired link.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/auth/signin" 
            className="block w-full bg-kps-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors"
          >
            Try Again
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
