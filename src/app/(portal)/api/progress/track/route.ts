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

    const { enrollmentId, lessonId, moduleId, completed, timeSpent, notes } = await req.json()
    const userId = (session as { user: { id: string } }).user.id

    if (!enrollmentId) {
      return NextResponse.json({ error: "Missing enrollment ID" }, { status: 400 })
    }

    // Verify enrollment belongs to user
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        id: enrollmentId,
        userId: userId
      },
      include: {
        course: true
      }
    })

    if (!enrollment) {
      return NextResponse.json({ error: "Enrollment not found" }, { status: 404 })
    }

    const now = new Date()

    // Track lesson progress if lessonId provided
    if (lessonId) {
      const existingProgress = await prisma.lessonProgress.findUnique({
        where: {
          userId_lessonId: {
            userId: userId,
            lessonId: lessonId
          }
        }
      })

      if (existingProgress) {
        // Update existing progress
        await prisma.lessonProgress.update({
          where: {
            userId_lessonId: {
              userId: userId,
              lessonId: lessonId
            }
          },
          data: {
            timeSpent: {
              increment: timeSpent || 0
            },
            isCompleted: completed || existingProgress.isCompleted,
            completedAt: completed ? now : existingProgress.completedAt,
            notes: notes || existingProgress.notes,
            updatedAt: now
          }
        })
      } else {
        // Create new progress record
        await prisma.lessonProgress.create({
          data: {
            userId: userId,
            lessonId: lessonId,
            timeSpent: timeSpent || 0,
            isCompleted: completed || false,
            completedAt: completed ? now : null,
            notes: notes
          }
        })
      }
    }

    // Track module progress if moduleId provided
    if (moduleId) {
      const existingModuleProgress = await prisma.moduleProgress.findUnique({
        where: {
          userId_moduleId: {
            userId: userId,
            moduleId: moduleId
          }
        }
      })

      if (existingModuleProgress) {
        // Update existing module progress
        await prisma.moduleProgress.update({
          where: {
            userId_moduleId: {
              userId: userId,
              moduleId: moduleId
            }
          },
          data: {
            timeSpent: {
              increment: timeSpent || 0
            },
            isCompleted: completed || existingModuleProgress.isCompleted,
            completedAt: completed ? now : existingModuleProgress.completedAt,
            updatedAt: now
          }
        })
      } else {
        // Create new module progress record
        await prisma.moduleProgress.create({
          data: {
            userId: userId,
            moduleId: moduleId,
            timeSpent: timeSpent || 0,
            isCompleted: completed || false,
            completedAt: completed ? now : null
          }
        })
      }
    }

    // Calculate overall course progress
    const courseModules = await prisma.module.findMany({
      where: { courseId: enrollment.courseId, isActive: true },
      include: {
        lessons: {
          where: { isActive: true }
        }
      }
    })

    let totalLessons = 0
    let completedLessons = 0

    for (const module of courseModules) {
      totalLessons += module.lessons.length

      for (const lesson of module.lessons) {
        const progress = await prisma.lessonProgress.findUnique({
          where: {
            userId_lessonId: {
              userId: userId,
              lessonId: lesson.id
            }
          }
        })
        if (progress?.isCompleted) {
          completedLessons++
        }
      }
    }

    const courseProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

    // Update enrollment status based on progress
    let newStatus = "assigned"
    if (courseProgress >= 100) {
      newStatus = "completed"
    } else if (courseProgress > 0) {
      newStatus = "in_progress"
    }

    const updatedEnrollment = await prisma.enrollment.update({
      where: { id: enrollmentId },
      data: { status: newStatus },
      include: {
        course: true,
        certificates: true
      }
    })

    // Generate certificate if course is completed and no certificate exists
    if (courseProgress >= 100 && !updatedEnrollment.certificates.length) {
      await prisma.certificate.create({
        data: {
          userId: userId,
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
      progress: {
        completedLessons,
        totalLessons,
        courseProgress
      },
      certificateGenerated: courseProgress >= 100 && !updatedEnrollment.certificates.length
    })
  } catch (error) {
    console.error("Error tracking progress:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
