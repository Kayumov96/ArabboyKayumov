import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { active, Container, Logo, Select } from "./style";
import logo from "../../assets/img/logo.png";

class Navbar extends Component {
  render() {
    return (
      <>
        <Container>
          {navbar.map((value) => (
            <NavLink
              key={value.id}
              to={value.path}
              className="navlink"
              style={({ isActive }) => (isActive ? active : {})}
            >
              <Container.Title>{value.title}</Container.Title>
            </NavLink>
          ))}
          <Container.Title style={{ width: "65%" }}>
            <Logo src={logo} alt="Logo" />
          </Container.Title>
          <Container.Title>
            <Select>
              <option value="USD">$</option>
              <option value="EUR">€</option>
              <option value="JPY">¥</option>
            </Select>
            <Logo.Icon />
          </Container.Title>
        </Container>
        <Outlet />
      </>
    );
  }
}

export default Navbar;
