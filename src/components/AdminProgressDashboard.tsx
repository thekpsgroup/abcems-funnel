"use client"

import { useState, useEffect } from 'react'
import { ClockIcon, UserGroupIcon, BookOpenIcon, TrendingUpIcon, EyeIcon } from '@heroicons/react/24/outline'

interface StudentProgress {
  id: string
  name: string
  email: string
  courseTitle: string
  totalModules: number
  completedModules: number
  totalLessons: number
  completedLessons: number
  totalTimeSpent: number // in seconds
  lastActivity: string
  progressPercentage: number
  currentModule?: string
  currentLesson?: string
}

interface AdminProgressDashboardProps {
  courseId?: string
}

export function AdminProgressDashboard({ courseId }: AdminProgressDashboardProps) {
  const [students, setStudents] = useState<StudentProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')
  const [selectedStudent, setSelectedStudent] = useState<StudentProgress | null>(null)

  useEffect(() => {
    fetchStudentProgress()
  }, [courseId])

  const fetchStudentProgress = async () => {
    try {
      // This would typically fetch from an API endpoint
      // For now, we'll simulate data
      const mockData: StudentProgress[] = [
        {
          id: '1',
          name: 'Sarah Martinez',
          email: 'learner1@example.com',
          courseTitle: 'EMT Prep Course',
          totalModules: 5,
          completedModules: 3,
          totalLessons: 25,
          completedLessons: 18,
          totalTimeSpent: 7200, // 2 hours
          lastActivity: '2024-01-15T10:30:00Z',
          progressPercentage: 72,
          currentModule: 'Cardiac Emergencies',
          currentLesson: 'Basic Life Support'
        },
        {
          id: '2',
          name: 'Mike Rodriguez',
          email: 'learner2@example.com',
          courseTitle: 'Paramedic Prep Course',
          totalModules: 6,
          completedModules: 6,
          totalLessons: 30,
          completedLessons: 30,
          totalTimeSpent: 18000, // 5 hours
          lastActivity: '2024-01-14T16:20:00Z',
          progressPercentage: 100,
          currentModule: 'Completed',
          currentLesson: 'Certificate Earned'
        },
        {
          id: '3',
          name: 'Jessica Chen',
          email: 'learner3@example.com',
          courseTitle: 'EMT Prep Course',
          totalModules: 5,
          completedModules: 1,
          totalLessons: 25,
          completedLessons: 5,
          totalTimeSpent: 1800, // 30 minutes
          lastActivity: '2024-01-16T09:15:00Z',
          progressPercentage: 20,
          currentModule: 'Basic Life Support',
          currentLesson: 'CPR Techniques'
        }
      ]

      setStudents(mockData)
    } catch (error) {
      console.error('Failed to fetch student progress:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    if (hours > 0) {
      return `${hours}h ${minutes}m`
    }
    return `${minutes}m`
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      return 'Today'
    } else if (diffDays === 1) {
      return 'Yesterday'
    } else if (diffDays < 7) {
      return `${diffDays} days ago`
    } else {
      return date.toLocaleDateString()
    }
  }

  const getFilteredStudents = () => {
    switch (filter) {
      case 'active':
        return students.filter(s => s.progressPercentage > 0 && s.progressPercentage < 100)
      case 'completed':
        return students.filter(s => s.progressPercentage === 100)
      default:
        return students
    }
  }

  const getProgressColor = (percentage: number): string => {
    if (percentage === 100) return 'bg-green-500'
    if (percentage >= 75) return 'bg-blue-500'
    if (percentage >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const filteredStudents = getFilteredStudents()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <UserGroupIcon className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">{students.length}</p>
              <p className="text-sm text-gray-600">Total Students</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <BookOpenIcon className="w-8 h-8 text-green-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {Math.round(students.reduce((sum, s) => sum + s.progressPercentage, 0) / students.length)}%
              </p>
              <p className="text-sm text-gray-600">Avg Progress</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <ClockIcon className="w-8 h-8 text-purple-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {formatTime(Math.round(students.reduce((sum, s) => sum + s.totalTimeSpent, 0) / students.length))}
              </p>
              <p className="text-sm text-gray-600">Avg Time Spent</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <TrendingUpIcon className="w-8 h-8 text-orange-600 mr-3" />
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {students.filter(s => s.progressPercentage === 100).length}
              </p>
              <p className="text-sm text-gray-600">Completed Courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">Filter:</span>
          <div className="flex space-x-2">
            {[
              { key: 'all', label: 'All Students', count: students.length },
              { key: 'active', label: 'Active Learners', count: students.filter(s => s.progressPercentage > 0 && s.progressPercentage < 100).length },
              { key: 'completed', label: 'Completed', count: students.filter(s => s.progressPercentage === 100).length }
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setFilter(key as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {label} ({count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Student Progress</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time Spent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Activity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Module
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{student.name}</div>
                      <div className="text-sm text-gray-500">{student.email}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.courseTitle}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(student.progressPercentage)}`}
                          style={{ width: `${student.progressPercentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {student.progressPercentage}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatTime(student.totalTimeSpent)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(student.lastActivity)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.currentModule}</div>
                    <div className="text-sm text-gray-500">{student.currentLesson}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="text-blue-600 hover:text-blue-900 flex items-center"
                    >
                      <EyeIcon className="w-4 h-4 mr-1" />
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-gray-500">No students found matching the current filter.</p>
          </div>
        )}
      </div>

      {/* Student Detail Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {selectedStudent.name}'s Progress
                </h3>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{selectedStudent.progressPercentage}%</div>
                    <div className="text-sm text-gray-600">Overall Progress</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{formatTime(selectedStudent.totalTimeSpent)}</div>
                    <div className="text-sm text-gray-600">Total Time Spent</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Module Progress</h4>
                    <p className="text-sm text-gray-600">
                      {selectedStudent.completedModules} of {selectedStudent.totalModules} modules completed
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Lesson Progress</h4>
                    <p className="text-sm text-gray-600">
                      {selectedStudent.completedLessons} of {selectedStudent.totalLessons} lessons completed
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Current Activity</h4>
                  <p className="text-sm text-gray-600">
                    <strong>Module:</strong> {selectedStudent.currentModule}<br />
                    <strong>Lesson:</strong> {selectedStudent.currentLesson}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Last Activity</h4>
                  <p className="text-sm text-gray-600">{formatDate(selectedStudent.lastActivity)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
