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
import Head from "next/head";
import HeaderClient from "./HeaderClient";

export default async function Header() {
  let contactInfo: RawContact | undefined;

  try {
    contactInfo = await fetchLinks();
  } catch (error) {
    console.error("Failed to fetch contact information:", error);
  }

  return <HeaderClient contactInfo={contactInfo}></HeaderClient>;
}
