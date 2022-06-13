import React, { Component } from "react";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import cart from "../../assets/icons/cart.svg";
import { data } from "../../mock/mock";
import Navbar from "../Navbar";
import { useNavigate, useNavigationType } from "react-router-dom";

class Women extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      navigate: "",
    };
  }
  render() {
    function onNavigate() {
      <a href="/productdescription">g</a>;
    }
    return (
      <Container>
        <Header>Category name</Header>
        {data.map(
          (value) =>
            value?.category === "women" && (
              <Card key={value.id} className="card" onClick={onNavigate}>
                <CardImg src={value?.src} alt="image" />
                <AddCard className="mini">
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
