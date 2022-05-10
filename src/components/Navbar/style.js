import styled from "styled-components";
import { ReactComponent as cart1 } from "../../assets/icons/cart1.svg";

const Container = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  height: 80px;
  justify-content: space-between;
`;
Container.Title = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 79px;
  font-size: 16px;
  line-height: 19px;
`;
Container.Cart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  position: absolute;
  width: 325px;
  height: auto;
  right: 72px;
  top: 78px;
  background: rgba(57, 55, 72, 0.22); ;
`;
const Logo = styled.img`
  width: 31px;
  height: 28px;
`;
Logo.Icon = styled(cart1)`
  width: 20px;
  height: 18px;
`;
const Select = styled.select`
  outline: none;
  border: none;
  margin-right: 8px;
`;
Select.Button = styled.button`
  box-sizing: ${({ green }) => (green ? "none" : "border-box")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  position: static;
  width: 140px;
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
  height: 45px;
  width: inherit;
  justify-content: space-around;
  align-items: center;
`;
const active = {
  color: "#5ECE7B",
  borderBottom: "2px solid #5ECE7B",
  fontWeight: "600",
};
export { Container, Logo, Select, active };
