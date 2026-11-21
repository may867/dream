import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang");
  if (lang !== "en" && lang !== "zh") return NextResponse.next();
  const response = NextResponse.next();
  response.cookies.set("xunmeng-locale", lang, { path: "/", maxAge: 31536000 });
  return response;
}
