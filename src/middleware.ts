import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECT = [/^\/portal(\/|$)/, /^\/api\/upload\//, /^\/api\/reports\//];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const needsAuth = PROTECT.some(rx => rx.test(pathname));
  if (!needsAuth) return NextResponse.next();

  const expected = process.env.BASIC_AUTH; // "user:pass"
  if (!expected) return NextResponse.next();

  const header = req.headers.get("authorization") || "";
  const valid = "Basic " + Buffer.from(expected).toString("base64");
  if (header !== valid) {
    return new NextResponse("Auth required", { status: 401, headers: { "WWW-Authenticate": "Basic realm=ABCEMS" } });
  }
  return NextResponse.next();
}

export const config = { matcher: ["/portal/:path*", "/api/upload/:path*", "/api/reports/:path*"] };