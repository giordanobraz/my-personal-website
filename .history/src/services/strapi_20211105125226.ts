import axios from "axios";

export const strapi_api = axios.create({
  baseURL: "http://localhost:1337",
});

export const getAllPosts = async () => {
  const posts = await strapi_api.get("/articles").then((posts) => posts);
  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const post = await strapi_api.get(`/articles/${slug}`).then((post) => post);
  return post;
};
