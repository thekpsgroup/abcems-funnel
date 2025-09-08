import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { createBulkUsers } from "@/lib/user-management"

export async function POST(req: NextRequest) {
  try {
    // Check if user is authenticated and is admin
    const session = await getServerSession(authOptions)
    
    if (!session || !(session as { user?: { role?: string } }).user || (session as { user: { role: string } }).user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { users } = await req.json()

    if (!users || !Array.isArray(users)) {
      return NextResponse.json({ error: "Invalid users data" }, { status: 400 })
    }

    const results = await createBulkUsers(users)

    return NextResponse.json(results)
  } catch (error) {
    console.error("Error creating bulk users:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
