import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/index";
import TableComponent from "../../components/tableComponent/index";
import { indianStates } from "../../utilities/indianStates";
import { connect } from "react-redux";

const CountryTracker = ({ covidTrackerData }) => {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    try {
      setIsLoading(true);
      const newData = indianStates.map((row) => {
        if (covidTrackerData?.[row?.stateCode]?.total) {
          return {
            name: row?.stateName,
            confirmed: covidTrackerData?.[row?.stateCode].total.confirmed,
            active: covidTrackerData?.[row?.stateCode].total.tested,
            recovered: covidTrackerData?.[row?.stateCode].total.recovered,
            deceased: covidTrackerData?.[row?.stateCode].total.deceased,
          };
        } else {
          return null;
        }
      });
      setIsLoading(false);
      setCountryData(newData);
    } catch (error) {
      setIsLoading(false);
    }
  }, [covidTrackerData]);
  return (
    <div className="layout">
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <>
          <SearchBar />
          <TableComponent trackerData={countryData} name="India" />
        </>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  covidTrackerData: state.data,
});

export default connect(mapStatetoProps, null)(CountryTracker);