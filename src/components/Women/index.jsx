import React, { Component } from "react";
import { women } from "../../utils/products";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import Vectorcopy from "../../assets/icons/Vectorcopy.svg";

class Women extends Component {
  render() {
    return (
      <Container>
        <Header>Category name</Header>
        {/* <h1>Category name</h1> */}
        {women.map((value) => (
          <Card key={value.id}>
            <CardImg src={value.src} />
            <AddCard>
              <img
                style={{ position: "absolute", width: "20px" }}
                src={Vectorcopy}
                alt="hey"
              />
            </AddCard>
            <div>{value.title}</div>
            <h4>{value.price}</h4>
          </Card>
        ))}
      </Container>
    );
  }
}

export default Women;
