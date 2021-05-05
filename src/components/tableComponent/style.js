import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px;
  .state-name {
    margin-bottom: 20px;
  }
  .stats-cards {
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  table {
    border: 1px solid black;
    padding: 10px;
    width: 100%;
  }
  tr {
    border-bottom: 1px solid black;
    text-align: left;
    &:hover {
      background: #efefef;
    }
  }
  th {
    width: 20%;
    font-weight: bolder;
    padding: 25px;
  }
  td {
    padding: 10px 0px 10px 20px;
  }
`;
