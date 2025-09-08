import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { StudentDashboard } from "@/components/StudentDashboard"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  
  if (!session || !(session as { user?: { id?: string } }).user) {
    redirect("/auth/signin")
  }

  const enrollments = await prisma.enrollment.findMany({
    where: { userId: (session as { user: { id: string } }).user.id },
    include: {
      course: { select: { title: true, description: true } },
      certificates: true
    },
    orderBy: { createdAt: "desc" }
  })

  const files = await prisma.file.findMany({
    where: {
      OR: [
        { type: "HOMEWORK", courseId: null }, // General homework
        { type: "HOMEWORK", course: { enrollments: { some: { userId: (session as { user: { id: string } }).user.id } } } } // Course-specific homework
      ]
    },
    orderBy: { createdAt: "desc" }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-kps-navy text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="ABCEMS Solutions" className="h-10 w-auto" />
              <div>
                <h1 className="text-2xl font-bold">Student Dashboard</h1>
                <p className="text-kps-gold">ABCEMS Solutions</p>
              </div>
            </div>
            <div className="text-sm">
              Welcome, {(session as { user: { name?: string; email: string } }).user.name || (session as { user: { name?: string; email: string } }).user.email}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <StudentDashboard 
          enrollments={enrollments}
          files={files}
        />
      </div>
    </div>
  )
}
