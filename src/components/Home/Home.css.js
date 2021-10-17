import styled from "styled-components";

export const Container = styled.div`
  background: rgb(198, 253, 220);
  height: 100vh;
  font-family: Rubik;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HomeMenu = styled.div``;
export const MenuTitle = styled.h1``;
export const MenuButtons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    color: white;
    font-family: Rubik;
    border-radius: 9999px;
    padding: 9px 14px 8px;
    margin: 5px 0px 12px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    :hover {
      opacity: 0.75;
    }
  }
`;
export const PlayButton = styled.button`
  background: rgb(47, 128, 237);
  border: 2px solid rgb(47, 128, 237);
  margin: auto;
`;
export const LeaderboardsButton = styled.button`
  background: tomato;
  border: 2px solid tomato;
`;
