import React, { Component } from "react";
import Vectorcopy from "../../assets/icons/Vectorcopy.svg";
import { kids } from "../../utils/products";
import { AddCard, Card, CardImg, Container, Header } from "./style";

class Kids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }
  render() {
    return (
      <Container>
        <Header>Category name</Header>
        {/* <h1>Category name</h1> */}
        {kids.map((value) => (
          <Card key={value.id} className="card">
            <CardImg src={value.src} />
            <AddCard className="mini">
              <CardImg cart src={Vectorcopy} alt="hey" />
            </AddCard>
            <Header mini>{value.title}</Header>
            <h4>{value.price}</h4>
          </Card>
        ))}
      </Container>

      //   <div>
      //     <h1>Category name</h1>
      //   </div>
    );
  }
}

export default Kids;
