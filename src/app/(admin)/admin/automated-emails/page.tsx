"use client"

import { useState } from "react"
import {
  CogIcon,
  PlayIcon,
  PauseIcon,
  ClockIcon,
  EnvelopeIcon,
  UserPlusIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface AutomatedTrigger {
  id: string
  name: string
  description: string
  event: string
  templateId: string
  templateName: string
  isActive: boolean
  conditions: string[]
  delayMinutes: number
  sentCount: number
  successRate: number
  lastTriggered?: string
  createdAt: string
}

const eventIcons = {
  user_registration: UserPlusIcon,
  course_enrollment: AcademicCapIcon,
  payment_successful: CurrencyDollarIcon,
  course_completion: TrophyIcon,
  payment_failed: ExclamationTriangleIcon,
  course_reminder: ClockIcon
}

const eventLabels = {
  user_registration: "New User Registration",
  course_enrollment: "Course Enrollment",
  payment_successful: "Payment Successful",
  course_completion: "Course Completion",
  payment_failed: "Payment Failed",
  course_reminder: "Course Reminder"
}

const eventColors = {
  user_registration: "bg-blue-100 text-blue-800",
  course_enrollment: "bg-green-100 text-green-800",
  payment_successful: "bg-purple-100 text-purple-800",
  course_completion: "bg-yellow-100 text-yellow-800",
  payment_failed: "bg-red-100 text-red-800",
  course_reminder: "bg-orange-100 text-orange-800"
}

const defaultTriggers: AutomatedTrigger[] = [
  {
    id: "welcome-email",
    name: "Welcome Email",
    description: "Send welcome email to new users immediately after registration",
    event: "user_registration",
    templateId: "welcome",
    templateName: "Welcome Email",
    isActive: true,
    conditions: [],
    delayMinutes: 0,
    sentCount: 45,
    successRate: 98.5,
    lastTriggered: "2024-12-15T14:30:00Z",
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "enrollment-confirmation",
    name: "Enrollment Confirmation",
    description: "Send course enrollment confirmation with details",
    event: "course_enrollment",
    templateId: "enrollment_confirmation",
    templateName: "Course Enrollment Confirmation",
    isActive: true,
    conditions: [],
    delayMinutes: 5,
    sentCount: 32,
    successRate: 97.2,
    lastTriggered: "2024-12-15T13:45:00Z",
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "payment-confirmation",
    name: "Payment Confirmation",
    description: "Send payment confirmation with receipt details",
    event: "payment_successful",
    templateId: "payment_confirmation",
    templateName: "Payment Confirmation",
    isActive: true,
    conditions: ["amount > 0"],
    delayMinutes: 2,
    sentCount: 28,
    successRate: 99.1,
    lastTriggered: "2024-12-15T12:30:00Z",
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "completion-certificate",
    name: "Course Completion Certificate",
    description: "Send certificate when student completes a course",
    event: "course_completion",
    templateId: "course_completion",
    templateName: "Course Completion Certificate",
    isActive: true,
    conditions: ["grade >= 70"],
    delayMinutes: 30,
    sentCount: 15,
    successRate: 95.8,
    lastTriggered: "2024-12-14T16:20:00Z",
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "payment-failure",
    name: "Payment Failure Notification",
    description: "Notify users when payment fails with retry instructions",
    event: "payment_failed",
    templateId: "payment_failed",
    templateName: "Payment Failed",
    isActive: false,
    conditions: [],
    delayMinutes: 1,
    sentCount: 0,
    successRate: 0,
    createdAt: "2024-01-01T00:00:00Z"
  },
  {
    id: "course-reminder",
    name: "Course Start Reminder",
    description: "Remind students 24 hours before their course starts",
    event: "course_reminder",
    templateId: "course_reminder",
    templateName: "Course Start Reminder",
    isActive: false,
    conditions: ["hours_until_start = 24"],
    delayMinutes: 0,
    sentCount: 0,
    successRate: 0,
    createdAt: "2024-01-01T00:00:00Z"
  }
]

export default function AutomatedEmailsPage() {
  const [triggers, setTriggers] = useState<AutomatedTrigger[]>(defaultTriggers)
  const [selectedTrigger, setSelectedTrigger] = useState<AutomatedTrigger | null>(null)
  const [showDetails, setShowDetails] = useState(false)

  const toggleTriggerStatus = (triggerId: string) => {
    setTriggers(prev => prev.map(trigger =>
      trigger.id === triggerId
        ? { ...trigger, isActive: !trigger.isActive }
        : trigger
    ))
    toast.success("Trigger status updated!")
  }

  const testTrigger = (trigger: AutomatedTrigger) => {
    toast.success(`Test email sent for "${trigger.name}" trigger!`)
  }

  const viewTriggerDetails = (trigger: AutomatedTrigger) => {
    setSelectedTrigger(trigger)
    setShowDetails(true)
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Never'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatDelay = (minutes: number) => {
    if (minutes === 0) return 'Immediate'
    if (minutes < 60) return `${minutes} minutes`
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    if (remainingMinutes === 0) return `${hours} hours`
    return `${hours}h ${remainingMinutes}m`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <CogIcon className="h-8 w-8 mr-3 text-[#8B0000]" />
                Automated Email Triggers
              </h1>
              <p className="text-gray-600">
                Configure automated email sending based on user actions and system events
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm text-gray-500">System Status</div>
                <div className="flex items-center text-green-600">
                  <CheckCircleIcon className="h-5 w-5 mr-1" />
                  <span className="font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Triggers</p>
                  <p className="text-3xl font-bold text-green-600">
                    {triggers.filter(t => t.isActive).length}
                  </p>
                </div>
                <PlayIcon className="h-10 w-10 text-green-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Emails Sent</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {triggers.reduce((sum, t) => sum + t.sentCount, 0)}
                  </p>
                </div>
                <EnvelopeIcon className="h-10 w-10 text-blue-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Success Rate</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {Math.round(triggers.reduce((sum, t) => sum + t.successRate, 0) / triggers.length)}%
                  </p>
                </div>
                <ChartBarIcon className="h-10 w-10 text-purple-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Events Monitored</p>
                  <p className="text-3xl font-bold text-orange-600">
                    {new Set(triggers.map(t => t.event)).size}
                  </p>
                </div>
                <ClockIcon className="h-10 w-10 text-orange-500 opacity-80" />
              </div>
            </div>
          </div>
        </div>

        {/* Triggers List */}
        <div className="space-y-6">
          {triggers.map((trigger) => {
            const EventIcon = eventIcons[trigger.event as keyof typeof eventIcons]
            return (
              <div key={trigger.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-[#8B0000] rounded-lg flex items-center justify-center">
                          <EventIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {trigger.name}
                          </h3>
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${eventColors[trigger.event as keyof typeof eventColors]}`}>
                            {eventLabels[trigger.event as keyof typeof eventLabels]}
                          </span>
                          {trigger.isActive ? (
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                              Inactive
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-3">{trigger.description}</p>

                        {/* Trigger Details */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Template:</span>
                            <div className="font-medium text-gray-900">{trigger.templateName}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Delay:</span>
                            <div className="font-medium text-gray-900">{formatDelay(trigger.delayMinutes)}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Sent:</span>
                            <div className="font-medium text-gray-900">{trigger.sentCount} emails</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Success Rate:</span>
                            <div className="font-medium text-gray-900">{trigger.successRate}%</div>
                          </div>
                        </div>

                        {trigger.conditions.length > 0 && (
                          <div className="mt-3">
                            <span className="text-gray-500 text-sm">Conditions:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {trigger.conditions.map((condition, index) => (
                                <span
                                  key={index}
                                  className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded"
                                >
                                  {condition}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-3 text-xs text-gray-500">
                          Last triggered: {formatDate(trigger.lastTriggered || '')}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex space-x-3">
                      <button
                        onClick={() => viewTriggerDetails(trigger)}
                        className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <ClockIcon className="h-4 w-4 mr-2" />
                        View Details
                      </button>
                      <button
                        onClick={() => testTrigger(trigger)}
                        className="flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <PlayIcon className="h-4 w-4 mr-2" />
                        Test Trigger
                      </button>
                    </div>

                    <button
                      onClick={() => toggleTriggerStatus(trigger.id)}
                      className={`flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
                        trigger.isActive
                          ? 'bg-red-100 text-red-700 hover:bg-red-200'
                          : 'bg-green-100 text-green-700 hover:bg-green-200'
                      }`}
                    >
                      {trigger.isActive ? (
                        <>
                          <PauseIcon className="h-4 w-4 mr-2" />
                          Deactivate
                        </>
                      ) : (
                        <>
                          <PlayIcon className="h-4 w-4 mr-2" />
                          Activate
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trigger Details Modal */}
        {showDetails && selectedTrigger && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Trigger Details</h2>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <XCircleIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{selectedTrigger.name}</h3>
                    <p className="text-gray-600">{selectedTrigger.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                      <div className="flex items-center">
                        <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${eventColors[selectedTrigger.event as keyof typeof eventColors]}`}>
                          {eventLabels[selectedTrigger.event as keyof typeof eventLabels]}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Template Used</label>
                      <p className="text-gray-900">{selectedTrigger.templateName}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Delay</label>
                      <p className="text-gray-900">{formatDelay(selectedTrigger.delayMinutes)}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        selectedTrigger.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedTrigger.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>

                  {/* Performance Stats */}
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">Performance Statistics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-blue-600">Emails Sent</div>
                        <div className="text-2xl font-bold text-blue-900">{selectedTrigger.sentCount}</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-green-600">Success Rate</div>
                        <div className="text-2xl font-bold text-green-900">{selectedTrigger.successRate}%</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-sm font-medium text-purple-600">Last Triggered</div>
                        <div className="text-sm font-bold text-purple-900">{formatDate(selectedTrigger.lastTriggered || '')}</div>
                      </div>
                    </div>
                  </div>

                  {selectedTrigger.conditions.length > 0 && (
                    <div>
                      <h4 className="text-md font-medium text-gray-900 mb-3">Trigger Conditions</h4>
                      <div className="space-y-2">
                        {selectedTrigger.conditions.map((condition, index) => (
                          <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                            <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />
                            <span className="text-gray-900">{condition}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
