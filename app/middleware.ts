// middleware.ts
import { type NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.pathname

  if (url.startsWith('/api')) {
    return NextResponse.next() // Skip middleware for API routes
  }
}
