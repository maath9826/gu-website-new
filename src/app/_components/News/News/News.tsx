import { useLocale, useTranslations } from "next-intl";
import { NewsItem, NewsResponse } from "@/lib/types";
import NewsSectionClientSide from "./ClientSide";
import { cookies, headers } from "next/headers";
import { getLatestNews } from "@/lib/api_services/news-apis";

const NewsSection: React.FC = async () => {
  const lang = headers().get("x-locale") || "ar";

  let newsItems: NewsResponse | undefined;

  try {
    newsItems = await getLatestNews(1);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }
  return (
    newsItems &&
    newsItems.latestnews.data.length > 0 && (
      <NewsSectionClientSide
        newsItems={newsItems.latestnews.data}
      ></NewsSectionClientSide>
    )
  );
};

export default NewsSection;
