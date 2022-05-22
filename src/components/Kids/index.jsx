import React, { Component } from "react";
import cart from "../../assets/icons/cart.svg";
import { MainContext } from "../../context";

import { AddCard, Card, CardImg, Container, Header } from "./style";

class Kids extends Component {
  static contextType = MainContext;
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
    const context = this.context;
    return (
      <Container>
        <Header>Category name</Header>
        {context?.map((value) =>
          value?.kid?.map((val) => (
            <Card key={val?.id} className="card">
              <CardImg src={val?.src} alt="image" />
              <AddCard className="mini">
                <CardImg cart src={cart} alt="add to cart" />
              </AddCard>
              <Header mini>{val?.title}</Header>
              <h4>{val?.price}</h4>
            </Card>
          ))
        )}
      </Container>
    );
  }
}

export default Kids;
