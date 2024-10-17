import { create } from "zustand";
import {
  getPhotoLibrary,
  PhotoLibraryItem,
  PhotoLibraryResponse,
  PhotoLibraryQueryParams,
} from "@/lib/api_services/photo-library-apis";
import debounce from "lodash/debounce";
import { College, CollegesResponse, RawCollege } from "../types";

export interface PhotoLibraryState {
  photoLibrary: PhotoLibraryItem[];
  pagination: {
    currentPage: number;
    totalPages: number;
    perPage: number;
    total: number;
  };
  isLoading: boolean;
  searchTerm: string;
  selectedCollegeId: number | null;
  selectedDepartmentId: number | null;
  colleges: College[];
  fetchPhotoLibrary: () => Promise<void>;
  setPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
  setSelectedCollegeId: (id: number | null) => void;
  setSelectedDepartmentId: (id: number | null) => void;
  debouncedSearch: (term: string) => void;
  initializeFromUrl: (searchParam: string | null) => void;
}

export const createPhotoLibraryStore = (
  initialState: Partial<PhotoLibraryState> = {},
) =>
  create<PhotoLibraryState>((set, get) => ({
    photoLibrary: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      perPage: 6,
      total: 0,
    },
    isLoading: false,
    searchTerm: "",
    selectedCollegeId: null,
    selectedDepartmentId: null,
    colleges: [],
    fetchPhotoLibrary: async () => {
      set({ isLoading: true });
      const {
        pagination,
        searchTerm,
        selectedCollegeId,
        selectedDepartmentId,
      } = get();
      try {
        const queryParams: PhotoLibraryQueryParams = {
          page: pagination.currentPage,
          search: searchTerm,
          college_id: selectedCollegeId,
          department_id: selectedDepartmentId,
        };
        const response: PhotoLibraryResponse =
          await getPhotoLibrary(queryParams);
        set({
          photoLibrary: response.data,
          pagination: {
            currentPage: response.current_page,
            totalPages: response.last_page,
            perPage: response.per_page,
            total: response.total,
          },
          isLoading: false,
        });
      } catch (error) {
        console.error("Failed to fetch photo library:", error);
        set({ isLoading: false });
      }
    },
    setPage: (page) => {
      set((state) => ({
        pagination: { ...state.pagination, currentPage: page },
      }));
    },
    setSearchTerm: (term) => set({ searchTerm: term }),
    setSelectedCollegeId: (id) =>
      set({ selectedCollegeId: id, selectedDepartmentId: null }),
    setSelectedDepartmentId: (id) => set({ selectedDepartmentId: id }),
    debouncedSearch: debounce((term: string) => {
      const { fetchPhotoLibrary } = get();
      fetchPhotoLibrary();
    }, 300),
    initializeFromUrl: (searchParam: string | null) => {
      const { setSearchTerm, fetchPhotoLibrary } = get();
      setSearchTerm(searchParam || "");
      fetchPhotoLibrary();
    },
    ...initialState,
  }));
