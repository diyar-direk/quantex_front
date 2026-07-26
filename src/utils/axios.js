import axios from "axios";
import AuthHelper from "./authHelper";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const token = new AuthHelper().getToken();

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
  withCredentials: true,
});

export default axiosInstance;
