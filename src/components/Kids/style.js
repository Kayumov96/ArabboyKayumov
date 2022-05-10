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
const AddCard = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 68%;
  right: 8%;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: rgba(94, 206, 123, 1);
  position: absolute;
  cursor: pointer;
  display: none;
`;
const Card = styled.div`
  margin: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 10px;
  padding-bottom: 15px;
  width: 27%;
  height: 35%;
  max-width: 386px;
  max-height: 444px;
  cursor: pointer;
  :hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;
const CardImg = styled.img`
  width: ${({ cart }) => (cart ? "20px" : "98%")};
  height: 80%;
`;
export { Container, Card, CardImg, Header, AddCard };
