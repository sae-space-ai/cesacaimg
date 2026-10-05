import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware para protección de rutas y seguridad
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rutas protegidas que requieren autenticación
  const protectedRoutes = ['/dashboard', '/campus', '/admin', '/profesor', '/ai-tutor'];
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // En producción, aquí se verificaría la sesión con NextAuth
  // Por ahora, permitimos el acceso para demostración
  // const session = request.cookies.get('next-auth.session-token');
  // if (isProtectedRoute && !session) {
  //   return NextResponse.redirect(new URL('/auth', request.url));
  // }

  // Headers de seguridad
  const response = NextResponse.next();
  
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
