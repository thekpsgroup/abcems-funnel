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

    // Fetch all courses with enrollment and certificate counts
    const courses = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
        description: true,
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
      'Course ID',
      'Title',
      'Description',
      'Total Enrollments',
      'Certificates Issued',
      'Completion Rate (%)',
      'Created Date',
      'Updated Date'
    ];

    const csvRows = courses.map(course => {
      const completionRate = course._count.enrollments > 0
        ? ((course._count.certificates / course._count.enrollments) * 100).toFixed(1)
        : '0.0';

      return [
        course.id,
        course.title,
        course.description || '',
        course._count.enrollments.toString(),
        course._count.certificates.toString(),
        completionRate,
        course.createdAt.toISOString().split('T')[0],
        course.updatedAt.toISOString().split('T')[0]
      ];
    });

    const csvContent = [csvHeaders, ...csvRows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    // Return CSV file
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=abcems-courses.csv'
      }
    });

  } catch (error) {
    console.error('Error exporting courses:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
