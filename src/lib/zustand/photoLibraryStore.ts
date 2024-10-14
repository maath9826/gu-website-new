// src/lib/zustand/photoLibraryStore.ts

import { create } from "zustand";
import { getPhotoLibrary } from "@/lib/api_services/photo-library-apis";
import debounce from "lodash/debounce";
import {
  PhotoLibraryItem,
  PhotoLibraryResponse,
} from "../api_services/news-apis";

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
  fetchPhotoLibrary: () => Promise<void>;
  setPage: (page: number) => void;
  setSearchTerm: (term: string) => void;
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
    fetchPhotoLibrary: async () => {
      set({ isLoading: true });
      const { pagination, searchTerm } = get();
      try {
        const response: PhotoLibraryResponse = await getPhotoLibrary(
          pagination.currentPage,
          searchTerm,
        );
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
