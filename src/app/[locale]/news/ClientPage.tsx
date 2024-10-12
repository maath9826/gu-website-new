"use client";

import MainNewsCard from "@/app/_components/News/MainNewsCard";
import NewsCard from "@/app/_components/News/NewsCard";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollableContainerUpperSection from "@/components/scrollable-container/UpperSection";
import ScrollElement from "@/components/ScrollElement";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";
import React, { useContext, useEffect, useRef } from "react";
import { NewsResponse } from "@/lib/types";
import Pagination from "@/components/Pagination";
import { useCounterStore } from "@/lib/providers/counter-store-provider";
import { NewsStoreContext, useNewsStore } from "@/lib/providers/news-provider";
import { MyContext, useMyContext } from "./test";

export default function NewsClientPage() {
  const t = useTranslations("Home.news");
  const containerRef = useRef<HTMLDivElement>(null);
  // const { news, pagination, isLoading, fetchNews, setPage, initializeState } =
  //   useNewsContextStore();

  const { test } = useNewsStore();

  console.log("useNewsStore 0 0 0 00 0 0", useNewsStore().news);

  // const { news: newsNew } = useContext(NewsStoreContext)();

  // console.log(useContext(NewsStoreContext)());

  // const handlePageChange = (newPage: number) => {
  //   setPage(newPage);
  //   fetchNews();
  // };

  return (
    <main className="mt-[36px] sm:mt-[180px]">
      <div>{test}</div>
      {/* <div>{useNewsStore().news[0]?.ar_title}</div> */}
      {/* <div>{newsNew[0].ar_title}</div> */}
      {/* <Section>
        <div className="flex-col">
          <ScrollableContainerUpperSection
            title={t("title")}
            containerRef={containerRef}
            titleClass="text-[28px] sm:text-[47px] !font-normal 1920:text-[62px] "
            className="sm:mb-[50px] 1920:mb-[66px]"
          />

          <div className="flex w-fit flex-col sm:gap-[38px] 1920:gap-[50px]">
            <ScrollableCardsContainer ref={containerRef}>
              {news.map((item, index) => (
                <ScrollElement className="flex justify-center" key={index}>
                  <MainNewsCard item={item} />
                </ScrollElement>
              ))}
            </ScrollableCardsContainer>
            <Section
              className="gird-cols-1 grid w-full max-w-mobile sm:max-w-desktop sm:grid-cols-3 sm:gap-[38px] 1920:max-w-desktop-lg 1920:gap-[50px]"
              wrapperClass="sm:flex hidden"
            >
              {news.slice(1, 4).map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </Section>
          </div>

          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={pagination.perPage}
            totalItems={pagination.total}
          />
        </div>
      </Section> */}
    </main>
  );
}
