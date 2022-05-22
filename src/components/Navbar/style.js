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
  width: 100%;
  height: 25px;
  font-weight: 700;
  display: flex;
  gap: 5px;
  font-size: 16px;
`;
Container.Cart = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  position: absolute;
  width: 325px;
  height: auto;
  right: 72px;
  top: 0px;
  z-index: 1;
  background: #ffffff;
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
  height: 45px;
  width: inherit;
  justify-content: space-between;
  align-items: center;
`;
const active = {
  color: "#5ECE7B",
  borderBottom: "2px solid #5ECE7B",
  fontWeight: "600",
};
export { Container, Logo, Select, active };
