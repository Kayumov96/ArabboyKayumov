import React, { Component } from "react";
import { data } from "../../utils/products";
import { AddCard, Card, CardImg, Container, Header } from "./style";
import Vectorcopy from "../../assets/icons/Vectorcopy.svg";

class Women extends Component {
  render() {
    return (
      //   <Container>
      //     <Header>Category name</Header>
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
        {data.map((item, i) => (
          <Container>
            {item.map((subitem, subi) => (
              <CardImg src={subitem.src} alt="hey" />
            ))}
          </Container>
        ))}
      </Container>
    );
  }
}

export default Women;
