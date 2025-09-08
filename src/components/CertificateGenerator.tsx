"use client"

import { useRef } from "react"
import { DownloadIcon, ShareIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface CertificateData {
  studentName: string
  courseName: string
  completionDate: string
  instructorName: string
  certificateId: string
}

interface CertificateGeneratorProps {
  certificate: CertificateData
  onDownload?: () => void
  onShare?: () => void
}

export function CertificateGenerator({ certificate, onDownload, onShare }: CertificateGeneratorProps) {
  const certificateRef = useRef<HTMLDivElement>(null)

  const handleDownload = async () => {
    if (!certificateRef.current) return

    try {
      // In a real implementation, you'd use html2canvas or puppeteer
      // For now, we'll create a simple text-based certificate
      const certificateText = `
CERTIFICATE OF COMPLETION

This is to certify that

${certificate.studentName}

has successfully completed the course

"${certificate.courseName}"

Completed on: ${new Date(certificate.completionDate).toLocaleDateString()}
Instructor: ${certificate.instructorName}
Certificate ID: ${certificate.certificateId}

ABCEMS Solutions
Emergency Medical Training
      `.trim()

      const blob = new Blob([certificateText], { type: 'text/plain' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Certificate-${certificate.courseName.replace(/\s+/g, '-')}.txt`
      a.click()
      window.URL.revokeObjectURL(url)

      toast.success("Certificate downloaded!")
      onDownload?.()
    } catch (error) {
      toast.error("Failed to download certificate")
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Certificate: ${certificate.courseName}`,
        text: `${certificate.studentName} completed ${certificate.courseName}`,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      const shareText = `I completed "${certificate.courseName}" with ABCEMS Solutions! Certificate ID: ${certificate.certificateId}`
      navigator.clipboard.writeText(shareText)
      toast.success("Certificate info copied to clipboard!")
    }
    onShare?.()
  }

  return (
    <div className="space-y-6">
      {/* Certificate Preview */}
      <div
        ref={certificateRef}
        className="bg-white border-4 border-[#8B0000] rounded-lg p-8 text-center max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">ABCEMS</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate of Completion</h1>
          <p className="text-gray-600">Emergency Medical Training</p>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <p className="text-gray-700 mb-4">This is to certify that</p>
          <h2 className="text-4xl font-bold text-[#8B0000] mb-4">{certificate.studentName}</h2>
          <p className="text-gray-700 mb-4">has successfully completed the course</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">"{certificate.courseName}"</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Completion Date</p>
              <p className="text-gray-600">{new Date(certificate.completionDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Instructor</p>
              <p className="text-gray-600">{certificate.instructorName}</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Certificate ID</p>
              <p className="text-gray-600">{certificate.certificateId}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-300 pt-6">
          <div className="flex justify-between items-end">
            <div className="text-left">
              <p className="text-sm text-gray-600">Issued by</p>
              <p className="font-bold text-gray-900">ABCEMS Solutions</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Valid until</p>
              <p className="font-bold text-gray-900">
                {new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleDownload}
          className="flex items-center px-6 py-3 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
        >
          <DownloadIcon className="h-5 w-5 mr-2" />
          Download Certificate
        </button>
        <button
          onClick={handleShare}
          className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ShareIcon className="h-5 w-5 mr-2" />
          Share Achievement
        </button>
      </div>
    </div>
  )
}
