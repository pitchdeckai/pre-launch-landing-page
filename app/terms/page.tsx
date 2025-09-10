import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function TermsPage() {
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
            <Link href="/privacy" className="text-sm font-medium hover:text-primary transition-colors">
              Privacy
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
            <h1 className="text-4xl font-serif font-bold text-balance">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">1. Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Payseed LTD's services ("Payseed", "we", "us", or "our"), you accept and agree
                  to be bound by the terms and provision of this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">2. Service Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payseed is a financial SaaS platform that enables developers to monetize their AI applications through
                  Stripe Connect integration. We provide tools, APIs, and infrastructure to help developers implement
                  payment processing and subscription management in their applications.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">3. Platform Fees and Payment Terms</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Platform Fee:</strong> Payseed charges a 5% platform fee on all successful transactions
                    processed through our service. This fee is automatically deducted from payments before they reach
                    your connected Stripe account.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Payment Processing:</strong> When customers make payments through your application using
                    Payseed's infrastructure, we facilitate the transaction through Stripe Connect. After deducting our
                    5% platform fee and applicable Stripe processing fees, the remaining amount is transferred to your
                    connected Stripe account.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>Fee Structure Example:</strong> For a $100 transaction, Payseed retains $5 (5% platform
                    fee), Stripe retains their standard processing fee (typically 2.9% + $0.30), and you receive the
                    remainder.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">4. Developer Responsibilities</h2>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    As a developer using Payseed's services, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Maintain a valid Stripe Connect account in good standing</li>
                    <li>Comply with all applicable laws and regulations regarding payment processing</li>
                    <li>Provide accurate product/service descriptions to your customers</li>
                    <li>Handle customer support for your applications and services</li>
                    <li>Implement proper security measures to protect customer data</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">5. Stripe Connect Integration</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our service operates through Stripe Connect, which means all payment processing is subject to Stripe's
                  terms of service and compliance requirements. By using Payseed, you also agree to comply with Stripe's
                  terms and maintain good standing with Stripe's platform.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">6. Service Availability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to maintain 99.9% uptime, Payseed is provided "as is" without warranty of any kind. We
                  reserve the right to modify, suspend, or discontinue the service at any time with reasonable notice to
                  users.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">7. Data and Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to protecting your privacy and the privacy of your customers. Our data handling
                  practices are detailed in our Privacy Policy. We only collect and process data necessary to provide
                  our services and comply with legal requirements.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payseed LTD shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible
                  losses, resulting from your use of the service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">9. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate this agreement at any time with 30 days written notice. Upon termination,
                  you will remain responsible for any outstanding fees and your access to the service will be
                  discontinued.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-serif font-semibold">10. Contact Information</h2>
                <div className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">
                    For questions about these Terms of Service, please contact us:
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
