import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { AttendanceManager } from "@/components/AttendanceManager"
import {
  AcademicCapIcon,
  ClipboardDocumentCheckIcon
} from "@heroicons/react/24/outline"

export default async function InstructorDashboard() {
  const session = await getServerSession(authOptions)
  
  if (!session || !(session as { user?: { role?: string; id?: string } }).user || ((session as { user: { role: string; id: string } }).user.role !== "ADMIN" && (session as { user: { role: string; id: string } }).user.role !== "INSTRUCTOR")) {
    redirect("/auth/signin")
  }

  const sessions = await prisma.session.findMany({
    where: { instructorId: (session as { user: { id: string } }).user.id },
    include: {
      course: { 
        select: { 
          title: true,
          enrollments: {
            include: {
              user: { select: { name: true, email: true } },
              certificates: true
            }
          }
        } 
      }
    },
    orderBy: { startsAt: "desc" }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <ClipboardDocumentCheckIcon className="h-6 w-6 text-[#8B0000]" />
            Your Teaching Sessions
          </h2>
        </div>
        
        <div className="space-y-6">
          {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#8B0000] mb-2">{session.course.title}</h3>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <AcademicCapIcon className="h-5 w-5" />
                      <span>{session.startsAt.toLocaleDateString()} at {session.startsAt.toLocaleTimeString()}</span>
                    </div>
                    {session.location && (
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{session.location}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {session.course.enrollments.length} enrolled
                  </div>
                </div>
              </div>
              
              <AttendanceManager 
                sessionId={session.id}
                enrollments={session.course.enrollments}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

