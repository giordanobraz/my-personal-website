import axios from "axios";

export const gpu_api = axios.create({
  baseURL: `https://whats-the-price.herokuapp.com`,
});

export const getAllProducts = async () => {
  return await gpu_api.get("/products");
};

export const getProductHistory = async (id: string) => {
  return await gpu_api
    .get(`/products/${id}/history`)
    .then((response) => response.data);
};
