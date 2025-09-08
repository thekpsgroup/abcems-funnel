import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !(session as { user?: { id?: string } }).user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { enrollmentId, lessonId, completed } = await req.json()

    if (!enrollmentId || !lessonId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Verify enrollment belongs to user
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        id: enrollmentId,
        userId: (session as { user: { id: string } }).user.id
      },
      include: {
        course: true
      }
    })

    if (!enrollment) {
      return NextResponse.json({ error: "Enrollment not found" }, { status: 404 })
    }

    // Track lesson progress (simplified - in real app this would be more sophisticated)
    // For now, we'll just update the enrollment with progress
    // const progress = completed ? 100 : 50 // Simplified progress calculation

    const updatedEnrollment = await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: {
        status: completed ? "completed" : "assigned"
      },
      include: {
        course: true,
        certificates: true
      }
    })

    // Generate certificate if course is completed
    if (completed && !updatedEnrollment.certificates.length) {
      await prisma.certificate.create({
        data: {
          userId: (session as { user: { id: string } }).user.id,
          courseId: enrollment.courseId,
          enrollmentId: enrollmentId,
          issuedAt: new Date(),
          pdfKey: `CERT-${Date.now()}`, // placeholder for PDF file
          pdfUrl: `CERT-${Date.now()}.pdf` // placeholder for PDF URL
        }
      })
    }

    return NextResponse.json({
      success: true,
      enrollment: updatedEnrollment,
      certificateGenerated: completed && !updatedEnrollment.certificates.length
    })
  } catch (error) {
    console.error("Error tracking progress:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
