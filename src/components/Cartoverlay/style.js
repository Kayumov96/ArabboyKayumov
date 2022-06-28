import styled from "styled-components";
import { ReactComponent as cart1 } from "../../assets/icons/cart1.svg";

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
CartItems.Amount = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #1d1f22;
  color: #ffffff;
  position: absolute;
  top: -10px;
  left: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
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
const Btn = styled.button`
  width: 20px;
  height: 20px;
`;
const Colors = styled.div`
  width: 26px;
  background-color: ${({ type }) => handleColor(type) || "#696969"};
  height: 26px;
`;
export { Btn, Sizes, Select, CartItems, Colors };
