"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { getPrintProps, shareCurrentURL } from "@/lib/utils";
import { useReactToPrint } from "react-to-print";
import { useTranslations } from "next-intl";
import useTextDirection from "@/app/_hooks/useTextDirection";

export default function FormattedTextViewerActionsSection() {
  const t = useTranslations("Common");
  const dir = useTextDirection();

  const handlePrint = useReactToPrint(
    getPrintProps({
      content: () => document.getElementById("print-section"),
      dir,
    }),
  );

  return (
    <div className="no-print hidden gap-[35px] self-end text-primary sm:flex sm:items-center">
      <Button
        onClick={shareCurrentURL}
        variant="ghost"
        size="icon"
        className="w-fit items-center gap-[10px] text-[16px] font-bold leading-none"
      >
        <span>{t("share")}</span>
        <i className="ri-share-forward-fill text-[20px]"></i>
      </Button>
      <div className="h-[24px] border-r border-[#D8D8D8]"></div>
      <Button
        onClick={handlePrint}
        variant="ghost"
        size="icon"
        className="w-fit items-center gap-[10px] text-[16px] font-bold leading-none"
      >
        <span>{t("print")}</span>
        <i className="ri-printer-fill text-[20px]"></i>
      </Button>
    </div>
  );
}
