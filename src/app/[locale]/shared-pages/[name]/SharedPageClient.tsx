import FormattedTextViewer from "@/components/FormattedTextViewer";
import ActionsTitle from "@/components/page/FirstTitleSection/ActionsTitle";
import React from "react";
import { useLocale } from "next-intl";
import { SharedPageData } from "@/lib/types";

export default function SharedPageClient({
  pageData,
}: {
  pageData: SharedPageData | null;
}) {
  const locale = useLocale();

  if (!pageData) {
    return <div>No data available</div>;
  }

  const title = locale === "en" ? pageData.en_title : pageData.ar_title;
  const description =
    locale === "en" ? pageData.en_description : pageData.ar_description;

  return (
    <main>
      {title.trim() && <ActionsTitle title={title}></ActionsTitle>}

      {pageData.images.length > 0 && (
        <img
          id="print-section"
          src={pageData.images[0]}
          alt={title}
          className="w-full"
        />
      )}
      {description.trim() && (
        <FormattedTextViewer>{description}</FormattedTextViewer>
      )}
    </main>
  );
}
