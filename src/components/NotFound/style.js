import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 700px;
  margin: 0px auto;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;
const BackHome = styled.button`
  width: 150px;
  height: 50px;
  display: flex;
  font-size: larger;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  border-radius: 6px;
  border: none;
  color: #5ece7b;
  background-color: #000000;
`;

export { Container, BackHome };
