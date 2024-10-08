import { API_PATHS } from "./api-paths";
import { NewsItem, NewsResponse } from "../types";
import axiosInstance from "../axios";

interface RawNewsItem {
  id: number;
  l_artitle?: string;
  l_entitle?: string;
  image: string;
  ar_description?: string;
  en_description?: string;
}

function fixFieldNames(item: RawNewsItem, lang: string): NewsItem {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    title: isEnglish ? item.l_entitle : item.l_artitle,
    image: item.image,
    description: isEnglish ? item.en_description : item.ar_description,
  } as NewsItem;
}

export const fetchNews = async (lang: string): Promise<NewsItem[]> => {
  try {
    const response = await axiosInstance.get<NewsResponse>(
      `${API_PATHS.NEWS}?lang=${lang}`,
    );

    const rawNewsItems: RawNewsItem[] = response.data.landingpage;

    return rawNewsItems.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
