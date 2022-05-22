import React, { Component, useContext } from "react";
import { data } from "../../mock/mock";
import { MainContext } from "../../context";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import cart from "../../assets/icons/cart.svg";

class Women extends Component {
  static contextType = MainContext;
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     card: this.props.cart,
  //     data: this.context,
  //     addedProduct: [],
  //   };
  //   console.log(this.state.data, "data");
  // }

  render() {
    const context = this.context;
    // console.log(context, "this");
    return (
      <Container>
        <Header>Category name</Header>
        {context?.map((value) =>
          value?.woman?.map((item) => (
            <Card key={item?.id} className="card">
              <CardImg src={item?.src} alt="image" />
              <AddCard className="mini">
                <CardImg cart src={cart} alt="add to cart" />
              </AddCard>
              <Header mini>{item?.title}</Header>
              <h4>{item?.price}</h4>
            </Card>
          ))
        )}
      </Container>
    );
  }
}
export default Women;
