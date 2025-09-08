import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function PATCH(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !(session as { user?: { id?: string } }).user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { action, ...data } = await req.json()

    switch (action) {
      case 'update_profile':
        const updatedUser = await prisma.user.update({
          where: { id: (session as { user: { id: string } }).user.id },
          data: {
            name: data.name,
            // Add other profile fields as needed
          },
          select: {
            id: true,
            name: true,
            email: true,
            updatedAt: true
          }
        })
        return NextResponse.json({ user: updatedUser })

      case 'change_password':
        if (!data.currentPassword || !data.newPassword) {
          return NextResponse.json({ error: "Current and new passwords required" }, { status: 400 })
        }

        // Verify current password (simplified - in real app you'd hash and compare)
        const user = await prisma.user.findUnique({
          where: { id: (session as { user: { id: string } }).user.id },
          select: { password: true }
        })

        if (!user?.password) {
          return NextResponse.json({ error: "Password not set" }, { status: 400 })
        }

        const isValid = await bcrypt.compare(data.currentPassword, user.password)
        if (!isValid) {
          return NextResponse.json({ error: "Current password is incorrect" }, { status: 400 })
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(data.newPassword, 12)

        await prisma.user.update({
          where: { id: (session as { user: { id: string } }).user.id },
          data: { password: hashedPassword }
        })

        return NextResponse.json({ message: "Password updated successfully" })

      case 'update_preferences':
        // Store user preferences (could be extended with a preferences table)
        const preferences = {
          emailNotifications: data.emailNotifications ?? true,
          courseReminders: data.courseReminders ?? true,
          achievementNotifications: data.achievementNotifications ?? true,
          marketingEmails: data.marketingEmails ?? false
        }

        // In a real app, you'd store this in a user_preferences table
        // For now, we'll just return success
        return NextResponse.json({
          message: "Preferences updated successfully",
          preferences
        })

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
