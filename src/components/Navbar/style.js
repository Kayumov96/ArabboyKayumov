import styled from "styled-components";
import { ReactComponent as cart1 } from "../../assets/icons/cart1.svg";

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  width: 75%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 0 12.5%;
  height: 80px;
  justify-content: space-between;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 0 8px;
    width: 90%;
    margin-bottom: 10%;
    justify-content: space-around;
  }
`;
Container.Title = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 79px;
  font-size: 16px;
  line-height: 19px;
  @media (max-width: 768px) {
    width: 60px;
  }
`;
Container.CartWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 79px;
  left: 0;
  z-index: 1;
  background: rgba(57, 55, 72, 0.22);
`;
Container.CartText = styled.div`
  width: inherit;
  height: 25px;
  font-weight: 700;
  display: flex;
  gap: 5px;
  font-size: 16px;
  position: fixed;
  top: 78px;
  background: #ffffff;
`;
Container.Cart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px 0px 16px;
  position: relative;
  width: 325px;
  position: relative;
  max-height: 500px;
  overflow: scroll;
  left: 800px;
  top: 0px;
  z-index: 1;
  background: #ffffff;
  @media (max-width: 786px) {
    right: -40%;
  }
  @media (min-width: 1024px) {
    left: 60%;
  }
  @media (max-width: 1024px) {
    left: 60%;
  }
  @media (min-width: 1440px) {
    left: 74%;
  }
`;
const Logo = styled.img`
  width: 31px;
  height: 28px;
`;
Logo.Icon = styled(cart1)`
  width: 20px;
  height: 18px;
  cursor: pointer;
`;
const Select = styled.select`
  outline: none;
  border: none;
  margin-right: 8px;
  cursor: pointer;
`;
Select.Button = styled.button`
  box-sizing: ${({ green }) => (green ? "none" : "border-box")};
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  position: static;
  width: 140px;
  font-size: 14px;
  height: 43px;
  left: 0px;
  top: 0px;
  background: ${({ green }) => (green ? "#5ece7b" : "#ffffff")};
  border: ${({ green }) => (green ? "none" : "1px solid #1d1f22")};
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
`;
Select.BtnDiv = styled.div`
  display: flex;
  height: 100px;
  padding: 3px;
  width: inherit;
  background: #ffffff;
  width: inherit;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
`;
const active = {
  color: "#5ECE7B",
  borderBottom: "2px solid #5ECE7B",
  fontWeight: "600",
};

const CartItems = styled.div`
  margin: 8px 0;
  width: 100%;
  height: 170px;
  display: flex;
`;
CartItems.Description = styled.div`
  width: 44%;
  height: 100%;
  display: flex;
  gap: 4px;
  flex-direction: column;
`;
CartItems.Img = styled.img`
  width: 44%;
  height: 100%;
`;
const handleColor = (type) => {
  switch (type) {
    case "grey":
      return "#696969";
      break;
    case "pink":
      return "#FFC0CB";
      break;
    case "yellow":
      return "#FFFF00";
      break;
    case "green":
      return "#008000";
      break;
    case "black":
      return "#000000";
      break;
    case "red":
      return "#FF0000";
      break;
    default:
      return "#ffffff";
      break;
  }
};
const Sizes = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  border: 1px solid #000000;
  align-items: center;
  justify-content: center;
  /* :active {
    
    color: #ffffff;
  } */
`;
const Colors = styled.div`
  width: 26px;
  background-color: ${({ type }) => handleColor(type) || "#696969"};
  height: 26px;
`;
export { Container, Sizes, Logo, Select, active, CartItems, Colors };
