import styled from "styled-components";

const Container = styled.div`
  margin-top: 10%;
  width: 100%;
  height: 100vh;
  display: flex;
  gap: auto;
  padding: 20px;
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
  flex-direction: column;
  padding: 10px;
  padding-bottom: 15px;
  width: 27%;
  height: 35%;
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;
const CardImg = styled.img`
  width: ${({ cart }) => (cart ? "20px" : "98%")};
  height: 80%;
`;
const AddCard = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 68%;
  right: 8%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(94, 206, 123, 1);
  position: absolute;
  cursor: pointer;
  display: none;
`;
export { Container, Card, CardImg, Header, AddCard };
