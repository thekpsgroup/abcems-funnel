import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { createUserWithPassword } from "@/lib/user-management"

export async function POST(req: NextRequest) {
  try {
    // Check if user is authenticated and is admin
    const session = await getServerSession(authOptions)
    
    if (!session || !(session as { user?: { role?: string } }).user || (session as { user: { role: string } }).user.role !== "ADMIN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { email, name, password, role } = await req.json()

    if (!email || !name || !password || !role) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const user = await createUserWithPassword({
      email,
      name,
      password,
      role,
    })

    return NextResponse.json({ 
      success: true, 
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        password, // Return the plain password for display
      }
    })
  } catch (error) {
    console.error("Error creating user:", error)
    
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 400 })
    }
    
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
