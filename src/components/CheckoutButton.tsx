"use client"

import { useState } from "react"

interface CheckoutButtonProps {
  courseId: string
  courseTitle: string
  price: number
}

export function CheckoutButton({ courseId, courseTitle, price }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          courseTitle,
          price,
          quantity: 1
        }),
      })

      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      alert("There was an error processing your payment. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="w-full bg-kps-navy text-white py-3 px-6 rounded-lg font-semibold hover:bg-kps-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {loading ? "Processing..." : "Enroll Now"}
    </button>
  )
}
