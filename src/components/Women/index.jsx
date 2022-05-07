import React, { Component } from "react";
import { data } from "../../mock/mock";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import cart from "../../assets/icons/cart.svg";

class Women extends Component {
  render() {
    return (
      <Container>
        <Header>Category name</Header>
        {data.map((value) =>
          value?.woman?.map((val) => (
            <Card key={val.id} className="card">
              <CardImg src={val.src} alt="image" />
              <AddCard className="mini">
                <CardImg cart src={cart} alt="add to cart" />
              </AddCard>
              <Header mini>{val.title}</Header>
              <h4>{val.price}</h4>
            </Card>
          ))
        )}
      </Container>
    );
  }
}
export default Women;
