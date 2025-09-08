"use client"

import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import {
  ClockIcon,
  TrophyIcon,
  UserIcon,
  CogIcon,
  CheckCircleIcon,
  PlayIcon,
  BookOpenIcon,
  StarIcon,
  FireIcon,
  TagIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface Course {
  id: string
  title: string
  description: string
  progress: number
  totalLessons: number
  completedLessons: number
  instructorName: string
  durationHours: number
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  lastAccessed: string
  nextLesson?: string
  certificateEarned?: boolean
  rating?: number
}

interface DashboardStats {
  totalCourses: number
  completedCourses: number
  totalHours: number
  certificatesEarned: number
  currentStreak: number
  averageProgress: number
}

export default function StudentDashboard() {
  const { data: session, status } = useSession()
  const [courses, setCourses] = useState<Course[]>([])
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'certificates'>('overview')

  // Mock data for demonstration
  useEffect(() => {
    if (status === 'authenticated') {
      const mockCourses: Course[] = [
        {
          id: "1",
          title: "EMT Basic Preparation Course",
          description: "Comprehensive EMT-Basic training program covering all NREMT exam topics.",
          progress: 75,
          totalLessons: 24,
          completedLessons: 18,
          instructorName: "Dr. Sarah Johnson",
          durationHours: 40,
          category: "EMT",
          difficulty: "beginner",
          lastAccessed: "2024-12-15T14:30:00Z",
          nextLesson: "Cardiac Emergencies",
          certificateEarned: false,
          rating: 4.8
        },
        {
          id: "2",
          title: "Paramedic Advanced Life Support",
          description: "Advanced paramedic training focusing on critical care and trauma management.",
          progress: 45,
          totalLessons: 32,
          completedLessons: 14,
          instructorName: "Captain Mike Rodriguez",
          durationHours: 80,
          category: "Paramedic",
          difficulty: "advanced",
          lastAccessed: "2024-12-14T16:20:00Z",
          nextLesson: "Advanced Airway Management",
          certificateEarned: false,
          rating: 4.9
        },
        {
          id: "3",
          title: "CPR & First Aid Certification",
          description: "Essential life-saving skills and first aid techniques.",
          progress: 100,
          totalLessons: 12,
          completedLessons: 12,
          instructorName: "Nurse Emily Chen",
          durationHours: 8,
          category: "CPR",
          difficulty: "beginner",
          lastAccessed: "2024-12-10T10:15:00Z",
          certificateEarned: true,
          rating: 4.6
        }
      ]

      const mockStats: DashboardStats = {
        totalCourses: mockCourses.length,
        completedCourses: mockCourses.filter(c => c.progress === 100).length,
        totalHours: mockCourses.reduce((sum, c) => sum + (c.durationHours * c.progress / 100), 0),
        certificatesEarned: mockCourses.filter(c => c.certificateEarned).length,
        currentStreak: 7,
        averageProgress: Math.round(mockCourses.reduce((sum, c) => sum + c.progress, 0) / mockCourses.length)
      }

      setTimeout(() => {
        setCourses(mockCourses)
        setStats(mockStats)
        setLoading(false)
      }, 1000)
    }
  }, [status])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-500'
    if (progress >= 75) return 'bg-blue-500'
    if (progress >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please Sign In</h1>
          <p className="text-gray-600 mb-6">You need to be signed in to access your dashboard.</p>
          <Link
            href="/auth/signin"
            className="bg-[#8B0000] text-white px-6 py-3 rounded-lg hover:bg-[#A52A2A] transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
        <button className="bg-[#8B0000] text-white px-6 py-2 rounded-lg hover:bg-[#A52A2A] transition-colors">
          Browse More Courses
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
            {/* Course Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(course.difficulty)}`}>
                      {course.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">{course.category}</span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                </div>
                {course.certificateEarned && (
                  <TrophyIcon className="h-8 w-8 text-yellow-500 ml-4" />
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(course.progress)}`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>

              {/* Course Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <UserIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">{course.instructorName}</span>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">{course.durationHours}h total</span>
                </div>
              </div>
            </div>

            {/* Course Actions */}
            <div className="p-6 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600">
                  Last accessed: {formatDate(course.lastAccessed)}
                </div>
                {course.rating && (
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                )}
              </div>

              <div className="flex space-x-3">
                <Link
                  href={`/dashboard/courses/${course.id}`}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-[#8B0000] text-white text-sm rounded-lg hover:bg-[#A52A2A] transition-colors"
                >
                  <PlayIcon className="h-4 w-4 mr-2" />
                  {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
                </Link>
                <button
                  className="flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                  onClick={() => toast.success(`Viewing materials for ${course.title}`)}
                >
                  <BookOpenIcon className="h-4 w-4" />
                </button>
              </div>

              {course.nextLesson && course.progress < 100 && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900 mb-1">Next Lesson:</p>
                  <p className="text-sm text-blue-700">{course.nextLesson}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderCertificates = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Certificates</h2>
        <button className="bg-[#8B0000] text-white px-6 py-2 rounded-lg hover:bg-[#A52A2A] transition-colors">
          Download All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.filter(course => course.certificateEarned).map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Completed on {formatDate(course.lastAccessed)}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>Instructor: {course.instructorName}</span>
                  <span>•</span>
                  <span>{course.durationHours} hours</span>
                </div>
                <div className="flex space-x-3">
                  <button
                    className="flex-1 bg-[#8B0000] text-white px-4 py-2 text-sm rounded-lg hover:bg-[#A52A2A] transition-colors"
                    onClick={() => toast.success(`Downloading certificate for ${course.title}`)}
                  >
                    Download PDF
                  </button>
                  <button
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 text-sm rounded-lg hover:bg-gray-200 transition-colors"
                    onClick={() => toast.success(`Sharing certificate for ${course.title}`)}
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.filter(course => course.certificateEarned).length === 0 && (
        <div className="text-center py-12">
          <TrophyIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg mb-2">No certificates yet</p>
          <p className="text-gray-400">Complete your courses to earn certificates!</p>
        </div>
      )}
    </div>
  )


  const renderOverview = () => (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-[#8B0000] to-[#A52A2A] rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {session?.user?.name || 'Student'}! 👋
        </h1>
        <p className="text-red-100 mb-6">
          Continue your learning journey with ABCEMS Solutions
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">{stats?.totalCourses}</div>
            <div className="text-sm text-red-100">Total Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{stats?.completedCourses}</div>
            <div className="text-sm text-red-100">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{Math.round(stats?.totalHours || 0)}</div>
            <div className="text-sm text-red-100">Learning Hours</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">{stats?.certificatesEarned}</div>
            <div className="text-sm text-red-100">Certificates</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Streak</p>
              <p className="text-3xl font-bold text-orange-600">{stats?.currentStreak}</p>
              <p className="text-sm text-gray-500">days in a row</p>
            </div>
            <FireIcon className="h-12 w-12 text-orange-500 opacity-80" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Progress</p>
              <p className="text-3xl font-bold text-blue-600">{stats?.averageProgress}%</p>
              <p className="text-sm text-gray-500">across all courses</p>
            </div>
            <TagIcon className="h-12 w-12 text-blue-500 opacity-80" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-3xl font-bold text-green-600">12h</p>
              <p className="text-sm text-gray-500">learning time</p>
            </div>
            <ClockIcon className="h-12 w-12 text-green-500 opacity-80" />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <CheckCircleIcon className="h-8 w-8 text-blue-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Completed &ldquo;Basic Life Support&rdquo; lesson</p>
              <p className="text-sm text-gray-600">EMT Basic Preparation Course • 2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
            <TrophyIcon className="h-8 w-8 text-green-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Earned CPR Certification</p>
              <p className="text-sm text-gray-600">Certificate available for download &bull; Yesterday</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
            <StarIcon className="h-8 w-8 text-purple-600" />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Started Advanced Airway Management</p>
              <p className="text-sm text-gray-600">Paramedic Advanced Life Support • 3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-[#8B0000]">
                ABCEMS
              </Link>

              <nav className="hidden md:flex space-x-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-[#8B0000] text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'courses'
                      ? 'bg-[#8B0000] text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  My Courses
                </button>
                <button
                  onClick={() => setActiveTab('certificates')}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'certificates'
                      ? 'bg-[#8B0000] text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Certificates
                </button>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {session?.user?.name || 'Student'}
                </p>
                <p className="text-xs text-gray-500">Student</p>
              </div>
              <Link
                href="/profile"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="My Profile"
              >
                <UserCircleIcon className="h-5 w-5" />
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Sign Out"
              >
                <CogIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'courses' && renderCourses()}
        {activeTab === 'certificates' && renderCertificates()}
      </div>
    </div>
  )
}

