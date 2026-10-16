import axios from "axios";
import { store } from "../app/store.js";

const BASE_URL = import.meta.env?.VITE_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 30000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()}`);

    const token = store.getState().app.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (
      config.method === "post" ||
      config.method === "put" ||
      config.method === "patch"
    ) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status}`);
    return response;
  },
  (error) => {
    console.error("API Error:", {
      status: error.response?.status,
      message: error.message,
    });

    if (error.response) {
      const { status, data } = error.response;
      console.error(`HTTP Error ${status}: ${data?.message || error.message}`);
    } else if (error.request) {
      console.error("Network error - no response received");
    } else {
      console.error("Request setup error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
