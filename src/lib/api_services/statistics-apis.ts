import { API_PATHS } from "./api-paths";
import { StatisticsItem, StatisticsResponse } from "../types";
import axiosInstance from "../axios";

export const fetchStatistics = async (): Promise<StatisticsItem> => {
  try {
    const response = await axiosInstance.get<StatisticsResponse>(
      API_PATHS.STATISTICS,
    );
    return response.data.statistics[0];
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw error;
  }
};
