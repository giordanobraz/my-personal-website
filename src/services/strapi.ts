import axios from "axios";

export const strapi_api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_STRAPI_API}`,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN_KEY}`,
  },
});

export const getAllPosts = async () => {
  const posts = await strapi_api.get(
    "/articles?sort[0]=publishedAt%3Adesc&populate=%2A"
  );

  return posts.data;
};

export const getPostBySlug = async (slug: string) => {
  const post = await strapi_api.get(
    `/articles?filters[slug][$eq]=${slug}&populate=%2A`
  );

  return post.data;
};

export const getGlobalSeoData = async () => {
  const response = await strapi_api.get(`/global?populate=%2A`);

  return response.data;
};
