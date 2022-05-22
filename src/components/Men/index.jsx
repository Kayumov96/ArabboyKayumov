import React, { Component } from "react";
import { MainContext } from "../../context";
import cart from "../../assets/icons/cart.svg";
import DetailPage from "../DetailProductPage";
import { AddCard, Card, CardImg, Container, Header } from "./style";

class Men extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      pdp: false,
    };
    // this.cartitems = this.cartItems.bind(this);
  }
  // handleSelect(ids) {
  //   data.filter((value) => {
  //     if (value.id !== ids) {
  //       console.log(this.state.cardItems);
  //       // this.state.cardItems.push(value);
  //     }
  //   });
  // }

  showPdp() {
    this.setState((state) => ({
      pdp: !state.pdp,
    }));
  }
  render() {
    const context = this.context;
    return (
      <Container>
        <Header>Category name</Header>
        {context?.map((value) =>
          value?.man?.map((val) => (
            <Card key={val?.id} className="card">
              <CardImg src={val?.src} alt="image" />
              <AddCard className="mini">
                <CardImg
                  cart
                  src={cart}
                  alt="add to cart"
                  onClick={() => this.handleSelect()}
                />
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

export default Men;
