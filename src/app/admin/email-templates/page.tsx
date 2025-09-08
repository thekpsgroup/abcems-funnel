"use client"

import { useState } from "react"
import {
  EnvelopeIcon,
  PencilIcon,
  EyeIcon,
  PlusIcon,
  DocumentTextIcon,
  UserPlusIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  ClockIcon,
  PaperAirplaneIcon,
  CogIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface EmailTemplate {
  id: string
  name: string
  subject: string
  content: string
  trigger: string
  variables: string[]
  isActive: boolean
  createdAt: string
  lastModified: string
  usageCount: number
}

const defaultTemplates: EmailTemplate[] = [
  {
    id: "welcome",
    name: "Welcome Email",
    subject: "Welcome to ABCEMS Solutions!",
    content: `Hi {{firstName}},

Welcome to ABCEMS Solutions! We're excited to have you join our community of healthcare professionals.

Your account has been created successfully with the following details:
- Email: {{email}}
- Account Type: {{role}}
- Login URL: {{loginUrl}}

If you have any questions, don't hesitate to reach out to our support team.

Best regards,
ABCEMS Solutions Team`,
    trigger: "user_registration",
    variables: ["firstName", "email", "role", "loginUrl"],
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    lastModified: "2024-12-15T10:00:00Z",
    usageCount: 45
  },
  {
    id: "enrollment_confirmation",
    name: "Course Enrollment Confirmation",
    subject: "You're enrolled in {{courseName}}!",
    content: `Hi {{firstName}},

Congratulations! You've successfully enrolled in {{courseName}}.

Course Details:
- Course: {{courseName}}
- Instructor: {{instructorName}}
- Duration: {{courseDuration}} hours
- Price: {{coursePrice}}
- Start Date: {{startDate}}

You can access your course materials by logging into your dashboard at {{dashboardUrl}}.

If you have any questions about the course, feel free to reach out to your instructor or our support team.

Best regards,
ABCEMS Solutions Team`,
    trigger: "course_enrollment",
    variables: ["firstName", "courseName", "instructorName", "courseDuration", "coursePrice", "startDate", "dashboardUrl"],
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    lastModified: "2024-12-14T15:30:00Z",
    usageCount: 32
  },
  {
    id: "payment_confirmation",
    name: "Payment Confirmation",
    subject: "Payment Confirmation - ABCEMS Solutions",
    content: `Hi {{firstName}},

Thank you for your payment! Your transaction has been processed successfully.

Payment Details:
- Amount: {{amount}}
- Transaction ID: {{transactionId}}
- Date: {{paymentDate}}
- Payment Method: {{paymentMethod}}

Course Access:
{{enrolledCourses}}

You can now access all your enrolled courses through your dashboard at {{dashboardUrl}}.

If you have any questions about your payment or courses, please contact our support team.

Best regards,
ABCEMS Solutions Team`,
    trigger: "payment_successful",
    variables: ["firstName", "amount", "transactionId", "paymentDate", "paymentMethod", "enrolledCourses", "dashboardUrl"],
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    lastModified: "2024-12-13T12:15:00Z",
    usageCount: 28
  },
  {
    id: "course_completion",
    name: "Course Completion Certificate",
    subject: "Congratulations! You've completed {{courseName}}",
    content: `Hi {{firstName}},

Congratulations on completing {{courseName}}! 🎉

Course Completion Details:
- Course: {{courseName}}
- Completion Date: {{completionDate}}
- Total Hours: {{courseDuration}} hours
- Grade: {{grade}}%
- Certificate ID: {{certificateId}}

Your certificate has been attached to this email. You can also download it anytime from your dashboard at {{dashboardUrl}}.

This certification demonstrates your commitment to excellence in healthcare education and will be a valuable addition to your professional credentials.

Continue your learning journey with our other courses!

Best regards,
ABCEMS Solutions Team`,
    trigger: "course_completion",
    variables: ["firstName", "courseName", "completionDate", "courseDuration", "grade", "certificateId", "dashboardUrl"],
    isActive: true,
    createdAt: "2024-01-01T00:00:00Z",
    lastModified: "2024-12-12T14:45:00Z",
    usageCount: 15
  }
]

const triggerIcons = {
  user_registration: UserPlusIcon,
  course_enrollment: AcademicCapIcon,
  payment_successful: CurrencyDollarIcon,
  course_completion: TrophyIcon
}

const triggerLabels = {
  user_registration: "New User Registration",
  course_enrollment: "Course Enrollment",
  payment_successful: "Payment Successful",
  course_completion: "Course Completion"
}

const triggerColors = {
  user_registration: "bg-blue-100 text-blue-800",
  course_enrollment: "bg-green-100 text-green-800",
  payment_successful: "bg-purple-100 text-purple-800",
  course_completion: "bg-yellow-100 text-yellow-800"
}

export default function EmailTemplatesPage() {
  const [templates, setTemplates] = useState<EmailTemplate[]>(defaultTemplates)
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null)
  const [showPreview, setShowPreview] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [editingTemplate, setEditingTemplate] = useState<EmailTemplate | null>(null)

  const toggleTemplateStatus = (templateId: string) => {
    setTemplates(prev => prev.map(template =>
      template.id === templateId
        ? { ...template, isActive: !template.isActive }
        : template
    ))
    toast.success("Template status updated!")
  }

  const previewTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template)
    setShowPreview(true)
  }

  const editTemplate = (template: EmailTemplate) => {
    setEditingTemplate(template)
    setShowCreate(true)
  }

  const duplicateTemplate = (template: EmailTemplate) => {
    const newTemplate: EmailTemplate = {
      ...template,
      id: `duplicate-${Date.now()}`,
      name: `${template.name} (Copy)`,
      isActive: false,
      createdAt: new Date().toISOString(),
      lastModified: new Date().toISOString(),
      usageCount: 0
    }
    setTemplates(prev => [newTemplate, ...prev])
    toast.success("Template duplicated!")
  }

  const deleteTemplate = (templateId: string) => {
    setTemplates(prev => prev.filter(template => template.id !== templateId))
    toast.success("Template deleted!")
  }

  const sendTestEmail = (template: EmailTemplate) => {
    toast.success(`Test email sent for "${template.name}"!`)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <EnvelopeIcon className="h-8 w-8 mr-3 text-[#8B0000]" />
                Email Templates
              </h1>
              <p className="text-gray-600">
                Create and manage automated email templates for user communications
              </p>
            </div>
            <button
              onClick={() => setShowCreate(true)}
              className="flex items-center px-6 py-3 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Create Template
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Templates</p>
                  <p className="text-3xl font-bold text-gray-900">{templates.length}</p>
                </div>
                <DocumentTextIcon className="h-10 w-10 text-[#8B0000] opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Templates</p>
                  <p className="text-3xl font-bold text-green-600">
                    {templates.filter(t => t.isActive).length}
                  </p>
                </div>
                <PaperAirplaneIcon className="h-10 w-10 text-green-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Emails Sent</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {templates.reduce((sum, t) => sum + t.usageCount, 0)}
                  </p>
                </div>
                <EnvelopeIcon className="h-10 w-10 text-blue-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Automated Triggers</p>
                  <p className="text-3xl font-bold text-purple-600">{templates.length}</p>
                </div>
                <CogIcon className="h-10 w-10 text-purple-500 opacity-80" />
              </div>
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template) => {
            const TriggerIcon = triggerIcons[template.trigger as keyof typeof triggerIcons]
            return (
              <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {template.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${triggerColors[template.trigger as keyof typeof triggerColors]}`}>
                          {triggerLabels[template.trigger as keyof typeof triggerLabels]}
                        </span>
                        {template.isActive ? (
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                            Inactive
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 ml-4">
                      <TriggerIcon className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    Subject: {template.subject}
                  </p>

                  {/* Template Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Used {template.usageCount} times</span>
                    <span>Last modified {formatDate(template.lastModified)}</span>
                  </div>
                </div>

                {/* Variables */}
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <p className="text-xs font-medium text-gray-600 mb-2">Available Variables:</p>
                  <div className="flex flex-wrap gap-1">
                    {template.variables.map((variable) => (
                      <span
                        key={variable}
                        className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded"
                      >
                        {`{{${variable}}}`}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => previewTemplate(template)}
                        className="flex items-center px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <EyeIcon className="h-4 w-4 mr-2" />
                        Preview
                      </button>
                      <button
                        onClick={() => editTemplate(template)}
                        className="flex items-center px-3 py-2 bg-blue-100 text-blue-700 text-sm rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <PencilIcon className="h-4 w-4 mr-2" />
                        Edit
                      </button>
                    </div>

                    <div className="flex space-x-2">
                      <button
                        onClick={() => sendTestEmail(template)}
                        className="flex items-center px-3 py-2 bg-green-100 text-green-700 text-sm rounded-lg hover:bg-green-200 transition-colors"
                      >
                        <PaperAirplaneIcon className="h-4 w-4 mr-2" />
                        Test
                      </button>
                      <button
                        onClick={() => toggleTemplateStatus(template.id)}
                        className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                          template.isActive
                            ? 'bg-red-100 text-red-700 hover:bg-red-200'
                            : 'bg-green-100 text-green-700 hover:bg-green-200'
                        }`}
                      >
                        {template.isActive ? 'Deactivate' : 'Activate'}
                      </button>
                    </div>
                  </div>

                  {/* Additional Actions */}
                  <div className="flex space-x-2 mt-3">
                    <button
                      onClick={() => duplicateTemplate(template)}
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-purple-100 text-purple-700 text-sm rounded-lg hover:bg-purple-200 transition-colors"
                    >
                      <DocumentTextIcon className="h-4 w-4 mr-2" />
                      Duplicate
                    </button>
                    <button
                      onClick={() => deleteTemplate(template.id)}
                      className="flex-1 flex items-center justify-center px-3 py-2 bg-red-100 text-red-700 text-sm rounded-lg hover:bg-red-200 transition-colors"
                    >
                      <ClockIcon className="h-4 w-4 mr-2" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {templates.length === 0 && (
          <div className="text-center py-12">
            <EnvelopeIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg mb-2">No email templates found</p>
            <p className="text-gray-400 mb-6">Create your first automated email template</p>
            <button
              onClick={() => setShowCreate(true)}
              className="inline-flex items-center px-6 py-3 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Create Template
            </button>
          </div>
        )}

        {/* Preview Modal */}
        {showPreview && selectedTemplate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Email Preview</h2>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ClockIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <div className="bg-gray-100 p-3 rounded-lg">
                      {selectedTemplate.subject}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                    <div className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap font-mono text-sm">
                      {selectedTemplate.content}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Variables Used</label>
                    <div className="flex flex-wrap gap-2">
                      {selectedTemplate.variables.map((variable) => (
                        <span
                          key={variable}
                          className="inline-flex px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
                        >
                          {`{{${variable}}}`}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create/Edit Modal Placeholder */}
        {showCreate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {editingTemplate ? 'Edit Template' : 'Create New Template'}
                </h2>
                <button
                  onClick={() => {
                    setShowCreate(false)
                    setEditingTemplate(null)
                  }}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <ClockIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="text-center py-12">
                  <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-2">Template Editor Coming Soon</p>
                  <p className="text-gray-400">Rich text editor with variable insertion and preview functionality</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
