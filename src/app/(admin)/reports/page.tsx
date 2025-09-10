"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import {
  ChartBarIcon,
  DocumentIcon,
  TableCellsIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  UsersIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline";

interface Report {
  id: string;
  name: string;
  type: 'users' | 'enrollments' | 'courses' | 'analytics';
  description: string;
  lastGenerated?: string;
  fileSize?: string;
}

export default function ReportsPage() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || (session as { user?: { role?: string } }).user?.role !== 'ADMIN') {
      redirect('/auth/signin');
    }
  }, [session, status]);

  const reports: Report[] = [
    {
      id: 'users',
      name: 'User Data Export',
      type: 'users',
      description: 'Complete list of all users with roles, enrollment dates, and contact information',
      lastGenerated: '2024-09-08',
      fileSize: '2.3 MB'
    },
    {
      id: 'enrollments',
      name: 'Enrollment Report',
      type: 'enrollments',
      description: 'Detailed enrollment data including course progress, completion rates, and dates',
      lastGenerated: '2024-09-08',
      fileSize: '1.8 MB'
    },
    {
      id: 'courses',
      name: 'Course Analytics',
      type: 'courses',
      description: 'Course performance metrics, completion rates, and student engagement data',
      lastGenerated: '2024-09-08',
      fileSize: '956 KB'
    },
    {
      id: 'certificates',
      name: 'Certificate Report',
      type: 'analytics',
      description: 'List of all issued certificates with student details and course information',
      lastGenerated: '2024-09-08',
      fileSize: '1.2 MB'
    }
  ];

  const handleExport = async (reportType: string) => {
    setIsLoading(true);
    setSelectedReport(reportType);

    try {
      const response = await fetch(`/api/admin/export/${reportType}`, {
        method: 'GET',
      });

      if (response.ok) {
        // Create a download link
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;

        // Set filename based on report type
        const timestamp = new Date().toISOString().split('T')[0];
        let filename = '';

        switch (reportType) {
          case 'users':
            filename = `abcems-users-${timestamp}.csv`;
            break;
          case 'enrollments':
            filename = `abcems-enrollments-${timestamp}.csv`;
            break;
          case 'courses':
            filename = `abcems-courses-${timestamp}.csv`;
            break;
          case 'certificates':
            filename = `abcems-certificates-${timestamp}.csv`;
            break;
          default:
            filename = `abcems-report-${timestamp}.csv`;
        }

        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        alert('Report exported successfully!');
      } else {
        alert('Failed to export report');
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Error exporting report');
    } finally {
      setIsLoading(false);
      setSelectedReport(null);
    }
  };

  const getReportIcon = (type: string) => {
    switch (type) {
      case 'users':
        return <UsersIcon className="w-8 h-8 text-blue-600" />;
      case 'enrollments':
        return <TableCellsIcon className="w-8 h-8 text-green-600" />;
      case 'courses':
        return <AcademicCapIcon className="w-8 h-8 text-purple-600" />;
      case 'analytics':
        return <ChartBarIcon className="w-8 h-8 text-orange-600" />;
      default:
        return <DocumentIcon className="w-8 h-8 text-gray-600" />;
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Export Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {reports.map((report) => (
            <div key={report.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  {getReportIcon(report.type)}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{report.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{report.description}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-gray-500">
                  {report.lastGenerated && (
                    <div className="flex items-center">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      Last: {report.lastGenerated}
                    </div>
                  )}
                  {report.fileSize && (
                    <div className="mt-1">Size: {report.fileSize}</div>
                  )}
                </div>

                <button
                  onClick={() => handleExport(report.id)}
                  disabled={isLoading && selectedReport === report.id}
                  className="inline-flex items-center px-4 py-2 bg-[#8B0000] text-white text-sm font-medium rounded-md hover:bg-[#A52A2A] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading && selectedReport === report.id ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ) : (
                    <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                  )}
                  Export CSV
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Summary */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Statistics</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#8B0000] mb-2">247</div>
              <div className="text-sm text-gray-600">Total Users</div>
              <div className="text-xs text-gray-500 mt-1">↑ 12% from last month</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">189</div>
              <div className="text-sm text-gray-600">Active Enrollments</div>
              <div className="text-xs text-gray-500 mt-1">↑ 8% from last month</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">89%</div>
              <div className="text-sm text-gray-600">Completion Rate</div>
              <div className="text-xs text-gray-500 mt-1">↑ 3% from last month</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">156</div>
              <div className="text-sm text-gray-600">Certificates Issued</div>
              <div className="text-xs text-gray-500 mt-1">↑ 15% from last month</div>
            </div>
          </div>
        </div>

        {/* Custom Report Builder */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Custom Report Builder</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Report Type
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent">
                <option>Users Report</option>
                <option>Enrollment Report</option>
                <option>Course Performance</option>
                <option>Certificate Report</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Last year</option>
                <option>Custom range</option>
              </select>
            </div>
          </div>

          <div className="mt-6">
            <button className="bg-[#8B0000] text-white px-6 py-3 rounded-md hover:bg-[#A52A2A] transition-colors inline-flex items-center">
              <ChartBarIcon className="w-5 h-5 mr-2" />
              Generate Custom Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
