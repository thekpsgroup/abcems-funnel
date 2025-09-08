import { put } from "@vercel/blob"
import { prisma } from "./prisma"

export interface UploadFileParams {
  file: File
  type: "HOMEWORK" | "ROSTER" | "DOC"
  courseId?: string
  uploadedBy?: string
}

export async function uploadFile({ 
  file, 
  type, 
  courseId, 
  uploadedBy = "admin" 
}: UploadFileParams) {
  const timestamp = Date.now()
  const fileName = `${timestamp}-${file.name}`
  
  let pathname: string
  
  if (type === "HOMEWORK") {
    const version = "v1" // TODO: Implement versioning
    pathname = courseId 
      ? `homework/${courseId}/${version}/${fileName}`
      : `homework/general/${version}/${fileName}`
  } else if (type === "ROSTER") {
    pathname = `rosters/${timestamp}/${fileName}`
  } else {
    pathname = `docs/general/${fileName}`
  }

  // Upload to Vercel Blob
  const blob = await put(pathname, file, {
    access: 'public',
  })

  // Save file record to database
  await prisma.file.create({
    data: {
      type,
      courseId: courseId || null,
      fileName: file.name,
      storageKey: blob.url, // Store the full URL as the key
      url: blob.url,
      downloadUrl: blob.downloadUrl,
      uploadedBy,
    },
  })

  return { key: blob.url, url: blob.url }
}

export async function getFileUrl(storageKey: string): Promise<string> {
  // For Vercel Blob, the storageKey is already the full URL
  return storageKey
}
