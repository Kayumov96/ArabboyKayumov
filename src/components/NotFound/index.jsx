import React from "react";
import { BackHome, Container } from "./style";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
  const navigate = useNavigate();

  return (
    <Container className="back">
      <BackHome onClick={() => navigate(-1)}>
        <h1>&#8634;</h1>
      </BackHome>
    </Container>
  );
};
export default Notfound;
