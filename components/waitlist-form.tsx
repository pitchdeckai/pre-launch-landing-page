"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CheckCircle, Loader2, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface WaitlistFormProps {
  className?: string
}

export function WaitlistForm({ className }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const [position, setPosition] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")
    setMessage("")

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("success")
        setMessage(data.message)
        setPosition(data.position)
        setEmail("")

        // Track successful signup
        console.log("[v0] Waitlist signup successful:", data)
      } else {
        setStatus("error")
        setMessage(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("[v0] Waitlist signup error:", error)
      setStatus("error")
      setMessage("Network error. Please check your connection and try again.")
    }
  }

  if (status === "success") {
    return (
      <Card className={`max-w-md mx-auto glass-effect border-primary/20 ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Welcome to the Beta!</h3>
          <p className="text-muted-foreground mb-4">{message}</p>
          {position && (
            <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
              <p className="text-sm text-muted-foreground">
                You're <span className="font-bold text-primary">#{position}</span> on the waitlist
              </p>
            </div>
          )}
          <Button
            variant="outline"
            size="sm"
            className="mt-4 bg-transparent"
            onClick={() => {
              setStatus("idle")
              setMessage("")
              setPosition(null)
            }}
          >
            Join Another Email
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (status === "error") {
                setStatus("idle")
                setMessage("")
              }
            }}
            className="flex-1 border-primary/20 focus:border-primary"
            disabled={status === "loading"}
            required
          />
          <Button
            type="submit"
            className="animate-pulse-glow bg-primary hover:bg-primary/90"
            disabled={status === "loading"}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                Join Beta <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 mt-3 text-red-500 text-sm">
            <AlertCircle className="w-4 h-4" />
            {message}
          </div>
        )}

        {status === "loading" && (
          <div className="mt-3 text-sm text-muted-foreground text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              <span className="ml-2">Processing your request...</span>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
