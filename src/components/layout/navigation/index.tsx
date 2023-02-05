import styled from "styled-components";

import colors from "src/configs/colors";

export default function Navigation() {
  return <Continaer></Continaer>;
}

const Continaer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${colors.primary.main};
`;
