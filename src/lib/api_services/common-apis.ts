import { API_PATHS } from "./api-paths";
import {
  EService,
  RawEService,
  EServicesResponse,
  Contact,
  RawContact,
  ContactsResponse,
} from "../types";
import axiosInstance from "../axios";

function fixEServiceFieldNames(item: RawEService, lang: string): EService {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    title: isEnglish ? item.en_title || item.ar_title : item.ar_title,
    icon: item.icon,
    link: item.link,
  };
}

function fixContactFieldNames(item: RawContact, lang: string): Contact {
  const isEnglish = lang === "en";
  return {
    id: item.id,
    email: item.email,
    phone: item.phone,
    address: isEnglish ? item.en_address : item.ar_address,
    working_hours: isEnglish ? item.en_working_hours : item.ar_working_hours,
    instagram: item.instagram,
    facebook: item.facebook,
    linkedin: item.linkedin,
    youtube: item.youtube,
  };
}

export const fetchEServices = async (lang: string): Promise<EService[]> => {
  try {
    const response = await axiosInstance.get<EServicesResponse>(
      `${API_PATHS.E_SERVICES}?lang=${lang}`,
    );
    return response.data.map((item) => fixEServiceFieldNames(item, lang));
  } catch (error) {
    console.error("Error fetching e-services:", error);
    throw error;
  }
};

export const fetchContact = async (lang: string): Promise<Contact> => {
  try {
    const response = await axiosInstance.get<ContactsResponse>(
      `${API_PATHS.CONTACT}?lang=${lang}`,
    );
    return fixContactFieldNames(response.data.contacts[0], lang);
  } catch (error) {
    console.error("Error fetching contact information:", error);
    throw error;
  }
};

export const fetchLinks = async (): Promise<RawContact> => {
  try {
    const response = await axiosInstance.get<ContactsResponse>(
      API_PATHS.CONTACT,
    );
    return response.data.contacts[0];
  } catch (error) {
    console.error("Error fetching contact information:", error);
    throw error;
  }
};
