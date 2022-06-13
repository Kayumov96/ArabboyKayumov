import React, { Component } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { active, Container, Logo, Select } from "./style";
import logo from "../../assets/img/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EUR: "",
      USD: "",
      JPY: "",
      showCart: false,
      totalPrice: 0,
      cart: [],
    };
    this.showMyCart = this.showMyCart.bind(this);
  }
  showMyCart() {
    this.setState((state) => ({
      showCart: !state.showCart,
    }));
  }
  render() {
    return (
      <>
        <Container>
          {navbar.map(({ path, id, title, hidden }) => {
            return (
              !hidden && (
                <NavLink
                  key={id}
                  to={path}
                  className="navlink"
                  style={({ isActive }) => (isActive ? active : {})}
                >
                  <Container.Title>{title}</Container.Title>
                </NavLink>
              )
            );
          })}
          {/* {navbar.map(({path, hidden , id, title }) => {
          return <NavLink
              key={id}
              to={path}
              className="navlink"
              style={({ isActive }) => (isActive ? active : {})}
            >
              <Container.Title>{title}</Container.Title>
            </NavLink>
  }))} */}
          <Container.Title style={{ width: "65%" }}>
            <Logo src={logo} alt="Logo" />
          </Container.Title>
          <Container.Title>
            <Select>
              <option value="USD">$</option>
              <option value="EUR">€</option>
              <option value="JPY">¥</option>
            </Select>
            <Logo.Icon
              onClick={() => this.showMyCart()}
              cartitems={this.state.cart}
            />
            {this.state.showCart && (
              <Container.CartWrapper>
                <Container.Cart>
                  <Container.CartText>
                    My Bag:
                    <h5>{this.state.cart.length} items</h5>
                  </Container.CartText>

                  <h5>Total:{this.state.totalPrice}</h5>
                  <Select.BtnDiv>
                    <Select.Button>View bag</Select.Button>
                    <Select.Button green>Check out</Select.Button>
                  </Select.BtnDiv>
                </Container.Cart>
              </Container.CartWrapper>
            )}
          </Container.Title>
        </Container>
        <Outlet />
      </>
    );
  }
}

export default Navbar;
