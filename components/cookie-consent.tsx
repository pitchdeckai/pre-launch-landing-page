"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie, Settings } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const consent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const consent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    }
    localStorage.setItem("cookie-consent", JSON.stringify(consent))
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
        <Card className="mx-auto max-w-4xl border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">We use cookies</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze usage, and provide
                    personalized content. By clicking "Accept All", you consent to our use of cookies. You can manage
                    your preferences or learn more in our{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button onClick={acceptAll} size="sm">
                    Accept All
                  </Button>
                  <Button onClick={rejectAll} variant="outline" size="sm">
                    Reject All
                  </Button>
                  <Button onClick={() => setShowSettings(true)} variant="ghost" size="sm" className="gap-2">
                    <Settings className="h-4 w-4" />
                    Customize
                  </Button>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowBanner(false)} className="flex-shrink-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <Card className="border bg-background shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-semibold">Cookie Preferences</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-6">
                  <p className="text-muted-foreground text-sm">
                    Manage your cookie preferences below. You can enable or disable different types of cookies and
                    change your preferences at any time.
                  </p>

                  <div className="space-y-4">
                    {/* Necessary Cookies */}
                    <div className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Necessary Cookies</h3>
                        <p className="text-sm text-muted-foreground">
                          Essential for the website to function properly. These cannot be disabled.
                        </p>
                      </div>
                      <div className="ml-4">
                        <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Analytics Cookies</h3>
                        <p className="text-sm text-muted-foreground">
                          Help us understand how visitors interact with our website by collecting anonymous information.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }))}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.analytics ? "bg-primary justify-end" : "bg-muted justify-start"
                          } px-1`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </button>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-start justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">Marketing Cookies</h3>
                        <p className="text-sm text-muted-foreground">
                          Used to track visitors across websites to display relevant advertisements.
                        </p>
                      </div>
                      <div className="ml-4">
                        <button
                          onClick={() => setPreferences((prev) => ({ ...prev, marketing: !prev.marketing }))}
                          className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                            preferences.marketing ? "bg-primary justify-end" : "bg-muted justify-start"
                          } px-1`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button onClick={acceptSelected} className="flex-1">
                      Save Preferences
                    </Button>
                    <Button onClick={acceptAll} variant="outline" className="flex-1 bg-transparent">
                      Accept All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  )
}
