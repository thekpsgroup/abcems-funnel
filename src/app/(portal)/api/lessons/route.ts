import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !(session as { user?: { id?: string } }).user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const moduleId = searchParams.get('moduleId')

    if (!moduleId) {
      return NextResponse.json({ error: "Module ID is required" }, { status: 400 })
    }

    const lesson = await prisma.lesson.findFirst({
      where: {
        id: moduleId,
        isActive: true
      },
      include: {
        module: {
          include: {
            course: true
          }
        }
      }
    })

    if (!lesson) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 })
    }

    // Check if user has access to this lesson's course
    const userId = (session as { user: { id: string } }).user.id
    const userRole = (session as { user: { role: string } }).user.role

    if (userRole !== 'ADMIN' && userRole !== 'INSTRUCTOR') {
      const enrollment = await prisma.enrollment.findFirst({
        where: {
          courseId: lesson.module.courseId,
          userId: userId
        }
      })

      if (!enrollment) {
        return NextResponse.json({ error: "Not enrolled in this course" }, { status: 403 })
      }
    }

    // Get user's progress for this lesson
    const progress = await prisma.lessonProgress.findUnique({
      where: {
        userId_lessonId: {
          userId: userId,
          lessonId: lesson.id
        }
      }
    })

    return NextResponse.json({
      lesson: {
        ...lesson,
        progress: progress || null
      }
    })
  } catch (error) {
    console.error("Error fetching lesson:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !(session as { user?: { id?: string; role?: string } }).user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userRole = (session as { user: { role: string } }).user.role

    if (userRole !== 'ADMIN' && userRole !== 'INSTRUCTOR') {
      return NextResponse.json({ error: "Insufficient permissions" }, { status: 403 })
    }

    const { moduleId, title, content, estimatedTime, pdfUrl } = await req.json()

    if (!moduleId || !title) {
      return NextResponse.json({ error: "Module ID and title are required" }, { status: 400 })
    }

    // Get the highest order number for this module
    const lastLesson = await prisma.lesson.findFirst({
      where: { moduleId: moduleId },
      orderBy: { order: 'desc' }
    })

    const newOrder = (lastLesson?.order || 0) + 1

    const lesson = await prisma.lesson.create({
      data: {
        moduleId,
        title,
        content,
        estimatedTime: estimatedTime || 15,
        order: newOrder,
        pdfUrl,
        pdfDownloadUrl: pdfUrl // For now, same as public URL
      }
    })

    return NextResponse.json({ lesson })
  } catch (error) {
    console.error("Error creating lesson:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
