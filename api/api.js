import axios from "axios";
import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://my-flask-app-csca5028-jing-ac19ad42b89b.herokuapp.com/";

const api = axios.create({
  baseURL: API_BASE_URL
});

// Add token to headers if it exists
api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
