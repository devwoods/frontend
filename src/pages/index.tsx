import type { NextPage } from "next";

import styled from "styled-components";

import Layout from "src/components/layout";
import PostCard from "src/components/posts/post-card";

const CONTENT =
  "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desk";
const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        <PostCard title="hello world" content={CONTENT} />
        <PostCard title="hello world" content={CONTENT} />
        <PostCard title="hello world" content={CONTENT} />
        <PostCard title="hello world" content={CONTENT} />
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled.div`
  padding: 12px;
`;
