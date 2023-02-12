import { useQuery } from "react-query";

import { getDetailPost } from "src/apis";

export default function useDetailPost(postId: number | undefined) {
  const { data, isLoading, isError } = useQuery(
    `/posts/detail/${postId}}`,
    () => (postId === undefined ? null : getDetailPost(postId))
  );

  return {
    data: data?.data,
    isLoading,
    isError,
  };
}
