import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(10).optional(),
  NEXTAUTH_URL: z.string().url().optional(),
  STRIPE_SECRET_KEY: z.string().min(10),
  STRIPE_WEBHOOK_SECRET: z.string().min(10),
  STRIPE_COUPON_25PCT: z.string().optional(),
  RESEND_API_KEY: z.string().min(10),
  BLOB_READ_WRITE_TOKEN: z.string().min(10),
  APP_URL: z.string().url(),
  TZ: z.string().default("America/Chicago"),
});

export const ENV = envSchema.parse(process.env);
