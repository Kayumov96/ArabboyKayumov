import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  gap: auto;
  padding: 20px;
  margin-top: 10%;
  flex-wrap: wrap;
  overflow: scroll;
`;
const Header = styled.div`
  width: 100%;
  margin: 10px 0;
  height: ${({ mini }) => (mini ? "26px" : "50px")};
  font-size: ${({ mini }) => (mini ? "16px" : "40px")};
  font-weight: ${({ mini }) => (mini ? "300" : "400")};
  color: #1d1f22;
`;
const Card = styled.div`
  margin: auto;
  position: relative;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  padding: 10px;
  width: 27%;
  height: 35%;
  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;
// const getSize = ({ type }) => {
//   return;
// };
const CardImg = styled.img`
  width: ${({ cart }) => (cart ? "20px" : "98%")};
  /* opacity: ${({ opacity }) => (opacity ? "0.5" : "")}; */
  height: 80%;
`;
const AddCard = styled.button`
  width: 50px;
  height: 50px;
  top: 68%;
  right: 8%;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(94, 206, 123, 1);
  display: none;
  position: absolute;
`;

export { Container, Header, Card, CardImg, AddCard };
