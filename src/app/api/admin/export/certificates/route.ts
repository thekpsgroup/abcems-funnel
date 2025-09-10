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

    // Fetch all certificates with user and course data
    const certificates = await prisma.certificate.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true
          }
        },
        course: {
          select: {
            title: true
          }
        }
      },
      orderBy: { issuedAt: 'desc' }
    });

    // Convert to CSV format
    const csvHeaders = [
      'Certificate ID',
      'Student Name',
      'Student Email',
      'Course Title',
      'Certificate URL',
      'PDF Key',
      'Issued Date'
    ];

    const csvRows = certificates.map(certificate => [
      certificate.id,
      certificate.user?.name || '',
      certificate.user?.email || '',
      certificate.course?.title || '',
      certificate.pdfUrl || '',
      certificate.pdfKey || '',
      certificate.issuedAt.toISOString().split('T')[0]
    ]);

    const csvContent = [csvHeaders, ...csvRows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    // Return CSV file
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=abcems-certificates.csv'
      }
    });

  } catch (error) {
    console.error('Error exporting certificates:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
