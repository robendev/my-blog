import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';

export async function middleware(request: NextRequest) {
  const cookie = request.headers.get('cookie');

  const session = await getSession({
    req: {
      headers: {
        cookie: cookie || '',
      },
    },
  });

  if (!session) {
    const url = request.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/:path*'],
};
