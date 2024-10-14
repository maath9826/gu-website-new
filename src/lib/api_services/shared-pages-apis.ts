import axiosInstance from "../axios";
import { SharedPageData, SharedPageResponse } from "../types";

export const fetchSharedPageData = async (
  category: string,
): Promise<SharedPageData | null> => {
  try {
    const response = await axiosInstance.get<SharedPageResponse>(
      `/staticpages?category=${category}`,
    );
    console.log("response.data", response.data);
    return response.data.data[0] || null;
  } catch (error) {
    console.error("Error fetching shared page data:", error);
    return null;
  }
};
