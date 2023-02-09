import styled from "styled-components";

import GitHubIcon from "@mui/icons-material/GitHub";

import Logo from "./logo";
import ProfileCard from "./profile";
import Navigation from "./navigation";

import colors from "src/configs/colors";

interface ILayout {
  children?: JSX.Element | JSX.Element[];
}

const NAVBAR_WIDTH = 280;

export default function Layout({ children }: ILayout) {
  return (
    <Container>
      <NavBar>
        <div>
          <Logo />
          <ProfileCard />
        </div>
        <Navigation />
      </NavBar>
      <ContentBox>{children}</ContentBox>
      <a href="https://github.com/kimmihi">
        <GitHubIcon
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 99,
            fontSize: "32px",
            color: "#333333",
          }}
        />
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
`;

const NavBar = styled.div`
  width: ${NAVBAR_WIDTH}px;
  height: 100vh;
  padding: 8px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #e6e6e6;
`;

const Divider = styled.div`
  height: 100vh;
  border-left: 1px solid #e6e6e6;
`;

const ContentBox = styled.div`
  width: 100%;
  min-width: 900px;
  padding: 12px;
  margin-left: ${NAVBAR_WIDTH}px;
`;
