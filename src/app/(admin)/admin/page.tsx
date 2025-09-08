import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import {
  UserGroupIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  UserPlusIcon,
  EnvelopeIcon,
  UsersIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)

  if (!session || !(session as { user?: { role?: string } }).user || (session as { user: { role: string } }).user.role !== "ADMIN") {
    redirect("/auth/signin")
  }

  // Simplified data fetching - focus on essentials
  const [
    totalLearners,
    totalEnrollments,
    totalCourses,
    recentUsers
  ] = await Promise.all([
    prisma.user.count({ where: { role: "LEARNER" } }),
    prisma.enrollment.count(),
    prisma.course.count(),
    prisma.user.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      select: { name: true, email: true, createdAt: true }
    })
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="/logo.jpg"
                  alt="ABCEMS Logo"
                  className="h-10 w-auto rounded shadow-sm"
                />
                <span className="text-2xl font-bold text-[#8B0000]">ABCEMS</span>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Manage your EMS training platform</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{(session as { user?: { name?: string } }).user?.name || 'Admin'}</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-3xl font-bold text-[#8B0000]">{totalLearners}</p>
              </div>
              <UsersIcon className="h-8 w-8 text-[#8B0000]" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Enrollments</p>
                <p className="text-3xl font-bold text-blue-600">{totalEnrollments}</p>
              </div>
              <AcademicCapIcon className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Courses</p>
                <p className="text-3xl font-bold text-green-600">{totalCourses}</p>
              </div>
              <DocumentCheckIcon className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-3xl font-bold text-purple-600">$12,450</p>
              </div>
              <ChartBarIcon className="h-8 w-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link
            href="/admin/create-users"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <UserPlusIcon className="h-8 w-8 text-[#8B0000]" />
              <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-[#8B0000] transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Add Users</h3>
            <p className="text-gray-600 text-sm">Create new student accounts or bulk import</p>
          </Link>

          <Link
            href="/admin/courses"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <AcademicCapIcon className="h-8 w-8 text-blue-600" />
              <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Courses</h3>
            <p className="text-gray-600 text-sm">Create, edit, and organize course content</p>
          </Link>

          <Link
            href="/admin/users"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <UserGroupIcon className="h-8 w-8 text-green-600" />
              <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Management</h3>
            <p className="text-gray-600 text-sm">View and manage all users and enrollments</p>
          </Link>

          <Link
            href="/admin/bulk-email"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <EnvelopeIcon className="h-8 w-8 text-purple-600" />
              <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Campaigns</h3>
            <p className="text-gray-600 text-sm">Send bulk emails and manage communications</p>
          </Link>

          <Link
            href="/admin/reports"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <ChartBarIcon className="h-8 w-8 text-orange-600" />
              <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reports & Analytics</h3>
            <p className="text-gray-600 text-sm">View detailed analytics and generate reports</p>
          </Link>

          <Link
            href="/admin/automated-emails"
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <DocumentCheckIcon className="h-8 w-8 text-indigo-600" />
              <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Templates</h3>
            <p className="text-gray-600 text-sm">Manage automated emails and templates</p>
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
          <div className="space-y-4">
            {recentUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{user.name || 'New User'}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}