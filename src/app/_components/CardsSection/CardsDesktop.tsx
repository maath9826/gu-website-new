"use client";

import React from "react";
import Section from "../../../components/Section";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";
import { CardData } from "@/lib/types";
import CommonCard from "./CommonCard";

export default function CardsDesktop() {
  const t = useTranslations("Common.cards");

  const cardsData = [
    {
      title: "uniLife",
      href: "#uniLife",
      imgUrl: "/images/common/cards/uni-life.svg",
    },
    {
      title: "about",
      href: "#about",
      imgUrl: "/images/common/cards/about.svg",
    },
    {
      title: "academicClassifications",
      href: "#academicClassifications",
      imgUrl: "/images/common/cards/academic-classifications.svg",
    },
    { title: "news", href: "#news", imgUrl: "/images/common/cards/news.svg" },
  ];

  const translatedElements = cardsData.map((card) => ({
    ...card,
    title: t(card.title),
  }));

  return (
    <Section className="mt-[-405px] 1920:mt-[-580px] hidden sm:block relative z-10">
      <CardsGrid translatedElements={translatedElements} />
    </Section>
  );
}

function CardsGrid({ translatedElements }: { translatedElements: CardData[] }) {
  return (
    <div className="grid grid-cols-3  gap-[38px] 1920:gap-[50px] max-w-desktop 1920:max-w-desktop-lg mx-auto mb-[125px]">
      {translatedElements.map((el, index) => (
        <div
          key={index}
          className={twMerge(
            index == 0 &&
              "col-span-full grid grid-cols-3 gap-[38px] 1920:gap-[50px] items-end justify-end"
          )}
        >
          <CommonCard
            key={index}
            el={el}
            index={index}
            className="col-start-3"
          />
        </div>
      ))}
    </div>
  );
}
