import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const courses = await prisma.course.findMany({ where: { active: true }, select: { id: true, title: true, priceCents: true } });
  return NextResponse.json({ courses });
}
