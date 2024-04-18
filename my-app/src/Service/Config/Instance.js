import axios from 'axios';

export const apiUrl = process.env.NEXT_PUBLIC_API;


const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials:false,

});

export default axiosInstance;

