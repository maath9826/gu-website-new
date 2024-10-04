"use client";

import React from "react";
import { usePathname } from "@/i18n.config";
// import { getBgComponent } from "@/lib/utils";

export default function FirstSection() {
  const pathname = usePathname();

  // const BgComponent = getBgComponent(pathname);

  // return BgComponent ? <BgComponent /> : <></>;
}
