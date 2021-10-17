import styled from "styled-components";

export const TableCss = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 16px;
  min-width: 50%;
  border-radius: 5px 5px 0 0;
  th,
  td {
    padding: 12px 15px;
  }
`;
export const TheadCss = styled.thead`
  tr {
    background-color: tomato;
    color: #ffffff;
    text-align: left;
    font-weight: bold;
  }
`;
export const TbodyCss = styled.tbody`
  tr {
    border-bottom: 1px solid tomato;
    background-color: white;
  }
  tr:hover {
    color: tomato;
  }
`;
export const LeaderboardsContainer = styled.div`
  background: rgb(198, 253, 220);
  height: 100vh;
  font-family: Rubik;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const GoBack = styled.div`
  font-family: Rubik;
  position: absolute;
  top: 2%;
  left: 1%;
  cursor: pointer;
  ::before {
    content: "< ";
  }
`;
