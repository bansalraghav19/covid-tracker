import styled from "styled-components";

export const Wrapper = styled.div`
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.12);
  padding: 40px;
  margin: 10px 30px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title,
  .count {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .count {
    margin-top: 40px;
  }
`;
