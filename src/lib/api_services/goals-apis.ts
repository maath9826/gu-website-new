import { API_PATHS } from "./api-paths";
import { GoalItem, RawGoalItem, GoalsResponse } from "../types";
import axiosInstance from "../axios";

function fixFieldNames(item: RawGoalItem, lang: string): GoalItem {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    title: isEnglish ? item.en_text : item.ar_text,
    description: isEnglish ? item.en_description : item.ar_description,
    image: item.image,
  };
}

export const fetchGoals = async (lang: string): Promise<GoalItem[]> => {
  try {
    const response = await axiosInstance.get<GoalsResponse>(
      `${API_PATHS.GOALS}?lang=${lang}`,
    );
    return response.data.goals.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching goals:", error);
    throw error;
  }
};
