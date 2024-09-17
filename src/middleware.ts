import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n.config";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "ar",
});

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
