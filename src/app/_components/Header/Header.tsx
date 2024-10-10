import Navbar from "./Navbar/Navbar";
import { HOME_ROUTE, IMAGE_BG_ROUTES, SLIDER_BG_ROUTES } from "@/lib/paths";
import { twMerge } from "tailwind-merge";
import Topbar from "./Topbar/Topbar";
import { removeLocaleFromPathname } from "@/lib/utils";
import { headers } from "next/headers";
import { fetchLinks } from "@/lib/api_services/common-apis";
import { RawContact } from "@/lib/types";
import TopbarClient from "./Topbar/TopbarClient";
import NavbarClient from "./Navbar/NavbarClient";
import DynamicImage from "@/components/DynamicImage";

export default async function Header() {
  const pathname = removeLocaleFromPathname(
    headers().get("x-pathname") ?? HOME_ROUTE,
  );

  let contactInfo: RawContact | undefined;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return (
    <header
      className={twMerge(
        "relative z-40 flex flex-col bg-primary sm:items-center sm:border-b sm:border-[#D9D9D9]/10",
        [...IMAGE_BG_ROUTES, ...SLIDER_BG_ROUTES].includes(pathname) &&
          "sm:bg-transparent",
      )}
    >
      <TopbarClient contactInfo={contactInfo}></TopbarClient>
      <NavbarClient contactInfo={contactInfo}></NavbarClient>
    </header>
  );
}
