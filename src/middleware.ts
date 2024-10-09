import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";
import { NextRequest } from "next/server";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales,

//   // Used when no locale matches
//   defaultLocale: "ar",

// });

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale: "ar",
});

export default function middleware(request: NextRequest) {
  // Call the intlMiddleware
  const response = intlMiddleware(request);

  // Add the custom header to the response
  response.headers.set("x-pathname", request.nextUrl.pathname);

  return response;
}

export const config = {
  matcher: [
    // Match all pathnames except for:
    // - API routes
    // - Next.js specific files
    // - Static files with common extensions
    "/((?!api|_next|.*\\..+).*)",
    // Match all root level pathnames without extensions (e.g., /about)
    "/",
  ],
};
