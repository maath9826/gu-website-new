"use client";

import { type ReactNode, createContext, useContext } from "react";
import { useStore } from "zustand";
import { NewsResponse } from "../types";
import { createNewsStore, NewsState } from "../zustand/newsStore";

export const NewsStoreContext = createContext<ReturnType<
  typeof createNewsStore
> | null>(null);

export interface NewsStoreProviderProps {
  children: ReactNode;
  initialState: Partial<NewsState>;
}

export const NewsStoreProvider = ({
  children,
  initialState,
}: NewsStoreProviderProps) => {
  const store = createNewsStore(initialState);

  return (
    <NewsStoreContext.Provider value={store}>
      {children}
    </NewsStoreContext.Provider>
  );
};

export const useNewsStore = () => {
  const store = useContext(NewsStoreContext);
  if (!store) {
    throw new Error("useNewsStore must be used within NewsStoreProvider");
  }
  return useStore(store);
};
