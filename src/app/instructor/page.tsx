import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { AttendanceManager } from "@/components/AttendanceManager"

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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-kps-navy text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src="/logo.jpg" alt="ABCEMS Solutions" className="h-10 w-auto" />
              <div>
                <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
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
        <h2 className="text-3xl font-bold text-kps-navy mb-8">Your Sessions</h2>
        
        <div className="space-y-6">
          {sessions.map((session) => (
            <div key={session.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-kps-navy">{session.course.title}</h3>
                  <p className="text-gray-600">
                    {session.startsAt.toLocaleDateString()} at {session.startsAt.toLocaleTimeString()}
                  </p>
                  {session.location && (
                    <p className="text-gray-600">Location: {session.location}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">
                    {session.course.enrollments.length} enrolled
                  </p>
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
