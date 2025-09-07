import { getFileUrl } from "@/lib/storage"

interface Enrollment {
  id: string
  status: string
  course: {
    title: string
    description: string
  }
  certificates: { id: string; pdfUrl: string }[]
}

interface File {
  id: string
  fileName: string
  storageKey: string
  createdAt: Date
  downloadUrl: string
}

interface StudentDashboardProps {
  enrollments: Enrollment[]
  files: File[]
}

export async function StudentDashboard({ enrollments, files }: StudentDashboardProps) {
  return (
    <div className="space-y-8">
      {/* Enrollments */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-kps-navy mb-6">Your Courses</h2>
        
        {enrollments.length === 0 ? (
          <p className="text-gray-600">You haven't enrolled in any courses yet.</p>
        ) : (
          <div className="space-y-4">
            {enrollments.map((enrollment) => (
              <div key={enrollment.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-kps-navy">
                      {enrollment.course.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {enrollment.course.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      enrollment.status === "completed" 
                        ? "bg-green-100 text-green-800"
                        : enrollment.status === "attended"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {enrollment.status}
                    </span>
                    {enrollment.certificates.length > 0 && (
                      <div className="mt-2">
                        <a
                          href={enrollment.certificates[0].pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-kps-navy hover:text-kps-gold text-sm font-medium"
                        >
                          Download Certificate
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Homework Files */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-kps-navy mb-6">Study Materials</h2>
        
        {files.length === 0 ? (
          <p className="text-gray-600">No study materials available yet.</p>
        ) : (
          <div className="space-y-3">
            {files.map((file) => (
              <div key={file.id} className="flex justify-between items-center border border-gray-200 rounded-lg p-4">
                <div>
                  <h3 className="font-medium text-gray-900">{file.fileName}</h3>
                  <p className="text-sm text-gray-500">
                    Uploaded {file.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <a
                  href={file.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-kps-navy text-white px-4 py-2 rounded-lg hover:bg-kps-navy/90 transition-colors"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
