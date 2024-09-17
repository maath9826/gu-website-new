import { create } from "zustand";

interface CommonState {
  hasError: boolean;
  isDrawerVisible: boolean;
  toggleDrawer: (show: boolean) => void;
  errorMessage: string;
  showErrorDialog: (message: string) => void;
  hideErrorDialog: () => void;
}

const useCommonStore = create<CommonState>((set) => ({
  hasError: false,
  isDrawerVisible: false,
  toggleDrawer: (show) => {
    set({
      isDrawerVisible: show,
    });
  },
  errorMessage: "",
  showErrorDialog: (message) =>
    set((state) => ({
      hasError: true,
      errorMessage: message,
    })),
  hideErrorDialog: () => {
    console.log("setting has error to false");
    set((state) => ({ hasError: false, errorMessage: "" }));
  },
}));

export default useCommonStore;
