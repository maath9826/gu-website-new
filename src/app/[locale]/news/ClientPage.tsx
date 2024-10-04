"use client";

import MainNewsCard from "@/app/_components/News/MainNewsCard";
import NewsSection from "@/app/_components/News/News";
import NewsCard from "@/app/_components/News/NewsCard";
import NewsTags from "@/app/_components/News/NewsTags";
import PageWithFirstSection from "@/components/page/Page";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollableContainerUpperSection from "@/components/scrollable-container/UpperSection";
import ScrollElement from "@/components/ScrollElement";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n.config";
import { newsItems } from "@/lib/data";
import { NEWS_ROUTE } from "@/lib/paths";
import { NewsItem } from "@/lib/types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function NewsClientPage() {
  const t = useTranslations("Home.news");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <PageWithFirstSection className="mt-[36px] sm:mt-[180px]">
      <Section>
        <div className="flex-col">
          <ScrollableContainerUpperSection
            title={t("title")}
            containerRef={containerRef}
            titleClass="text-[28px] sm:text-[47px] !font-normal 1920:text-[62px] "
            className="sm:mb-[50px] 1920:mb-[66px]"
          ></ScrollableContainerUpperSection>

          <div className="flex w-fit flex-col sm:gap-[38px] 1920:gap-[50px]">
            <ScrollableCardsContainer ref={containerRef}>
              {newsItems([]).map((item, index) => (
                <ScrollElement className="flex justify-center" key={index}>
                  <MainNewsCard item={item} />
                </ScrollElement>
              ))}
            </ScrollableCardsContainer>
            <Section
              className="gird-cols-1 grid w-full max-w-mobile sm:max-w-desktop sm:grid-cols-3 sm:gap-[38px] 1920:max-w-desktop-lg 1920:gap-[50px]"
              wrapperClass="sm:flex hidden"
            >
              {newsItems([])
                .slice(1, 4)
                .map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
            </Section>
          </div>
        </div>
      </Section>
    </PageWithFirstSection>
  );
}
