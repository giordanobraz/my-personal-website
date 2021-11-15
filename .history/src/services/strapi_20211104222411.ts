import axios from "axios";

export const strapi_api = axios.create({
  baseURL: "http://localhost:1337",
});

export const getAllPosts = async () => {
  const posts = await strapi_api.get("/articles").then((posts) => posts);
  return posts;
};