import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "ABCEMS <noreply@abcemssolutions.com>",
      to: ["test@example.com"], // Replace with your email for testing
      subject: "ABCEMS Test Email",
      html: `
        <h2>Welcome to ABCEMS</h2>
        <p>This is a test email to verify Resend integration is working.</p>
        <p>Veteran-Owned · Train Smarter, Not Harder · Serving DFW</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ 
      success: true, 
      messageId: data?.id,
      message: "Test email sent successfully!" 
    });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ 
      error: "Failed to send email",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 });
  }
}
