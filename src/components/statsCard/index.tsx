import * as React from "react";
import { Wrapper } from "./style";

interface Props {
  cardData: {
    title: string;
    count?: string;
  };
}

const Index: React.FC<Props> = ({ cardData }) => {
  return (
    <Wrapper>
      <div className="title">{cardData?.title?.toUpperCase()}</div>
      <div className="count">{cardData?.count}</div>
    </Wrapper>
  );
};

export default Index;
