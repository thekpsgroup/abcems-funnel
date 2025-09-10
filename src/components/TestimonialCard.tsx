interface TestimonialCardProps {
  testimonial: {
    text: string
    author: string
    rating?: number
    source?: string
  }
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="flex items-center justify-between">
        <p className="text-kps-navy font-semibold">— {testimonial.author}</p>
        {testimonial.rating && (
          <div className="flex items-center">
            {[...Array(testimonial.rating)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        )}
      </div>
      {testimonial.source && (
        <p className="text-xs text-gray-500 mt-2">{testimonial.source}</p>
      )}
    </div>
  )
}
