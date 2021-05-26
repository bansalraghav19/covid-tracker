import * as React from "react";
import { Wrapper } from "./style";

interface Props {
  cardData: statisticsData;
}

type statisticsData = {
  title: string;
  count: string | null | undefined;
} | undefined;

const Index = ({ cardData }: Props): JSX.Element => {
  return (
    <Wrapper>
      <div className="title">{cardData?.title?.toUpperCase()}</div>
      <div className="count">{cardData?.count}</div>
    </Wrapper>
  );
};

export default Index;
