import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  HomeMenu,
  MenuTitle,
  MenuButtons,
  PlayButton,
  LeaderboardsButton,
} from "./Home.css";
const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <HomeMenu>
        <MenuTitle>AIRPLANES GAME</MenuTitle>
        <MenuButtons>
          <PlayButton onClick={() => history.push("/game")}>
            Play Game
          </PlayButton>
          <LeaderboardsButton onClick={() => history.push("/leaderboards")}>
            Leaderboards
          </LeaderboardsButton>
        </MenuButtons>
      </HomeMenu>
    </Container>
  );
};
export default Home;
