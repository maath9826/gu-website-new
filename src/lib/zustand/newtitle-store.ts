// src/stores/counter-store.ts
import { createStore } from "zustand/vanilla";
import { NewsResponse } from "../types";

export type CounterState = {
  count: string;
  newsResponse?: NewsResponse;
};

export type CounterActions = {
  setCount: (value: string) => void;
};

export type CounterStore = CounterState & CounterActions;

export const initCounterStore = (newsResponse: NewsResponse): CounterState => {
  return { count: "initCounterStore", newsResponse };
};

export const defaultInitState: CounterState = {
  count: "init",
};

export const createCounterStore = (
  initState: CounterState = defaultInitState,
) => {
  return createStore<CounterStore>()((set) => ({
    ...initState,
    setCount: (value) => set((state) => ({ count: value })),
  }));
};
