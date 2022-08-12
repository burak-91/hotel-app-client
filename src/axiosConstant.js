import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://hotel-app-server.herokuapp.com/api",
});