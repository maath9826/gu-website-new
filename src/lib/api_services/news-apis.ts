import { API_PATHS } from "./api-paths";
import { NewsItem, NewsResponse } from "../types";
import axiosInstance from "../axios";

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
