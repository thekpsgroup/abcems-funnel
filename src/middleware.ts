import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const isAuth = !!token
    const isAuthPage = req.nextUrl.pathname.startsWith('/auth')
    const isApiAuth = req.nextUrl.pathname.startsWith('/api/auth')

    // Allow access to auth pages
    if (isAuthPage || isApiAuth) {
      return NextResponse.next()
    }

    // Check if user needs to be authenticated
    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/auth/signin?from=${encodeURIComponent(from)}`, req.url)
      );
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl

        // Allow access to auth pages
        if (pathname.startsWith('/auth') || pathname.startsWith('/api/auth')) {
          return true
        }

        // Require authentication for portal routes
        if (pathname.startsWith('/portal') || pathname.startsWith('/admin') ||
            pathname.startsWith('/api/upload') || pathname.startsWith('/api/reports')) {
          return !!token
        }

        return true
      },
    },
  }
)

export const config = {
  matcher: [
    '/portal/:path*',
    '/admin/:path*',
    '/api/upload/:path*',
    '/api/reports/:path*',
    '/dashboard/:path*',
    '/profile/:path*'
  ]
};