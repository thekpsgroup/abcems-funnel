import { prisma } from "./prisma"
import { uploadFile } from "./storage"

export interface UploadRosterParams {
  file: File
  courseId: string
}

export interface RosterResult {
  usersCreated: number
  enrollmentsCreated: number
}

export async function uploadRoster({ file, courseId }: UploadRosterParams): Promise<RosterResult> {
  // First upload the file to storage
  const { key } = await uploadFile({
    file,
    type: "ROSTER",
    courseId
  })

  // Parse CSV content
  const csvContent = await file.text()
  const lines = csvContent.split('\n').filter(line => line.trim())
  
  if (lines.length < 2) {
    throw new Error("CSV must have at least a header row and one data row")
  }

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase())
  const emailIndex = headers.findIndex(h => h.includes('email'))
  const nameIndex = headers.findIndex(h => h.includes('name'))

  if (emailIndex === -1) {
    throw new Error("CSV must have an 'email' column")
  }

  let usersCreated = 0
  let enrollmentsCreated = 0

  // Process each row
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',').map(v => v.trim())
    const email = values[emailIndex]
    const name = nameIndex !== -1 ? values[nameIndex] : null

    if (!email) continue

    try {
      // Create or find user
      let user = await prisma.user.findUnique({
        where: { email }
      })

      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
            name: name || null,
            role: "LEARNER"
          }
        })
        usersCreated++
      }

      // Create enrollment if it doesn't exist
      const existingEnrollment = await prisma.enrollment.findFirst({
        where: {
          userId: user.id,
          courseId
        }
      })

      if (!existingEnrollment) {
        await prisma.enrollment.create({
          data: {
            userId: user.id,
            courseId,
            status: "assigned"
          }
        })
        enrollmentsCreated++
      }
    } catch (error) {
      console.error(`Error processing row ${i + 1}:`, error)
      // Continue processing other rows
    }
  }

  return { usersCreated, enrollmentsCreated }
}
