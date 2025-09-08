"use client"

import { useState } from "react"
import { CheckCircleIcon, PlayIcon, ClockIcon, BookOpenIcon } from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface Lesson {
  id: string
  title: string
  description: string
  duration: number // in minutes
  completed: boolean
  completedAt?: string
}

interface LessonProgressProps {
  courseId: string
  enrollmentId: string
  lessons: Lesson[]
  onProgressUpdate?: (lessonId: string, completed: boolean) => void
}

export function LessonProgress({ courseId, enrollmentId, lessons, onProgressUpdate }: LessonProgressProps) {
  const [updatingLesson, setUpdatingLesson] = useState<string | null>(null)

  const handleLessonComplete = async (lessonId: string, completed: boolean) => {
    setUpdatingLesson(lessonId)

    try {
      const response = await fetch('/api/progress/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enrollmentId,
          lessonId,
          completed
        })
      })

      if (!response.ok) {
        throw new Error('Failed to update progress')
      }

      const result = await response.json()

      toast.success(
        completed
          ? "Lesson completed! 🎉"
          : "Lesson marked as in progress"
      )

      onProgressUpdate?.(lessonId, completed)

      // If course is completed, show certificate generation
      if (result.certificateGenerated) {
        setTimeout(() => {
          toast.success("🎉 Course completed! Certificate generated.", {
            duration: 5000
          })
        }, 1000)
      }
    } catch (error) {
      toast.error("Failed to update lesson progress")
    } finally {
      setUpdatingLesson(null)
    }
  }

  const completedLessons = lessons.filter(l => l.completed).length
  const totalLessons = lessons.length
  const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Course Progress</h3>
          <span className="text-sm font-medium text-gray-600">
            {completedLessons} of {totalLessons} lessons
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{progressPercentage}% Complete</span>
            <span>{totalLessons - completedLessons} remaining</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-[#8B0000] h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">{completedLessons}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">{totalLessons - completedLessons}</div>
            <div className="text-sm text-gray-600">Remaining</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {lessons.reduce((sum, l) => sum + l.duration, 0)}m
            </div>
            <div className="text-sm text-gray-600">Total Time</div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-4">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
              lesson.completed ? 'border-l-4 border-green-500' : 'border-l-4 border-gray-300'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                {/* Lesson Number */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  lesson.completed
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>

                {/* Lesson Content */}
                <div className="flex-1">
                  <h4 className={`font-medium ${lesson.completed ? 'text-gray-900' : 'text-gray-900'}`}>
                    {lesson.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>

                  {/* Lesson Meta */}
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {lesson.duration} min
                    </div>
                    {lesson.completed && lesson.completedAt && (
                      <div className="flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-1 text-green-500" />
                        Completed {new Date(lesson.completedAt).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                {lesson.completed ? (
                  <button
                    onClick={() => handleLessonComplete(lesson.id, false)}
                    disabled={updatingLesson === lesson.id}
                    className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50"
                  >
                    <BookOpenIcon className="h-4 w-4 mr-2" />
                    Review
                  </button>
                ) : (
                  <button
                    onClick={() => handleLessonComplete(lesson.id, true)}
                    disabled={updatingLesson === lesson.id}
                    className="flex items-center px-4 py-2 bg-[#8B0000] text-white text-sm rounded-lg hover:bg-[#A52A2A] transition-colors disabled:opacity-50"
                  >
                    {updatingLesson === lesson.id ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    ) : (
                      <PlayIcon className="h-4 w-4 mr-2" />
                    )}
                    {updatingLesson === lesson.id ? 'Updating...' : 'Mark Complete'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Completion Message */}
      {progressPercentage === 100 && (
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center">
          <CheckCircleIcon className="h-16 w-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Course Completed! 🎉</h3>
          <p className="mb-4">Congratulations! You've successfully completed all lessons.</p>
          <p className="text-sm opacity-90">Your certificate has been generated and is available in your dashboard.</p>
        </div>
      )}
    </div>
  )
}
