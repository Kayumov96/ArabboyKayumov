import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 19vh 0;
  height: 60vh;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BackHome = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;
  border: none;
  color: #5ece7b;
  background-color: #4f4180;
`;

export { Container, BackHome };
