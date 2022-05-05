import React, { Component } from "react";
import { data } from "../../utils/products";
import Vectorcopy from "../../assets/icons/Vectorcopy.svg";
import { AddCard, Card, CardImg, Container, Header } from "./style";

class Men extends Component {
  render() {
    return (
      //   <Container>
      //     <Header>Category name</Header>
      //     {/* <h1>Category name</h1> */}
      //     {data.map((value) => (
      //       <Card key={value.id} className="card">
      //         <CardImg src={value.src} />
      //         <AddCard className="mini">
      //           <CardImg cart src={Vectorcopy} alt="hey" />
      //         </AddCard>
      //         <Header mini>{value.title}</Header>
      //         <h4>{value.price}</h4>
      //       </Card>
      //     ))}
      //   </Container>
      <Container>
        <Header>Category name</Header>
        {data.map((value) =>
          value?.man?.map((val) => (
            <Card key={val.id} className="card">
              <CardImg src={val.src} alt="image" />
              <AddCard className="mini">
                <CardImg cart src={Vectorcopy} alt="hey" />
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

export default Men;
