import { NextResponse, type NextRequest } from "next/server";
import { auth } from "@/lib/auth";

type AuthenticatedRequest = NextRequest & {
  auth?: {
    user?: {
      role?: string | null;
      businessId?: string | null;
    };
  } | null;
};

export default auth((req: AuthenticatedRequest) => {
  const { nextUrl } = req;
  const isLoggedIn = Boolean(req.auth);

  const isAuthRoute = nextUrl.pathname.startsWith("/auth");
  const isAdminRoute = nextUrl.pathname.startsWith("/admin");
  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");
  const isClientRoute = nextUrl.pathname.startsWith("/client");
  const isClientLoginRoute = nextUrl.pathname.startsWith("/client/login");

  if (isAuthRoute && isLoggedIn) {
    const role = req.auth?.user?.role;

    if (role === "platform_admin") {
      return NextResponse.redirect(new URL("/admin", nextUrl));
    }

    if (role === "client") {
      return NextResponse.redirect(new URL("/client", nextUrl));
    }

    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  if (isClientLoginRoute && isLoggedIn) {
    const role = req.auth?.user?.role;

    if (role === "client") {
      return NextResponse.redirect(new URL("/client", nextUrl));
    }

    if (role === "platform_admin") {
      return NextResponse.redirect(new URL("/admin", nextUrl));
    }

    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  if (!isLoggedIn && (isAdminRoute || isDashboardRoute)) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  if (!isLoggedIn && isClientRoute && !isClientLoginRoute) {
    return NextResponse.redirect(new URL("/client/login", nextUrl));
  }

  if (isAdminRoute && req.auth?.user?.role !== "platform_admin") {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  if (
    isDashboardRoute &&
    !["owner", "manager", "mechanic", "receptionist"].includes(
      req.auth?.user?.role || ""
    )
  ) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl));
  }

  if (isClientRoute && !isClientLoginRoute && req.auth?.user?.role !== "client") {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/admin/:path*",
    "/dashboard/:path*",
    "/client/:path*",
    "/auth/:path*",
  ],
};