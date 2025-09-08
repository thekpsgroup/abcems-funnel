"use client"

import { useState, useEffect } from "react"
import {
  ChartBarIcon,
  EnvelopeIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface EmailAnalytics {
  totalSent: number
  delivered: number
  opened: number
  clicked: number
  bounced: number
  deliveryRate: number
  openRate: number
  clickRate: number
  bounceRate: number
  averageDeliveryTime: number
}

interface EmailRecord {
  id: string
  recipient: string
  subject: string
  templateName: string
  status: 'delivered' | 'opened' | 'clicked' | 'bounced' | 'pending'
  sentAt: string
  deliveredAt?: string
  openedAt?: string
  clickedAt?: string
  triggerEvent: string
}

const statusColors = {
  delivered: 'bg-green-100 text-green-800',
  opened: 'bg-blue-100 text-blue-800',
  clicked: 'bg-purple-100 text-purple-800',
  bounced: 'bg-red-100 text-red-800',
  pending: 'bg-yellow-100 text-yellow-800'
}

const statusIcons = {
  delivered: CheckCircleIcon,
  opened: EyeIcon,
  clicked: CursorArrowRaysIcon,
  bounced: ExclamationTriangleIcon,
  pending: ClockIcon
}

export default function EmailAnalyticsPage() {
  const [analytics, setAnalytics] = useState<EmailAnalytics | null>(null)
  const [emailRecords, setEmailRecords] = useState<EmailRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [filterTemplate, setFilterTemplate] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 20

  useEffect(() => {
    // Mock data for demonstration
    const mockAnalytics: EmailAnalytics = {
      totalSent: 120,
      delivered: 115,
      opened: 87,
      clicked: 23,
      bounced: 5,
      deliveryRate: 95.8,
      openRate: 75.7,
      clickRate: 19.2,
      bounceRate: 4.2,
      averageDeliveryTime: 2.3
    }

    const mockRecords: EmailRecord[] = Array.from({ length: 50 }, (_, i) => ({
      id: `email-${i + 1}`,
      recipient: `user${i + 1}@example.com`,
      subject: i % 4 === 0 ? "Welcome to ABCEMS Solutions!" :
               i % 4 === 1 ? "You're enrolled in EMT Basic!" :
               i % 4 === 2 ? "Payment Confirmation" :
               "Course Completion Certificate",
      templateName: i % 4 === 0 ? "Welcome Email" :
                    i % 4 === 1 ? "Enrollment Confirmation" :
                    i % 4 === 2 ? "Payment Confirmation" :
                    "Course Completion",
      status: (['delivered', 'opened', 'clicked', 'bounced'] as const)[Math.floor(Math.random() * 4)],
      sentAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
      deliveredAt: Math.random() > 0.1 ? new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() : undefined,
      openedAt: Math.random() > 0.3 ? new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() : undefined,
      clickedAt: Math.random() > 0.7 ? new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() : undefined,
      triggerEvent: ['user_registration', 'course_enrollment', 'payment_successful', 'course_completion'][Math.floor(Math.random() * 4)]
    }))

    setTimeout(() => {
      setAnalytics(mockAnalytics)
      setEmailRecords(mockRecords)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredRecords = emailRecords.filter(record => {
    const matchesStatus = filterStatus === "all" || record.status === filterStatus
    const matchesTemplate = filterTemplate === "all" || record.templateName === filterTemplate
    return matchesStatus && matchesTemplate
  })

  const paginatedRecords = filteredRecords.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  )

  const exportData = () => {
    const csvData = filteredRecords.map(record => ({
      'Recipient': record.recipient,
      'Subject': record.subject,
      'Template': record.templateName,
      'Status': record.status,
      'Sent At': new Date(record.sentAt).toLocaleString(),
      'Delivered At': record.deliveredAt ? new Date(record.deliveredAt).toLocaleString() : 'N/A',
      'Opened At': record.openedAt ? new Date(record.openedAt).toLocaleString() : 'N/A',
      'Clicked At': record.clickedAt ? new Date(record.clickedAt).toLocaleString() : 'N/A',
      'Trigger Event': record.triggerEvent
    }))

    const csvContent = [
      Object.keys(csvData[0]).join(','),
      ...csvData.map(row => Object.values(row).map(value => `"${value}"`).join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `email-analytics-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
    toast.success("Email analytics exported successfully!")
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading email analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
                <ChartBarIcon className="h-8 w-8 mr-3 text-[#8B0000]" />
                Email Analytics
              </h1>
              <p className="text-gray-600">
                Track email delivery, engagement, and performance metrics
              </p>
            </div>
            <button
              onClick={exportData}
              className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Export Data
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Sent</p>
                  <p className="text-3xl font-bold text-gray-900">{analytics?.totalSent}</p>
                </div>
                <EnvelopeIcon className="h-10 w-10 text-[#8B0000] opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Delivered</p>
                  <p className="text-3xl font-bold text-green-600">{analytics?.delivered}</p>
                  <p className="text-xs text-green-600">{analytics?.deliveryRate}% rate</p>
                </div>
                <CheckCircleIcon className="h-10 w-10 text-green-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Opened</p>
                  <p className="text-3xl font-bold text-blue-600">{analytics?.opened}</p>
                  <p className="text-xs text-blue-600">{analytics?.openRate}% rate</p>
                </div>
                <EyeIcon className="h-10 w-10 text-blue-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Clicked</p>
                  <p className="text-3xl font-bold text-purple-600">{analytics?.clicked}</p>
                  <p className="text-xs text-purple-600">{analytics?.clickRate}% rate</p>
                </div>
                <CursorArrowRaysIcon className="h-10 w-10 text-purple-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Bounced</p>
                  <p className="text-3xl font-bold text-red-600">{analytics?.bounced}</p>
                  <p className="text-xs text-red-600">{analytics?.bounceRate}% rate</p>
                </div>
                <ExclamationTriangleIcon className="h-10 w-10 text-red-500 opacity-80" />
              </div>
            </div>
          </div>

          {/* Performance Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average Delivery Time</span>
                  <span className="font-semibold">{analytics?.averageDeliveryTime} minutes</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${analytics?.deliveryRate}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500">
                  {analytics?.deliveryRate}% of emails delivered successfully
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Rates</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Open Rate</span>
                  <span className="font-semibold">{analytics?.openRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Click Rate</span>
                  <span className="font-semibold">{analytics?.clickRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${analytics?.openRate}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Records Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Filters */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="delivered">Delivered</option>
                  <option value="opened">Opened</option>
                  <option value="clicked">Clicked</option>
                  <option value="bounced">Bounced</option>
                  <option value="pending">Pending</option>
                </select>

                <select
                  value={filterTemplate}
                  onChange={(e) => setFilterTemplate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                >
                  <option value="all">All Templates</option>
                  <option value="Welcome Email">Welcome Email</option>
                  <option value="Enrollment Confirmation">Enrollment Confirmation</option>
                  <option value="Payment Confirmation">Payment Confirmation</option>
                  <option value="Course Completion">Course Completion</option>
                </select>
              </div>

              <div className="text-sm text-gray-500">
                Showing {paginatedRecords.length} of {filteredRecords.length} emails
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recipient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Template
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sent At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedRecords.map((record) => {
                  const StatusIcon = statusIcons[record.status]
                  return (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{record.recipient}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 max-w-xs truncate" title={record.subject}>
                          {record.subject}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{record.templateName}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[record.status]}`}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(record.sentAt)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => toast.success(`Viewing email details for ${record.recipient}`)}
                          className="text-[#8B0000] hover:text-[#A52A2A]"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {Math.ceil(filteredRecords.length / recordsPerPage) > 1 && (
            <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Page {currentPage} of {Math.ceil(filteredRecords.length / recordsPerPage)}
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.min(5, Math.ceil(filteredRecords.length / recordsPerPage)) }, (_, i) => {
                    const pageNum = i + 1
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                          pageNum === currentPage
                            ? 'border-[#8B0000] bg-[#8B0000] text-white'
                            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}
                  <button
                    onClick={() => setCurrentPage(Math.min(Math.ceil(filteredRecords.length / recordsPerPage), currentPage + 1))}
                    disabled={currentPage === Math.ceil(filteredRecords.length / recordsPerPage)}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
