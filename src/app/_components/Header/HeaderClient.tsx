"use client";

import React from "react";
import TopbarClient from "./Topbar/TopbarClient";
import NavbarClient from "./Navbar/NavbarClient";
import { twMerge } from "tailwind-merge";
import { IMAGE_BG_ROUTES, SLIDER_BG_ROUTES } from "@/lib/paths";
import { RawContact } from "@/lib/types";
import { usePathname } from "@/i18n.config";

export default function HeaderClient({
  contactInfo,
}: {
  contactInfo: RawContact | undefined;
}) {
  const pathname = usePathname();

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
