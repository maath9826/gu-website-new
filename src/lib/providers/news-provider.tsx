// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { NewsResponse } from "../types";
import { createNewsStore, NewsState } from "../zustand/newsStore";

export const NewsStoreContext = createContext<any>(undefined);

export interface NewsStoreProviderProps {
  children: ReactNode;
  newsResponse: NewsResponse;
}

export const NewsStoreProvider = ({
  children,
  newsResponse,
}: NewsStoreProviderProps) => {
  const useNewsStore = createNewsStore("test from 8 9 21");

  return (
    <NewsStoreContext.Provider value={{ useNewsStore }}>
      {children}
    </NewsStoreContext.Provider>
  );
};

export const useNewsStore = () => {
  const newsStoreContext = useContext(NewsStoreContext);

  if (!newsStoreContext) {
    throw new Error(`useNewsStore must be used within CounterStoreProvider`);
  }

  return useStore(newsStoreContext.useNewsStore);
};
