// src/lib/axios.ts
import axios from "axios";
import useCommonStore from "./zustand/common";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 100000000,
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "node-fetch",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ERR_NETWORK")
      useCommonStore.getState().showErrorDialog("خطأ في الاتصال");
    return Promise.reject(error);
  },
);

export default axiosInstance;
