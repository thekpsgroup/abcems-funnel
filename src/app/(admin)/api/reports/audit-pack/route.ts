import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import JSZip from "jszip";

export async function POST() {
  const [users, enrollments, certs] = await Promise.all([
    prisma.user.findMany({}),
    prisma.enrollment.findMany({ include: { user: true, course: true } }),
    prisma.certificate.findMany({})
  ]);

  const zip = new JSZip();
  const roster = ["name,email,role", ...users.map(u => `${u.name ?? ""},${u.email},${u.role}`)].join("\n");
  zip.file("roster.csv", roster);

  const completions = ["user,course,status,updatedAt", ...enrollments.map(e => `${e.user.email},${e.course.title},${e.status},${e.updatedAt.toISOString()}`)].join("\n");
  zip.file("completions.csv", completions);

  const certFolder = zip.folder("certificates");
  for (const c of certs) {
    // pdfUrl is public — fetch bytes and add to zip
    const res = await fetch(c.pdfUrl);
    const arr = new Uint8Array(await res.arrayBuffer());
    certFolder!.file(`${c.id}.pdf`, arr);
  }

  const out = await zip.generateAsync({ type: "nodebuffer" });
  return new NextResponse(new Uint8Array(out), { headers: { "Content-Type": "application/zip", "Content-Disposition": `attachment; filename=abcems-audit-pack.zip` } });
}
