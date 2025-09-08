"use client"

import { useState } from "react"

interface Enrollment {
  id: string
  status: string
  user: {
    name: string | null
    email: string
  }
  certificates: { id: string }[]
}

interface AttendanceManagerProps {
  sessionId: string
  enrollments: Enrollment[]
}

export function AttendanceManager({ enrollments }: AttendanceManagerProps) {
  const [updating, setUpdating] = useState<string | null>(null)

  const handleStatusUpdate = async (enrollmentId: string, newStatus: string) => {
    setUpdating(enrollmentId)
    try {
      // If marking as completed, use the new API route
      if (newStatus === "completed") {
        const response = await fetch(`/api/enrollments/${enrollmentId}/complete`, {
          method: "PATCH",
        })

        if (!response.ok) {
          throw new Error("Failed to complete enrollment")
        }
      } else {
        // For other status updates, we'll need to create a separate API route
        // For now, just show an alert
        alert("Status update functionality needs to be implemented")
        return
      }

      // Refresh the page to show updated status
      window.location.reload()
    } catch (error) {
      console.error("Error updating attendance:", error)
      alert("Error updating attendance. Please try again.")
    } finally {
      setUpdating(null)
    }
  }

  return (
    <div>
      <h4 className="text-lg font-semibold text-kps-navy mb-4">Manage Attendance</h4>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Student</th>
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Email</th>
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-2 px-4 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment) => (
              <tr key={enrollment.id} className="border-b border-gray-100">
                <td className="py-2 px-4">
                  {enrollment.user.name || "No name"}
                </td>
                <td className="py-2 px-4 text-gray-600">
                  {enrollment.user.email}
                </td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    enrollment.status === "completed" 
                      ? "bg-green-100 text-green-800"
                      : enrollment.status === "attended"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-gray-100 text-gray-800"
                  }`}>
                    {enrollment.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <div className="flex space-x-2">
                    {enrollment.status === "assigned" && (
                      <button
                        onClick={() => handleStatusUpdate(enrollment.id, "attended")}
                        disabled={updating === enrollment.id}
                        className="px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 disabled:opacity-50"
                      >
                        {updating === enrollment.id ? "Updating..." : "Mark Attended"}
                      </button>
                    )}
                    {enrollment.status === "attended" && (
                      <button
                        onClick={() => handleStatusUpdate(enrollment.id, "completed")}
                        disabled={updating === enrollment.id}
                        className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 disabled:opacity-50"
                      >
                        {updating === enrollment.id ? "Updating..." : "Mark Completed"}
                      </button>
                    )}
                    {enrollment.status === "completed" && (
                      <span className="text-green-600 text-xs font-medium">
                        Certificate Issued
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
