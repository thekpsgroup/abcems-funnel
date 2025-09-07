"use client"

import { useState } from "react"

export function RosterUploadSection() {
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [courseId, setCourseId] = useState("")

  const handleRosterUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", selectedFile)
      formData.append("courseId", courseId)

      const response = await fetch("/api/admin/upload-roster", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      const result = await response.json()
      alert(`Roster uploaded successfully! Created ${result.usersCreated} users and ${result.enrollmentsCreated} enrollments.`)
      setSelectedFile(null)
      setCourseId("")
    } catch (error) {
      console.error("Error uploading roster:", error)
      alert("Error uploading roster. Please check the CSV format and try again.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-kps-navy mb-4">Upload Roster</h2>
      
      <form onSubmit={handleRosterUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Course ID
          </label>
          <input
            type="text"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            placeholder="Enter course ID for enrollment"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kps-navy"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            CSV Roster File
          </label>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            accept=".csv"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kps-navy"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            CSV should have columns: email, name (optional)
          </p>
        </div>

        <button
          type="submit"
          disabled={uploading || !selectedFile}
          className="w-full bg-kps-navy text-white py-2 px-4 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? "Processing..." : "Upload Roster"}
        </button>
      </form>
    </div>
  )
}
