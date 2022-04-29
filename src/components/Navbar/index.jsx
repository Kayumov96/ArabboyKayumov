import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Icon, Logo, NavDiv, Select } from "./style";
import Group from "../../assets/img/Group.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Container>
          {navbar.map((value) => (
            <NavLink
              key={value.id}
              to={value.path}
              className="navlink"
              style={({ isActive }) => ({
                color: isActive ? "#5ECE7B" : "#000000",
                borderBottom: isActive ? "2px solid #5ECE7B" : "none",
                fontWeight: isActive ? "600" : "400",
              })}
            >
              <NavDiv>{value.title}</NavDiv>
            </NavLink>
          ))}
          <NavDiv style={{ width: "65%" }}>
            <Logo src={Group} alt="Logo" />
          </NavDiv>
          <NavDiv>
            <Select>
              <option value="USD">$</option>
              <option value="EUR">€</option>
              <option value="JPY">¥</option>
            </Select>
            <Icon />
          </NavDiv>
        </Container>
        <Outlet />
      </div>
    );
  }
}

export default Navbar;
