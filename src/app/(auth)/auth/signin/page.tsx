"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import toast from "react-hot-toast"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })
      
      if (result?.ok) {
        toast.success("Welcome back!")
        window.location.href = "/dashboard"
      } else {
        toast.error("Invalid email or password. Please try again.")
      }
    } catch (error) {
      console.error("Sign in error:", error)
      toast.error("Error signing in. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <Image src="/logo.jpg" alt="ABCEMS Solutions" width={64} height={64} className="h-16 w-auto mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-kps-navy mb-2">ABCEMS Solutions</h1>
          <p className="text-kps-gold">Pass the NREMT with Confidence</p>
        </div>

        <div className="space-y-6">
          {/* Credentials Sign In */}
          <form onSubmit={handleCredentialsSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#8B0000] to-[#A52A2A] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#A52A2A] hover:to-[#8B0000] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-kps-navy hover:text-kps-gold text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
