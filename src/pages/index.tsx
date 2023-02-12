import type { NextPage } from "next";
import type { Post } from "src/types/post";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { useInfiniteScroll } from "react-use-intersection-observer-pack";

import { getPostList } from "src/apis";
import PostCard from "src/components/posts/post-card";

const DEFAULT_PAGE_SIZE = 4;

const Home: NextPage = () => {
  const rootElRef = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postList, setPostList] = useState<Array<Post>>([]);
  const { observedTargetRef } = useInfiniteScroll({
    hasMore,
    onLoadMore: () => setCurrentPage((prev) => prev + 1),
  });

  useEffect(() => {
    const loadPostList = async () => {
      try {
        const response = await getPostList({
          currentPage,
          pageSize: DEFAULT_PAGE_SIZE,
        });
        const { data } = response;

        if (currentPage === 1) {
          setPostList(data.list);
        } else {
          setPostList((prev) => [...prev, ...data.list]);
        }

        if (currentPage > data.totalPages) {
          setHasMore(false);
        }
      } catch {
        setHasMore(false);
      }
    };

    loadPostList();
  }, [currentPage]);

  return (
    <Container ref={rootElRef}>
      {postList.map((post) => (
        <PostCard
          key={post.id}
          postId={post.id}
          title={post.title}
          content={post.content}
        />
      ))}
      <div ref={observedTargetRef} />
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
