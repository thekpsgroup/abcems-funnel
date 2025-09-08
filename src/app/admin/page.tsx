import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { AdminStats } from "@/components/AdminStats"
import { FileUploadSection } from "@/components/FileUploadSection"
import { RosterUploadSection } from "@/components/RosterUploadSection"
import { RecentEnrollments } from "@/components/RecentEnrollments"
import Image from "next/image"
import { 
  UserGroupIcon, 
  AcademicCapIcon, 
  DocumentCheckIcon,
  ChartBarIcon,
  CogIcon
} from "@heroicons/react/24/outline"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  
  if (!session || !(session as { user?: { role?: string } }).user || (session as { user: { role: string } }).user.role !== "ADMIN") {
    redirect("/auth/signin")
  }

  const stats = await Promise.all([
    prisma.user.count({ where: { role: "LEARNER" } }),
    prisma.enrollment.count(),
    prisma.payment.count({ where: { status: "paid" } }),
    prisma.certificate.count()
  ])

  const [totalLearners, totalEnrollments, totalPayments, totalCertificates] = stats

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
        {/* Quick Stats Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ChartBarIcon className="h-6 w-6 text-[#8B0000]" />
            System Overview
          </h2>
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

        {/* Recent Activity */}
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
  )
}
