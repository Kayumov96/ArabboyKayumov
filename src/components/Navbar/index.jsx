import React, { Component } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  active,
  CartItems,
  Colors,
  Container,
  Logo,
  Select,
  Sizes,
} from "./style";
import logo from "../../assets/img/logo.png";
import MainContext from "../Context";
import Cart from "../Cart";

class Navbar extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      eur: "",
      usd: "",
      jpy: "",
      showCart: false,
      totalPrice: 0,
      cart: this?.props?.value || [],
    };
    this.showMyCart = this.showMyCart.bind(this);
  }
  showMyCart() {
    this.setState((state) => ({
      showCart: !state.showCart,
    }));
  }
  getColor(type) {
    // console.log(type, "rang");
    switch (type) {
      case "grey":
        return <Colors grey />;
        break;
      case "pink":
        return <Colors pink />;
        break;
      case "yellow":
        return <Colors yellow />;
        break;
      case "green":
        return <Colors green />;
        break;
      case "black":
        return <Colors black />;
        break;
      case "red":
        return <Colors red />;
        break;
      default:
        <Colors white />;
        break;
    }
  }
  render() {
    const context = this.context;
    const onSelect = (e) => {
      console.log(e?.target?.value, "selected");
    };
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

          <Container.Title style={{ width: "65%" }}>
            <Logo src={logo} alt="Logo" />
          </Container.Title>
          <Container.Title>
            <Select onChange={onSelect}>
              <option value="usd">$</option>
              <option value="eur">€</option>
              <option value="jpy">¥</option>
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
                    <h5>{context?.cart?.length} items</h5>
                  </Container.CartText>
                  {context?.cart.map((value, index) => {
                    return (
                      <CartItems key={index}>
                        <CartItems.Description>
                          <span> {value?.title}</span>
                          <h4>{value?.price}</h4>
                          Size:
                          <div style={{ display: "flex", gap: "4px" }}>
                            {value?.size.map((val, index) => (
                              <Sizes key={index}>{val}</Sizes>
                            ))}
                          </div>
                          Color:
                          <div style={{ display: "flex", gap: "6px" }}>
                            {value?.color.map((v) => (
                              <Sizes>{this.getColor(v)}</Sizes>
                            ))}
                          </div>
                        </CartItems.Description>
                        <Select.BtnDiv
                          style={{
                            width: "8%",
                            height: "100%",
                            flexDirection: "column",
                            padding: "6px 3px",
                          }}
                        >
                          <Sizes>+</Sizes>
                          <Sizes>-</Sizes>
                        </Select.BtnDiv>
                        <CartItems.Img
                          src={value.src}
                          alt="product"
                          // style={{ width: "25px" }}
                        />
                      </CartItems>
                    );
                  })}

                  <h5>Total:{this.state.totalPrice}</h5>
                  <Select.BtnDiv>
                    <Select.Button>
                      <Link to={"/cart"} className="navlink">
                        View bag
                      </Link>
                    </Select.Button>
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
