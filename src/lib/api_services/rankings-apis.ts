import { API_PATHS } from "./api-paths";
import { Ranking, RawRanking, RankingsResponse } from "../types";
import axiosInstance from "../axios";

function fixFieldNames(item: RawRanking, lang: string): Ranking {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    name: isEnglish ? item.en_name || item.ar_name : item.ar_name,
    link: item.link,
    image: item.image,
    num: item.num,
  };
}

export const fetchRankings = async (lang: string): Promise<Ranking[]> => {
  try {
    const response = await axiosInstance.get<RankingsResponse>(
      `${API_PATHS.RANKINGS}?lang=${lang}`,
    );
    return response.data.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching academic rankings:", error);
    throw error;
  }
};
