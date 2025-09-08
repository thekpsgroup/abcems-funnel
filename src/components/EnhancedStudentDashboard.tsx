"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  BookOpenIcon, 
  DocumentArrowDownIcon, 
  CheckCircleIcon,
  ClockIcon,
  AcademicCapIcon,
  CalendarIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface Enrollment {
  id: string
  status: string
  createdAt: string
  course: {
    title: string
    description: string
  }
  certificates: Array<{
    id: string
    pdfUrl: string
    issuedAt: string
  }>
}

interface File {
  id: string
  type: string
  fileName: string
  downloadUrl: string
  createdAt: string
}

interface EnhancedStudentDashboardProps {
  enrollments: Enrollment[]
  files: File[]
  userName: string
}

export function EnhancedStudentDashboard({
  enrollments,
  files,
  userName
}: EnhancedStudentDashboardProps) {
  const [activeTab, setActiveTab] = useState("courses")

  const tabs = [
    { id: "courses", name: "My Courses", icon: "🎓" },
    { id: "materials", name: "Study Materials", icon: "📚" },
    { id: "certificates", name: "Certificates", icon: "🏆" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200"
      case "attended":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "assigned":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon className="h-5 w-5" />
      case "attended":
        return <ClockIcon className="h-5 w-5" />
      case "assigned":
        return <BookOpenIcon className="h-5 w-5" />
      default:
        return <ClockIcon className="h-5 w-5" />
    }
  }

  const handleDownload = (url: string, fileName: string) => {
    try {
      const link = document.createElement('a')
      link.href = url
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      toast.success("Download started!")
    } catch {
      toast.error("Download failed. Please try again.")
    }
  }

  const allCertificates = enrollments.flatMap(enrollment => 
    enrollment.certificates.map(cert => ({
      ...cert,
      courseTitle: enrollment.course.title
    }))
  )

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-2xl p-6 text-white"
      >
        <h2 className="text-2xl font-bold mb-2">
          Welcome back, {userName || "Student"}! 👋
        </h2>
        <p className="text-white/90">
          Continue your journey to NREMT certification success
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow p-4"
        >
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <BookOpenIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Enrolled Courses</p>
              <p className="text-xl font-bold text-gray-900">{enrollments.length}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow p-4"
        >
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-xl font-bold text-gray-900">
                {enrollments.filter(e => e.status === "completed").length}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-lg shadow p-4"
        >
          <div className="flex items-center">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <AcademicCapIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-600">Certificates</p>
              <p className="text-xl font-bold text-gray-900">{allCertificates.length}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-[#8B0000] text-[#8B0000]"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "courses" && (
          <div className="space-y-4">
            {enrollments.length === 0 ? (
              <div className="text-center py-12">
                <BookOpenIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No courses enrolled</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Get started by enrolling in a course.
                </p>
              </div>
            ) : (
              enrollments.map((enrollment, index) => (
                <motion.div
                  key={enrollment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {enrollment.course.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {enrollment.course.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          Enrolled {new Date(enrollment.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(enrollment.status)}`}>
                        {getStatusIcon(enrollment.status)}
                        <span className="ml-1 capitalize">{enrollment.status}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {activeTab === "materials" && (
          <div className="space-y-4">
            {files.length === 0 ? (
              <div className="text-center py-12">
                <DocumentArrowDownIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No study materials</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Study materials will appear here once uploaded by your instructor.
                </p>
              </div>
            ) : (
              files.map((file, index) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <DocumentArrowDownIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-sm font-medium text-gray-900">{file.fileName}</h4>
                        <p className="text-sm text-gray-500">
                          {file.type} • {new Date(file.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(file.downloadUrl, file.fileName)}
                      className="bg-[#8B0000] text-white px-4 py-2 rounded-lg hover:bg-[#A52A2A] transition-colors flex items-center"
                    >
                      <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
                      Download
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}

        {activeTab === "certificates" && (
          <div className="space-y-4">
            {allCertificates.length === 0 ? (
              <div className="text-center py-12">
                <AcademicCapIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No certificates yet</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Complete your courses to earn certificates.
                </p>
              </div>
            ) : (
              allCertificates.map((certificate, index) => (
                <motion.div
                  key={certificate.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-yellow-100 rounded-lg">
                        <AcademicCapIcon className="h-8 w-8 text-yellow-600" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {certificate.courseTitle} Certificate
                        </h4>
                        <p className="text-sm text-gray-500">
                          Issued on {new Date(certificate.issuedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(certificate.pdfUrl, `${certificate.courseTitle}-Certificate.pdf`)}
                      className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white px-6 py-3 rounded-lg hover:from-[#A52A2A] hover:to-[#8B0000] transition-all duration-200 flex items-center"
                    >
                      <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                      Download Certificate
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}
