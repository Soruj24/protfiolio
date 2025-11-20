import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  // Get the token from the request
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Check if the route is protected
  const isAdminRoute = pathname.startsWith("/admin");
  const isAdminApiRoute = pathname.startsWith("/api/admin");

  // If accessing admin routes
  if (isAdminRoute || isAdminApiRoute) {
    // If no token, redirect to signin
    if (!token) {
      const signInUrl = new URL("/auth/signin", request.url);
      signInUrl.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(signInUrl);
    }

    // If token exists but user is not admin
    if (token.role !== "admin") {
      if (isAdminApiRoute) {
        // For API routes, return JSON error
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      } else {
        // For page routes, redirect to home
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
