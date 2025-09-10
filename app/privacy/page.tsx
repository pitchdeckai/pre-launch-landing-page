import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/payseed-logo.png" alt="Payseed" width={32} height={32} className="rounded-lg" />
            <span className="font-serif text-xl font-bold">Payseed</span>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:text-primary transition-colors">
              Terms
            </Link>
            <Button asChild size="sm">
              <Link href="/#waitlist">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif font-bold text-balance">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payseed LTD ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy
                  explains how we collect, use, disclose, and safeguard your information when you use our financial SaaS
                  platform and services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We collect information you provide directly to us, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-2">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Business information and tax identification numbers</li>
                      <li>Stripe Connect account details and payment information</li>
                      <li>Technical information about your applications and integrations</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Automatically Collected Information</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We automatically collect certain information when you use our services:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-2">
                      <li>Usage data and analytics</li>
                      <li>Device information and IP addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>Transaction data and payment processing information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process payments and manage your account</li>
                  <li>Communicate with you about your account and our services</li>
                  <li>Comply with legal obligations and prevent fraud</li>
                  <li>Analyze usage patterns to enhance user experience</li>
                  <li>Send you technical notices and security alerts</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">4. Information Sharing and Disclosure</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We may share your information in the following circumstances:
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">With Stripe</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      As our payment processing partner, we share necessary information with Stripe to facilitate
                      payments and comply with their terms of service and regulatory requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Legal Requirements</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We may disclose your information if required by law, regulation, or legal process, or to protect
                      the rights, property, or safety of Payseed, our users, or others.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Business Transfers</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred as
                      part of that transaction.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. This includes
                  encryption, secure data transmission, and regular security assessments.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services, comply with
                  legal obligations, resolve disputes, and enforce our agreements. Transaction data may be retained for
                  up to 7 years for regulatory compliance purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">7. Your Rights (GDPR Compliance)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are a resident of the European Economic Area, you have the following rights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>
                    <strong>Access:</strong> Request access to your personal information
                  </li>
                  <li>
                    <strong>Rectification:</strong> Request correction of inaccurate information
                  </li>
                  <li>
                    <strong>Erasure:</strong> Request deletion of your personal information
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data to another service
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request limitation of processing
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your personal information
                  </li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">8. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and provide
                  personalized content. You can control cookie preferences through your browser settings, though some
                  features may not function properly if cookies are disabled.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">9. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of
                  residence. We ensure appropriate safeguards are in place to protect your information in accordance
                  with applicable data protection laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect
                  personal information from children under 18. If we become aware that we have collected such
                  information, we will take steps to delete it promptly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">11. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">12. Contact Us</h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Email: pitchdeck.official@gmail.com</p>
                    <p>Phone: +44 7427 644220</p>
                    <p>Company: Payseed LTD</p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
