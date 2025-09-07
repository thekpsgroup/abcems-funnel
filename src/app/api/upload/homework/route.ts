import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { storeBlob } from "@/lib/blob";

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const courseId = searchParams.get("courseId");
  if (!courseId) return NextResponse.json({ error: "courseId required" }, { status: 400 });

  const form = await req.formData();
  const file = form.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "file required" }, { status: 400 });

  const ab = await file.arrayBuffer();
  const key = `homework/${courseId}/v${Date.now()}/${file.name}`;
  const { url, downloadUrl, pathname } = await storeBlob(key, ab, file.type || "application/pdf");

  await prisma.file.create({ data: { type: "HOMEWORK", courseId, fileName: file.name, storageKey: pathname, url, downloadUrl, uploadedBy: "ADMIN" } });
  return NextResponse.json({ ok: true, url, downloadUrl, key: pathname });
}
