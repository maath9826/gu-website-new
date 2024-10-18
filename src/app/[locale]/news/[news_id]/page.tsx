// [news_id]/page.tsx
"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useMemo, useRef } from "react";

// import { newsItems } from "@/lib/data";
import FormattedTextViewer from "@/components/FormattedTextViewer";
import PageWithFirstSection from "@/components/page/Page";

export default function SingleNewsPage() {
  const locale = useLocale();
  const t = useTranslations("Home");
  const ts = useTranslations("singleNews");

  const translatedNewsItems = useMemo(() => {
    return [];
    // return newsItems(t.raw("news.news"));
  }, [locale]);

  return (
    <main>
      <FormattedTextViewer content={"content"}></FormattedTextViewer>
    </main>
  );
}
