import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import CountryTracker from "../countryTracer/index";
import StateTracker from "../stateTracker/index";
import { connect } from "react-redux";
import { fetchCovidData } from "../../redux/action";

const Index = ({ fetchCovidData }) => {
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
      <Route component={CountryTracker} />
    </Switch>
  );
};

export default connect(null, { fetchCovidData })(Index);
