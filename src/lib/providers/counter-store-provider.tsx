// src/providers/counter-store-provider.tsx
"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import {
  CounterStore,
  createCounterStore,
  initCounterStore,
} from "../zustand/newtitle-store";
import { NewsResponse } from "../types";

export type CounterStoreApi = ReturnType<typeof createCounterStore>;

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined,
);

export interface CounterStoreProviderProps {
  children: ReactNode;
  newsResponse: NewsResponse;
}

export const CounterStoreProvider = ({
  children,
  newsResponse,
}: CounterStoreProviderProps) => {
  const storeRef = useRef<CounterStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createCounterStore(initCounterStore(newsResponse));
  }

  return (
    <CounterStoreContext.Provider value={storeRef.current}>
      {children}
    </CounterStoreContext.Provider>
  );
};

export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T,
): T => {
  const counterStoreContext = useContext(CounterStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
