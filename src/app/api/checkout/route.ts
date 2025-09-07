import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { ENV } from "@/lib/env";

export async function POST(req: NextRequest) {
  const { courseId, email, groupSize } = await req.json() as { courseId: string; email: string; groupSize?: number };
  const course = await prisma.course.findUnique({ where: { id: courseId } });
  if (!course) return NextResponse.json({ error: "Invalid course" }, { status: 400 });

  const line_items = [{
    quantity: groupSize ?? 1,
    price_data: { currency: "usd", product_data: { name: course.title }, unit_amount: course.priceCents }
  }];

  const discounts = (groupSize && groupSize >= 10 && ENV.STRIPE_COUPON_25PCT)
    ? [{ coupon: ENV.STRIPE_COUPON_25PCT }]
    : undefined;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: email,
    line_items,
    discounts,
    success_url: `${ENV.APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${ENV.APP_URL}/cancel`,
    metadata: { courseId, groupSize: String(groupSize ?? 1) }
  });

  return NextResponse.json({ url: session.url });
}