// src/lib/api_services/photo-library-apis.ts

import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";
import { PhotoLibraryResponse } from "./news-apis";

export const getPhotoLibrary = async (
  page: number,
  search: string = "",
): Promise<PhotoLibraryResponse> => {
  try {
    const response = await axiosInstance.get<PhotoLibraryResponse>(
      `${API_PATHS.PHOTO_LIBRARY}?page=${page}&search=${encodeURIComponent(search)}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching photo library:", error);
    throw error;
  }
};
