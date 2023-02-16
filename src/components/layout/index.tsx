import { useState } from "react";
import styled from "styled-components";

import NavBar from "./nav-bar";
import TopHead from "./top-head";

import { TOP_HEAD_HEIGHT } from "src/configs/layout";

interface ILayout {
  children?: JSX.Element | JSX.Element[];
}

const NAVBAR_WIDTH = 280;

export default function Layout({ children }: ILayout) {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  return (
    <Container>
      <TopHead onClickMenu={() => setIsOpenNavbar((prev) => !prev)} />
      <NavBar open={isOpenNavbar} />
      <ContentBox>{children}</ContentBox>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
`;

const ContentBox = styled.div`
  width: 100%;
  margin-top: ${TOP_HEAD_HEIGHT}px;
`;
