import type { ReactNode } from "react";
import styled from "styled-components";

interface IBlockquoteBlock {
  children: ReactNode;
}

export default function BlockquoteBlock({ children }: IBlockquoteBlock) {
  return <Container>{children}</Container>;
}

const Container = styled.blockquote`
  width: 100%;
  padding: 16px;
`;
