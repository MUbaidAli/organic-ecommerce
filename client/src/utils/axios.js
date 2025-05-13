import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8484/api",
  withCredentials: true,
});

export default axiosInstance;
