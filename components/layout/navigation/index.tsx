import styled from "styled-components";

import colors from "../../../configs/colors";

export default function Navigation() {
  return (
    <Continaer>
      <div>
        <h2 color={colors.primary.main}>minhwan.dev</h2>
      </div>
    </Continaer>
  );
}

const Continaer = styled.div`
  display: flex;
  flex-direction: column;
`;
