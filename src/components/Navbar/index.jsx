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
import CartOverlay from "../Cartoverlay";

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
      valute: "$",
      count: 0,
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
      console.log(context.priceType, e);
      // this.setState(contex.priceType= e.target.value );
      this.setState({ valute: e.target.value });
    };
    const handlePrice = () => {
      let price = 0;
      context?.map((item) => (price += item.length * item.price));
      this.setState({ totalPrice: price });
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
              <option value="$">$</option>
              <option value="€">€</option>
              <option value="¥">¥</option>
            </Select>
            <div style={{ position: "relative" }}>
              <Logo.Icon
                onClick={() => this.showMyCart()}
                cartitems={this.state.cart}
              />
              <CartItems.Amount>{this?.context?.cart.length}</CartItems.Amount>
            </div>
            {this.state.showCart && (
              <Container.CartWrapper>
                <Container.Cart>
                  <Container.CartText>
                    My Bag:
                    <h5>{context?.cart?.length} items</h5>
                  </Container.CartText>
                  {context?.cart.map((value) => {
                    return <CartOverlay value={value} />;
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
