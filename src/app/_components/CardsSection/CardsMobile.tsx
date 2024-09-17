"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import CommonCard from "./CommonCard";
import { ScrollableCardsContainer } from "../../../components/ScrollableContainer/ScrollableContainer";
import ScrollableContainerUpperSection from "@/components/ScrollableContainer/UpperSection";
import ScrollElement from "@/components/ScrollElement";

export default function CardsMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
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
    <div className="mt-[30px] mb-[54px] flex-col overflow-hidden w-full sm:hidden">
      <ScrollableContainerUpperSection
        containerRef={containerRef}
        title2="جامعة كلكامش"
        title="الخدمات الالكترونية"
      />
      <ScrollableCardsContainer ref={containerRef}>
        {translatedElements.map((el, index) => (
          <ScrollElement className="flex justify-center" key={index}>
            <CommonCard el={el} index={index} />
          </ScrollElement>
        ))}
      </ScrollableCardsContainer>
    </div>
  );
}
