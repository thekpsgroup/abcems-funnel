export const runtime = "nodejs";         // Stripe SDK requires Node runtime
export const dynamic = "force-dynamic";  // disable caching for webhook route

import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { ENV } from "@/lib/env";
import Stripe from "stripe";
import { sendGroupPurchaseInstructions, sendPaymentConfirmation } from "@/lib/email";
import { listBlobs } from "@/lib/blob";

export async function POST(req: NextRequest) {
  const raw = await req.text();
  const sig = req.headers.get("stripe-signature")!;
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, ENV.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return new NextResponse(`Webhook Error: ${(err as Error).message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_details?.email;
    const courseId = session.metadata?.courseId;
    
    if (!email || !courseId) {
      console.error("Missing email or courseId in webhook");
      return NextResponse.json({ ok: true });
    }
    const groupSize = Number(session.metadata?.groupSize ?? "1");

    const course = await prisma.course.findUnique({ where: { id: courseId } });
    if (!course) return NextResponse.json({ ok: true });

    const user = await prisma.user.upsert({ where: { email }, update: {}, create: { email, role: "LEARNER" } });

    await prisma.payment.create({
      data: {
        userId: user.id,
        courseId: course.id,
        stripeSessionId: session.id,
        amountCents: session.amount_total ?? course.priceCents * groupSize,
        status: "paid",
        email,
        groupSize,
        discountApplied: !!(groupSize >= 10)
      }
    });

    if (groupSize === 1) {
      await prisma.enrollment.create({ data: { userId: user.id, courseId: course.id, status: "assigned" } });
      // find latest homework blob for this course
      const blobs = await listBlobs(`homework/${course.id}/`);
      const latest = blobs.sort((a,b)=> (b.uploadedAt?.getTime?.()??0) - (a.uploadedAt?.getTime?.()??0))[0];
      const homeworkUrl = latest?.downloadUrl ?? latest?.url ?? `${ENV.APP_URL}/portal`;
      await sendPaymentConfirmation(email, homeworkUrl, course.title);
    } else {
      const uploadUrl = `${ENV.APP_URL}/portal/groups/upload?session=${session.id}`; // implement page
      await sendGroupPurchaseInstructions(email, uploadUrl, groupSize);
    }
  }

  return NextResponse.json({ received: true });
}