import Stripe from "stripe";
import { ENV } from "./env";
export const stripe = new Stripe(ENV.STRIPE_SECRET_KEY);