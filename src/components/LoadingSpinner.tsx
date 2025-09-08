"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
  fullScreen?: boolean
}

export function LoadingSpinner({ 
  size = "md", 
  text = "Loading...", 
  fullScreen = false 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  }

  const containerClasses = fullScreen 
    ? "fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
    : "flex items-center justify-center p-4"

  return (
    <div className={containerClasses}>
      <div className="flex flex-col items-center space-y-3">
        <motion.div
          className={`${sizeClasses[size]} border-4 border-gray-200 border-t-[#8B0000] rounded-full`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        {text && (
          <motion.p
            className="text-sm text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  )
}

export function LoadingCard() {
  return (
    <div className="bg-white rounded-lg shadow p-6 animate-pulse">
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  )
}

export function LoadingTable({ rows = 5 }: { rows?: number }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
        <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
      </div>
      <div className="divide-y divide-gray-200">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="px-6 py-4 animate-pulse">
            <div className="flex space-x-4">
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/5"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
