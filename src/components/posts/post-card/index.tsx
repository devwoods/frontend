import Link from "next/link";
import styled from "styled-components";

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
  width: 800px;
  height: 150px;
  padding: 12px;
  margin: 20px 0px;
  border-radius: 16px;
  background-color: #e8f3fc;
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
