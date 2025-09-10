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

    // Fetch all enrollments with user and course data
    const enrollments = await prisma.enrollment.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
            role: true
          }
        },
        course: {
          select: {
            title: true,
            description: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Convert to CSV format
    const csvHeaders = [
      'Enrollment ID',
      'User Name',
      'User Email',
      'User Role',
      'Course Title',
      'Course Description',
      'Status',
      'Created Date',
      'Updated Date'
    ];

    const csvRows = enrollments.map(enrollment => [
      enrollment.id,
      enrollment.user?.name || '',
      enrollment.user?.email || '',
      enrollment.user?.role || '',
      enrollment.course?.title || '',
      enrollment.course?.description || '',
      enrollment.status,
      enrollment.createdAt.toISOString().split('T')[0],
      enrollment.updatedAt.toISOString().split('T')[0]
    ]);

    const csvContent = [csvHeaders, ...csvRows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    // Return CSV file
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=abcems-enrollments.csv'
      }
    });

  } catch (error) {
    console.error('Error exporting enrollments:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
