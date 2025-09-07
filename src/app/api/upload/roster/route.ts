import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { storeBlob } from "@/lib/blob";

function parseCsv(content: string) {
  const lines = content.split(/\r?\n/).filter(Boolean);
  return lines.map(line => {
    const [name,email] = line.split(",").map(s => s.trim());
    return { name, email };
  }).filter(r => r.email);
}

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  if (!courseId) return NextResponse.json({ error: "courseId required" }, { status: 400 });

  const form = await req.formData();
  const file = form.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "file required" }, { status: 400 });

  const ab = await file.arrayBuffer();
  const key = `rosters/${Date.now()}/${file.name}`;
  const { pathname, url, downloadUrl } = await storeBlob(key, ab, "text/csv");

  const rows = parseCsv(Buffer.from(ab).toString("utf8"));
  for (const r of rows) {
    const user = await prisma.user.upsert({ where: { email: r.email }, update: { name: r.name ?? undefined }, create: { email: r.email, name: r.name ?? null, role: "LEARNER" } });
    await prisma.enrollment.upsert({ where: { userId_courseId: { userId: user.id, courseId } }, update: {}, create: { userId: user.id, courseId, status: "assigned" } });
  }

  await prisma.file.create({ data: { type: "ROSTER", courseId, fileName: file.name, storageKey: pathname, url, downloadUrl, uploadedBy: "ADMIN" } });
  return NextResponse.json({ ok: true, created: rows.length });
}
