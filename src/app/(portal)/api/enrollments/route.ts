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

    const userId = (session as { user: { id: string } }).user.id

    // Fetch user's enrollments with course details
    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: userId
      },
      include: {
        course: {
          include: {
            modules: {
              where: { isActive: true },
              include: {
                lessons: {
                  where: { isActive: true },
                  include: {
                    progress: {
                      where: { userId: userId }
                    }
                  }
                },
                progress: {
                  where: { userId: userId }
                }
              },
              orderBy: { order: 'asc' }
            }
          }
        },
        certificates: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(enrollments)
  } catch (error) {
    console.error("Error fetching enrollments:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
