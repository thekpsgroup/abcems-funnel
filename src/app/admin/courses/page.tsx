"use client"

import { useState, useEffect, useMemo } from "react"
import {
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  PencilIcon,
  EyeIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CheckCircleIcon,
  XCircleIcon,
  StarIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"
import { CourseCreationWizard } from "@/components/CourseCreationWizard"

interface Course {
  id: string
  title: string
  description: string
  priceCents: number
  active: boolean
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  durationHours: number
  maxStudents: number
  enrollmentCount: number
  revenueTotal: number
  createdAt: string
  updatedAt: string
  instructorName?: string
  rating?: number
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)

  // Mock data for demonstration
  useEffect(() => {
    const mockCourses: Course[] = [
      {
        id: "1",
        title: "EMT Basic Preparation Course",
        description: "Comprehensive EMT-Basic training program covering all NREMT exam topics with hands-on scenarios.",
        priceCents: 20000,
        active: true,
        category: "EMT",
        difficulty: "beginner",
        durationHours: 40,
        maxStudents: 25,
        enrollmentCount: 18,
        revenueTotal: 360000,
        createdAt: "2024-11-01T10:00:00Z",
        updatedAt: "2024-12-15T14:30:00Z",
        instructorName: "Dr. Sarah Johnson",
        rating: 4.8
      },
      {
        id: "2",
        title: "Paramedic Advanced Life Support",
        description: "Advanced paramedic training focusing on critical care, trauma management, and advanced pharmacology.",
        priceCents: 40000,
        active: true,
        category: "Paramedic",
        difficulty: "advanced",
        durationHours: 80,
        maxStudents: 15,
        enrollmentCount: 12,
        revenueTotal: 480000,
        createdAt: "2024-10-15T09:00:00Z",
        updatedAt: "2024-12-14T16:45:00Z",
        instructorName: "Captain Mike Rodriguez",
        rating: 4.9
      },
      {
        id: "3",
        title: "EMT Refresher Course",
        description: "Quick refresher course for certified EMTs needing to renew their certification.",
        priceCents: 15000,
        active: false,
        category: "EMT",
        difficulty: "intermediate",
        durationHours: 16,
        maxStudents: 30,
        enrollmentCount: 0,
        revenueTotal: 0,
        createdAt: "2024-09-01T08:00:00Z",
        updatedAt: "2024-11-30T12:00:00Z",
        instructorName: "Nurse Emily Chen",
        rating: 4.6
      }
    ]

    setTimeout(() => {
      setCourses(mockCourses)
      setLoading(false)
    }, 1000)
  }, [])

  // Filter courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = categoryFilter === "all" || course.category === categoryFilter
      const matchesStatus = statusFilter === "all" ||
                          (statusFilter === "active" && course.active) ||
                          (statusFilter === "inactive" && !course.active)
      const matchesDifficulty = difficultyFilter === "all" || course.difficulty === difficultyFilter

      return matchesSearch && matchesCategory && matchesStatus && matchesDifficulty
    })
  }, [courses, searchQuery, categoryFilter, statusFilter, difficultyFilter])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getDifficultyLabel = (difficulty: string) => {
    return difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
  }

  const toggleCourseStatus = (courseId: string) => {
    setCourses(prev => prev.map(course =>
      course.id === courseId
        ? { ...course, active: !course.active }
        : course
    ))
    toast.success("Course status updated!")
  }

  const duplicateCourse = (course: Course) => {
    const newCourse: Course = {
      ...course,
      id: Date.now().toString(),
      title: `${course.title} (Copy)`,
      active: false,
      enrollmentCount: 0,
      revenueTotal: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    setCourses(prev => [...prev, newCourse])
    toast.success("Course duplicated!")
  }

  const formatPrice = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8B0000] mx-auto"></div>
          <p className="text-gray-600 mt-4">Loading courses...</p>
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
                <AcademicCapIcon className="h-8 w-8 mr-3 text-[#8B0000]" />
                Course Management
              </h1>
              <p className="text-gray-600">
                Create, manage, and monitor your course catalog
              </p>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center px-6 py-3 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Create Course
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Courses</p>
                  <p className="text-3xl font-bold text-gray-900">{courses.length}</p>
                </div>
                <AcademicCapIcon className="h-10 w-10 text-[#8B0000] opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Courses</p>
                  <p className="text-3xl font-bold text-green-600">
                    {courses.filter(c => c.active).length}
                  </p>
                </div>
                <CheckCircleIcon className="h-10 w-10 text-green-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-blue-600">
                    ${courses.reduce((sum, c) => sum + c.revenueTotal, 0) / 100}
                  </p>
                </div>
                <CurrencyDollarIcon className="h-10 w-10 text-blue-500 opacity-80" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Enrollments</p>
                  <p className="text-3xl font-bold text-purple-600">
                    {courses.reduce((sum, c) => sum + c.enrollmentCount, 0)}
                  </p>
                </div>
                <UsersIcon className="h-10 w-10 text-purple-500 opacity-80" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <FunnelIcon className="h-5 w-5 mr-2" />
                Filters
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="EMT">EMT</option>
                    <option value="Paramedic">Paramedic</option>
                    <option value="CPR">CPR</option>
                    <option value="First Aid">First Aid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  >
                    <option value="all">All Levels</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setCategoryFilter("all")
                      setStatusFilter("all")
                      setDifficultyFilter("all")
                      setSearchQuery("")
                    }}
                    className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Course Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyColor(course.difficulty)}`}>
                    {getDifficultyLabel(course.difficulty)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <UsersIcon className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{course.enrollmentCount}/{course.maxStudents}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{course.durationHours}h</span>
                  </div>
                  <div className="flex items-center">
                    <CurrencyDollarIcon className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="font-semibold text-[#8B0000]">{formatPrice(course.priceCents)}</span>
                  </div>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400 mr-2" />
                    <span>{course.rating?.toFixed(1) || 'N/A'}</span>
                  </div>
                </div>
              </div>

              {/* Course Footer */}
              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    course.active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {course.active ? 'Active' : 'Inactive'}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(course.createdAt).toLocaleDateString()}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => toast.success(`Viewing ${course.title}`)}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View
                  </button>
                  <button
                    onClick={() => toast.success(`Editing ${course.title}`)}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <PencilIcon className="h-4 w-4 mr-2" />
                    Edit
                  </button>
                  <button
                    onClick={() => toggleCourseStatus(course.id)}
                    className={`flex items-center justify-center px-3 py-2 text-sm rounded-lg transition-colors ${
                      course.active
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-green-100 text-green-700 hover:bg-green-200'
                    }`}
                  >
                    {course.active ? <XCircleIcon className="h-4 w-4" /> : <CheckCircleIcon className="h-4 w-4" />}
                  </button>
                </div>

                {/* Additional Actions */}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => duplicateCourse(course)}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-purple-100 text-purple-700 text-sm rounded-lg hover:bg-purple-200 transition-colors"
                  >
                    <DocumentTextIcon className="h-4 w-4 mr-2" />
                    Duplicate
                  </button>
                  <button
                    onClick={() => toast.success(`Analytics for ${course.title}`)}
                    className="flex-1 flex items-center justify-center px-3 py-2 bg-indigo-100 text-indigo-700 text-sm rounded-lg hover:bg-indigo-200 transition-colors"
                  >
                    <ChartBarIcon className="h-4 w-4 mr-2" />
                    Analytics
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <AcademicCapIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-lg mb-2">No courses found</p>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Course Creation Wizard */}
        <CourseCreationWizard
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onSave={(courseData) => {
            // In a real app, this would save to database
            const newCourse: Course = {
              id: Date.now().toString(),
              title: courseData.title,
              description: courseData.description,
              priceCents: courseData.priceCents,
              active: true,
              category: courseData.category,
              difficulty: courseData.difficulty,
              durationHours: courseData.durationHours,
              maxStudents: courseData.maxStudents,
              enrollmentCount: 0,
              revenueTotal: 0,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              instructorName: "TBD",
              rating: undefined
            }
            setCourses(prev => [newCourse, ...prev])
          }}
        />
      </div>
    </div>
  )
}
