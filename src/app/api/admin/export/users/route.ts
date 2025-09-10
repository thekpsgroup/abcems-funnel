import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || (session as { user?: { role?: string } }).user?.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Fetch all users with their data
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            enrollments: true,
            certificates: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Convert to CSV format
    const csvHeaders = [
      'ID',
      'Name',
      'Email',
      'Role',
      'Enrollments Count',
      'Certificates Count',
      'Created Date',
      'Last Updated'
    ];

    const csvRows = users.map(user => [
      user.id,
      user.name || '',
      user.email || '',
      user.role,
      user._count.enrollments.toString(),
      user._count.certificates.toString(),
      user.createdAt.toISOString().split('T')[0],
      user.updatedAt.toISOString().split('T')[0]
    ]);

    const csvContent = [csvHeaders, ...csvRows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    // Return CSV file
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=abcems-users.csv'
      }
    });

  } catch (error) {
    console.error('Error exporting users:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
