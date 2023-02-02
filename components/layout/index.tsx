import styled from "styled-components";
import Navigation from "./navigation";

interface ILayout {
  children?: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: ILayout) {
  return (
    <Container>
      <Navigation />
      <Divider />
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const Divider = styled.div`
  height: 100vh;
  border-left: thick solid #32a1ce;
`;
