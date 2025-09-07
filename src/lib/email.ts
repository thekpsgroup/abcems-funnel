import { Resend } from "resend";
import { ENV } from "./env";
const resend = new Resend(ENV.RESEND_API_KEY);

export async function sendPaymentConfirmation(to: string, homeworkUrl: string, courseTitle: string) {
  await resend.emails.send({ from: "ABCEMS <noreply@abcemssolutions.com>", to, subject: `ABCEMS ${courseTitle} – Homework Packet Inside`, html: `<h2>Welcome to ABCEMS</h2><p>Thanks for enrolling in ${courseTitle}.</p><p>Your homework packet: <a href="${homeworkUrl}">Download</a> (link is public but unguessable)</p><p>Veteran-Owned · Train Smarter, Not Harder · Serving DFW</p>` });
}

export async function sendCertificateIssued(to: string, certUrl: string, courseTitle: string) {
  await resend.emails.send({ from: "ABCEMS <noreply@abcemssolutions.com>", to, subject: `Your ABCEMS Certificate is Ready`, html: `<p>Your certificate for ${courseTitle} is ready: <a href="${certUrl}">Download</a>.</p>` });
}

export async function sendGroupPurchaseInstructions(to: string, csvUploadUrl: string, seats: number) {
  await resend.emails.send({ from: "ABCEMS <noreply@abcemssolutions.com>", to, subject: `ABCEMS Group Purchase – Upload Your Roster`, html: `<p>You purchased ${seats} seats. Upload your roster CSV here: <a href="${csvUploadUrl}">${csvUploadUrl}</a></p>` });
}