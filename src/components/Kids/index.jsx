import React, { Component } from "react";
import cart from "../../assets/icons/cart.svg";
import { data } from "../../mock/mock";

import { AddCard, Card, CardImg, Container, Header } from "./style";

class Kids extends Component {
  // static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
    };
  }
  AddCard(id) {
    this.setState();
  }
  render() {
    // const context = this.context;
    return (
      <Container>
        <Header>Category name</Header>
        {data.map(
          (value) =>
            value?.category === "kids" && (
              <Card key={value.id} className="card">
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

export default Kids;
