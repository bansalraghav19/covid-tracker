import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/index";
import TableComponent from "../../components/tableComponent/index";
import { useParams } from "react-router-dom";
import { indianStates } from "../../utilities/indianStates";
import { connect } from "react-redux";

const StateTracker = ({ covidTrackerData }) => {
  const [stateData, setStateData] = useState([]);
  const [statsData, setStatsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  const [stateNamesHashMap, setStateNamesHashMap] = useState(null);
  useEffect(() => {
    // stateCode as key and stateName as value
    const stateNamesHashMap = {};
    indianStates?.forEach((row) => {
      stateNamesHashMap[row?.stateCode] = row?.stateName;
    });
    setStateNamesHashMap(stateNamesHashMap);
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      if (covidTrackerData?.[params?.stateCode]?.districts) {
        const allDistricts = Object?.keys(
          covidTrackerData?.[params?.stateCode]?.districts
        );
        const dataArray = covidTrackerData?.[params?.stateCode]?.districts;
        const newData = allDistricts?.map((row) => {
          if (dataArray[row]?.total) {
            return {
              name: row,
              confirmed: dataArray[row]?.total?.confirmed,
              active: dataArray[row]?.total?.tested,
              recovered: dataArray[row]?.total?.recovered,
              deceased: dataArray[row]?.total?.deceased,
            };
          } else {
            return null;
          }
        });
        setStateData(newData);
        {
          // stats cards data
          const parameters = Object?.keys(
            covidTrackerData?.[params?.stateCode]?.total
          );
          const statsArray = parameters?.map((row) => {
            return {
              title: row,
              count: covidTrackerData?.[params?.stateCode]?.total?.[row],
            };
          });
          setStatsData(statsArray);
        }
      } else {
        setStateData([]);
        setStatsData([]);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [params?.stateCode, covidTrackerData]);

  return (
    <div className="layout">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <SearchBar />
          <TableComponent
            name={stateNamesHashMap?.[params?.stateCode]}
            trackerData={stateData}
            statsData={statsData}
          />
        </>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  covidTrackerData: state.data,
});

export default connect(mapStatetoProps, null)(StateTracker);
