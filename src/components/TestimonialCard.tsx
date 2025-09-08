interface TestimonialCardProps {
  testimonial: {
    text: string
    author: string
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
      <p className="text-kps-navy font-semibold">— {testimonial.author}</p>
    </div>
  )
}
