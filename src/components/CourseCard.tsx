import { Course } from "@prisma/client"
import { CheckoutButton } from "./CheckoutButton"

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const price = (course.priceCents / 100).toFixed(0)
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold mb-3 text-kps-navy">{course.title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold text-kps-navy">${price}</span>
        {course.title.includes("Tutoring") && (
          <span className="text-gray-500 ml-1">/hour</span>
        )}
      </div>
      
      <CheckoutButton courseId={course.id} courseTitle={course.title} price={course.priceCents} />
    </div>
  )
}
