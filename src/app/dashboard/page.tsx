import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { StudentDashboard } from "@/components/StudentDashboard"
import Image from "next/image"
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  BellIcon
} from "@heroicons/react/24/outline"

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
                  <AcademicCapIcon className="h-8 w-8" />
                  Student Dashboard
                </h1>
                <p className="text-[#DAA520] font-medium">Your Learning Journey</p>
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
                <BellIcon className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <BookOpenIcon className="h-6 w-6 text-[#8B0000]" />
            Your Courses & Progress
          </h2>
        </div>
        
        <StudentDashboard 
          enrollments={enrollments}
          files={files}
        />
      </div>
    </div>
  )
}

