"use client"

import { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import {
  AcademicCapIcon,
  TrophyIcon,
  UserCircleIcon,
  CogIcon,
  StarIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline"

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

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-500'
    if (progress >= 75) return 'bg-blue-500'
    if (progress >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }


  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
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





  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/logo.jpg"
                alt="ABCEMS Logo"
                className="h-8 w-auto rounded shadow-sm"
              />
              <span className="text-2xl font-bold text-[#8B0000]">ABCEMS</span>
            </Link>

            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{session?.user?.name || 'Student'}</p>
                <p className="text-xs text-gray-500">Student Dashboard</p>
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {session?.user?.name?.split(' ')[0] || 'Student'}!
          </h1>
          <p className="text-lg text-gray-600">Continue your learning journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-[#8B0000] mb-2">{stats?.totalCourses}</div>
            <div className="text-sm text-gray-600">Total Courses</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{stats?.completedCourses}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{Math.round(stats?.totalHours || 0)}</div>
            <div className="text-sm text-gray-600">Learning Hours</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{stats?.certificatesEarned}</div>
            <div className="text-sm text-gray-600">Certificates</div>
          </div>
        </div>

        {/* My Courses */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Courses</h2>
            <Link
              href="/courses"
              className="text-[#8B0000] hover:text-[#A52A2A] text-sm font-medium transition-colors"
            >
              Browse More →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(course.difficulty)}`}>
                          {course.difficulty}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <StarIcon className="h-3 w-3 mr-1" />
                          {course.rating}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(course.progress)}`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/dashboard/courses/${course.id}`}
                    className="w-full bg-[#8B0000] text-white py-3 px-4 rounded-lg hover:bg-[#A52A2A] transition-colors inline-flex items-center justify-center group"
                  >
                    {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/profile"
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <UserCircleIcon className="h-8 w-8 text-[#8B0000] mr-4" />
              <div>
                <div className="font-medium text-gray-900">My Profile</div>
                <div className="text-sm text-gray-600">Manage account settings</div>
              </div>
            </Link>

            <Link
              href="/courses"
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <AcademicCapIcon className="h-8 w-8 text-[#8B0000] mr-4" />
              <div>
                <div className="font-medium text-gray-900">Browse Courses</div>
                <div className="text-sm text-gray-600">Find new courses</div>
              </div>
            </Link>

            <Link
              href="#certificates"
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <TrophyIcon className="h-8 w-8 text-[#8B0000] mr-4" />
              <div>
                <div className="font-medium text-gray-900">My Certificates</div>
                <div className="text-sm text-gray-600">View achievements</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

