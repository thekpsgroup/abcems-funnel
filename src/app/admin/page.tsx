import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { AdminStats } from "@/components/AdminStats"
import { FileUploadSection } from "@/components/FileUploadSection"
import { RosterUploadSection } from "@/components/RosterUploadSection"
import { RecentEnrollments } from "@/components/RecentEnrollments"
import { RecentActivity } from "@/components/RecentActivity"
import Image from "next/image"
import Link from "next/link"
import {
  UserGroupIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  CogIcon,
  UserPlusIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ArrowUpIcon,
  UsersIcon,
  SparklesIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  
  if (!session || !(session as { user?: { role?: string } }).user || (session as { user: { role: string } }).user.role !== "ADMIN") {
    redirect("/auth/signin")
  }

  // Comprehensive analytics data
  const [
    totalLearners,
    // totalInstructors, // Reserved for future use
    // totalAdmins, // Reserved for future use
    totalEnrollments,
    totalPayments,
    totalCertificates,
    recentLearners,
    pendingPayments,
    activeEnrollments,
    monthlyRevenue
  ] = await Promise.all([
    // User counts by role
    prisma.user.count({ where: { role: "LEARNER" } }),
    // prisma.user.count({ where: { role: "INSTRUCTOR" } }), // Reserved for future use
    // prisma.user.count({ where: { role: "ADMIN" } }), // Reserved for future use

    // Enrollment and payment data
    prisma.enrollment.count(),
    prisma.payment.count({ where: { status: "paid" } }),
    prisma.certificate.count(),

    // Recent activity (last 7 days)
    prisma.user.count({
      where: {
        role: "LEARNER",
        createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
      }
    }),

    // Pending payments
    prisma.payment.count({ where: { status: { in: ["pending", "processing"] } } }),

    // Active enrollments (not completed)
    prisma.enrollment.count({
      where: {
        status: { not: "completed" },
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
      }
    }),

    // Monthly revenue (last 30 days)
    prisma.payment.aggregate({
      where: {
        status: "paid",
        createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
      },
      _sum: { amountCents: true }
    }).then(result => (result._sum.amountCents || 0) / 100)
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Image 
                  src="/logo.jpg" 
                  alt="ABCEMS Solutions" 
                  width={48} 
                  height={48} 
                  className="h-12 w-12 rounded-lg shadow-lg" 
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#DAA520] rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  <ChartBarIcon className="h-8 w-8" />
                  Admin Dashboard
                </h1>
                <p className="text-[#DAA520] font-medium">ABCEMS Solutions Management Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-200">Welcome back,</p>
                <p className="font-semibold">
                  {(session as { user: { name?: string; email: string } }).user.name || (session as { user: { name?: string; email: string } }).user.email}
                </p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <CogIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Enhanced Analytics Overview */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <ChartBarIcon className="h-6 w-6 text-[#8B0000]" />
              Analytics Overview
            </h2>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Learners */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#8B0000]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-3xl font-bold text-gray-900">{totalLearners}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <ArrowUpIcon className="h-4 w-4 mr-1" />
                    +{recentLearners} this week
                  </p>
                </div>
                <UsersIcon className="h-10 w-10 text-[#8B0000] opacity-80" />
              </div>
            </div>

            {/* Monthly Revenue */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">${monthlyRevenue.toFixed(2)}</p>
                  <p className="text-sm text-gray-500 mt-1">Last 30 days</p>
                </div>
                <CurrencyDollarIcon className="h-10 w-10 text-green-500 opacity-80" />
              </div>
            </div>

            {/* Active Enrollments */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Courses</p>
                  <p className="text-3xl font-bold text-gray-900">{activeEnrollments}</p>
                  <p className="text-sm text-gray-500 mt-1">In progress</p>
                </div>
                <AcademicCapIcon className="h-10 w-10 text-blue-500 opacity-80" />
              </div>
            </div>

            {/* Pending Payments */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Payments</p>
                  <p className="text-3xl font-bold text-gray-900">{pendingPayments}</p>
                  <p className="text-sm text-yellow-600 mt-1">Requires attention</p>
                </div>
                <ExclamationTriangleIcon className="h-10 w-10 text-yellow-500 opacity-80" />
              </div>
            </div>
          </div>

          {/* Quick Actions Row */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <SparklesIcon className="h-5 w-5 text-[#8B0000]" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/admin/create-users"
                className="flex items-center justify-center px-4 py-3 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
              >
                <UserPlusIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">Create Users</span>
              </Link>
              <Link
                href="/admin/bulk-email"
                className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">Send Emails</span>
              </Link>
              <Link
                href="/admin/reports"
                className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <ChartBarIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">View Reports</span>
              </Link>
              <Link
                href="/admin/settings"
                className="flex items-center justify-center px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                <CogIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">Settings</span>
              </Link>
            </div>
          </div>

          {/* Legacy AdminStats component for compatibility */}
          <AdminStats
            totalLearners={totalLearners}
            totalEnrollments={totalEnrollments}
            totalPayments={totalPayments}
            totalCertificates={totalCertificates}
          />
        </div>

        {/* Action Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <DocumentCheckIcon className="h-6 w-6 text-[#8B0000]" />
                File Management
              </h3>
              <p className="text-gray-600 mt-1">Upload homework and course materials</p>
            </div>
            <div className="p-6">
              <FileUploadSection />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <UserGroupIcon className="h-6 w-6 text-[#8B0000]" />
                Roster Management
              </h3>
              <p className="text-gray-600 mt-1">Bulk enroll students from CSV files</p>
            </div>
            <div className="p-6">
              <RosterUploadSection />
            </div>
          </div>
        </div>

        {/* Recent Activity & Enrollments Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity Feed */}
          <div className="bg-white rounded-2xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <ClockIcon className="h-6 w-6 text-[#8B0000]" />
                Recent Activity
              </h3>
              <p className="text-gray-600 mt-1">Latest platform activity and updates</p>
            </div>
            <div className="p-6">
              <RecentActivity />
            </div>
          </div>

          {/* Recent Enrollments */}
          <div className="bg-white rounded-2xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                <AcademicCapIcon className="h-6 w-6 text-[#8B0000]" />
                Recent Enrollments
              </h3>
              <p className="text-gray-600 mt-1">Latest student registrations and course enrollments</p>
            </div>
            <div className="p-6">
              <RecentEnrollments />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
