import axios from "axios";

export const api = axios.create({
    baseURL: "http://192.168.15.123:3333",
});
