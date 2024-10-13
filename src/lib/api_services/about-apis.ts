import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";

export interface RawAboutData {
  id: number;
  ar_about: string;
  en_about: string;
  ar_message: string;
  en_message: string;
  ar_vision: string;
  en_vision: string;
  ar_goals: string;
  en_goals: string;
}

export interface AboutData {
  id: number;
  about: string;
  message: string;
  vision: string;
  goals: string;
}

export interface AboutResponse {
  about: RawAboutData[];
}

function fixFieldNames(item: RawAboutData, lang: string): AboutData {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    about: isEnglish ? item.en_about : item.ar_about,
    message: isEnglish ? item.en_message : item.ar_message,
    vision: isEnglish ? item.en_vision : item.ar_vision,
    goals: isEnglish ? item.en_goals : item.ar_goals,
  };
}

export const fetchAboutData = async (lang: string): Promise<AboutData> => {
  try {
    const response = await axiosInstance.get<AboutResponse>(
      `${API_PATHS.ABOUT}?lang=${lang}`,
    );
    return fixFieldNames(response.data.about[0], lang);
  } catch (error) {
    console.error("Error fetching about data:", error);
    throw error;
  }
};
