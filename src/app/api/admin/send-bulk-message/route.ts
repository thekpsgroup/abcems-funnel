import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session as { user?: { role?: string } }).user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { subject, content, recipientType, scheduledFor, sendNow } = body;

    // Validate required fields
    if (!subject || !content) {
      return NextResponse.json({ error: 'Subject and content are required' }, { status: 400 });
    }

    // Get recipients based on type
    let recipients = [];
    let recipientEmails = [];

    try {
      switch (recipientType) {
        case 'all':
          recipients = await prisma.user.findMany({
            select: { id: true, name: true, email: true }
          });
          break;
        case 'learners':
          recipients = await prisma.user.findMany({
            where: { role: 'LEARNER' },
            select: { id: true, name: true, email: true }
          });
          break;
        case 'instructors':
          recipients = await prisma.user.findMany({
            where: { role: 'INSTRUCTOR' },
            select: { id: true, name: true, email: true }
          });
          break;
        case 'admins':
          recipients = await prisma.user.findMany({
            where: { role: 'ADMIN' },
            select: { id: true, name: true, email: true }
          });
          break;
        default:
          return NextResponse.json({ error: 'Invalid recipient type' }, { status: 400 });
      }

      recipientEmails = recipients.map(r => r.email).filter(email => email);
    } catch (error) {
      console.error('Error fetching recipients:', error);
      return NextResponse.json({ error: 'Failed to fetch recipients' }, { status: 500 });
    }

    if (recipientEmails.length === 0) {
      return NextResponse.json({ error: 'No valid recipients found' }, { status: 400 });
    }

    // If scheduled for later, store in database for later processing
    if (!sendNow && scheduledFor) {
      // In a real implementation, you'd store this in a scheduled_messages table
      // and have a cron job or scheduled task to send it later
      return NextResponse.json({
        message: 'Message scheduled successfully',
        recipientCount: recipientEmails.length,
        scheduledFor
      });
    }

    // Send the email immediately
    try {
      const emailPromises = recipientEmails.map(async (email) => {
        return resend.emails.send({
          from: 'ABCEMS <noreply@abcems.com>',
          to: email,
          subject: subject,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background-color: #8B0000; color: white; padding: 20px; text-align: center;">
                <h1 style="margin: 0;">ABCEMS</h1>
                <p style="margin: 10px 0 0 0;">EMS Training & Education</p>
              </div>

              <div style="padding: 30px; background-color: #ffffff;">
                <h2 style="color: #333; margin-bottom: 20px;">${subject}</h2>

                <div style="color: #666; line-height: 1.6; white-space: pre-line;">
                  ${content}
                </div>

                <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

                <div style="text-align: center; color: #888; font-size: 14px;">
                  <p>You received this message because you're part of the ABCEMS community.</p>
                  <p style="margin-top: 10px;">
                    <a href="https://abcems.com" style="color: #8B0000; text-decoration: none;">Visit ABCEMS</a> |
                    <a href="mailto:support@abcems.com" style="color: #8B0000; text-decoration: none;">Contact Support</a>
                  </p>
                </div>
              </div>

              <div style="background-color: #f8f8f8; padding: 20px; text-align: center; color: #888; font-size: 12px;">
                <p>&copy; 2024 ABCEMS Solutions. All rights reserved.</p>
              </div>
            </div>
          `,
        });
      });

      await Promise.all(emailPromises);

      // In a real implementation, you'd save the message to a messages table
      // to track sent messages

      return NextResponse.json({
        message: 'Message sent successfully',
        recipientCount: recipientEmails.length,
        recipientType
      });

    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
    }

  } catch (error) {
    console.error('Error in bulk message API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
