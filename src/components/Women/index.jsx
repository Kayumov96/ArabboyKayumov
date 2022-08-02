import React, { Component } from "react";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import cart from "../../assets/icons/cart.svg";
import { data } from "../../mock/mock";
import MainContext from "../Context";
import { Link, NavLink } from "react-router-dom";
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
    function onHandle(val) {let eq=false;for(let i in  context.cart) {if (context.cart[i].id == val.id) {eq=true; break;};};if(!eq) {var tot = context.cart.push(val); document.getElementById("items-count").innerText = context.cart.length;return tot;};};
    return (
      <Container>
        <Header>Category name</Header>
        {data.map(
          (value) =>
            value?.category === "women" && (
              <Card key={value.id} className="card">
                <Link to={`/details?id=${value.id}`} params={value} target="_blank">
                  <CardImg src={value?.src} alt="image" />
                </Link>
                <AddCard className="mini" onClick={() => onHandle(value)}>
                  <CardImg cart src={cart} alt="add to cart" />
                </AddCard>
                <Header mini>{value?.title}</Header>
                <h4>{value?.price} {localStorage.getItem("curr") ? localStorage.getItem("curr") : "$"}</h4>
              </Card>
            )
        )}
      </Container>
    );
  }
}
export default Women;
