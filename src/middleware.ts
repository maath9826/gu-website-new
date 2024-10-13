import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";
import { NextRequest } from "next/server";
import { getLocaleFromPathname, removeLocaleFromPathname } from "./lib/utils";

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
  const pathname = request.nextUrl.pathname;

  const locale = getLocaleFromPathname(pathname);

  // Call the intlMiddleware
  const response = intlMiddleware(request);

  if (locale?.trim()) {
    // Add the custom header to the response
    response.headers.set("x-locale", locale);
  }

  // Add the custom header to the response
  response.headers.set("x-pathname", removeLocaleFromPathname(pathname));

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
