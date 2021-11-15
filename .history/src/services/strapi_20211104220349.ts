import axios from "axios";

export const strapi_api = axios.create({
  baseURL: "http://localhost:1337/postagens",
});
