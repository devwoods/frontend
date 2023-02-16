import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";

import { colors } from "src/configs/theme";
import { TOP_HEAD_HEIGHT } from "src/configs/layout";

import Logo from "../logo";

interface ITopHead {
  onClickMenu: () => void;
}

export default function TopHead({ onClickMenu }: ITopHead) {
  return (
    <Container>
      <LogoAndMenuIcon>
        <MenuIconBtn onClick={onClickMenu}>
          <MenuIcon sx={{ color: colors.primary.main, fontSize: 32, mr: 1 }} />
        </MenuIconBtn>
        <Logo />
      </LogoAndMenuIcon>
      <a href="https://github.com/kimmihi">
        <GitHubIcon
          sx={{
            fontSize: "32px",
            color: "#333333",
          }}
        />
      </a>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: ${TOP_HEAD_HEIGHT}px;
  padding: 16px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.divider.main};
`;

const LogoAndMenuIcon = styled.div`
  display: flex;
  align-items: center;
`;

const MenuIconBtn = styled.button`
  border: none;
  line-height: 8px;
  background-color: #fff;
  cursor: pointer;
`;
