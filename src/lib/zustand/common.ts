import { create } from "zustand";
import { HOME_ROUTE } from "../paths";

interface CommonState {
  hasError: boolean;
  isDrawerVisible: boolean;
  isSuccessModalOpen: boolean;
  successMessage: string;
  toggleDrawer: (show: boolean) => void;
  errorMessage: string;
  showErrorDialog: (message: string) => void;
  hideErrorDialog: () => void;
  openSuccessModal: (message?: string) => void;
  closeSuccessModal: () => void;
}

const useCommonStore = create<CommonState>((set) => ({
  hasError: false,
  isDrawerVisible: false,
  isSuccessModalOpen: false,
  successMessage: "",
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
  openSuccessModal: (message = "") =>
    set({
      isSuccessModalOpen: true,
      successMessage: message,
    }),

  closeSuccessModal: () => {
    set({ isSuccessModalOpen: false, successMessage: "" });

    window.location.href = HOME_ROUTE;
  },
}));

export default useCommonStore;
