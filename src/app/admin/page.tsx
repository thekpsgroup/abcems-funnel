import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { AdminStats } from "@/components/AdminStats"
import { FileUploadSection } from "@/components/FileUploadSection"
import { RosterUploadSection } from "@/components/RosterUploadSection"
import { RecentEnrollments } from "@/components/RecentEnrollments"

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions)
  
  if (!session || session.user.role !== "ADMIN") {
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-kps-navy text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="ABCEMS Solutions" className="h-10 w-auto" />
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-kps-gold">ABCEMS Solutions Management</p>
              </div>
            </div>
            <div className="text-sm">
              Welcome, {session.user.name || session.user.email}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <AdminStats 
          totalLearners={totalLearners}
          totalEnrollments={totalEnrollments}
          totalPayments={totalPayments}
          totalCertificates={totalCertificates}
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          <FileUploadSection />
          <RosterUploadSection />
        </div>

        <div className="mt-8">
          <RecentEnrollments />
        </div>
      </div>
    </div>
  )
}
