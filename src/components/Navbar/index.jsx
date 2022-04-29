import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, NavDiv } from "./style";

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
                borderBottom: isActive ? "1px solid #5ECE7B" : "none",
                fontWeight: isActive ? "600" : "400",
              })}
            >
              <NavDiv>{value.title}</NavDiv>
            </NavLink>
          ))}
        </Container>
        <Outlet />
      </div>
    );
  }
}

export default Navbar;
