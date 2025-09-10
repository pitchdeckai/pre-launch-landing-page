"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Zap, Shield, TrendingUp, Users, Globe, Star, Code, Wrench, Sparkles } from "lucide-react"
import Image from "next/image"
import { WaitlistForm } from "@/components/waitlist-form"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Payseed - AI SaaS Monetization Platform",
            description:
              "The ultimate solution for monetizing AI applications. Install our npm package, integrate Stripe Connect, and start earning with just 5% platform fee.",
            url: "https://payseed.com",
            mainEntity: {
              "@type": "Product",
              name: "Payseed NPM Package",
              description:
                "AI SaaS monetization solution with Stripe Connect integration. Perfect for developers building AI applications who want to add payment processing and subscription management.",
              category: "Developer Tools",
              brand: {
                "@type": "Brand",
                name: "Payseed",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                description:
                  "Free npm package with 5% platform fee on processed payments. No setup fees, no minimum commitments.",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://payseed.com",
                },
              ],
            },
          }),
        }}
      />

      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/25 rounded-full blur-orb animate-float will-change-transform" />
        <div
          className="absolute top-60 right-20 w-80 h-80 bg-accent/20 rounded-full blur-orb animate-float will-change-transform"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-72 h-72 bg-primary/15 rounded-full blur-orb animate-float will-change-transform"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-64 h-64 bg-accent/10 rounded-full blur-orb animate-float will-change-transform"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl" : "bg-transparent"}`}
        role="banner"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/payseed-logo.png"
                  alt="Payseed Logo"
                  width={40}
                  height={40}
                  className="rounded-lg transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-foreground">Payseed</span>
                <div className="text-xs text-muted-foreground font-medium tracking-wider">FINANCIAL SAAS PLATFORM</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 hover:bg-primary/10 bg-transparent backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main>
        <section className="relative pt-32 pb-20 px-4" id="waitlist" aria-labelledby="hero-heading">
          <div className="container mx-auto text-center">
            <ScrollAnimation delay={0}>
              <Badge
                variant="secondary"
                className="mb-6 animate-pulse-glow bg-accent/10 text-accent border-accent/30 px-4 py-2 text-sm font-medium"
                role="status"
                aria-label="Development status"
              >
                <Sparkles className="w-4 h-4 mr-2" aria-hidden="true" />
                NPM Package in Development - Join Beta Waitlist
              </Badge>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <h1
                id="hero-heading"
                className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance leading-tight"
              >
                Build, Launch, and <span className="text-gradient">Monetize</span> Your AI SaaS
              </h1>
            </ScrollAnimation>

            <ScrollAnimation delay={400}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
                Seamlessly integrate Stripe Connect into your AI applications with our powerful npm package. The
                ultimate solution for AI SaaS monetization - focus on innovation while we handle payments,
                subscriptions, and revenue generation with just a 5% platform fee. Perfect for AI developers, machine
                learning engineers, and SaaS builders.
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={600}>
              <WaitlistForm className="mb-8" />
            </ScrollAnimation>

            <ScrollAnimation delay={800}>
              <p className="text-sm text-muted-foreground">
                Free beta access • No commitment required • Only 5% platform fee • Stripe Connect ready
              </p>
            </ScrollAnimation>
          </div>
        </section>

        <ScrollAnimation>
          <section
            className="py-16 px-4 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden"
            aria-labelledby="development-heading"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>
            <div className="container mx-auto text-center relative">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Code className="w-8 h-8 text-primary animate-bounce-subtle" aria-hidden="true" />
                  <h2 id="development-heading" className="text-3xl font-serif font-bold">
                    NPM Package: payseed
                  </h2>
                  <Wrench
                    className="w-8 h-8 text-accent animate-bounce-subtle"
                    style={{ animationDelay: "1s" }}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our npm package "payseed" is the definitive solution for AI SaaS monetization. Currently in active
                  development with cutting-edge features specifically designed for AI applications, machine learning
                  platforms, and intelligent SaaS products. Join our beta program to get early access and help shape the
                  future of AI application payments and subscription management.
                </p>
                <div className="bg-muted/50 rounded-xl p-6 font-mono text-sm border border-primary/10 relative overflow-hidden mb-8">
                  <div className="text-muted-foreground mb-2"># Install the Payseed npm package</div>
                  <div className="text-primary text-lg font-bold">npm install payseed</div>
                  <div className="text-accent text-lg">npm run payseed-inject --vendorId=yourId</div>
                  <div className="text-muted-foreground mt-4 text-sm">
                    📦 Available at:{" "}
                    <a
                      href="https://www.npmjs.com/package/payseed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline transition-colors font-semibold"
                      aria-label="View Payseed package on NPM"
                    >
                      npmjs.com/package/payseed
                    </a>
                  </div>
                  <div className="text-muted-foreground mt-2 text-sm">
                    🚀 Perfect for: AI SaaS, ML platforms, intelligent applications, automated services
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { icon: CheckCircle, text: "Stripe Connect Integration" },
                    { icon: CheckCircle, text: "AI Usage Tracking" },
                    { icon: CheckCircle, text: "Automated Payouts" },
                  ].map((item, index) => (
                    <ScrollAnimation key={index} delay={index * 100}>
                      <div className="flex items-center gap-3 justify-center group">
                        <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{item.text}</span>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Bento Grid Features */}
        <section id="features" className="py-20 px-4">
          <div className="container mx-auto">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Payseed?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Everything you need to monetize your AI SaaS, built for developers by developers
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Large Feature Card */}
              <ScrollAnimation delay={0}>
                <Card className="md:col-span-2 lg:col-span-2 glass-effect group border-primary/10 will-change-transform">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">Effortless Integration</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      Install our npm package, run the injection command, and get a ready-to-use merchant shop chunk
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-xl p-4 font-mono text-sm border border-primary/10 relative overflow-hidden">
                      <div className="text-muted-foreground mb-2"># Install and inject in seconds</div>
                      <div className="text-primary">npm install payseed</div>
                      <div className="text-accent">npm run payseed-inject --vendorId=yourId</div>
                      <div className="text-muted-foreground mt-2 text-xs">
                        📦 Available at:{" "}
                        <a
                          href="https://www.npmjs.com/package/payseed"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline transition-colors"
                        >
                          npmjs.com/package/payseed
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>

              {[
                {
                  icon: Shield,
                  title: "Stripe Connect Powered",
                  description: "Built on Stripe Connect Express with embedded onboarding and compliance handling",
                  color: "accent",
                },
                {
                  icon: TrendingUp,
                  title: "AI-Optimized",
                  description: "Pre-built credit systems and usage trackers perfect for AI applications",
                  color: "primary",
                },
                {
                  icon: Globe,
                  title: "Managed Backend",
                  description: "We handle payments, dashboards, and payouts so you can focus on building",
                  color: "accent",
                },
              ].map((card, index) => (
                <ScrollAnimation key={index} delay={(index + 1) * 100}>
                  <Card
                    className={`glass-effect hover:shadow-xl transition-all duration-300 group border-${card.color}/10 will-change-transform`}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-12 h-12 bg-${card.color}/10 rounded-xl flex items-center justify-center group-hover:bg-${card.color}/20 transition-all duration-300 group-hover:scale-110`}
                        >
                          <card.icon className={`w-6 h-6 text-${card.color}`} />
                        </div>
                        <CardTitle>{card.title}</CardTitle>
                      </div>
                      <CardDescription className="leading-relaxed">{card.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </ScrollAnimation>
              ))}

              {/* Stats Card */}
              <ScrollAnimation delay={500}>
                <Card className="md:col-span-2 lg:col-span-1 glass-effect hover:shadow-xl transition-all duration-300 border-primary/10 will-change-transform">
                  <CardHeader>
                    <CardTitle className="text-center">Trusted by Developers</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="group">
                        <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform">
                          46
                        </div>
                        <div className="text-sm text-muted-foreground">Countries Supported</div>
                      </div>
                      <div className="group">
                        <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform">
                          95%
                        </div>
                        <div className="text-sm text-muted-foreground">Revenue Share</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <ScrollAnimation>
          <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5"></div>
            <div className="container mx-auto relative">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4">How It Works</h2>
                <p className="text-xl text-muted-foreground">Get started in minutes, not hours</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    step: "01",
                    title: "Install & Inject",
                    description: "Run npm install and use our CLI to inject the merchant chunk into your Next.js app",
                    icon: <Zap className="w-6 h-6" />,
                  },
                  {
                    step: "02",
                    title: "Onboard with Stripe",
                    description: "Complete embedded Stripe Connect Express onboarding on our secure platform",
                    icon: <Shield className="w-6 h-6" />,
                  },
                  {
                    step: "03",
                    title: "Start Earning",
                    description: "Launch your AI features with built-in monetization and watch your revenue grow",
                    icon: <TrendingUp className="w-6 h-6" />,
                  },
                ].map((item, index) => (
                  <ScrollAnimation key={index} delay={index * 200}>
                    <Card className="text-center glass-effect hover:shadow-lg transition-all duration-300 group will-change-transform">
                      <CardHeader>
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                          {item.icon}
                        </div>
                        <div className="text-sm font-mono text-muted-foreground mb-2 font-bold">{item.step}</div>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{item.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section id="pricing" className="py-20 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-muted-foreground mb-12">Pay only when you succeed - just 5% platform fee</p>

              <Card className="max-w-md mx-auto glass-effect hover:shadow-xl transition-all duration-300 border-primary/20 will-change-transform">
                <CardHeader>
                  <CardTitle className="text-2xl">Platform Fee</CardTitle>
                  <div className="text-5xl font-bold text-gradient">5%</div>
                  <CardDescription className="text-base">
                    on every payment processed (after Stripe fees)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["No setup or minimum fees", "Free to install and inject", "Automated payouts"].map(
                    (feature, index) => (
                      <div key={index} className="flex items-center gap-3 group">
                        <CheckCircle className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </div>
                    ),
                  )}
                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-4 text-sm border border-primary/10">
                    <div className="font-semibold mb-2 text-foreground">Example: £100 payment</div>
                    <div className="space-y-1 text-muted-foreground">
                      <div>Stripe fees: ~£3.20</div>
                      <div>Payseed fee: £4.84</div>
                      <div className="font-semibold text-primary text-lg">You receive: £91.96</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollAnimation>

        {/* Testimonials */}
        <ScrollAnimation>
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4">What Beta Users Say</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    quote: "Payseed turned my AI dream diary into a revenue stream overnight—the injection was magic!",
                    author: "Jordan K.",
                    role: "Vibe Coder",
                    rating: 5,
                  },
                  {
                    quote: "Seamless Connect integration and managed payouts. Worth the commission for the ease.",
                    author: "Sam R.",
                    role: "Indie AI Developer",
                    rating: 5,
                  },
                ].map((testimonial, index) => (
                  <ScrollAnimation key={index} delay={index * 200}>
                    <Card className="glass-effect hover:shadow-lg transition-all duration-300 will-change-transform">
                      <CardContent className="pt-6">
                        <div className="flex mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <blockquote className="text-lg mb-4 italic">"{testimonial.quote}"</blockquote>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Contact */}
        <ScrollAnimation>
          <section id="contact" className="py-20 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground mb-12">Have questions? We're here to help</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: Globe,
                    title: "Email Support",
                    content: "pitchdeck.official@gmail.com",
                    color: "primary",
                  },
                  {
                    icon: Users,
                    title: "Phone Support",
                    content: "+44 7427 644220",
                    subtitle: "9 AM - 5 PM GMT",
                    color: "accent",
                  },
                  {
                    icon: TrendingUp,
                    title: "Discord Community",
                    content: "Join for tips & updates",
                    action: true,
                    color: "primary",
                  },
                ].map((contact, index) => (
                  <ScrollAnimation key={index} delay={index * 100}>
                    <Card className="glass-effect hover:shadow-lg transition-all duration-300 group will-change-transform">
                      <CardContent className="pt-6 text-center">
                        <div
                          className={`w-12 h-12 bg-${contact.color}/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-${contact.color}/20 transition-all duration-300 group-hover:scale-110`}
                        >
                          <contact.icon className={`w-6 h-6 text-${contact.color}`} />
                        </div>
                        <h3 className="font-semibold mb-2">{contact.title}</h3>
                        <p className="text-muted-foreground">{contact.content}</p>
                        {contact.subtitle && <p className="text-sm text-muted-foreground">{contact.subtitle}</p>}
                        {contact.action && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-3 border-primary/20 hover:bg-primary/5 bg-transparent transition-all duration-300 hover:scale-105"
                            onClick={() => window.open("https://discord.gg/WjRPVZRcTt", "_blank")}
                          >
                            Join Discord
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12 px-4 backdrop-blur-sm" role="contentinfo">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0 group">
              <Image
                src="/payseed-logo.png"
                alt="Payseed Logo"
                width={32}
                height={32}
                className="rounded-lg group-hover:scale-110 transition-transform"
              />
              <div>
                <span className="text-xl font-serif font-bold">Payseed LTD</span>
                <div className="text-xs text-muted-foreground tracking-wider">FINANCIAL SAAS PLATFORM</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">London, UK • All rights reserved • 2025</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-end">
                <a
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm relative group"
                >
                  Terms
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm relative group"
                >
                  Privacy
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
