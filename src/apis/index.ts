import type { AxiosResponse } from "axios";
import type { GetPostListParams } from "src/types/api";
import type { PostList } from "src/types/post";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export const getPostList = async (params?: GetPostListParams) => {
  const response = await axios.get(`${BASE_URL}/api/posts`, { params });

  return response;
};

export const getPostListByCategory = async (categoryId: number) => {
  const response = await axios.get<AxiosResponse<PostList>>(
    `${BASE_URL}/api/posts/category/${categoryId}`
  );

  return response;
};

export const getPost = async (postId: number) => {
  const response = await axios.get(`${BASE_URL}/api/posts/detail/${postId}`);

  return response;
};

export const getCategoryList = async () => {
  const response = await axios.get(`${BASE_URL}/api/category/list`);

  return response;
};
