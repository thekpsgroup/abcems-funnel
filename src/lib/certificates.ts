import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { storeBlob } from "./blob";

export async function generateCertificatePDF(opts: { userName: string; courseTitle: string; dateStr: string; userId: string; courseId: string; }) {
  const pdf = await PDFDocument.create();
  const page = pdf.addPage([612, 792]);
  const font = await pdf.embedFont(StandardFonts.HelveticaBold);

  page.drawText("ABCEMS Solutions", { x: 50, y: 720, size: 20, font, color: rgb(0.1, 0.1, 0.3) });
  page.drawText("Veteran-Owned · Train Smarter, Not Harder", { x: 50, y: 700, size: 12 });
  page.drawText("Certificate of Completion", { x: 50, y: 650, size: 24, font });
  page.drawText(`Awarded to: ${opts.userName}`, { x: 50, y: 610, size: 14 });
  page.drawText(`For completing: ${opts.courseTitle}`, { x: 50, y: 590, size: 14 });
  page.drawText(`Date: ${opts.dateStr}`, { x: 50, y: 570, size: 12 });

  const bytes = await pdf.save();
  const key = `certs/${opts.userId}/${opts.courseId}/${Date.now()}.pdf`;
  const { url, downloadUrl, pathname } = await storeBlob(key, Buffer.from(bytes), "application/pdf");
  return { key: pathname, url, downloadUrl };
}