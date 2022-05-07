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
const active = {
  color: "#5ECE7B",
  borderBottom: "2px solid #5ECE7B",
  fontWeight: "600",
};
export { Container, Logo, Select, active };
