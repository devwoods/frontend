import type { ReactNode } from "react";
import styled from "styled-components";

import { colors } from "src/configs/theme";

interface IBlockquoteBlock {
  children: ReactNode;
}

export default function BlockquoteBlock({ children }: IBlockquoteBlock) {
  return <Container>{children}</Container>;
}

const Container = styled.blockquote`
  width: 80%;
  padding: 16px;
  border-radius: 12px;
  background-color: ${colors.divider.main};
`;
