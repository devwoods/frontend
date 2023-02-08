import type { GetPostListParams } from "src/types/api";
import { useQuery } from "react-query";

import { getPostList } from "src/apis";

export default function usePostList(params?: GetPostListParams) {
  const { data, isLoading, isError } = useQuery(`/posts`, () =>
    getPostList(params)
  );

  return {
    data: data?.data,
    isLoading,
    isError,
  };
}
