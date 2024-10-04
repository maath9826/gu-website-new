"use client";

import Navbar from "./Navbar";
import { usePathname } from "@/i18n.config";
import { IMAGE_BG_ROUTES, SLIDER_BG_ROUTES } from "@/lib/paths";
import { twMerge } from "tailwind-merge";
import Topbar from "./Topbar";
import CustomHoverNavbar from "../News/NavElements";

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className={twMerge(
        "relative z-40 flex flex-col bg-primary sm:items-center sm:border-b sm:border-[#D9D9D9]/10",
        [...IMAGE_BG_ROUTES, ...SLIDER_BG_ROUTES].includes(pathname) &&
          "sm:bg-transparent",
      )}
    >
      <Topbar></Topbar>
      <Navbar />
    </header>
  );
}
