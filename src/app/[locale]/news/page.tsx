import { getTranslations } from "next-intl/server";
import NewsClientPage from "./ClientPage";
import { NewsResponse } from "@/lib/types";
import { getLatestNews } from "@/lib/api_services/news-apis";
import { NewsStoreProvider } from "../../../lib/providers/news-provider";

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
      <NewsStoreProvider
        initialState={{
          news: newsResponse.latestnews.data,
          pagination: {
            currentPage: newsResponse.latestnews.current_page,
            totalPages: newsResponse.latestnews.last_page,
            perPage: newsResponse.latestnews.per_page,
            total: newsResponse.latestnews.total,
          },
        }}
      >
        <NewsClientPage />
      </NewsStoreProvider>
    )
  );
}
