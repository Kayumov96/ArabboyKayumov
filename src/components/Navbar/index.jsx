import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { active, Container, Icon, Logo, NavDiv, Select } from "./style";
import logo from "../../assets/img/logo.png";

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
              style={({ isActive }) => (isActive ? active : {})}
            >
              <NavDiv>{value.title}</NavDiv>
            </NavLink>
          ))}
          <NavDiv style={{ width: "65%" }}>
            <Logo src={logo} alt="Logo" />
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
