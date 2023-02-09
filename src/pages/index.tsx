import type { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";

import PostCard from "src/components/posts/post-card";
import usePostList from "src/hooks/query/use-post-list";

const DEFAULT_PAGE_SIZE = 4;

const Home: NextPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: postList } = usePostList({
    currentPage,
    pageSize: DEFAULT_PAGE_SIZE,
  });

  return (
    <Container>
      {postList?.list.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
