import axios from "axios";

export const strapi_api = axios.create({
  baseURL: "http://localhost:1337",
});

export const getAllPosts = async () => {
  strapi_api.get("/articles").then((response) => {
    return response;
  });
};
