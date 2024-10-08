import { API_PATHS } from "./api-paths";
import {
  College,
  RawCollege,
  CollegesResponse,
  CollegeCard,
  RawCollegeCard,
  Department,
  RawDepartment,
} from "../types";
import axiosInstance from "../axios";

function fixFieldNames(item: RawCollege, lang: string): College {
  const isEnglish = lang === "en";

  const fixedCards: CollegeCard[] = item.cards.map((card: RawCollegeCard) => ({
    id: card.id,
    title: isEnglish ? card.en_title || card.ar_title : card.ar_title,
    name: isEnglish ? card.en_name || card.ar_name : card.ar_name,
    image: card.image,
    description: isEnglish
      ? card.en_description || card.ar_description
      : card.ar_description,
    visible: card.visible,
  }));

  const fixedDepartments: Department[] = item.departments.map(
    (dept: RawDepartment) => ({
      id: dept.id,
      colleges_id: dept.colleges_id,
      name: isEnglish ? dept.en_name || dept.ar_name : dept.ar_name,
      description: isEnglish
        ? dept.en_description || dept.ar_description
        : dept.ar_description,
      image: dept.image,
      m_name: isEnglish ? dept.en_m_name || dept.ar_m_name : dept.ar_m_name,
      m_description: isEnglish
        ? dept.en_m_description || dept.ar_m_description
        : dept.ar_m_description,
      college_name: isEnglish
        ? dept.college_en_name || dept.college_ar_name
        : dept.college_ar_name,
      m_image: dept.m_image,
      depcol: dept.depcol,
    }),
  );

  return {
    id: item.id,
    name: isEnglish ? item.en_name || item.ar_name : item.ar_name,
    description: isEnglish
      ? item.en_description || item.ar_description
      : item.ar_description,
    image: item.image,
    icon: item.icon,
    depcol: item.depcol,
    cards: fixedCards,
    departments: fixedDepartments,
    staff: item.staff,
    news: item.news,
    goals: item.goals,
    graduation_projects: item.graduation_projects,
  };
}

export const fetchColleges = async (lang: string): Promise<College[]> => {
  try {
    const response = await axiosInstance.get<CollegesResponse>(
      `${API_PATHS.COLLEGES}?lang=${lang}`,
    );
    return response.data.colleges.map((item) => fixFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching colleges:", error);
    throw error;
  }
};
