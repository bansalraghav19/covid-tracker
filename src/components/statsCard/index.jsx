import React from "react";
import { Wrapper } from "./style";

const Index = ({ cardData }) => {
  return (
    <Wrapper>
      <div className="title">{cardData?.title?.toUpperCase()}</div>
      <div className="count">{cardData?.count}</div>
    </Wrapper>
  );
};

export default Index;
