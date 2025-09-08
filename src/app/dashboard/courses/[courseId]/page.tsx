"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import Link from "next/link"
import {
  ArrowLeftIcon,
  AcademicCapIcon,
  ClockIcon,
  UserIcon,
  StarIcon,
  PlayIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline"
import { LessonProgress } from "@/components/LessonProgress"
import toast from "react-hot-toast"

interface Course {
  id: string
  title: string
  description: string
  instructorName: string
  durationHours: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  rating: number
  totalLessons: number
  progress: number
  enrollmentId: string
}

interface Lesson {
  id: string
  title: string
  description: string
  duration: number
  completed: boolean
  completedAt?: string
}

export default function CourseViewPage() {
  const { courseId } = useParams()
  const router = useRouter()
  const { data: session, status } = useSession()
  const [course, setCourse] = useState<Course | null>(null)
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data for demonstration
  useEffect(() => {
    if (status === 'authenticated' && courseId) {
      // Mock course data
      const mockCourse: Course = {
        id: courseId as string,
        title: courseId === "1" ? "EMT Basic Preparation Course" :
               courseId === "2" ? "Paramedic Advanced Life Support" :
               "CPR & First Aid Certification",
        description: courseId === "1"
          ? "Comprehensive EMT-Basic training program covering all NREMT exam topics."
          : courseId === "2"
          ? "Advanced paramedic training focusing on critical care and trauma management."
          : "Essential life-saving skills and first aid techniques.",
        instructorName: courseId === "1" ? "Dr. Sarah Johnson" :
                       courseId === "2" ? "Captain Mike Rodriguez" :
                       "Nurse Emily Chen",
        durationHours: courseId === "1" ? 40 : courseId === "2" ? 80 : 8,
        difficulty: courseId === "1" ? "beginner" : courseId === "2" ? "advanced" : "beginner",
        rating: 4.8,
        totalLessons: courseId === "1" ? 24 : courseId === "2" ? 32 : 12,
        progress: courseId === "1" ? 75 : courseId === "2" ? 45 : 100,
        enrollmentId: `enrollment-${courseId}`
      }

      // Mock lessons data
      const mockLessons: Lesson[] = Array.from(
        { length: mockCourse.totalLessons },
        (_, i) => ({
          id: `lesson-${i + 1}`,
          title: `Lesson ${i + 1}: ${courseId === "1" ? ["Introduction to EMT", "Patient Assessment", "Airway Management", "Cardiac Emergencies"][i % 4] :
                                     courseId === "2" ? ["Advanced Assessment", "Critical Care", "Trauma Management", "Advanced Pharmacology"][i % 4] :
                                     ["CPR Basics", "First Aid", "Emergency Response", "Prevention"][i % 4]} ${i >= 4 ? `Part ${Math.floor(i/4) + 1}` : ''}`,
          description: `Learn the fundamentals of ${courseId === "1" ? "emergency medical response" :
                                                    courseId === "2" ? "advanced paramedic procedures" :
                                                    "life-saving techniques"}.`,
          duration: Math.floor(Math.random() * 30) + 15, // 15-45 minutes
          completed: i < Math.floor(mockCourse.progress / 100 * mockCourse.totalLessons),
          completedAt: i < Math.floor(mockCourse.progress / 100 * mockCourse.totalLessons)
            ? new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString()
            : undefined
        })
      )

      setTimeout(() => {
        setCourse(mockCourse)
        setLessons(mockLessons)
        setLoading(false)
      }, 1000)
    }
  }, [status, courseId])

  const handleProgressUpdate = (lessonId: string, completed: boolean) => {
    setLessons(prev => prev.map(lesson =>
      lesson.id === lessonId
        ? { ...lesson, completed, completedAt: completed ? new Date().toISOString() : undefined }
        : lesson
    ))

    // Update course progress
    if (course) {
      const completedLessons = lessons.filter(l => l.completed || (l.id === lessonId && completed)).length
      const newProgress = Math.round((completedLessons / lessons.length) * 100)

      setCourse(prev => prev ? { ...prev, progress: newProgress } : null)
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

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading course...</p>
        </div>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    router.push('/auth/signin')
    return null
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist or you don't have access.</p>
          <Link
            href="/dashboard"
            className="bg-[#8B0000] text-white px-6 py-3 rounded-lg hover:bg-[#A52A2A] transition-colors"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/dashboard"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {course.instructorName}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {course.durationHours} hours
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 mr-1 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">{course.progress}% Complete</div>
                <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                  <div
                    className="bg-[#8B0000] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
              <button className="bg-[#8B0000] text-white px-6 py-2 rounded-lg hover:bg-[#A52A2A] transition-colors">
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Overview */}
          <div className="lg:col-span-1 space-y-6">
            {/* Course Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Overview</h3>
              <p className="text-gray-600 mb-6">{course.description}</p>

              {/* Stats */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Lessons</span>
                  <span className="font-medium">{course.totalLessons}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completed</span>
                  <span className="font-medium text-green-600">
                    {lessons.filter(l => l.completed).length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Progress</span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900">Download Materials</div>
                  <div className="text-sm text-gray-600">Access course resources</div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900">Contact Instructor</div>
                  <div className="text-sm text-gray-600">Get help with the course</div>
                </button>
                <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="font-medium text-gray-900">Course Certificate</div>
                  <div className="text-sm text-gray-600">View your achievement</div>
                </button>
              </div>
            </div>
          </div>

          {/* Lesson Progress */}
          <div className="lg:col-span-2">
            <LessonProgress
              courseId={course.id}
              enrollmentId={course.enrollmentId}
              lessons={lessons}
              onProgressUpdate={handleProgressUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
