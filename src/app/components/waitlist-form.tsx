"use client"

import type React from "react"

import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Loader2 } from "lucide-react"

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)
    setError("")
    console.log(formData)

    try {
      // First, submit to waitlist
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status)
      console.log("Response ok:", response.ok)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Response error:", errorText)
        
        try {
          const errorData = JSON.parse(errorText)
          throw new Error(errorData.error || `Failed to submit: ${response.status}`)
        } catch {
          throw new Error(`Failed to submit: ${response.status}`)
        }
      }

      // If waitlist submission is successful, send email notification
      try {
        const emailResponse = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            name: formData.name
          }),
        })

        if (!emailResponse.ok) {
          console.warn("Email notification failed, but waitlist submission was successful")
        } else {
          console.log("Email notification sent successfully")
        }
      } catch (emailError) {
        console.warn("Email notification error:", emailError)
        // Don't fail the entire submission if email fails
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error("Fetch error:", err)
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 w-full">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="border-emerald-200">
              <div className="pt-6">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">You&apos;re on the list!</h3>
                <p className="text-slate-600">We&apos;ll notify you as soon as Charlotte Golf Club opens for membership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="py-20">
      <div className="container mx-auto px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Join the Waitlist</h2>
            <p className="text-xl text-slate-600">Be the first to know when Charlotte Golf Club opens for membership</p>
          </div>

          <div className="shadow-xl border-0 rounded-lg bg-white px-6 py-6">
            <div className="text-center pb-6 rounded-t-lg">
              <div className="text-2xl text-slate-800">Reserve Your Spot</div>
              <div className="text-lg">Limited founding memberships available</div>
            </div>
            <div className="bg-white rounded-b-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 bg-white rounded-lg p-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-bold">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-12 border-2 border-slate-300 rounded-lg px-4"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="font-bold">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="h-12 border-2 border-slate-300 rounded-lg px-4"
                    />
                  </div>
                </div>
                {error && <div className="text-red-600 text-sm text-center">{error}</div>}

                <button
                  type="submit"
                  className="w-full rounded-lg h-12 text-white bg-emerald-700 hover:bg-emerald-800 text-lg font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By joining, you agree to receive updates about Charlotte Golf Club. We respect your privacy and won&apos;t
                  spam you.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
