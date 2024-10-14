import { API_PATHS } from "./api-paths";
import { NewsItem, NewsResponse } from "../types";
import axiosInstance from "../axios";

export type PhotoLibraryImage = {
  id: number;
  static_pages_id: number | null;
  photo_library_id: number;
  image: string;
  created_at: string;
  updated_at: string;
};

export type PhotoLibraryItem = {
  id: number;
  college_id: number | null;
  department_id: number | null;
  en_description: string;
  ar_description: string;
  en_title: string;
  ar_title: string;
  en_college_name: string | null;
  en_department_name: string | null;
  ar_college_name: string | null;
  ar_department_name: string | null;
  created_at: string;
  updated_at: string;
  images: PhotoLibraryImage[];
};

export type PhotoLibraryResponse = {
  current_page: number;
  data: PhotoLibraryItem[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

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
