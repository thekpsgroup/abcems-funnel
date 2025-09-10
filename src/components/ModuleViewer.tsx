"use client"

import { useState, useEffect } from 'react'
import { ChevronDownIcon, ChevronRightIcon, ClockIcon, CheckCircleIcon, PlayIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { PdfViewer } from './PdfViewer'

interface Module {
  id: string
  title: string
  description?: string
  estimatedTime: number
  order: number
  progress?: {
    isCompleted: boolean
    timeSpent: number
    completedAt?: string
  }
  lessons: Lesson[]
}

interface Lesson {
  id: string
  title: string
  content?: string
  pdfUrl?: string
  estimatedTime: number
  order: number
  progress?: {
    isCompleted: boolean
    timeSpent: number
    notes?: string
  }
}

interface ModuleViewerProps {
  courseId: string
  enrollmentId: string
}

export function ModuleViewer({ courseId, enrollmentId }: ModuleViewerProps) {
  const [modules, setModules] = useState<Module[]>([])
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set())
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchModules()
  }, [courseId])

  const fetchModules = async () => {
    try {
      const response = await fetch(`/api/modules?courseId=${courseId}`)
      if (!response.ok) throw new Error('Failed to fetch modules')

      const data = await response.json()
      setModules(data.modules || [])

      // Auto-expand first module if no progress exists
      if (data.modules?.length > 0) {
        const firstModule = data.modules[0]
        const hasProgress = firstModule.lessons?.some((lesson: Lesson) => lesson.progress?.isCompleted)
        if (!hasProgress) {
          setExpandedModules(new Set([firstModule.id]))
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load modules')
    } finally {
      setLoading(false)
    }
  }

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules)
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId)
    } else {
      newExpanded.add(moduleId)
    }
    setExpandedModules(newExpanded)
  }

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson)
  }

  const handleTimeUpdate = async (timeSpent: number) => {
    if (!selectedLesson) return

    try {
      await fetch('/api/progress/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enrollmentId,
          lessonId: selectedLesson.id,
          moduleId: modules.find(m => m.lessons?.some(l => l.id === selectedLesson.id))?.id,
          timeSpent
        })
      })

      // Refresh modules to get updated progress
      fetchModules()
    } catch (error) {
      console.error('Failed to update time:', error)
    }
  }

  const handleNotesUpdate = async (notes: string) => {
    if (!selectedLesson) return

    try {
      await fetch('/api/progress/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enrollmentId,
          lessonId: selectedLesson.id,
          notes
        })
      })
    } catch (error) {
      console.error('Failed to save notes:', error)
    }
  }

  const completeLesson = async () => {
    if (!selectedLesson) return

    try {
      await fetch('/api/progress/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enrollmentId,
          lessonId: selectedLesson.id,
          moduleId: modules.find(m => m.lessons?.some(l => l.id === selectedLesson.id))?.id,
          completed: true
        })
      })

      // Refresh modules to get updated progress
      fetchModules()
      setSelectedLesson(null)
    } catch (error) {
      console.error('Failed to complete lesson:', error)
    }
  }

  const getModuleProgress = (module: Module) => {
    if (!module.lessons?.length) return 0
    const completedLessons = module.lessons.filter(lesson => lesson.progress?.isCompleted).length
    return Math.round((completedLessons / module.lessons.length) * 100)
  }

  const getTotalProgress = () => {
    if (!modules.length) return 0
    const totalLessons = modules.reduce((sum, module) => sum + (module.lessons?.length || 0), 0)
    const completedLessons = modules.reduce((sum, module) =>
      sum + (module.lessons?.filter(lesson => lesson.progress?.isCompleted).length || 0), 0)
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course modules...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-800">Error: {error}</p>
        <button
          onClick={fetchModules}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Course Progress Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900">Course Modules</h1>
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">{getTotalProgress()}%</div>
            <div className="text-sm text-gray-600">Course Progress</div>
          </div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${getTotalProgress()}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Modules Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          {modules.map((module) => {
            const progress = getModuleProgress(module)
            const isExpanded = expandedModules.has(module.id)

            return (
              <div key={module.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{module.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{module.description}</p>
                    <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        {module.estimatedTime} min
                      </div>
                      <div className="flex items-center">
                        <BookOpenIcon className="w-3 h-3 mr-1" />
                        {module.lessons?.length || 0} lessons
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{progress}%</div>
                      <div className="w-16 bg-gray-200 rounded-full h-1 mt-1">
                        <div
                          className="bg-green-600 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {isExpanded && module.lessons && (
                  <div className="border-t border-gray-200">
                    {module.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => handleLessonClick(lesson)}
                        className={`w-full p-3 text-left hover:bg-blue-50 transition-colors flex items-center space-x-3 ${
                          selectedLesson?.id === lesson.id ? 'bg-blue-50 border-r-4 border-blue-500' : ''
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {lesson.progress?.isCompleted ? (
                            <CheckCircleIcon className="w-5 h-5 text-green-600" />
                          ) : (
                            <PlayIcon className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {lesson.title}
                          </p>
                          <div className="flex items-center mt-1 space-x-2 text-xs text-gray-500">
                            <span>{lesson.estimatedTime} min</span>
                            {lesson.pdfUrl && <span>• PDF Available</span>}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Lesson Content Area */}
        <div className="lg:col-span-2">
          {selectedLesson ? (
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedLesson.title}</h2>
                    <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        Estimated: {selectedLesson.estimatedTime} minutes
                      </div>
                      {selectedLesson.progress?.timeSpent && (
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          Spent: {Math.floor(selectedLesson.progress.timeSpent / 60)}:{(selectedLesson.progress.timeSpent % 60).toString().padStart(2, '0')}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={completeLesson}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Mark as Complete
                  </button>
                </div>

                {selectedLesson.content && (
                  <div className="prose prose-gray max-w-none mb-6">
                    <div dangerouslySetInnerHTML={{ __html: selectedLesson.content }} />
                  </div>
                )}
              </div>

              {selectedLesson.pdfUrl && (
                <PdfViewer
                  pdfUrl={selectedLesson.pdfUrl}
                  lessonId={selectedLesson.id}
                  onTimeUpdate={handleTimeUpdate}
                  onNotesUpdate={handleNotesUpdate}
                  initialNotes={selectedLesson.progress?.notes || ''}
                  estimatedTime={selectedLesson.estimatedTime}
                />
              )}
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
              <BookOpenIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Lesson</h3>
              <p className="text-gray-600">
                Choose a lesson from the modules on the left to start learning.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
