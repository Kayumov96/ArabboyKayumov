import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { active, Container, Logo, Select } from "./style";
import logo from "../../assets/img/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EUR: 1.17,
      USD: 1,
      JPY: 0.077,
      cart: false,
    };
    this.showMyCart = this.showMyCart.bind(this);
  }
  showMyCart() {
    this.setState((state) => ({
      cart: !state.cart,
    }));
  }
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
            <Logo.Icon onClick={() => this.showMyCart()} />
            {this.state.cart && (
              <Container.Cart>
                <h4>My Bag:</h4>
                <h5>Total:</h5>
                <h5>Total:</h5>
                <h5>Total:</h5>
                <h5>Total:</h5>
                <h5>Total:</h5>

                <Select.BtnDiv>
                  <Select.Button>View bag</Select.Button>
                  <Select.Button green>Check out</Select.Button>
                </Select.BtnDiv>
              </Container.Cart>
            )}
          </Container.Title>
        </Container>
        <Outlet />
      </>
    );
  }
}

export default Navbar;
