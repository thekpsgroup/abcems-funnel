import bcrypt from "bcryptjs"
import { prisma } from "./prisma"

export async function createUserWithPassword({
  email,
  name,
  password,
  role = "LEARNER"
}: {
  email: string
  name?: string
  password: string
  role?: "ADMIN" | "INSTRUCTOR" | "LEARNER"
}) {
  const hashedPassword = await bcrypt.hash(password, 12)
  
  return await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role,
    },
  })
}

export async function updateUserPassword(userId: string, newPassword: string) {
  const hashedPassword = await bcrypt.hash(newPassword, 12)
  
  return await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  })
}

export async function generateRandomPassword(length = 8): Promise<string> {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let password = ""
  
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  
  return password
}

export async function createBulkUsers(users: Array<{
  email: string
  name?: string
  role?: "ADMIN" | "INSTRUCTOR" | "LEARNER"
}>) {
  const results = []
  
  for (const user of users) {
    try {
      const password = await generateRandomPassword()
      const createdUser = await createUserWithPassword({
        ...user,
        password,
      })
      
      results.push({
        success: true,
        user: createdUser,
        password,
      })
    } catch (error) {
      results.push({
        success: false,
        email: user.email,
        error: error instanceof Error ? error.message : "Unknown error",
      })
    }
  }
  
  return results
}
