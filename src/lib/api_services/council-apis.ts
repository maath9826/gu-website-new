import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";

export interface RawCouncilMember {
  id: number;
  ar_name: string;
  en_name?: string;
  ar_position: string;
  en_position?: string;
  image: string;
  ar_description: string;
  en_description?: string;
}

export interface CouncilMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

export interface CouncilResponse {
  council: RawCouncilMember[];
}

function fixFieldNames(item: RawCouncilMember, lang: string): CouncilMember {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    name: isEnglish ? item.en_name || item.ar_name : item.ar_name,
    position: isEnglish
      ? item.en_position || item.ar_position
      : item.ar_position,
    image: item.image,
    description: isEnglish
      ? item.en_description || item.ar_description
      : item.ar_description,
  };
}

export const fetchCouncilMembers = async (
  lang: string,
): Promise<CouncilMember[]> => {
  try {
    const response = await axiosInstance.get<CouncilResponse>(
      `${API_PATHS.COUNCIL}?lang=${lang}`,
    );
    return response.data.council.map((member) => fixFieldNames(member, lang));
  } catch (error) {
    console.error("Error fetching council members:", error);
    throw error;
  }
};
