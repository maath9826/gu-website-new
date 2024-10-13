import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";

export interface RawPresidentSpeech {
  id: number;
  en_name: string;
  ar_name: string;
  en_position: string;
  ar_position: string;
  image: string;
  en_description: string;
  ar_description: string;
}

export interface PresidentSpeech {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

export interface PresidentSpeechResponse {
  data: RawPresidentSpeech;
}

function fixFieldNames(
  item: RawPresidentSpeech,
  lang: string,
): PresidentSpeech {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    name: isEnglish ? item.en_name : item.ar_name,
    position: isEnglish ? item.en_position : item.ar_position,
    image: item.image,
    description: isEnglish ? item.en_description : item.ar_description,
  };
}

export const fetchPresidentSpeech = async (
  lang: string,
): Promise<PresidentSpeech> => {
  try {
    const response = await axiosInstance.get<PresidentSpeechResponse>(
      `${API_PATHS.PRESIDENT_SPEECH}`,
    );
    return fixFieldNames(response.data.data, lang);
  } catch (error) {
    console.error("Error fetching president's speech:", error);
    throw error;
  }
};
