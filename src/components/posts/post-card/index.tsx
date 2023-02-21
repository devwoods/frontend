import Link from "next/link";
import styled from "styled-components";

import { breakpoints } from "src/configs/theme";

interface IPostCard {
  postId: number;
  title: string;
  content: string;
}

export default function PostCard({ postId, title, content }: IPostCard) {
  return (
    <Link href={`/posts/${postId}`}>
      <Container>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  width: 327px;
  height: 120px;
  margin: 20px 0px;
  padding: 8px 16px;
  border-radius: 16px;
  background-color: #e8f3fc;
  &:hover {
    transform: scale(1.025);
    transition: all 0.5s;
  }

  @media (min-width: ${breakpoints.sm}) {
    width: 580px;
    height: 140px;
  }

  @media (min-width: ${breakpoints.md}) {
    width: 850px;
    height: 150px;
  }
`;

const Title = styled.h2``;
const Content = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.5em;
`;
