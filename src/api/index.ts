import axios from "axios";

export const API_URL = "https://fakestoreapi.com";

const $api = axios.create({
  baseURL: API_URL,
});

export { $api };
