import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

  if (pathname.startsWith("/@me/")) {
    const newUrl = req.nextUrl.clone();
    newUrl.pathname = pathname.replace("/@me/", "/me/"); // "/@me/123" → "/me/123"
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}
