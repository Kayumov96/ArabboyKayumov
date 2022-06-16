import React, { Component } from "react";
import cart from "../../assets/icons/cart.svg";
// import DetailPage from "../DetailProductPage";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import { data } from "../../mock/mock";
import MainContext from "../Context";

class Men extends Component {
  static contextType = MainContext;
  constructor(props) {
    super(props);
    this.state = {
      pdp: false,
    };
  }
  showPdp() {
    this.setState((state) => ({
      pdp: !state.pdp,
    }));
  }
  render() {
    const context = this.context;
    function onHandle(val) {
      // console.log(val, "hheehehehehehe");
      var tot = context.cart.push(val);
      return tot;
    }
    return (
      <Container>
        <Header>Category name</Header>
        {data.map(
          (value) =>
            value?.category === "men" && (
              <>
                <Card key={value.id} className="card">
                  <CardImg src={value?.src} alt="image" />
                  <AddCard className="mini" onClick={() => onHandle(value)}>
                    <CardImg cart src={cart} alt="add to cart" />
                  </AddCard>
                  <Header mini>{value?.title}</Header>
                  <h4>${value?.price}</h4>
                </Card>
              </>
            )
        )}
      </Container>
    );
  }
}

export default Men;
