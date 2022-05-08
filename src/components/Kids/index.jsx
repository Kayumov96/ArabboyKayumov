import React, { Component } from "react";
import cart from "../../assets/icons/cart.svg";
import { data } from "../../mock/mock";
import { AddCard, Card, CardImg, Container, Header } from "./style";

class Kids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
    };
  }
  render() {
    const AddCardHandler = (value) => {
      this.setState((selected) => {
        return;
      });
    };
    return (
      <Container>
        <Header>Category name</Header>
        {data.map((value) =>
          value?.kid?.map((val) => (
            <Card key={val.id} className="card">
              <CardImg src={val.src} alt="image" />
              <AddCard className="mini" onClick={() => console.log(val.price)}>
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

export default Kids;
