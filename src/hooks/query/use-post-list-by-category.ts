import { useQuery } from "react-query";

import { getPostListByCategory } from "src/apis";

export default function usePostListByCategory(categoryId: number | null) {
  const { data, isLoading, isError } = useQuery(
    `/posts/category/${categoryId}`,
    () => (categoryId === null ? null : getPostListByCategory(categoryId))
  );

  return {
    data: data?.data,
    isLoading,
    isError,
  };
}
