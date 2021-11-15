import axios from "axios";

export const strapi_api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API}`,
});

export const getAllPosts = async () => {
  const posts = await strapi_api.get("/articles").then((posts) => posts);
  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const post = await strapi_api.get(`/articles/${slug}`).then((post) => post);
  return post;
};
