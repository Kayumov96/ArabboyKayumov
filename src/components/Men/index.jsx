import React, { Component } from "react";
import { data } from "../../mock/mock";
import cart from "../../assets/icons/cart.svg";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import DetailPage from "../DetailProductPage";

class Men extends Component {
  render() {
    return (
      <Container>
        <Header>Category name</Header>
        {data.map((value) =>
          value?.man?.map((val) => (
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
        <DetailPage />
      </Container>
    );
  }
}

export default Men;
