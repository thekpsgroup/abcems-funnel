"use client"

import { useState } from "react"

export function FileUploadSection() {
  const [uploading, setUploading] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileType, setFileType] = useState<"HOMEWORK" | "DOC">("HOMEWORK")
  const [courseId, setCourseId] = useState("")

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", selectedFile)
      formData.append("type", fileType)
      if (courseId) formData.append("courseId", courseId)

      const response = await fetch("/api/admin/upload-file", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Upload failed")
      }

      alert("File uploaded successfully!")
      setSelectedFile(null)
      setCourseId("")
    } catch (error) {
      console.error("Error uploading file:", error)
      alert("Error uploading file. Please try again.")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold text-kps-navy mb-4">Upload Files</h2>
      
      <form onSubmit={handleFileUpload} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            File Type
          </label>
          <select
            value={fileType}
            onChange={(e) => setFileType(e.target.value as "HOMEWORK" | "DOC")}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kps-navy"
          >
            <option value="HOMEWORK">Homework Packet</option>
            <option value="DOC">Document</option>
          </select>
        </div>

        {fileType === "HOMEWORK" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course ID (optional)
            </label>
            <input
              type="text"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
              placeholder="Leave empty for general homework"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kps-navy"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select File
          </label>
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
            accept=".pdf,.doc,.docx"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-kps-navy"
            required
          />
        </div>

        <button
          type="submit"
          disabled={uploading || !selectedFile}
          className="w-full bg-kps-navy text-white py-2 px-4 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? "Uploading..." : "Upload File"}
        </button>
      </form>
    </div>
  )
}
