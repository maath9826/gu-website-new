"use client";

import React from "react";
import Section from "../Section";
import FirstTitleSection from "./FirstTitleSection/FirstTitleSection";
import Wrapper from "../Wrapper";
import { useTranslations } from "next-intl";

export default function OnlyTitle() {
  const t = useTranslations("Common");

  return (
    <Section
      id="page-print"
      className="mt-[61px] !max-w-none flex-col items-center sm:mt-[160px]"
    >
      {/* <FirstTitleSection></FirstTitleSection> */}
    </Section>
  );
}
