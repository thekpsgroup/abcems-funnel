"use client"

import { useState } from "react"
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CheckIcon,
  ClockIcon,
  UsersIcon,
  CurrencyDollarIcon,
  AcademicCapIcon
} from "@heroicons/react/24/outline"
import toast from "react-hot-toast"

interface CourseData {
  title: string
  description: string
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  priceCents: number
  durationHours: number
  maxStudents: number
  learningObjectives: string[]
  prerequisites: string
  materials: string
  imageUrl?: string
}

interface CourseCreationWizardProps {
  isOpen: boolean
  onClose: () => void
  onSave: (courseData: CourseData) => void
}

export function CourseCreationWizard({ isOpen, onClose, onSave }: CourseCreationWizardProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [courseData, setCourseData] = useState<CourseData>({
    title: '',
    description: '',
    category: '',
    difficulty: 'beginner',
    priceCents: 0,
    durationHours: 0,
    maxStudents: 0,
    learningObjectives: [],
    prerequisites: '',
    materials: ''
  })

  const totalSteps = 4

  const updateCourseData = (field: keyof CourseData, value: CourseData[keyof CourseData]) => {
    setCourseData(prev => ({ ...prev, [field]: value }))
  }

  const addLearningObjective = () => {
    setCourseData(prev => ({
      ...prev,
      learningObjectives: [...prev.learningObjectives, '']
    }))
  }

  const updateLearningObjective = (index: number, value: string) => {
    setCourseData(prev => ({
      ...prev,
      learningObjectives: prev.learningObjectives.map((obj, i) => i === index ? value : obj)
    }))
  }

  const removeLearningObjective = (index: number) => {
    setCourseData(prev => ({
      ...prev,
      learningObjectives: prev.learningObjectives.filter((_, i) => i !== index)
    }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return courseData.title.trim() !== '' && courseData.description.trim() !== ''
      case 2:
        return courseData.category !== '' && courseData.priceCents > 0
      case 3:
        return courseData.durationHours > 0 && courseData.maxStudents > 0
      case 4:
        return courseData.learningObjectives.length > 0
      default:
        return false
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1)
    } else if (!validateStep(currentStep)) {
      toast.error('Please fill in all required fields')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSave = () => {
    if (validateStep(currentStep)) {
      onSave(courseData)
      toast.success('Course created successfully!')
      onClose()
      // Reset form
      setCourseData({
        title: '',
        description: '',
        category: '',
        difficulty: 'beginner',
        priceCents: 0,
        durationHours: 0,
        maxStudents: 0,
        learningObjectives: [],
        prerequisites: '',
        materials: ''
      })
      setCurrentStep(1)
    } else {
      toast.error('Please fill in all required fields')
    }
  }

  if (!isOpen) return null

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Title *
              </label>
              <input
                type="text"
                value={courseData.title}
                onChange={(e) => updateCourseData('title', e.target.value)}
                placeholder="e.g., EMT Basic Preparation Course"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Description *
              </label>
              <textarea
                value={courseData.description}
                onChange={(e) => updateCourseData('description', e.target.value)}
                placeholder="Describe what students will learn in this course..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Difficulty Level
                </label>
                <select
                  value={courseData.difficulty}
                  onChange={(e) => updateCourseData('difficulty', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={courseData.category}
                  onChange={(e) => updateCourseData('category', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  <option value="EMT">EMT</option>
                  <option value="Paramedic">Paramedic</option>
                  <option value="CPR">CPR</option>
                  <option value="First Aid">First Aid</option>
                  <option value="Trauma">Trauma Care</option>
                  <option value="Pediatrics">Pediatrics</option>
                </select>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (USD) *
                </label>
                <div className="relative">
                  <CurrencyDollarIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={courseData.priceCents / 100}
                    onChange={(e) => updateCourseData('priceCents', parseFloat(e.target.value) * 100)}
                    placeholder="199.99"
                    min="0"
                    step="0.01"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (Hours) *
                </label>
                <div className="relative">
                  <ClockIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={courseData.durationHours}
                    onChange={(e) => updateCourseData('durationHours', parseInt(e.target.value))}
                    placeholder="40"
                    min="1"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Students *
              </label>
              <div className="relative">
                <UsersIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="number"
                  value={courseData.maxStudents}
                  onChange={(e) => updateCourseData('maxStudents', parseInt(e.target.value))}
                  placeholder="25"
                  min="1"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prerequisites
              </label>
              <textarea
                value={courseData.prerequisites}
                onChange={(e) => updateCourseData('prerequisites', e.target.value)}
                placeholder="e.g., Basic life support certification, High school diploma..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
              />
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Learning Objectives *
                </label>
                <button
                  onClick={addLearningObjective}
                  className="flex items-center px-3 py-1 bg-[#8B0000] text-white text-sm rounded-lg hover:bg-[#A52A2A] transition-colors"
                >
                  <CheckIcon className="h-4 w-4 mr-1" />
                  Add Objective
                </button>
              </div>

              {courseData.learningObjectives.length === 0 ? (
                <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                  <AcademicCapIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 mb-2">No learning objectives added yet</p>
                  <button
                    onClick={addLearningObjective}
                    className="text-[#8B0000] hover:text-[#A52A2A] font-medium"
                  >
                    Click to add your first objective
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {courseData.learningObjectives.map((objective, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={objective}
                        onChange={(e) => updateLearningObjective(index, e.target.value)}
                        placeholder="e.g., Demonstrate proper CPR techniques"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                      />
                      <button
                        onClick={() => removeLearningObjective(index)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Materials
              </label>
              <textarea
                value={courseData.materials}
                onChange={(e) => updateCourseData('materials', e.target.value)}
                placeholder="e.g., Textbook, Online modules, Practice scenarios, Certification exam..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
              />
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B0000] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Create Course</h3>
              <p className="text-gray-600">Review your course details before saving</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Title</label>
                  <p className="text-sm text-gray-900">{courseData.title}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Category</label>
                  <p className="text-sm text-gray-900">{courseData.category}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Difficulty</label>
                  <p className="text-sm text-gray-900 capitalize">{courseData.difficulty}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Price</label>
                  <p className="text-sm text-gray-900">${(courseData.priceCents / 100).toFixed(2)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Duration</label>
                  <p className="text-sm text-gray-900">{courseData.durationHours} hours</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Max Students</label>
                  <p className="text-sm text-gray-900">{courseData.maxStudents}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500 block mb-2">Description</label>
                <p className="text-sm text-gray-900 bg-white p-3 rounded border">{courseData.description}</p>
              </div>

              {courseData.learningObjectives.length > 0 && (
                <div>
                  <label className="text-sm font-medium text-gray-500 block mb-2">Learning Objectives</label>
                  <ul className="text-sm text-gray-900 bg-white p-3 rounded border space-y-1">
                    {courseData.learningObjectives.map((obj, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#8B0000] mr-2">•</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Create New Course</h2>
            <p className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div key={i} className="flex-1">
                <div className={`h-2 rounded-full ${
                  i + 1 <= currentStep ? 'bg-[#8B0000]' : 'bg-gray-200'
                }`} />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {['Basic Info', 'Pricing', 'Content', 'Review'].map((step, index) => (
              <span key={step} className={`text-xs font-medium ${
                index + 1 <= currentStep ? 'text-[#8B0000]' : 'text-gray-400'
              }`}>
                {step}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {renderStepContent()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeftIcon className="h-4 w-4 mr-2" />
            Previous
          </button>

          <div className="text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </div>

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="flex items-center px-4 py-2 bg-[#8B0000] text-white rounded-lg hover:bg-[#A52A2A] transition-colors"
            >
              Next
              <ChevronRightIcon className="h-4 w-4 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <CheckIcon className="h-4 w-4 mr-2" />
              Create Course
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
