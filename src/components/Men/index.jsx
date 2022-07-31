import React, { Component } from "react";
import cart from "../../assets/icons/cart.svg";
// import DetailPage from "../DetailProductPage";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import { data } from "../../mock/mock";
import MainContext from "../Context";
import { Link, NavLink } from "react-router-dom";
import DetailPage from "../DetailProductPage";

class Men extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      pdp: false,
    };
  }
  showPdp() {
    this.setState((state) => ({
      pdp: !state.pdp,
    }));
  }
  render() {
    const context = this.context;
    function onHandle(val) {let eq=false;for(let i in  context.cart) {if (context.cart[i].id == val.id) {eq=true; break;};};if(!eq) {var tot = context.cart.push(val); context.total+=parseFloat(val.price); document.getElementById("items-count").innerText = context.cart.length;return tot;};};

    function sendTo(value) {
      this?.props?.navigation?.navigate("Details", { ...value });
      // <NavLink to={{pathname: `/product/${value?.id`}, state:value}}
    }
    return (
      <Container>
        <Header>Category name</Header>
        {data.map(
          (value) =>
            value?.category === "men" && (
              <>
                <Card
                  key={value?.id}
                  className="card"
                  onClick={() => sendTo(value)}
                >
                  {/* <NavLink
                    to={{
                      pathname: `/product/${value?.id}`,
                      state: { value },
                    }}
                  > */}
                  
                  <Link to={`/details?id=${value.id}`} params={value} target="_blank">
                    <CardImg src={value?.src} alt="image" />
                  </Link>

                  {/* </NavLink> */}
                  <AddCard className="mini" onClick={() => onHandle(value)}>
                    
                      <CardImg cart src={cart} alt="add to cart" />
                    
                  </AddCard>
                  <Header mini>{value?.title}</Header>
                  <h4>
                    {/* {console.log(this.props, "valyuta")} */}
                    {value?.price} {localStorage.getItem("curr") ? localStorage.getItem("curr") : "$"}
                  </h4>
                </Card>
              </>
            )
        )}
      </Container>
    );
  }
}

export default Men;
