import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address is required" }, { status: 400 })
    }

    // Simulate API processing delay for realistic feel
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real implementation, you would:
    // 1. Save to database (Supabase, Airtable, etc.)
    // 2. Send welcome email
    // 3. Add to mailing list (Mailchimp, ConvertKit, etc.)

    console.log(`[Payseed API] New waitlist signup: ${email}`)

    // Simulate successful response
    return NextResponse.json({
      success: true,
      message: "Successfully joined the waitlist!",
      email: email,
      position: Math.floor(Math.random() * 500) + 100, // Random position for demo
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("[Payseed API] Waitlist signup error:", error)
    return NextResponse.json({ error: "Internal server error. Please try again." }, { status: 500 })
  }
}
