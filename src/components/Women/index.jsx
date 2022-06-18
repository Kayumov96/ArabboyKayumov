import React, { Component } from "react";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import cart from "../../assets/icons/cart.svg";
import { data } from "../../mock/mock";
import Navbar from "../Navbar";
import MainContext from "../Context";
// import { NavLink, useNavigate, useNavigationType } from "react-router-dom";

class Women extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      navigate: "",
    };
  }
  render() {
    const context = this.context;
    function onHandle(val) {
      console.log(val, "hheehehehehehe");
      var tot = context.cart.push(val);
      return tot;
    }
    return (
      <Container>
        <Header>Category name</Header>
        {data.map(
          (value) =>
            value?.category === "women" && (
              <Card key={value.id} className="card">
                <CardImg src={value?.src} alt="image" />
                <AddCard className="mini" onClick={() => onHandle(value)}>
                  <CardImg cart src={cart} alt="add to cart" />
                </AddCard>
                <Header mini>{value?.title}</Header>
                <h4>{value?.price}</h4>
              </Card>
            )
        )}
      </Container>
    );
  }
}
export default Women;
