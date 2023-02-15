import { useRouter } from "next/router";
import styled from "styled-components";
import dayjs from "dayjs";

import useDetailPost from "src/hooks/query/use-detail-post";

import PostContentMarkDown from "src/components/posts/content-markdown";

export default function DetailPost() {
  const router = useRouter();
  const postId = Number(router.query.postId) || undefined;
  const { data } = useDetailPost(postId);

  console.log(data);
  return (
    <Container>
      <MetadataBox>
        <DateText>{dayjs(data?.updated_at).format("YYYY-MM-DD")}</DateText>
        <Title>{data?.title}</Title>
      </MetadataBox>
      <PostContentMarkDown content={data?.content ?? ""} />
    </Container>
  );
}

const Container = styled.div`
  padding: 16px;
`;

const MetadataBox = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

const Title = styled.h1``;

const DateText = styled.p``;