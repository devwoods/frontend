import styled from "styled-components";

export default function ProfileCard() {
  return (
    <Container>
      <Typography>{`"apple"`}</Typography>
      <Typography>Email: mhko0411@gmail.com</Typography>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #cce0ff;
`;

const Typography = styled.p`
  color: #262626;
  margin: 8px 0px;
`;
