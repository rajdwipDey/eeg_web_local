import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED_ROUTES = ['/dashboard', '/profile-settings', '/addresses', '/order-history', '/security', '/checkout'];
const AUTH_ROUTES = ['/signin', '/register', '/forgot-password'];

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const token = request.cookies.get('access_token')?.value;
  
  const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
  const isAuthPage = AUTH_ROUTES.some(route => pathname.startsWith(route));

  // Redirect to signin if accessing protected route without token
  if (isProtectedRoute && !token) {
    const signInUrl = new URL('/signin', request.url);
    signInUrl.searchParams.set('redirect', pathname + search);
    return NextResponse.redirect(signInUrl);
  }

  // Redirect to dashboard if accessing auth page with token
  if (isAuthPage && token) {
    const redirectParam = request.nextUrl.searchParams.get('redirect');
    const redirectUrl = redirectParam && !AUTH_ROUTES.includes(redirectParam) 
      ? redirectParam 
      : '/dashboard';
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  const response = NextResponse.next();
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)'],
};