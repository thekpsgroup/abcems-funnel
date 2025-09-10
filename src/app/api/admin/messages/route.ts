import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

// GET /api/admin/messages - Fetch all messages
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session as { user?: { role?: string } }).user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // For now, return empty array as we haven't implemented message storage yet
    // In a real implementation, you'd fetch from a messages table
    const messages = [] as const;

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST /api/admin/messages - Create a new message (draft)
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

    // In a real implementation, you'd save this to a messages table
    // For now, we'll just return a mock response
    const message = {
      id: `msg_${Date.now()}`,
      subject,
      content,
      recipientType: recipientType || 'all',
      status: sendNow ? 'sent' : 'draft',
      scheduledFor: sendNow ? null : scheduledFor,
      sentAt: sendNow ? new Date().toISOString() : null,
      recipientCount: 0, // This would be calculated based on recipient type
      createdAt: new Date().toISOString()
    };

    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
