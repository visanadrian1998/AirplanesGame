import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { MenuTitle } from "../Home/Home.css";
import {
  TableCss,
  TheadCss,
  TbodyCss,
  LeaderboardsContainer,
  GoBack,
} from "./Leaderboards.css";
const Leaderboards = () => {
  const sortByShots = (a, b) => {
    if (a.shots < b.shots) {
      return 1;
    }
    if (a.shots > b.shots) {
      return -1;
    }
    return 0;
  };
  const history = useHistory();
  const [results, setResults] = useState([]);
  useEffect(() => {
    let storageResults = localStorage.getItem("results")
      ? JSON.parse(localStorage.getItem("results"))
      : [];
    storageResults.sort(sortByShots);
    setResults(storageResults);
  }, []);
  return (
    <>
      <GoBack onClick={() => history.push("/")}>Back</GoBack>
      <LeaderboardsContainer>
        <MenuTitle>Leaderboards</MenuTitle>
        {results.length > 0 ? (
          <TableCss>
            <TheadCss>
              <tr>
                <th>Date</th>
                <th># of Shots</th>
                <th>Duration(seconds)</th>
              </tr>
            </TheadCss>
            <TbodyCss>
              {results.map((result, index) => {
                return (
                  <tr key={index}>
                    <td>{new Date(result.date).toLocaleDateString()}</td>
                    <td>{result.shots}</td>
                    <td>{result.duration}</td>
                  </tr>
                );
              })}
            </TbodyCss>
          </TableCss>
        ) : (
          "Play at least one game and see how you rank!"
        )}
      </LeaderboardsContainer>
    </>
  );
};
export default Leaderboards;
