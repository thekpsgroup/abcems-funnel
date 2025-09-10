"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import {
  AcademicCapIcon,
  TrophyIcon,
  UserCircleIcon,
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

interface ExtendedUser {
  id: string
  email: string
  name?: string | null
  role: string
}

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [courses, setCourses] = useState<Course[]>([])
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)

  // Get user role from session
  const userRole = (session?.user as ExtendedUser)?.role || 'LEARNER'
  const isAdmin = userRole === 'ADMIN'
  const isInstructor = userRole === 'INSTRUCTOR'
  const isLearner = userRole === 'LEARNER'

  // Fetch real data from database
  useEffect(() => {
    if (status === 'authenticated') {
      fetchDashboardData()
    }
  }, [status])

  const fetchDashboardData = async () => {
    try {
      // Fetch user's enrollments with course details and progress
      const enrollmentsResponse = await fetch('/api/enrollments')
      const enrollments = await enrollmentsResponse.json()

      const coursesWithProgress: Course[] = []
      let totalHours = 0
      let certificatesEarned = 0

      for (const enrollment of enrollments) {
        const course = enrollment.course

        // Fetch modules and progress for this course
        const modulesResponse = await fetch(`/api/modules?courseId=${course.id}`)
        const modulesData = await modulesResponse.json()
        const modules = modulesData.modules || []

        let totalLessons = 0
        let completedLessons = 0
        let courseProgress = 0

        // Calculate progress across all modules
        for (const module of modules) {
          totalLessons += module.lessons?.length || 0

          for (const lesson of module.lessons || []) {
            const lessonProgress = lesson.progress
            if (lessonProgress?.isCompleted) {
              completedLessons++
            }
          }
        }

        courseProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

        // Calculate time spent
        let timeSpent = 0
        for (const module of modules) {
          if (module.progress?.timeSpent) {
            timeSpent += module.progress.timeSpent
          }
          for (const lesson of module.lessons || []) {
            if (lesson.progress?.timeSpent) {
              timeSpent += lesson.progress.timeSpent
            }
          }
        }

        coursesWithProgress.push({
          id: course.id,
          title: course.title,
          description: course.description,
          progress: courseProgress,
          totalLessons,
          completedLessons,
          instructorName: "ABCEMS Instructor",
          durationHours: Math.ceil(timeSpent / 3600) || (course.title.includes('EMT') ? 8 : 16),
          category: course.title.includes('EMT') ? 'EMT' : 'Paramedic',
          difficulty: course.title.includes('EMT') ? 'beginner' : 'advanced',
          lastAccessed: enrollment.updatedAt || new Date().toISOString(),
          nextLesson: modules.find(m => m.progress && !m.progress.isCompleted)?.title || "Continue Learning",
          certificateEarned: enrollment.status === 'completed',
          rating: 4.8
        })

        totalHours += timeSpent / 3600
        if (enrollment.certificates?.length > 0) {
          certificatesEarned++
        }
      }

      const stats: DashboardStats = {
        totalCourses: coursesWithProgress.length,
        completedCourses: coursesWithProgress.filter(c => c.progress === 100).length,
        totalHours: Math.round(totalHours),
        certificatesEarned,
        currentStreak: 7,
        averageProgress: coursesWithProgress.length > 0
          ? Math.round(coursesWithProgress.reduce((sum, c) => sum + c.progress, 0) / coursesWithProgress.length)
          : 0
      }

      setCourses(coursesWithProgress)
      setStats(stats)
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
      // Fallback to empty data if API fails
      setCourses([])
      setStats({
        totalCourses: 0,
        completedCourses: 0,
        totalHours: 0,
        certificatesEarned: 0,
        currentStreak: 0,
        averageProgress: 0
      })
    } finally {
      setLoading(false)
    }
  }

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
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {session?.user?.name?.split(' ')[0] || 'User'}!
          </h1>
          <p className="text-lg text-gray-600">
            {isAdmin && "Manage your EMS training platform"}
            {isInstructor && "Manage your courses and students"}
            {isLearner && "Continue your learning journey"}
          </p>
          {isAdmin && (
            <div className="mt-4 flex gap-4">
              <Link
                href="/admin"
                className="btn btn-primary"
              >
                Admin Panel
              </Link>
              <Link
                href="/admin/users"
                className="btn btn-secondary"
              >
                Manage Users
              </Link>
            </div>
          )}
        </div>

        {/* Stats Overview */}
        {isLearner && (
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
        )}

        {isAdmin && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#8B0000] mb-2">42</div>
              <div className="text-sm text-gray-600">Total Users</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Active Courses</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$8,450</div>
              <div className="text-sm text-gray-600">Revenue</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Pass Rate</div>
            </div>
          </div>
        )}

        {isInstructor && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#8B0000] mb-2">8</div>
              <div className="text-sm text-gray-600">My Courses</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">156</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-sm text-gray-600">Sessions</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-sm text-gray-600">Avg Rating</div>
            </div>
          </div>
        )}

        {/* Content based on role */}
        {isLearner && (
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
        )}

        {/* Admin Dashboard */}
        {isAdmin && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Platform Management</h2>
              <Link
                href="/admin"
                className="text-[#8B0000] hover:text-[#A52A2A] text-sm font-medium transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center">
                  <UserCircleIcon className="h-12 w-12 text-[#8B0000] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">User Management</h3>
                    <p className="text-sm text-gray-600">Manage users and roles</p>
                  </div>
                </div>
                <Link
                  href="/admin/users"
                  className="mt-4 w-full bg-[#8B0000] text-white py-2 px-4 rounded-lg hover:bg-[#A52A2A] transition-colors inline-flex items-center justify-center text-sm"
                >
                  Manage Users
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center">
                  <AcademicCapIcon className="h-12 w-12 text-[#8B0000] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Course Management</h3>
                    <p className="text-sm text-gray-600">Create and manage courses</p>
                  </div>
                </div>
                <Link
                  href="/admin/courses"
                  className="mt-4 w-full bg-[#8B0000] text-white py-2 px-4 rounded-lg hover:bg-[#A52A2A] transition-colors inline-flex items-center justify-center text-sm"
                >
                  Manage Courses
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center">
                  <TrophyIcon className="h-12 w-12 text-[#8B0000] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reports & Analytics</h3>
                    <p className="text-sm text-gray-600">View platform statistics</p>
                  </div>
                </div>
                <Link
                  href="/admin/reports"
                  className="mt-4 w-full bg-[#8B0000] text-white py-2 px-4 rounded-lg hover:bg-[#A52A2A] transition-colors inline-flex items-center justify-center text-sm"
                >
                  View Reports
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Instructor Dashboard */}
        {isInstructor && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Instructor Tools</h2>
              <Link
                href="/instructor"
                className="text-[#8B0000] hover:text-[#A52A2A] text-sm font-medium transition-colors"
              >
                Instructor Panel →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center">
                  <AcademicCapIcon className="h-12 w-12 text-[#8B0000] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">My Courses</h3>
                    <p className="text-sm text-gray-600">Manage course content</p>
                  </div>
                </div>
                <Link
                  href="/instructor/courses"
                  className="mt-4 w-full bg-[#8B0000] text-white py-2 px-4 rounded-lg hover:bg-[#A52A2A] transition-colors inline-flex items-center justify-center text-sm"
                >
                  Manage Courses
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center">
                  <UserCircleIcon className="h-12 w-12 text-[#8B0000] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Student Progress</h3>
                    <p className="text-sm text-gray-600">Track student performance</p>
                  </div>
                </div>
                <Link
                  href="/instructor/students"
                  className="mt-4 w-full bg-[#8B0000] text-white py-2 px-4 rounded-lg hover:bg-[#A52A2A] transition-colors inline-flex items-center justify-center text-sm"
                >
                  View Students
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center">
                  <TrophyIcon className="h-12 w-12 text-[#8B0000] mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Grade Management</h3>
                    <p className="text-sm text-gray-600">Review and grade assignments</p>
                  </div>
                </div>
                <Link
                  href="/instructor/grades"
                  className="mt-4 w-full bg-[#8B0000] text-white py-2 px-4 rounded-lg hover:bg-[#A52A2A] transition-colors inline-flex items-center justify-center text-sm"
                >
                  Manage Grades
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Quick Actions - Role-based */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {isAdmin ? 'Admin Quick Actions' : isInstructor ? 'Instructor Quick Actions' : 'Quick Actions'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/profile"
              className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <UserCircleIcon className="h-8 w-8 text-[#8B0000] mr-4" />
              <div>
                <div className="font-medium text-gray-900">
                  {isAdmin ? 'Admin Profile' : isInstructor ? 'Instructor Profile' : 'My Profile'}
                </div>
                <div className="text-sm text-gray-600">
                  {isAdmin ? 'Manage admin settings' : isInstructor ? 'Manage instructor settings' : 'Manage account settings'}
                </div>
              </div>
            </Link>

            {isLearner && (
              <>
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
              </>
            )}

            {isAdmin && (
              <>
                <Link
                  href="/admin/users"
                  className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <AcademicCapIcon className="h-8 w-8 text-[#8B0000] mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">User Management</div>
                    <div className="text-sm text-gray-600">Manage platform users</div>
                  </div>
                </Link>

                <Link
                  href="/admin/reports"
                  className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <TrophyIcon className="h-8 w-8 text-[#8B0000] mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Platform Reports</div>
                    <div className="text-sm text-gray-600">View analytics</div>
                  </div>
                </Link>
              </>
            )}

            {isInstructor && (
              <>
                <Link
                  href="/instructor/students"
                  className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <AcademicCapIcon className="h-8 w-8 text-[#8B0000] mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">My Students</div>
                    <div className="text-sm text-gray-600">Manage student progress</div>
                  </div>
                </Link>

                <Link
                  href="/instructor/schedule"
                  className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <TrophyIcon className="h-8 w-8 text-[#8B0000] mr-4" />
                  <div>
                    <div className="font-medium text-gray-900">Schedule Management</div>
                    <div className="text-sm text-gray-600">Manage class schedules</div>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

