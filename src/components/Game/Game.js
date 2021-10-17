import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Congrats from "./img/fire-cracker.png";
import { Container, PlayButton, MenuButtons } from "../Home/Home.css";
import { GoBack } from "../Leaderboards/Leaderboards.css";
const Game = () => {
  const numberTries = useRef([]);
  const getNumberRows = () => {
    return Math.floor(Math.random() * (10 - 5 + 1) + 5);
  };
  const getAirplaneIndex = (rows) => {
    return Math.floor(Math.random() * (rows * rows + 1));
  };
  const history = useHistory();
  const [gameOver, setGameOver] = useState(false);
  const [timePassed, setTimePassed] = useState(new Date().getTime());
  const [numberRows, setNumberRows] = useState(getNumberRows());
  const [airplaneIndex, setAirplaneIndex] = useState(
    getAirplaneIndex(numberRows)
  );

  const clickElement = (index, event) => {
    if (gameOver) return;
    if (numberTries.current.includes(index)) return;
    event.target.style.background = "#e75b2e";
    event.target.style.cursor = "default";
    numberTries.current.push(index);
    if (index === airplaneIndex) {
      setGameOver(true);
      updateLocalStorage();
    }
  };
  const updateLocalStorage = () => {
    let localData = localStorage.getItem("results");
    const duration = (new Date().getTime() - timePassed) / 1000;
    localData = localData
      ? [
          ...JSON.parse(localData),
          {
            date: new Date(),
            shots: numberTries.current.length,
            duration: duration,
          },
        ]
      : [
          {
            date: new Date(),
            shots: numberTries.current.length,
            duration: duration,
          },
        ];
    localStorage.setItem("results", JSON.stringify(localData));
  };
  const playAgain = () => {
    setGameOver(false);
    setTimePassed(new Date().getTime());
    setNumberRows(getNumberRows());
    setAirplaneIndex(numberRows);
    numberTries.current = [];
  };
  let gridElements = [];
  for (let i = 0; i < numberRows * numberRows; i++) {
    gridElements.push({ index: i });
  }

  const AirplaneGrid = styled.div`
    display: grid;
    background-color: #2ecae7;
    grid-template-rows: repeat(${numberRows}, 32px);
    grid-template-columns: repeat(${numberRows}, 32px);
  `;
  const AirplaneGridDiv = styled.div`
    border: 1px solid white;
    transition: 0.5s;
    cursor: pointer;
    :hover {
      background: #e75b2e;
    }
  `;
  const GridContainer = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Congratulations = styled.div`
    margin: 0 50px 0 50px;
  `;
  const CongratulationsContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const CongratulationsText = styled.h3``;
  return (
    <>
      <GoBack onClick={() => history.push("/")}>Back</GoBack>
      <Container>
        {gameOver ? (
          <Congratulations>
            <CongratulationsContainer>
              <img src={Congrats} alt="Logo" width="100px" height="100px" />
              <CongratulationsText>
                Congratulations, you won the game in{" "}
                {numberTries.current.length} tries{" "}
              </CongratulationsText>
            </CongratulationsContainer>
            <MenuButtons>
              <PlayButton onClick={playAgain}>Play Again!</PlayButton>
            </MenuButtons>
          </Congratulations>
        ) : (
          <GridContainer>
            <AirplaneGrid>
              {gridElements.map((element) => {
                return (
                  <AirplaneGridDiv
                    rows={numberRows}
                    key={element.index}
                    onClick={(event) => clickElement(element.index, event)}
                  ></AirplaneGridDiv>
                );
              })}
            </AirplaneGrid>
          </GridContainer>
        )}
      </Container>
    </>
  );
};
export default Game;
