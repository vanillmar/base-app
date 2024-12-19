import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isAuthenticated } from './lib/auth'

export function middleware(request: NextRequest) {
  if (!isAuthenticated() && (request.nextUrl.pathname.startsWith('/dashboard') || request.nextUrl.pathname.startsWith('/account'))) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/account/:path*'],
}

