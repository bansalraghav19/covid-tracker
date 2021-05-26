import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CountryTracker from "../countryTracer/index";
import StateTracker from "../stateTracker/index";
import { connect } from "react-redux";
import { fetchCovidData } from "../../redux/action";

interface Props {
  fetchCovidData: any;
}

const Index: React.FC<Props> = ({ fetchCovidData }) => {
  const fetchData = async () => {
    try {
      await fetchCovidData();
    } catch (error) {
      alert("Error occured , Please Refersh");
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Switch>
      <Route path="/" exact component={CountryTracker} />
      <Route path="/state/:stateCode" component={StateTracker} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default connect(null, { fetchCovidData })(Index);
