"use client"

import { useState, useMemo } from "react"
import { createColumnHelper, type ColumnDef } from "@tanstack/react-table"
import { EnhancedDataTable } from "./EnhancedDataTable"
import { EnhancedFileUpload } from "./EnhancedFileUpload"
import { 
  EyeIcon, 
  PencilIcon, 
  TrashIcon,
  DocumentArrowDownIcon,
  UserPlusIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline"

interface User {
  id: string
  name: string | null
  email: string
  role: string
  createdAt: string
  enrollmentsCount: number
}

interface Enrollment {
  id: string
  user: {
    name: string | null
    email: string
  }
  course: {
    title: string
  }
  status: string
  createdAt: string
}

interface EnhancedAdminDashboardProps {
  users: User[]
  enrollments: Enrollment[]
  courses: Array<{ id: string; title: string }>
  onFileUpload: (data: { courseId: string; fileType: string; file: File }) => Promise<void>
  onUserAction: (action: string, userId: string) => Promise<void>
  onEnrollmentAction: (action: string, enrollmentId: string) => Promise<void>
}

export function EnhancedAdminDashboard({
  users,
  enrollments,
  courses,
  onFileUpload,
  onUserAction,
  onEnrollmentAction
}: EnhancedAdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  // User columns
  const userColumnHelper = createColumnHelper<User>()
  const userColumns = useMemo(() => [
    userColumnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue() || "N/A",
    }),
    userColumnHelper.accessor("email", {
      header: "Email",
      cell: (info) => (
        <a 
          href={`mailto:${info.getValue()}`}
          className="text-[#8B0000] hover:underline"
        >
          {info.getValue()}
        </a>
      ),
    }),
    userColumnHelper.accessor("role", {
      header: "Role",
      cell: (info) => {
        const role = info.getValue()
        const roleColors = {
          ADMIN: "bg-red-100 text-red-800",
          INSTRUCTOR: "bg-blue-100 text-blue-800",
          LEARNER: "bg-green-100 text-green-800"
        }
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${roleColors[role as keyof typeof roleColors] || "bg-gray-100 text-gray-800"}`}>
            {role}
          </span>
        )
      },
    }),
    userColumnHelper.accessor("enrollmentsCount", {
      header: "Enrollments",
      cell: (info) => info.getValue(),
    }),
    userColumnHelper.accessor("createdAt", {
      header: "Joined",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
    userColumnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (info) => (
        <div className="flex space-x-2">
          <button
            onClick={() => onUserAction("view", info.row.original.id)}
            className="text-[#8B0000] hover:text-[#A52A2A] transition-colors"
            title="View Details"
          >
            <EyeIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => onUserAction("edit", info.row.original.id)}
            className="text-blue-600 hover:text-blue-800 transition-colors"
            title="Edit User"
          >
            <PencilIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => onUserAction("delete", info.row.original.id)}
            className="text-red-600 hover:text-red-800 transition-colors"
            title="Delete User"
          >
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      ),
    }),
  ] as ColumnDef<User>[], [onUserAction, userColumnHelper])

  // Enrollment columns
  const enrollmentColumnHelper = createColumnHelper<Enrollment>()
  const enrollmentColumns = useMemo(() => [
    enrollmentColumnHelper.accessor("user.name", {
      header: "Student",
      cell: (info) => info.getValue() || "N/A",
    }),
    enrollmentColumnHelper.accessor("user.email", {
      header: "Email",
      cell: (info) => (
        <a 
          href={`mailto:${info.getValue()}`}
          className="text-[#8B0000] hover:underline"
        >
          {info.getValue()}
        </a>
      ),
    }),
    enrollmentColumnHelper.accessor("course.title", {
      header: "Course",
      cell: (info) => (
        <span className="font-medium text-gray-900">
          {info.getValue()}
        </span>
      ),
    }),
    enrollmentColumnHelper.accessor("status", {
      header: "Status",
      cell: (info) => {
        const status = info.getValue()
        const statusColors = {
          assigned: "bg-yellow-100 text-yellow-800",
          attended: "bg-blue-100 text-blue-800",
          completed: "bg-green-100 text-green-800"
        }
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status as keyof typeof statusColors] || "bg-gray-100 text-gray-800"}`}>
            {status}
          </span>
        )
      },
    }),
    enrollmentColumnHelper.accessor("createdAt", {
      header: "Enrolled",
      cell: (info) => new Date(info.getValue()).toLocaleDateString(),
    }),
    enrollmentColumnHelper.display({
      id: "actions",
      header: "Actions",
      cell: (info) => (
        <div className="flex space-x-2">
          <button
            onClick={() => onEnrollmentAction("view", info.row.original.id)}
            className="text-[#8B0000] hover:text-[#A52A2A] transition-colors"
            title="View Details"
          >
            <EyeIcon className="h-4 w-4" />
          </button>
          <button
            onClick={() => onEnrollmentAction("complete", info.row.original.id)}
            className="text-green-600 hover:text-green-800 transition-colors"
            title="Mark Complete"
          >
            <AcademicCapIcon className="h-4 w-4" />
          </button>
        </div>
      ),
    }),
  ] as ColumnDef<Enrollment>[], [onEnrollmentAction, enrollmentColumnHelper])

  const tabs = [
    { id: "overview", name: "Overview", icon: "📊" },
    { id: "users", name: "Users", icon: "👥" },
    { id: "enrollments", name: "Enrollments", icon: "🎓" },
    { id: "files", name: "File Management", icon: "📁" },
  ]


  return (
    <div className="space-y-6">
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
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <UserPlusIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">{users.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <AcademicCapIcon className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Enrollments</p>
                  <p className="text-2xl font-bold text-gray-900">{enrollments.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <DocumentArrowDownIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Courses</p>
                  <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <AcademicCapIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {enrollments.filter(e => e.status === "completed").length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <EnhancedDataTable
            columns={userColumns}
            data={users}
            title="User Management"
            description="Manage all users in the system"
            searchPlaceholder="Search users by email..."
          />
        )}

        {activeTab === "enrollments" && (
          <EnhancedDataTable
            columns={enrollmentColumns}
            data={enrollments}
            title="Enrollment Management"
            description="Track and manage course enrollments"
            searchPlaceholder="Search enrollments by student email..."
          />
        )}

        {activeTab === "files" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <EnhancedFileUpload
                title="Upload Homework"
                description="Upload homework PDFs for students to download"
                courses={courses}
                onUpload={onFileUpload}
                acceptedFileTypes={{
                  "HOMEWORK": [".pdf"],
                  "ROSTER": [".csv"],
                  "DOC": [".pdf", ".doc", ".docx"]
                }}
              />
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <EnhancedFileUpload
                title="Upload Roster"
                description="Bulk enroll students from CSV files"
                courses={courses}
                onUpload={onFileUpload}
                acceptedFileTypes={{
                  "HOMEWORK": [".pdf"],
                  "ROSTER": [".csv"],
                  "DOC": [".pdf", ".doc", ".docx"]
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
