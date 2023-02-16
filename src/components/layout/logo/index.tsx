import Link from "next/link";
import styled from "styled-components";

import { colors } from "src/configs/theme";

export default function Logo() {
  return (
    <Container>
      <Title>
        <Link href="/">kimmihi.devlog</Link>
      </Title>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h1`
  color: ${colors.primary.main};
`;
