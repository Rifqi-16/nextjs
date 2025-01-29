import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/cart') {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/cart']
}