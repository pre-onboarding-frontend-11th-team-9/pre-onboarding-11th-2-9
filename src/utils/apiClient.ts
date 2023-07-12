import axios, { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

console.log("process.env.GITHUB_TOKEN", process.env.REACT_APP_GITHUB_TOKEN);

const requestConfig = (config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `${process.env.REACT_APP_GITHUB_TOKEN}`;
  return config;
};

apiClient.interceptors.request.use(requestConfig);

export default apiClient;
