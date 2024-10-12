import { getTranslations } from "next-intl/server";
import NewsClientPage from "./ClientPage";
import { NewsResponse } from "@/lib/types";
import { getLatestNews } from "@/lib/api_services/news-apis";
import { useNewsStore } from "@/lib/zustand/newsStore";

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
    useNewsStore.getState().initializeState(newsResponse);

    console.log(useNewsStore.getState().news);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }

  return (
    newsResponse && (
      <NewsClientPage newsResponse={newsResponse}></NewsClientPage>
    )
  );
}
