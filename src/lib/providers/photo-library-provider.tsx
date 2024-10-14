// src/lib/providers/photo-library-provider.tsx

"use client";

import { type ReactNode, createContext, useContext } from "react";
import { useStore } from "zustand";
import {
  createPhotoLibraryStore,
  PhotoLibraryState,
} from "../zustand/photoLibraryStore";

export const PhotoLibraryStoreContext = createContext<ReturnType<
  typeof createPhotoLibraryStore
> | null>(null);

export interface PhotoLibraryStoreProviderProps {
  children: ReactNode;
  initialState: Partial<PhotoLibraryState>;
}

export const PhotoLibraryStoreProvider = ({
  children,
  initialState,
}: PhotoLibraryStoreProviderProps) => {
  const store = createPhotoLibraryStore(initialState);

  return (
    <PhotoLibraryStoreContext.Provider value={store}>
      {children}
    </PhotoLibraryStoreContext.Provider>
  );
};

export const usePhotoLibraryStore = () => {
  const store = useContext(PhotoLibraryStoreContext);
  if (!store) {
    throw new Error(
      "usePhotoLibraryStore must be used within PhotoLibraryStoreProvider",
    );
  }
  return useStore(store);
};
