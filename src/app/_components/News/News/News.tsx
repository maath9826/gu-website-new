import { useLocale, useTranslations } from "next-intl";
import { NewsItem } from "@/lib/types";
import { fetchNews } from "@/lib/api_services/news-apis";
import NewsSectionClientSide from "./ClientSide";
import { cookies } from "next/headers";

const NewsSection: React.FC = async () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("language")?.value || "ar";

  let newsItems: NewsItem[] = [];

  try {
    newsItems = await fetchNews(lang);
  } catch (error) {
    console.error("Failed to fetch news:", error);
  }
  return (
    newsItems &&
    newsItems.length > 0 && (
      <NewsSectionClientSide newsItems={newsItems}></NewsSectionClientSide>
    )
  );
};

export default NewsSection;
