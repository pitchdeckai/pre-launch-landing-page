import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Source_Sans_3 } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Payseed - AI SaaS Monetization Platform | Stripe Connect Integration",
  description:
    "Transform your AI applications into profitable SaaS businesses with Payseed's npm package. Seamless Stripe Connect integration, 5% platform fee, automated payouts. Join 500+ developers monetizing AI.",
  keywords: [
    "AI SaaS monetization",
    "Stripe Connect integration",
    "npm package AI payments",
    "AI application monetization",
    "SaaS payment platform",
    "AI revenue generation",
    "Stripe Connect Express",
    "AI SaaS platform",
    "developer monetization tools",
    "AI payment processing",
    "SaaS billing automation",
    "AI startup platform",
  ],
  authors: [{ name: "Payseed LTD", url: "https://payseed.com" }],
  creator: "Payseed LTD",
  publisher: "Payseed LTD",
  category: "Financial Technology",
  classification: "AI SaaS Monetization Platform",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://payseed.com",
    siteName: "Payseed - AI SaaS Monetization Platform",
    title: "Payseed - Transform AI Ideas into Profitable SaaS Businesses",
    description:
      "The ultimate npm package for AI SaaS monetization. Stripe Connect integration, 5% platform fee, automated payouts. Used by 500+ developers worldwide.",
    images: [
      {
        url: "/payseed-og-image.png",
        width: 1200,
        height: 630,
        alt: "Payseed - AI SaaS Monetization Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@payseed",
    creator: "@payseed",
    title: "Payseed - AI SaaS Monetization Made Simple",
    description:
      "Transform your AI applications into profitable SaaS businesses. npm install payseed - 5% platform fee - Stripe Connect ready.",
    images: ["/payseed-twitter-card.png"],
  },
  alternates: {
    canonical: "https://payseed.com",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Payseed",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#3b82f6",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Payseed",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              description:
                "AI SaaS monetization platform with Stripe Connect integration. Transform AI applications into profitable businesses with our npm package.",
              url: "https://payseed.com",
              downloadUrl: "https://www.npmjs.com/package/payseed",
              softwareVersion: "1.0.0-beta",
              releaseNotes: "Beta release with Stripe Connect integration and AI-optimized payment processing",
              programmingLanguage: ["JavaScript", "TypeScript"],
              runtimePlatform: ["Node.js", "Next.js"],
              requirements: "Node.js 16+, Next.js 13+",
              applicationSubCategory: "Payment Processing",
              featureList: [
                "Stripe Connect Express integration",
                "AI usage tracking and billing",
                "Automated payout management",
                "5% platform fee structure",
                "Real-time payment processing",
                "Developer-friendly npm package",
                "Embedded onboarding flow",
                "Multi-currency support",
              ],
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                description: "Free to install with 5% platform fee on processed payments",
              },
              publisher: {
                "@type": "Organization",
                name: "Payseed LTD",
                url: "https://payseed.com",
                logo: "https://payseed.com/payseed-logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+44-7427-644220",
                  contactType: "customer service",
                  email: "pitchdeck.official@gmail.com",
                },
              },
              sameAs: ["https://www.npmjs.com/package/payseed", "https://discord.gg/WjRPVZRcTt"],
            }),
          }}
        />
        <link rel="canonical" href="https://payseed.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans ${sourceSans.variable} ${playfair.variable} ${GeistMono.variable}`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
