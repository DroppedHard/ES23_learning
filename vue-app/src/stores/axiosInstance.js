// axiosInstance.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // Your API base URL
  withCredentials: true, // Include cookies in requests
});

export default instance;
