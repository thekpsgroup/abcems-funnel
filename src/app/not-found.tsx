import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-kps-navy mb-2">Page Not Found</h1>
          <p className="text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="block w-full bg-kps-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors"
          >
            Go Home
          </Link>
          <Link 
            href="/dashboard" 
            className="block w-full border-2 border-kps-navy text-kps-navy py-3 px-6 rounded-lg font-semibold hover:bg-kps-navy hover:text-white transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}
