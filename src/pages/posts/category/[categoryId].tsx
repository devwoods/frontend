import type { NextPage } from "next";
import type { Post } from "src/types/post";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { useInfiniteScroll } from "react-use-intersection-observer-pack";

import PostCard from "src/components/posts/post-card";
import { getPostListByCategory } from "src/apis";

const DEFAULT_PAGE_SIZE = 4;

const Home: NextPage = () => {
  const router = useRouter();
  const categoryId = Number(router.query.categoryId || "") || undefined;
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postList, setPostList] = useState<Array<Post>>([]);
  const { observedTargetRef } = useInfiniteScroll({
    hasMore,
    onLoadMore: () => setCurrentPage((prev) => prev + 1),
  });

  useEffect(() => {
    if (categoryId === undefined) {
      return;
    }

    const loadPostList = async () => {
      try {
        const response = await getPostListByCategory(categoryId, {
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
  }, [categoryId, currentPage]);

  return (
    <Container>
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
