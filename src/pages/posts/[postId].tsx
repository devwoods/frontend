import { useRouter } from "next/router";

import useDetailPost from "src/hooks/query/use-detail-post";

export default function DetailPost() {
  const router = useRouter();
  const postId = Number(router.query.postId) || undefined;
  const { data } = useDetailPost(postId);

  console.log(data);
  return <></>;
}
