import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const host = (forwardedHost || request.headers.get("host") || request.nextUrl.hostname)
    .split(",")[0]
    .trim()
    .split(":")[0];

  if (host === "www.xautestlab.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.hostname = "xautestlab.com";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
