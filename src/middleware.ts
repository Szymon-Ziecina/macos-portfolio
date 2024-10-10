import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(pl|en)/:path*",
    "/((?!_next/static|favicon.ico|.*\\..*).*)", // Exclude all static files in public (like /icons, /images, etc.)
  ],
};
