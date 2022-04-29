import React from "react";
import { BackHome, Container } from "./style";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container className="back">
        <h1>OOOPS! Something went wrong (</h1>
        <BackHome onClick={() => navigate(-1)}>Go back</BackHome>
      </Container>
    </>
  );
};
export default Notfound;
