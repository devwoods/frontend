import styled from "styled-components";

import GitHubIcon from "@mui/icons-material/GitHub";

import Logo from "./logo";
import ProfileCard from "./profile";
import Navigation from "./navigation";

import colors from "src/configs/colors";

interface ILayout {
  children?: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: ILayout) {
  return (
    <Container>
      <Box>
        <Logo />
        <ProfileCard />
      </Box>
      <Navigation />
      <Divider />
      <Box>{children}</Box>
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

const Divider = styled.div`
  border-left: 1px solid #cce0ff;
`;

const Box = styled.div`
  padding: 12px;
`;
