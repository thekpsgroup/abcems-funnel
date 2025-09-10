"use client"

import { useState, useEffect, useCallback } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

interface PdfViewerProps {
  pdfUrl: string
  lessonId: string
  onTimeUpdate: (timeSpent: number) => void
  onNotesUpdate: (notes: string) => void
  initialNotes?: string
  estimatedTime?: number
}

export function PdfViewer({
  pdfUrl,
  lessonId,
  onTimeUpdate,
  onNotesUpdate,
  initialNotes = '',
  estimatedTime = 15
}: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [timeSpent, setTimeSpent] = useState(0)
  const [notes, setNotes] = useState(initialNotes)
  const [showNotes, setShowNotes] = useState(false)

  // Start timer when component mounts
  useEffect(() => {
    setStartTime(new Date())

    const timer = setInterval(() => {
      if (startTime) {
        const now = new Date()
        const elapsed = Math.floor((now.getTime() - startTime.getTime()) / 1000)
        setTimeSpent(elapsed)
        onTimeUpdate(elapsed)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [startTime, onTimeUpdate])

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
    setLoading(false)
    setError(null)
  }, [])

  const onDocumentLoadError = useCallback((error: Error) => {
    console.error('Error loading PDF:', error)
    setError('Failed to load PDF. Please try again.')
    setLoading(false)
  }, [])

  const handleNotesChange = (newNotes: string) => {
    setNotes(newNotes)
    onNotesUpdate(newNotes)
  }

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96 bg-red-50 rounded-lg border border-red-200">
        <div className="text-center">
          <DocumentTextIcon className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">PDF Load Error</h3>
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden" data-lesson-id={lessonId}>
      {/* Header with controls */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Page Navigation */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                disabled={pageNumber <= 1 || loading}
                className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous page"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>

              <span className="text-sm text-gray-600 min-w-[60px] text-center">
                {loading ? '...' : `${pageNumber} of ${numPages || '?'}`}
              </span>

              <button
                onClick={() => setPageNumber(Math.min(numPages || 1, pageNumber + 1))}
                disabled={pageNumber >= (numPages || 1) || loading}
                className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next page"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Time Tracking */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <ClockIcon className="w-4 h-4" />
              <span>Time: {formatTime(timeSpent)}</span>
              {estimatedTime && (
                <span className="text-gray-400">
                  / {formatTime(estimatedTime * 60)}
                </span>
              )}
            </div>
          </div>

          {/* Notes Toggle */}
          <button
            onClick={() => setShowNotes(!showNotes)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <DocumentTextIcon className="w-4 h-4" />
            <span>{showNotes ? 'Hide Notes' : 'Show Notes'}</span>
          </button>
        </div>
      </div>

      <div className="flex">
        {/* PDF Viewer */}
        <div className="flex-1 p-6 bg-gray-100 min-h-[600px]">
          {loading && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading PDF...</p>
              </div>
            </div>
          )}

          {!loading && (
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                scale={1.2}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-lg"
              />
            </Document>
          )}
        </div>

        {/* Notes Panel */}
        {showNotes && (
          <div className="w-80 bg-white border-l border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Lesson Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => handleNotesChange(e.target.value)}
              placeholder="Add your notes here... You can type questions, key points, or reflections about this lesson."
              className="w-full h-96 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              style={{ minHeight: '400px' }}
            />
            <div className="mt-4 text-sm text-gray-500">
              <p>• Your notes are automatically saved</p>
              <p>• Notes help with your learning retention</p>
              <p>• You can reference these notes later</p>
            </div>
          </div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>Progress: {numPages ? `${pageNumber}/${numPages} pages` : 'Loading...'}</span>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: numPages ? `${(pageNumber / numPages) * 100}%` : '0%' }}
              ></div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
              Auto-saving notes
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
