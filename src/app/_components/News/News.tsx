import React, { useRef } from "react";
import { useTranslations } from "next-intl";
import Section from "../../../components/Section";
import ScrollArrows from "@/components/ScrollArrows";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import MainNewsCard from "./MainNewsCard";
import NewsCard from "./NewsCard";
import { NewsItem } from "@/lib/types";
import { newsItems } from "@/lib/data";
import ScrollableContainerUpperSection from "@/components/scrollable-container/UpperSection";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";

const NewsSection: React.FC = () => {
  const t = useTranslations("Home.news");
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Section>
      <div className="flex-col">
        <ScrollableContainerUpperSection
          title={t("title")}
          containerRef={containerRef}
          titleClass="text-[28px] sm:text-[47px] font-normal 1920:text-[62px] "
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
  );
};

export default NewsSection;
