import React from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n.config";
import { getPageTitle } from "@/lib/utils";

export default function CenterizedTitle() {
  const t = useTranslations();
  const pathname = usePathname();
  const pageTitle = getPageTitle({ t, pathname });

  return (
    <h1 className="title-lg mb-[23px] !text-center leading-[1.25] sm:mb-[96px]">
      {pageTitle}
    </h1>
  );
}
