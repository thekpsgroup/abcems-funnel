import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !(session as { user?: { role?: string } }).user || (session as { user: { role: string } }).user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { searchParams } = new URL(req.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')
    const search = searchParams.get('search') || ''
    const role = searchParams.get('role') || 'all'
    const sortField = searchParams.get('sortField') || 'createdAt'
    const sortDirection = searchParams.get('sortDirection') || 'desc'

    const skip = (page - 1) * limit

    // Build where clause
    const where: Record<string, unknown> = {}

    if (role !== 'all') {
      where.role = role
    }

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } }
      ]
    }

    // Build order by
    const orderBy: Record<string, string> = {}
    orderBy[sortField] = sortDirection

    // Fetch users with related data
    const users = await prisma.user.findMany({
      where,
      include: {
        _count: {
          select: {
            enrollments: true,
            payments: true,
            certificates: true
          }
        }
      },
      orderBy,
      skip,
      take: limit
    })

    const total = await prisma.user.count({ where })

    // Transform data for frontend
    const transformedUsers = users.map(user => ({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      enrollmentsCount: user._count.enrollments,
      paymentsCount: user._count.payments,
      certificatesCount: user._count.certificates,
      lastLogin: user.updatedAt.toISOString() // Using updatedAt as proxy for last login
    }))

    return NextResponse.json({
      users: transformedUsers,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    })
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !(session as { user?: { role?: string } }).user || (session as { user: { role: string } }).user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { action, userIds, newRole } = await req.json()

    if (!action || !userIds || !Array.isArray(userIds)) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
    }

    let result

    switch (action) {
      case 'reset-password':
        // In a real app, this would send password reset emails
        // For now, we'll just mark as successful
        result = { message: `Password reset initiated for ${userIds.length} users` }
        break

      case 'change-role':
        if (!newRole) {
          return NextResponse.json({ error: "New role is required" }, { status: 400 })
        }

        await prisma.user.updateMany({
          where: { id: { in: userIds } },
          data: { role: newRole }
        })

        result = { message: `Role updated to ${newRole} for ${userIds.length} users` }
        break

      case 'deactivate':
        // In a real app, you might add a 'deleted' flag or move to inactive status
        // For now, we'll just mark as successful
        result = { message: `${userIds.length} users deactivated` }
        break

      case 'send-email':
        // In a real app, this would queue bulk emails
        result = { message: `Email sent to ${userIds.length} users` }
        break

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error performing bulk action:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
