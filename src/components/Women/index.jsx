import React, { Component, useContext } from "react";
import { MainContext } from "../../context";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import cart from "../../assets/icons/cart.svg";
import { data } from "../../mock/mock";
import Navbar from "../Navbar";

class Women extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      card: [],
      data: this.props.data,
    };
  }
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
    // const handleAdd = (ids) => {
    //   if (ids !== id) {
    //     this.setState(cart.push(ids));
    //   }
    // };
    // const context = this.context;
    return (
      <Container>
        <Header>Category name</Header>
        {data.map(
          (value) =>
            value?.category === "women" && (
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
export default Women;
