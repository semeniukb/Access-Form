import axios from "axios";
import { LOCAL_STORAGE_KEYS } from "@/utils/constants";

export const api = axios.create({
  baseURL: "https://shift-backend.onrender.com/",
  validateStatus: () => true,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
