import styled from "styled-components";

export default function ProfileCard() {
  return (
    <Container>
      <Typography>{`"공부해서 남주자"`}</Typography>
      <Typography>Email: mhko0411@gmail.com</Typography>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background-color: #e8f3fc;
`;

const Typography = styled.p`
  color: #262626;
  margin: 8px 0px;
`;
