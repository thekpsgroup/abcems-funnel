"use client"

import { useState, useEffect } from "react"
import {
  ChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon
} from "@heroicons/react/24/outline"

interface ReportData {
  totalUsers: number
  totalRevenue: number
  totalEnrollments: number
  activeCourses: number
  recentSignups: number
}

export default function ReportsPage() {
  const [reportData, setReportData] = useState<ReportData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use placeholder data
    const mockData: ReportData = {
      totalUsers: 247,
      totalRevenue: 15890.50,
      totalEnrollments: 89,
      activeCourses: 12,
      recentSignups: 23
    }

    setTimeout(() => {
      setReportData(mockData)
      setLoading(false)
    }, 1000)
  }, [])

  const exportReport = (format: 'csv' | 'pdf') => {
    // Placeholder for export functionality
    alert(`Exporting report as ${format.toUpperCase()}...`)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading reports...</p>
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
            <ChartBarIcon className="h-8 w-8 mr-3 text-[#8B0000]" />
            Reports & Analytics
          </h1>
          <p className="text-gray-600">
            Comprehensive insights into your ABCEMS platform performance
          </p>
        </div>

        {/* Export Actions */}
        <div className="mb-8 flex justify-end space-x-4">
          <button
            onClick={() => exportReport('csv')}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Export CSV
          </button>
          <button
            onClick={() => exportReport('pdf')}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Export PDF
          </button>
        </div>

        {/* Report Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">{reportData?.totalUsers}</p>
                <p className="text-sm text-green-600 mt-1">+{reportData?.recentSignups} this month</p>
              </div>
              <UsersIcon className="h-10 w-10 text-[#8B0000] opacity-80" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900">${reportData?.totalRevenue.toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-1">All time</p>
              </div>
              <CurrencyDollarIcon className="h-10 w-10 text-green-500 opacity-80" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Enrollments</p>
                <p className="text-3xl font-bold text-gray-900">{reportData?.totalEnrollments}</p>
                <p className="text-sm text-gray-500 mt-1">Active courses</p>
              </div>
              <AcademicCapIcon className="h-10 w-10 text-blue-500 opacity-80" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-3xl font-bold text-gray-900">{reportData?.activeCourses}</p>
                <p className="text-sm text-gray-500 mt-1">Currently running</p>
              </div>
              <DocumentTextIcon className="h-10 w-10 text-purple-500 opacity-80" />
            </div>
          </div>
        </div>

        {/* Charts Placeholder */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart will be implemented here</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart will be implemented here</p>
            </div>
          </div>
        </div>

        {/* Detailed Tables */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity Summary</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Activity</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Details</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-600">Dec 15, 2024</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">New Enrollment</td>
                  <td className="py-3 px-4 text-sm text-gray-600">John Doe - EMT Prep Course</td>
                  <td className="py-3 px-4 text-sm text-green-600">$200.00</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-600">Dec 14, 2024</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">User Registration</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Jane Smith joined as Student</td>
                  <td className="py-3 px-4 text-sm text-gray-400">-</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 text-sm text-gray-600">Dec 13, 2024</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">Payment Received</td>
                  <td className="py-3 px-4 text-sm text-gray-600">Bob Johnson - Paramedic Course</td>
                  <td className="py-3 px-4 text-sm text-green-600">$400.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
