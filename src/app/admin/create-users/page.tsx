"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from "react-hot-toast"
import { useDropzone } from "react-dropzone"
import { 
  UserPlusIcon, 
  EyeIcon, 
  EyeSlashIcon,
  ClipboardDocumentIcon,
  DocumentArrowUpIcon,
  EnvelopeIcon,
  SparklesIcon,
  UsersIcon,
  BoltIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline"

const createUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["ADMIN", "INSTRUCTOR", "LEARNER"]),
})

type CreateUserFormData = z.infer<typeof createUserSchema>

interface CreatedUser {
  id: string
  email: string
  name: string | null
  role: string
  password: string
}

export default function CreateUsersPage() {
  const [createdUsers, setCreatedUsers] = useState<CreatedUser[]>([])
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>({})
  const [loading, setLoading] = useState(false)
  const [bulkLoading, setBulkLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<"single" | "bulk">("single")
  const [bulkResults, setBulkResults] = useState<Array<{ success: boolean; user?: CreatedUser; error?: string }>>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserSchema),
  })

  const onSubmit = async (data: CreateUserFormData) => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to create user")
      }

      const result = await response.json()
      setCreatedUsers(prev => [...prev, result.user])
      toast.success("User created successfully!")
      reset()
    } catch (error) {
      toast.error("Failed to create user. Please try again.")
      console.error("Error creating user:", error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success("Copied to clipboard!")
  }

  const togglePasswordVisibility = (userId: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }))
  }

  // One-click functions
  const copyAllCredentials = () => {
    const credentials = createdUsers.map(user => 
      `Email: ${user.email}\nPassword: ${user.password}\nRole: ${user.role}\n---`
    ).join('\n')
    navigator.clipboard.writeText(credentials)
    toast.success("All credentials copied to clipboard!")
  }

  const generateEmailTemplate = () => {
    const template = createdUsers.map(user => 
      `Subject: Your ABCEMS Login Credentials

Hi ${user.name || 'Student'},

Welcome to ABCEMS Solutions! Here are your login credentials:

Email: ${user.email}
Password: ${user.password}

You can log in at: ${window.location.origin}/auth/signin

If you have any questions, please don't hesitate to contact us.

Best regards,
ABCEMS Solutions Team`
    ).join('\n\n' + '='.repeat(50) + '\n\n')
    
    navigator.clipboard.writeText(template)
    toast.success("Email template copied to clipboard!")
  }

  const generateRandomPassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let password = ""
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
  }

  // Bulk CSV upload
  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    setBulkLoading(true)
    try {
      const text = await file.text()
      const lines = text.split('\n').filter(line => line.trim())
      const users = []

      for (let i = 1; i < lines.length; i++) { // Skip header
        const [name, email, role = "LEARNER"] = lines[i].split(',').map(s => s.trim())
        if (email && name) {
          users.push({ name, email, role, password: generateRandomPassword() })
        }
      }

      const response = await fetch("/api/admin/bulk-create-users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ users }),
      })

      if (!response.ok) throw new Error("Bulk creation failed")

      const results: Array<{ success: boolean; user?: CreatedUser; error?: string }> = await response.json()
      setBulkResults(results)
      setCreatedUsers(prev => [...prev, ...results.filter((r) => r.success).map((r) => r.user!)])
      toast.success(`Created ${results.filter((r) => r.success).length} users successfully!`)
    } catch {
      toast.error("Failed to process CSV file")
    } finally {
      setBulkLoading(false)
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'text/csv': ['.csv'] },
    multiple: false
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <SparklesIcon className="h-8 w-8 mr-3 text-[#8B0000]" />
            User Management Portal
          </h1>
          <p className="text-gray-600">
            Create user accounts with one-click functionality. Perfect for sending login credentials to students.
          </p>
        </div>

        {/* Quick Action Buttons */}
        {createdUsers.length > 0 && (
          <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BoltIcon className="h-5 w-5 mr-2 text-[#8B0000]" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={copyAllCredentials}
                className="flex items-center justify-center px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <ClipboardDocumentIcon className="h-5 w-5 mr-2 text-blue-600" />
                <span className="text-blue-800 font-medium">Copy All Credentials</span>
              </button>
              <button
                onClick={generateEmailTemplate}
                className="flex items-center justify-center px-4 py-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2 text-green-600" />
                <span className="text-green-800 font-medium">Generate Email Template</span>
              </button>
              <button
                onClick={() => setCreatedUsers([])}
                className="flex items-center justify-center px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <CheckCircleIcon className="h-5 w-5 mr-2 text-gray-600" />
                <span className="text-gray-800 font-medium">Clear List</span>
              </button>
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("single")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "single"
                    ? "border-[#8B0000] text-[#8B0000]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <UserPlusIcon className="h-5 w-5 inline mr-2" />
                Single User
              </button>
              <button
                onClick={() => setActiveTab("bulk")}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === "bulk"
                    ? "border-[#8B0000] text-[#8B0000]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                <UsersIcon className="h-5 w-5 inline mr-2" />
                Bulk Upload
              </button>
            </nav>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create User Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {activeTab === "single" ? (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <UserPlusIcon className="h-6 w-6 mr-2 text-[#8B0000]" />
                  Create Single User
                </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="student@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="flex space-x-2">
                  <input
                    type="password"
                    {...register("password")}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const randomPassword = generateRandomPassword()
                      // Update the form field value
                      const passwordInput = document.querySelector('input[name="password"]') as HTMLInputElement
                      if (passwordInput) {
                        passwordInput.value = randomPassword
                        // Trigger form validation
                        passwordInput.dispatchEvent(new Event('input', { bubbles: true }))
                      }
                    }}
                    className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                  >
                    Generate
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  {...register("role")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                >
                  <option value="LEARNER">Student</option>
                  <option value="INSTRUCTOR">Instructor</option>
                  <option value="ADMIN">Admin</option>
                </select>
                {errors.role && (
                  <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-3 px-4 rounded-lg font-medium hover:from-[#A52A2A] hover:to-[#8B0000] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <UserPlusIcon className="h-5 w-5 mr-2" />
                    Create User
                  </>
                )}
              </button>
            </form>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <UsersIcon className="h-6 w-6 mr-2 text-[#8B0000]" />
                  Bulk Upload Users
                </h2>

                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                    isDragActive
                      ? "border-[#8B0000] bg-red-50"
                      : "border-gray-300 hover:border-gray-400"
                  } ${bulkLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <input {...getInputProps()} disabled={bulkLoading} />
                  <DocumentArrowUpIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  {isDragActive ? (
                    <p className="text-lg font-medium text-[#8B0000]">
                      Drop the CSV file here...
                    </p>
                  ) : (
                    <div>
                      <p className="text-lg font-medium text-gray-900 mb-2">
                        Drag & drop your CSV file here, or click to select
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        CSV format: name, email, role (optional)
                      </p>
                      {bulkLoading && (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#8B0000] mr-2"></div>
                          <span className="text-[#8B0000]">Processing...</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">CSV Format Example:</h3>
                  <pre className="text-sm text-blue-800 bg-blue-100 p-2 rounded">
{`name, email, role
John Doe, john@example.com, LEARNER
Jane Smith, jane@example.com, INSTRUCTOR
Bob Johnson, bob@example.com, LEARNER`}
                  </pre>
                </div>
              </>
            )}
          </div>

          {/* Created Users List */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Recently Created Users
            </h2>

            {createdUsers.length === 0 ? (
              <div className="text-center py-8">
                <UserPlusIcon className="mx-auto h-12 w-12 text-gray-400" />
                <p className="text-gray-500 mt-2">No users created yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {createdUsers.map((user) => (
                  <div key={user.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{user.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.role === "ADMIN" ? "bg-red-100 text-red-800" :
                        user.role === "INSTRUCTOR" ? "bg-blue-100 text-blue-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {user.role}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Email:</span>
                        <div className="flex items-center">
                          <span className="text-sm font-mono">{user.email}</span>
                          <button
                            onClick={() => copyToClipboard(user.email)}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                          >
                            <ClipboardDocumentIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Password:</span>
                        <div className="flex items-center">
                          <span className="text-sm font-mono">
                            {showPasswords[user.id] ? user.password : "••••••••"}
                          </span>
                          <button
                            onClick={() => togglePasswordVisibility(user.id)}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                          >
                            {showPasswords[user.id] ? (
                              <EyeSlashIcon className="h-4 w-4" />
                            ) : (
                              <EyeIcon className="h-4 w-4" />
                            )}
                          </button>
                          <button
                            onClick={() => copyToClipboard(user.password)}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                          >
                            <ClipboardDocumentIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">How to Use</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Fill out the form with the user&apos;s email, name, and desired password</li>
            <li>Select the appropriate role (Student, Instructor, or Admin)</li>
            <li>Click &quot;Create User&quot; to generate the account</li>
            <li>Copy the email and password from the &quot;Recently Created Users&quot; section</li>
            <li>Send the credentials to the user via email or text message</li>
            <li>They can now log in at <code className="bg-blue-100 px-1 rounded">/auth/signin</code></li>
          </ol>
        </div>
      </div>
    </div>
  )
}
