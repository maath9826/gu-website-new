// [news_id]/page.tsx
"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useMemo, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { twMerge } from "tailwind-merge";

import useTextDirection from "@/app/_hooks/useTextDirection";
import { Button } from "@/components/ui/button";
import { shareCurrentURL } from "@/lib/utils";
import ScrollArrows from "@/components/ScrollArrows";
import { NewsItem } from "@/lib/types";
import { newsItems } from "@/lib/data";
import { NEWS_ROUTE } from "@/lib/paths";
import NewsTags from "@/app/_components/News/NewsTags";

export default function SingleNewsPage() {
  const locale = useLocale();
  const t = useTranslations("Home");
  const ts = useTranslations("singleNews");

  const translatedNewsItems = useMemo(() => {
    return newsItems(t.raw("news.news"));
  }, [locale]);

  return (
    <main className="w-full">
      <MainSection translatedNewsItems={translatedNewsItems} />
      <RelatedNews translatedNewsItems={translatedNewsItems} />
    </main>
  );
}

function MainSection({
  translatedNewsItems,
}: {
  translatedNewsItems: NewsItem[];
}) {
  const param = useParams();
  const ts = useTranslations("singleNews");

  const currentItem = translatedNewsItems.find(
    (el) => el.id === parseInt(param.news_id as string)
  );

  return currentItem ? (
    <section className="w-full justify-center text-start sm:px-[30px]">
      <div className="mx-auto  flex max-w-[1216px] flex-col items-start justify-center gap-[53px] rounded-[20px] px-[16px] sm:flex-row-reverse sm:gap-[80px] sm:rounded-[30px] sm:px-[0px] mt-[28px] sm:mt-[110px] 1920:gap-[127px]">
        <NewsSection newsItem={currentItem} />
      </div>
    </section>
  ) : (
    <div>no data</div>
  );
}

function NewsSection({ newsItem }: { newsItem: NewsItem }) {
  const direction = useTextDirection();
  const ts = useTranslations("singleNews");

  const pageStyle = `
    @page {
      size: auto;
      margin: 80px;
    }
    .no-print {
      display: none !important;
    }
    body {
      direction: ${direction};
    }
  `;

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: pageStyle,
    bodyClass: "print-body",
    documentTitle: newsItem.title,
  });

  return (
    <div
      ref={componentRef}
      className="printable-content w-full"
      id="print-section"
    >
      <div className=" sm:max-w-[701px] ltr:sm:max-w-[951px] mx-auto  items-center flex flex-col">
        <NewsTags></NewsTags>
        <h1
          className={twMerge(
            "title mb-[20px] sm:mb-[60px] !text-center sm:mt-[24px] mt-[19px] ",
            "!text-[22px] sm:!text-[42px] !font-medium ltr:sm:!font-bold"
          )}
        >
          {newsItem.title}
        </h1>
      </div>

      <img
        src={newsItem.image}
        alt="news image"
        className="mb-[30px] h-[222px] w-full rounded-[12px] object-cover sm:mb-[50px] sm:h-[683px] print:h-[300px]"
      />
      <div className="sm:max-w-[900px] sm:mx-auto">
        <p className="lg-subtitle mb-[31px] whitespace-pre-line text-center sm:text-justify text-[18px] leading-[36px] ltr:sm:leading-[36px] ltr:leading-[30px] sm:mb-[91px] ">
          {newsItem.description}
        </p>

        <div className="flex w-full   justify-end">
          <div className="no-print hidden gap-[35px] sm:flex">
            <Button
              onClick={shareCurrentURL}
              variant="ghost"
              size="icon"
              className="w-fit gap-[10px] text-[16px] font-bold text-[#3C286A]"
            >
              <span>{ts("share")}</span>
              <i className="ri-share-forward-fill"></i>
            </Button>
            <div className="h-full border-r border-[#D8D8D8]"></div>
            <Button
              onClick={handlePrint}
              variant="ghost"
              size="icon"
              className="w-fit gap-[10px] text-[16px] font-bold text-[#3C286A]"
            >
              <span>{ts("print")}</span>
              <i className="ri-printer-fill"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelatedNews({
  translatedNewsItems,
}: {
  translatedNewsItems: NewsItem[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ts = useTranslations("singleNews");

  return (
    <section className="mt-[50px] sm:mt-[150px]">
      <div className="mx-auto max-w-[1440px]">
        <UpperSection containerRef={containerRef} />
      </div>
      <ScrollableCardsContainer
        ref={containerRef}
        className="mb-[75px] sm:mb-[112px]"
        translatedNewsItems={translatedNewsItems}
      />
    </section>
  );
}

function UpperSection({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const ts = useTranslations("singleNews");

  return (
    <div className="default-padding mb-[26px] flex items-center justify-between !px-[13px] sm:mb-[61px] sm:justify-between sm:!px-[110px]">
      <div className="flex items-center gap-[22px]">
        <h2 className="title !font-medium">{ts("relatedNews")}</h2>
      </div>
      <ScrollArrows containerRef={containerRef} />
    </div>
  );
}

const ScrollableCardsContainer = React.forwardRef<
  HTMLDivElement,
  { className: string; translatedNewsItems: NewsItem[] }
>(({ className, translatedNewsItems }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        "hide-scrollbar mx-auto max-w-fit overflow-x-auto",
        className
      )}
    >
      <div className="flex w-fit gap-[12px] sm:gap-[51px] sm:px-[110px] px-[12px]">
        {translatedNewsItems.map((newsItem, index) => (
          <Card key={index} newsItem={newsItem} />
        ))}
      </div>
    </div>
  );
});

ScrollableCardsContainer.displayName = "ScrollableCardsContainer";

function Card({ newsItem }: { newsItem: NewsItem }) {
  return (
    <Link
      href={`${NEWS_ROUTE}/${newsItem.id}`}
      className="flex  justify-center  hover:opacity-90  sm:w-[381px] w-[350px]"
    >
      <div className="flex flex-col text-start">
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="sm:h-[241px] w-full h-[187px] rounded-[16px] object-cover mb-[22px] sm:mb-[32px] "
        />
        <NewsTags></NewsTags>
        <div className="mb-[10px] flex flex-col sm:mb-[24px] gap-[16px] sm:mt-[24px] mt-[9px]">
          <h4 className="line-clamp-3 text-[18px] font-medium leading-[36px] text-foreground sm:text-[32px] sm:leading-[40px] mb-[16px] tracking-[-0.01em]">
            {newsItem.title}
          </h4>
          <p className="line-clamp-2 text-[16px] leading-[26px]  sm:text-[18px] sm:leading-[26px] text-muted">
            {newsItem.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
