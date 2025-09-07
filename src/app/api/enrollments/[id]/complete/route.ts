import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateCertificatePDF } from "@/lib/certificates";
import { sendCertificateIssued } from "@/lib/email";

export async function PATCH(_req: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  const { id } = await params;
  const enrollment = await prisma.enrollment.findUnique({ where: { id }, include: { user: true, course: true } });
  if (!enrollment) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.enrollment.update({ where: { id: enrollment.id }, data: { status: "completed" } });

  const { key, downloadUrl } = await generateCertificatePDF({
    userName: enrollment.user.name ?? enrollment.user.email,
    courseTitle: enrollment.course.title,
    dateStr: new Date().toLocaleDateString("en-US"),
    userId: enrollment.userId,
    courseId: enrollment.courseId,
  });

  const cert = await prisma.certificate.create({ data: { userId: enrollment.userId, courseId: enrollment.courseId, enrollmentId: enrollment.id, pdfKey: key, pdfUrl: downloadUrl } });
  await sendCertificateIssued(enrollment.user.email, downloadUrl, enrollment.course.title);

  return NextResponse.json({ ok: true, certificateId: cert.id, url: downloadUrl });
}
