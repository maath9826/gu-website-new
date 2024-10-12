import { API_PATHS } from "./api-paths";
import { NewsItem, NewsResponse } from "../types";
import axiosInstance from "../axios";

// interface RawNewsItem {
//   id: number;
//   l_artitle?: string;
//   l_entitle?: string;
//   image: string;
//   ar_description?: string;
//   en_description?: string;
// }

// function fixFieldNames(item: RawNewsItem, lang: string): NewsItem {
//   const isEnglish = lang === "en";
//   return {
//     id: item.id,
//     title: isEnglish ? item.l_entitle : item.l_artitle,
//     image: item.image,
//     description: isEnglish ? item.en_description : item.ar_description,
//   } as NewsItem;
// }

export const getLatestNews = async (page: number): Promise<NewsResponse> => {
  try {
    const response = await axiosInstance.get<NewsResponse>(
      `${API_PATHS.LATEST_NEWS}?page=${page}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching latest news:", error);
    throw error;
  }
};
