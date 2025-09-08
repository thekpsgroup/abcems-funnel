"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from "react-hot-toast"
import { 
  CloudArrowUpIcon, 
  DocumentIcon, 
  XMarkIcon,
  ExclamationTriangleIcon
} from "@heroicons/react/24/outline"

const uploadSchema = z.object({
  courseId: z.string().min(1, "Please select a course"),
  fileType: z.enum(["HOMEWORK", "ROSTER", "DOC"]),
})

type UploadFormData = z.infer<typeof uploadSchema>

interface EnhancedFileUploadProps {
  onUpload: (data: { courseId: string; fileType: string; file: File }) => Promise<void>
  courses: Array<{ id: string; title: string }>
  title: string
  description: string
  acceptedFileTypes?: Record<string, string[]>
  maxFiles?: number
}

export function EnhancedFileUpload({
  onUpload,
  courses,
  title,
  description,
  acceptedFileTypes = {
    "HOMEWORK": [".pdf"],
    "ROSTER": [".csv"],
    "DOC": [".pdf", ".doc", ".docx"]
  },
  maxFiles = 1
}: EnhancedFileUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<UploadFormData>({
    resolver: zodResolver(uploadSchema)
  })

  const selectedFileType = watch("fileType")
  const selectedCourseId = watch("courseId")

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > maxFiles) {
      toast.error(`Only ${maxFiles} file(s) allowed`)
      return
    }
    setUploadedFiles(acceptedFiles)
  }, [maxFiles])

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: selectedFileType ? {
      [acceptedFileTypes[selectedFileType]?.join(",") || "*"]: acceptedFileTypes[selectedFileType] || []
    } : undefined,
    maxFiles,
    disabled: !selectedFileType || !selectedCourseId
  })

  const onSubmit = async (data: UploadFormData) => {
    if (uploadedFiles.length === 0) {
      toast.error("Please select a file to upload")
      return
    }

    setUploading(true)
    setUploadProgress(0)

    let progressInterval: NodeJS.Timeout | null = null
    
    try {
      // Simulate progress
      progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            if (progressInterval) clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      await onUpload({
        courseId: data.courseId,
        fileType: data.fileType,
        file: uploadedFiles[0]
      })

      if (progressInterval) clearInterval(progressInterval)
      setUploadProgress(100)
      
      toast.success("File uploaded successfully!")
      setUploadedFiles([])
      reset()
      
      setTimeout(() => {
        setUploadProgress(0)
        setUploading(false)
      }, 1000)
    } catch (error) {
      if (progressInterval) clearInterval(progressInterval)
      setUploadProgress(0)
      setUploading(false)
      toast.error("Upload failed. Please try again.")
      console.error("Upload error:", error)
    }
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Course Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Course
          </label>
          <select
            {...register("courseId")}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
          >
            <option value="">Choose a course...</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
          {errors.courseId && (
            <p className="text-red-500 text-sm mt-1">{errors.courseId.message}</p>
          )}
        </div>

        {/* File Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            File Type
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "HOMEWORK", label: "Homework", icon: "📚" },
              { value: "ROSTER", label: "Roster", icon: "👥" },
              { value: "DOC", label: "Document", icon: "📄" }
            ].map((type) => (
              <label
                key={type.value}
                className={`relative flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedFileType === type.value
                    ? "border-[#8B0000] bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  value={type.value}
                  {...register("fileType")}
                  className="sr-only"
                />
                <div className="text-center">
                  <div className="text-2xl mb-1">{type.icon}</div>
                  <div className="text-sm font-medium">{type.label}</div>
                </div>
              </label>
            ))}
          </div>
          {errors.fileType && (
            <p className="text-red-500 text-sm mt-1">{errors.fileType.message}</p>
          )}
        </div>

        {/* File Upload Area */}
        {selectedFileType && selectedCourseId && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload File
            </label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                isDragActive
                  ? "border-[#8B0000] bg-red-50"
                  : "border-gray-300 hover:border-gray-400"
              } ${uploading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <input {...getInputProps()} disabled={uploading} />
              <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              {isDragActive ? (
                <p className="text-lg font-medium text-[#8B0000]">
                  Drop the file here...
                </p>
              ) : (
                <div>
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Drag & drop your file here, or click to select
                  </p>
                  <p className="text-sm text-gray-500">
                    Accepted formats: {acceptedFileTypes[selectedFileType]?.join(", ")}
                  </p>
                </div>
              )}
            </div>

            {/* File Rejections */}
            {fileRejections.length > 0 && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-500 mr-2" />
                  <p className="text-sm text-red-700">Some files were rejected:</p>
                </div>
                <ul className="mt-2 text-sm text-red-600">
                  {fileRejections.map(({ file, errors }) => (
                    <li key={file.name}>
                      {file.name}: {errors.map(e => e.message).join(", ")}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <div className="flex items-center">
                      <DocumentIcon className="h-5 w-5 text-green-500 mr-3" />
                      <div>
                        <p className="text-sm font-medium text-green-900">{file.name}</p>
                        <p className="text-xs text-green-600">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-green-500 hover:text-green-700"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Upload Progress */}
            {uploading && (
              <div className="mt-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-[#8B0000] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedFileType || !selectedCourseId || uploadedFiles.length === 0 || uploading}
          className="w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-3 px-4 rounded-lg font-medium hover:from-[#A52A2A] hover:to-[#8B0000] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {uploading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Uploading...
            </>
          ) : (
            <>
              <CloudArrowUpIcon className="h-5 w-5 mr-2" />
              Upload File
            </>
          )}
        </button>
      </form>
    </div>
  )
}
