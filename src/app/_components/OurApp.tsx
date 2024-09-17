"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import { twMerge } from "tailwind-merge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function OurApp() {
  const t = useTranslations("Home.ourApp");

  return (
    <Section
      className={twMerge(
        "mt-[32px] sm:mt-[234px] flex-col sm:flex-row-reverse sm:items-center max-w-[341px] mx-[16px] gap-[33px] sm:justify-between",
        "sm:!max-w-[1189px]"
      )}
    >
      <div className="flex flex-col sm:items-start sm:max-w-[473px] sm:w-full items-center sm:mt-[30px]">
        <h2 className="title-lg max-w-[250px] ltr:max-w-[280px] sm:max-w-none ltr:sm:max-w-none mb-[12px] sm:mb-[24px]">
          {t("title")}
        </h2>
        <p className="text-[16px] leading-[30px] sm:text-[18px] text-muted mb-[12px] sm:mb-[24px]">
          {t("description")}
        </p>
        <Apps></Apps>
      </div>
      <img
        src="/images/home/apps.png"
        alt="apps image"
        className="sm:w-[591px]"
      />
    </Section>
  );
}

const Apps = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[14px]">
      <Link href="">
        <img
          src="/images/app-store.png"
          alt="app store"
          className="h-[57px] sm:h-[65px]"
        />
      </Link>
      <Link href="">
        <img
          src="/images/google-play.png"
          alt="google play"
          className="h-[57px] sm:h-[65px]"
        />
      </Link>
    </div>
  );
};

const goals: Goal[] = [
  {
    title: "إرضاء العملاء",
    description:
      "تحقيـــق أعلى جـــودة في قطاع النقـــل وتوصيل البريد وإرضاء العملاء",
  },
  {
    title: "النمو",
    description: "التوسع إقليميا وعالميا",
  },
  {
    title: "التطور المستمر",
    description:
      "المبادرة المستمرة في تطوير قطاع النقل وتوصيل البريد والمبيعات",
  },
  {
    title: "التحول الرقمي",
    description: "ترسيخ التحول الرقمي في الشركة والقطاع",
  },
  {
    title: "بيئة العمل",
    description: "توفير أفضل بيئة عمل",
  },
];

interface Goal {
  title: string;
  description: string;
}
