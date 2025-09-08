"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from "react-hot-toast"
import {
  EnvelopeIcon,
  UsersIcon,
  PaperAirplaneIcon,
  EyeIcon,
  SparklesIcon
} from "@heroicons/react/24/outline"

const emailSchema = z.object({
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  recipientGroup: z.enum(["all", "learners", "instructors", "recent"]),
  includeCredentials: z.boolean()
})

type EmailFormData = z.infer<typeof emailSchema>

const recipientGroups = {
  all: "All Users",
  learners: "Students Only",
  instructors: "Instructors Only",
  recent: "Recent Signups (Last 7 days)"
}

export default function BulkEmailPage() {
  const [loading, setLoading] = useState(false)
  const [previewMode, setPreviewMode] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      includeCredentials: false
    }
  })

  const watchedValues = watch()

  const onSubmit = async (data: EmailFormData) => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/send-bulk-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to send emails")

      toast.success("Emails sent successfully!")
    } catch {
      toast.error("Failed to send emails. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const generatePreview = () => {
    const preview = `Subject: ${watchedValues.subject}

Dear Student,

${watchedValues.message}

${watchedValues.includeCredentials ? "\nYour login credentials:\nEmail: student@example.com\nPassword: generated_password\n\nLogin at: https://abcems.com/auth/signin" : ""}

Best regards,
ABCEMS Solutions Team`

    return preview
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <EnvelopeIcon className="h-8 w-8 mr-3 text-[#8B0000]" />
            Bulk Email System
          </h1>
          <p className="text-gray-600">
            Send personalized emails to groups of users instantly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Email Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <PaperAirplaneIcon className="h-6 w-6 mr-2 text-[#8B0000]" />
              Compose Email
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Recipient Group */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Recipient Group
                </label>
                <select
                  {...register("recipientGroup")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                >
                  {Object.entries(recipientGroups).map(([key, label]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
                {errors.recipientGroup && (
                  <p className="text-red-500 text-sm mt-1">{errors.recipientGroup.message}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject Line
                </label>
                <input
                  type="text"
                  {...register("subject")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="Welcome to ABCEMS!"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="Dear Student,

Welcome to ABCEMS Solutions! We're excited to have you join our community...

Best regards,
ABCEMS Team"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Include Credentials */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  {...register("includeCredentials")}
                  className="h-4 w-4 text-[#8B0000] focus:ring-[#8B0000] border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Include login credentials in email
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="flex-1 flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <EyeIcon className="h-5 w-5 mr-2" />
                  {previewMode ? "Hide Preview" : "Preview Email"}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-3 px-4 rounded-lg font-medium hover:from-[#A52A2A] hover:to-[#8B0000] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                      Send Emails
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <SparklesIcon className="h-6 w-6 mr-2 text-[#8B0000]" />
              Email Preview
            </h2>

            {previewMode && watchedValues.subject && watchedValues.message ? (
              <div className="bg-gray-50 rounded-lg p-4 border">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Subject:</label>
                    <p className="text-sm text-gray-900 bg-white p-2 rounded border mt-1">
                      {watchedValues.subject}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Recipients:</label>
                    <div className="flex items-center mt-1">
                      <UsersIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">
                        {recipientGroups[watchedValues.recipientGroup as keyof typeof recipientGroups]}
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Message Preview:</label>
                    <div className="text-sm text-gray-800 bg-white p-3 rounded border mt-1 whitespace-pre-wrap font-mono">
                      {generatePreview()}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <EnvelopeIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500">
                  {previewMode ? "Fill out the form to see preview" : "Click 'Preview Email' to see how your email will look"}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Email Templates Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => {
                // This would update the form fields with welcome template
                alert("Welcome template applied!")
              }}
              className="p-4 border border-gray-200 rounded-lg hover:border-[#8B0000] hover:bg-red-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900">Welcome Email</h4>
              <p className="text-sm text-gray-600 mt-1">New student welcome message</p>
            </button>

            <button
              onClick={() => alert("Course update template applied!")}
              className="p-4 border border-gray-200 rounded-lg hover:border-[#8B0000] hover:bg-red-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900">Course Update</h4>
              <p className="text-sm text-gray-600 mt-1">Notify about course changes</p>
            </button>

            <button
              onClick={() => alert("Payment reminder template applied!")}
              className="p-4 border border-gray-200 rounded-lg hover:border-[#8B0000] hover:bg-red-50 transition-colors text-left"
            >
              <h4 className="font-medium text-gray-900">Payment Reminder</h4>
              <p className="text-sm text-gray-600 mt-1">Outstanding payment notifications</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
