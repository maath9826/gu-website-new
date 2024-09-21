"use client";

import React from "react";
import { usePathname } from "@/i18n.config";
import { getTitleComponent } from "@/lib/utils";
import Wrapper from "@/components/Wrapper";

export default function FirstTitleSection() {
  const pathname = usePathname();

  const TitleComponent = getTitleComponent(pathname);

  return TitleComponent ? (
    <Wrapper>
      <TitleComponent />
    </Wrapper>
  ) : (
    <></>
  );
}
