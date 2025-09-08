"use client"

import { useState, useEffect, useMemo } from "react"
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  KeyIcon,
  UserGroupIcon,
  EnvelopeIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  XCircleIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"
import { UserDetailModal } from "@/components/UserDetailModal"

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

type SortField = 'name' | 'email' | 'role' | 'createdAt' | 'enrollmentsCount'
type SortDirection = 'asc' | 'desc'

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState<string>("all")
  const [sortField, setSortField] = useState<SortField>('createdAt')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [showBulkActions, setShowBulkActions] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [showUserModal, setShowUserModal] = useState(false)
  const usersPerPage = 20

  // Mock data for demonstration - in real app this would come from API
  useEffect(() => {
    const mockUsers: User[] = [
      {
        id: "1",
        email: "john.doe@example.com",
        name: "John Doe",
        role: "LEARNER",
        createdAt: "2024-12-01T10:00:00Z",
        updatedAt: "2024-12-15T14:30:00Z",
        enrollmentsCount: 3,
        paymentsCount: 2,
        certificatesCount: 1,
        lastLogin: "2024-12-15T14:30:00Z"
      },
      {
        id: "2",
        email: "jane.smith@example.com",
        name: "Jane Smith",
        role: "INSTRUCTOR",
        createdAt: "2024-11-15T09:00:00Z",
        updatedAt: "2024-12-14T16:45:00Z",
        enrollmentsCount: 0,
        paymentsCount: 0,
        certificatesCount: 0,
        lastLogin: "2024-12-14T16:45:00Z"
      },
      {
        id: "3",
        email: "bob.johnson@example.com",
        name: "Bob Johnson",
        role: "LEARNER",
        createdAt: "2024-12-10T11:30:00Z",
        updatedAt: "2024-12-13T13:15:00Z",
        enrollmentsCount: 1,
        paymentsCount: 1,
        certificatesCount: 0,
        lastLogin: "2024-12-13T13:15:00Z"
      },
      {
        id: "4",
        email: "alice.wilson@example.com",
        name: "Alice Wilson",
        role: "ADMIN",
        createdAt: "2024-10-01T08:00:00Z",
        updatedAt: "2024-12-15T12:00:00Z",
        enrollmentsCount: 0,
        paymentsCount: 0,
        certificatesCount: 0,
        lastLogin: "2024-12-15T12:00:00Z"
      }
    ]

    setTimeout(() => {
      setUsers(mockUsers)
      setLoading(false)
    }, 1000)
  }, [])

  // Filter and sort users
  const filteredAndSortedUsers = useMemo(() => {
    const filtered = users.filter(user => {
      const matchesSearch = user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesRole = roleFilter === "all" || user.role === roleFilter
      return matchesSearch && matchesRole
    })

    filtered.sort((a, b) => {
      let aValue: string | number | null = a[sortField as keyof User] as string | number | null
      let bValue: string | number | null = b[sortField as keyof User] as string | number | null

      if (sortField === 'name') {
        aValue = a.name || ''
        bValue = b.name || ''
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase()
        bValue = (bValue as string)?.toLowerCase() || ''
      }

      if (aValue === null && bValue === null) return 0
      if (aValue === null) return sortDirection === 'asc' ? -1 : 1
      if (bValue === null) return sortDirection === 'asc' ? 1 : -1

      if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
      if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
      return 0
    })

    return filtered
  }, [users, searchQuery, roleFilter, sortField, sortDirection])

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedUsers.length / usersPerPage)
  const paginatedUsers = filteredAndSortedUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  )

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    )
  }

  const handleSelectAll = () => {
    setSelectedUsers(
      selectedUsers.length === paginatedUsers.length
        ? []
        : paginatedUsers.map(user => user.id)
    )
  }

  const handleBulkAction = async (action: string) => {
    if (selectedUsers.length === 0) {
      toast.error("Please select users first")
      return
    }

    try {
      // In real app, this would call an API
      switch (action) {
        case 'reset-password':
          toast.success(`Password reset initiated for ${selectedUsers.length} users`)
          break
        case 'change-role':
          toast.success(`Role update initiated for ${selectedUsers.length} users`)
          break
        case 'deactivate':
          toast.success(`${selectedUsers.length} users deactivated`)
          break
        case 'send-email':
          toast.success(`Email sent to ${selectedUsers.length} users`)
          break
      }
      setSelectedUsers([])
      setShowBulkActions(false)
    } catch {
      toast.error("Bulk action failed")
    }
  }

  const exportUsers = () => {
    const csvData = filteredAndSortedUsers.map(user => ({
      Name: user.name || '',
      Email: user.email,
      Role: user.role,
      'Created Date': new Date(user.createdAt).toLocaleDateString(),
      'Enrollments': user.enrollmentsCount,
      'Payments': user.paymentsCount,
      'Certificates': user.certificatesCount,
      'Last Login': user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'
    }))

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `users-export-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
    toast.success("Users exported successfully!")
  }

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return null
    return sortDirection === 'asc'
      ? <ChevronUpIcon className="h-4 w-4" />
      : <ChevronDownIcon className="h-4 w-4" />
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading users...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <UserGroupIcon className="h-8 w-8 mr-3 text-[#8B0000]" />
            User Management
          </h1>
          <p className="text-gray-600">
            Comprehensive user administration with search, filtering, and bulk operations
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
              />
            </div>

            {/* Filters and Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FunnelIcon className="h-5 w-5 mr-2" />
                Filters
              </button>

              <button
                onClick={exportUsers}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Export
              </button>

              {selectedUsers.length > 0 && (
                <button
                  onClick={() => setShowBulkActions(!showBulkActions)}
                  className="flex items-center px-4 py-2 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
                >
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  Bulk Actions ({selectedUsers.length})
                </button>
              )}
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex gap-4 items-center">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  >
                    <option value="all">All Roles</option>
                    <option value="LEARNER">Students</option>
                    <option value="INSTRUCTOR">Instructors</option>
                    <option value="ADMIN">Admins</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Bulk Actions Panel */}
          {showBulkActions && selectedUsers.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex gap-3">
                <button
                  onClick={() => handleBulkAction('reset-password')}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <KeyIcon className="h-4 w-4 mr-2" />
                  Reset Passwords
                </button>
                <button
                  onClick={() => handleBulkAction('send-email')}
                  className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <EnvelopeIcon className="h-4 w-4 mr-2" />
                  Send Email
                </button>
                <button
                  onClick={() => handleBulkAction('deactivate')}
                  className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <XCircleIcon className="h-4 w-4 mr-2" />
                  Deactivate
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm font-medium text-gray-600">Total Users</div>
            <div className="text-2xl font-bold text-gray-900">{filteredAndSortedUsers.length}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm font-medium text-gray-600">Students</div>
            <div className="text-2xl font-bold text-blue-600">
              {filteredAndSortedUsers.filter(u => u.role === 'LEARNER').length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm font-medium text-gray-600">Instructors</div>
            <div className="text-2xl font-bold text-green-600">
              {filteredAndSortedUsers.filter(u => u.role === 'INSTRUCTOR').length}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <div className="text-sm font-medium text-gray-600">Admins</div>
            <div className="text-2xl font-bold text-purple-600">
              {filteredAndSortedUsers.filter(u => u.role === 'ADMIN').length}
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedUsers.length === paginatedUsers.length && paginatedUsers.length > 0}
                      onChange={handleSelectAll}
                      className="h-4 w-4 text-[#8B0000] focus:ring-[#8B0000] border-gray-300 rounded"
                    />
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center">
                      User <SortIcon field="name" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('role')}
                  >
                    <div className="flex items-center">
                      Role <SortIcon field="role" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('enrollmentsCount')}
                  >
                    <div className="flex items-center">
                      Enrollments <SortIcon field="enrollmentsCount" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('createdAt')}
                  >
                    <div className="flex items-center">
                      Created <SortIcon field="createdAt" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => handleSelectUser(user.id)}
                        className="h-4 w-4 text-[#8B0000] focus:ring-[#8B0000] border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-[#8B0000] flex items-center justify-center">
                            <span className="text-white font-medium text-sm">
                              {(user.name || user.email).charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name || 'No name'}
                          </div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'ADMIN' ? 'bg-purple-100 text-purple-800' :
                        user.role === 'INSTRUCTOR' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.enrollmentsCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => {
                            setSelectedUser(user)
                            setShowUserModal(true)
                          }}
                          className="text-[#8B0000] hover:text-[#A52A2A]"
                          title="View user details"
                        >
                          <EyeIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedUser(user)
                            setShowUserModal(true)
                          }}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit user"
                        >
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => toast.success(`User ${user.name || user.email} would be deactivated`)}
                          className="text-red-600 hover:text-red-900"
                          title="Deactivate user"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing {(currentPage - 1) * usersPerPage + 1} to {Math.min(currentPage * usersPerPage, filteredAndSortedUsers.length)} of {filteredAndSortedUsers.length} results
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                        page === currentPage
                          ? 'border-[#8B0000] bg-[#8B0000] text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Detail Modal */}
        <UserDetailModal
          user={selectedUser}
          isOpen={showUserModal}
          onClose={() => {
            setShowUserModal(false)
            setSelectedUser(null)
          }}
          onUpdate={() => {
            // In a real app, this would refresh the user data
            toast.success("User data refreshed!")
          }}
        />
      </div>
    </div>
  )
}
