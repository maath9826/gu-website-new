import axiosInstance from "../axios";
import { HomepageSliderItemsResponse, SliderItem } from "../types";
import { API_PATHS } from "./api-paths";

interface RawHomepageSliderItem {
  id: number;
  l_artitle?: string;
  l_entitle?: string;
  image: string;
  ar_description?: string;
  en_description?: string;
}

function fixFieldNames(item: RawHomepageSliderItem, lang: string): SliderItem {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    title: isEnglish ? item.l_entitle : item.l_artitle,
    image: item.image,
    description: isEnglish ? item.en_description : item.ar_description,
  } as SliderItem;
}

export const fetchSliderItems = async (lang: string): Promise<SliderItem[]> => {
  try {
    const response = await axiosInstance.get<HomepageSliderItemsResponse>(
      `${API_PATHS.LANDING_PAGE}?lang=${lang}`,
    );
    return response.data.landingpage.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching academic rankings:", error);
    throw error;
  }
};
