import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  console.log(`request.url: ${request.url}`)
  console.log(`request.nextUrl.search: ${request.nextUrl.search}`)

  // Don't redirect if already on root
  if (request.nextUrl.pathname === "/")
    return NextResponse.next()

  // Redirect to root and keep search parameters
  const response = NextResponse.redirect(new URL(`/${request.nextUrl.search}`, request.url))

  console.log(`response.headers["location"]: ${response.headers.get("location")}`)

  return response
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}