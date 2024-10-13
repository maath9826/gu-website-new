import { API_PATHS } from "./api-paths";
import axiosInstance from "../axios";

export interface OrganizationalStructure {
  id: number;
  file: string;
}

export interface OrganizationalStructureResponse
  extends Array<OrganizationalStructure> {}

export const fetchOrganizationalStructure =
  async (): Promise<OrganizationalStructure> => {
    try {
      const response = await axiosInstance.get<OrganizationalStructureResponse>(
        API_PATHS.ORGANIZATIONAL_STRUCTURE,
      );
      return response.data[0]; // Return the first element of the array
    } catch (error) {
      console.error("Error fetching organizational structure:", error);
      throw error;
    }
  };
