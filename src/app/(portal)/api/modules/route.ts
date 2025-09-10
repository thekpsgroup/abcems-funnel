import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !(session as { user?: { id?: string; role?: string } }).user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userId = (session as { user: { id: string; role: string } }).user.id
    const userRole = (session as { user: { role: string } }).user.role

    const { searchParams } = new URL(req.url)
    const courseId = searchParams.get('courseId')

    if (!courseId) {
      return NextResponse.json({ error: "Course ID is required" }, { status: 400 })
    }

    // Check if user is enrolled in the course or is an admin/instructor
    if (userRole !== 'ADMIN' && userRole !== 'INSTRUCTOR') {
      const enrollment = await prisma.enrollment.findFirst({
        where: {
          courseId: courseId,
          userId: userId
        }
      })

      if (!enrollment) {
        return NextResponse.json({ error: "Not enrolled in this course" }, { status: 403 })
      }
    }

    const modules = await prisma.module.findMany({
      where: {
        courseId: courseId,
        isActive: true
      },
      include: {
        lessons: {
          where: { isActive: true },
          orderBy: { order: 'asc' }
        },
        progress: userRole === 'LEARNER' ? {
          where: { userId: userId }
        } : false
      },
      orderBy: { order: 'asc' }
    })

    return NextResponse.json({ modules })
  } catch (error) {
    console.error("Error fetching modules:", error)
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

    const { courseId, title, description, estimatedTime } = await req.json()

    if (!courseId || !title) {
      return NextResponse.json({ error: "Course ID and title are required" }, { status: 400 })
    }

    // Get the highest order number for this course
    const lastModule = await prisma.module.findFirst({
      where: { courseId: courseId },
      orderBy: { order: 'desc' }
    })

    const newOrder = (lastModule?.order || 0) + 1

    const moduleData = await prisma.module.create({
      data: {
        courseId,
        title,
        description,
        estimatedTime: estimatedTime || 30,
        order: newOrder
      }
    })

    return NextResponse.json({ module: moduleData })
  } catch (error) {
    console.error("Error creating module:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
