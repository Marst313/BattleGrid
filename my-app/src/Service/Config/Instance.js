import axios from "axios";

export const apiUrl = process.env.NEXT_PUBLIC_API;

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3000/api/v1/user",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;
