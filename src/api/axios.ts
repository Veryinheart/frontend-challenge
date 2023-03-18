import axios from "axios";

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (pageNumber = 1, options = {}) => {
  const response = await api.get(`/posts?_page=${pageNumber}`, options);
  return response.data;
};

export const getPost = async (id: number) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
