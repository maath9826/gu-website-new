"use client";

import FormattedTextViewer from "@/components/FormattedTextViewer";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { SharedPageData } from "@/lib/types";
import { getImageUrl, isEmptyHtml } from "@/lib/utils";
import Image from "next/image";
import { ScrollableCardsContainer } from "@/components/scrollable-container/ScrollableContainer";
import ScrollElement from "@/components/ScrollElement";

export default function SharedPageClient({
  pageData,
}: {
  pageData: SharedPageData | null;
}) {
  const locale = useLocale();
  const t = useTranslations("SharedPages");

  if (!pageData) {
    return <div>No data available</div>;
  }

  console.log(pageData.category);
  console.log(decodeURIComponent(pageData.category));
  const title = t(pageData.category as keyof typeof t);
  console.log(title);
  const description =
    locale === "en" ? pageData.en_description : pageData.ar_description;

  return (
    <main>
      {title && <ActionsTitle title={title}></ActionsTitle>}
      {pageData.images.length > 0 &&
        (pageData.images.length > 1 ? (
          <ScrollableCardsContainer showArrows>
            {pageData.images.map((el, index) => (
              <ScrollElement className="flex justify-center" key={index}>
                <div className="relative h-[264px] w-full sm:h-[831px]">
                  <Image
                    fill
                    id="print-section"
                    src={getImageUrl(el.image)}
                    alt={title}
                    priority
                    className="object-cover"
                  />
                </div>
              </ScrollElement>
            ))}
          </ScrollableCardsContainer>
        ) : (
          <div className="relative h-[264px] w-full sm:h-[831px]">
            <Image
              fill
              id="print-section"
              src={getImageUrl(pageData.images[0].image)}
              alt={title}
              priority
              className="object-cover"
            />
          </div>
        ))}

      {isEmptyHtml(description) === false && (
        <FormattedTextViewer>{description}</FormattedTextViewer>
      )}
    </main>
  );
}
