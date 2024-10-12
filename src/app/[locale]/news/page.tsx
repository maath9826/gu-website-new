import { getTranslations } from "next-intl/server";
import NewsClientPage from "./ClientPage";
import { NewsResponse } from "@/lib/types";
import { getLatestNews } from "@/lib/api_services/news-apis";
import AppInitializer from "./AppInitializer";
import { CounterStoreProvider } from "@/lib/providers/counter-store-provider";
import {
  NewsStoreContext,
  NewsStoreProvider,
  NewsStoreProviderProps,
} from "../../../lib/providers/news-provider";
import { createContext } from "react";
import { MyContextProvider } from "./test";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    // title: t("newsTitle"),
  };
}

export default async function NewsPage() {
  let newsResponse: NewsResponse | undefined;

  try {
    newsResponse = await getLatestNews(1);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  return (
    newsResponse && (
      <NewsStoreProvider newsResponse={newsResponse}>
        <NewsClientPage></NewsClientPage>
      </NewsStoreProvider>
      // <NewsStoreProvider newsResponse={newsResponse}>
      //   <NewsClientPage></NewsClientPage>
      // </NewsStoreProvider>
    )
  );
}
