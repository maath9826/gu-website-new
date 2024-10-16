import { create } from "zustand";
import { NewsItem, NewsResponse } from "@/lib/types";
import { getLatestNews } from "@/lib/api_services/news-apis";

export interface NewsState {
  news: NewsItem[];
  pagination: {
    currentPage: number;
    totalPages: number;
    perPage: number;
    total: number;
  };
  isLoading: boolean;
  fetchNews: () => Promise<void>;
  setPage: (page: number) => void;
}

export const createNewsStore = (initialState: Partial<NewsState> = {}) =>
  create<NewsState>((set, get) => ({
    news: [],
    pagination: {
      currentPage: 1,
      totalPages: 1,
      perPage: 15,
      total: 0,
    },
    isLoading: false,
    fetchNews: async () => {
      set({ isLoading: true });
      const { pagination } = get();
      try {
        const response: NewsResponse = await getLatestNews(
          pagination.currentPage,
        );
        set({
          news: response.latestnews.data,
          pagination: {
            currentPage: response.latestnews.current_page,
            totalPages: response.latestnews.last_page,
            perPage: response.latestnews.per_page,
            total: response.latestnews.total,
          },
          isLoading: false,
        });
      } catch (error) {
        console.error("Failed to fetch news:", error);
        set({ isLoading: false });
      }
    },
    setPage: (page) =>
      set((state) => ({
        pagination: { ...state.pagination, currentPage: page },
      })),
    ...initialState,
  }));

// export const useNewsStore =  create<NewsState>((set, get) => ({
//   test: "",
//   setTest: (value) => set({ test: value }),
//   news: [],
//   pagination: {
//     currentPage: 1,
//     totalPages: 1,
//     perPage: 15,
//     total: 0,
//   },
//   isLoading: false,
//   fetchNews: async () => {
//     set({ isLoading: true });
//     const { pagination } = get();
//     try {
//       const response: NewsResponse = await getLatestNews(
//         pagination.currentPage,
//       );
//       set({
//         news: response.latestnews.data,
//         pagination: {
//           currentPage: response.latestnews.current_page,
//           totalPages: response.latestnews.last_page,
//           perPage: response.latestnews.per_page,
//           total: response.latestnews.total,
//         },
//         isLoading: false,
//       });
//     } catch (error) {
//       console.error("Failed to fetch news:", error);
//       set({ isLoading: false });
//     }
//   },
//   setPage: (page) =>
//     set((state) => ({
//       pagination: { ...state.pagination, currentPage: page },
//     })),
//   initializeState: (initialData: NewsResponse) =>
//     set({
//       news: initialData.latestnews.data,
//       pagination: {
//         currentPage: initialData.latestnews.current_page,
//         totalPages: initialData.latestnews.last_page,
//         perPage: initialData.latestnews.per_page,
//         total: initialData.latestnews.total,
//       },
//     }),
// }));
