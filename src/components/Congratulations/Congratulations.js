import React from "react";
import styled from "styled-components";
import Congrats from "./img/fire-cracker.png";
// import Image from "./burger.jpg";
// import {
//   ImageWrapperCss,
//   ProduseWrapperCss,
//   PaginaProduseWrapper,
// } from "../Pizza/index.css";
// import Produs from "../TemplateProdus/index";
import { useState } from "react";
const Congratulations = () => {
  const [gameOver, setGameOver] = useState(false);
  let numberTries = 0;
  const CongratulationsText = styled.h3``;
  return (
    <>
      {gameOver ? (
        <>
          <img src={Congrats} alt="Logo" width="100px" height="100px" />
          <CongratulationsText>
            Congratulations, you won the game in {numberTries} tries{" "}
          </CongratulationsText>
        </>
      ) : null}
    </>
  );
};
export default Congratulations;
