"use client"

import { useState, useEffect } from "react"
import {
  XMarkIcon,
  PencilIcon,
  KeyIcon,
  EnvelopeIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  ClockIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface User {
  id: string
  email: string
  name: string | null
  role: string
  createdAt: string
  updatedAt: string
  enrollmentsCount: number
  paymentsCount: number
  certificatesCount: number
  lastLogin?: string
}

interface UserDetailModalProps {
  user: User | null
  isOpen: boolean
  onClose: () => void
  onUpdate: () => void
}

export function UserDetailModal({ user, isOpen, onClose, onUpdate }: UserDetailModalProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState<Partial<User>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setEditedUser(user)
    }
  }, [user])

  if (!isOpen || !user) return null

  const handleSave = async () => {
    setLoading(true)
    try {
      // In a real app, this would call an API
      toast.success("User updated successfully!")
      setIsEditing(false)
      onUpdate()
    } catch {
      toast.error("Failed to update user")
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = () => {
    // In a real app, this would send a password reset email
    toast.success("Password reset email sent!")
  }

  const handleSendEmail = () => {
    // In a real app, this would open email composer
    toast.success("Email composer opened!")
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-[#8B0000] rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-lg">
                {(user.name || user.email).charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">
                {user.name || 'Unnamed User'}
              </h2>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <PencilIcon className="h-4 w-4 mr-2" />
                Edit
              </button>
            )}
            {isEditing && (
              <button
                onClick={handleSave}
                disabled={loading}
                className="flex items-center px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editedUser.name || ''}
                        onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{user.name || 'Not provided'}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={editedUser.email}
                        onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{user.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    {isEditing ? (
                      <select
                        value={editedUser.role}
                        onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                      >
                        <option value="LEARNER">Student</option>
                        <option value="INSTRUCTOR">Instructor</option>
                        <option value="ADMIN">Admin</option>
                      </select>
                    ) : (
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' :
                        user.role === 'INSTRUCTOR' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Account Dates */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Account Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Member since</span>
                    <span className="text-sm text-gray-900">{formatDate(user.createdAt)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Last updated</span>
                    <span className="text-sm text-gray-900">{formatDate(user.updatedAt)}</span>
                  </div>
                  {user.lastLogin && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Last login</span>
                      <span className="text-sm text-gray-900">{formatDate(user.lastLogin)}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Statistics and Actions */}
            <div className="space-y-6">
              {/* Statistics */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Activity Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <AcademicCapIcon className="h-8 w-8 text-blue-600" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-blue-600">Enrollments</p>
                        <p className="text-2xl font-bold text-blue-900">{user.enrollmentsCount}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="h-8 w-8 text-green-600" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-600">Payments</p>
                        <p className="text-2xl font-bold text-green-900">{user.paymentsCount}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <DocumentTextIcon className="h-8 w-8 text-purple-600" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-purple-600">Certificates</p>
                        <p className="text-2xl font-bold text-purple-900">{user.certificatesCount}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <ClockIcon className="h-8 w-8 text-orange-600" />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-orange-600">Status</p>
                        <p className="text-sm font-bold text-orange-900">Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button
                    onClick={handleResetPassword}
                    className="w-full flex items-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <KeyIcon className="h-5 w-5 mr-3" />
                    Send Password Reset
                  </button>

                  <button
                    onClick={handleSendEmail}
                    className="w-full flex items-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <EnvelopeIcon className="h-5 w-5 mr-3" />
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
