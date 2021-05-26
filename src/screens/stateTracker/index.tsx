import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/index";
import TableComponent from "../../components/tableComponent/index";
import { useParams } from "react-router-dom";
import { indianStates } from "../../utilities/indianStates";
import { connect } from "react-redux";

interface Props {
  covidTrackerData: any;
}

type tableData = {
  name: string;
  confirmed: string | null | undefined;
  active: string | null | undefined;
  recovered: string | null | undefined;
  deceased: string | null | undefined;
} | null;

type statisticsData = {
  title: string;
  count: string | null | undefined;
};

type stateDetailsHashMap = {
  [stateCode: string]: string;
};

interface ParamTypes {
  stateCode: string;
}

const StateTracker = ({ covidTrackerData }: Props) => {
  const [stateData, setStateData] = useState<tableData[]>([]);
  const [statsData, setStatsData] = useState<statisticsData[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const params = useParams<ParamTypes>();

  const [stateNamesHashMap, setStateNamesHashMap] =
    useState<stateDetailsHashMap | null>(null);

  useEffect(() => {
    // stateCode as key and stateName as value
    const stateNamesHashMap: stateDetailsHashMap = {};
    indianStates?.forEach((row) => {
      stateNamesHashMap[row?.stateCode] = row?.stateName;
    });
    setStateNamesHashMap(stateNamesHashMap);
  }, []);

  useEffect(() => {
    try {
      setIsLoading(true);
      if (covidTrackerData?.data?.[params?.stateCode]?.districts) {
        const allDistricts = Object?.keys(
          covidTrackerData?.data?.[params?.stateCode]?.districts
        );
        const dataArray =
          covidTrackerData?.data?.[params?.stateCode]?.districts;
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
            covidTrackerData?.data?.[params?.stateCode]?.total
          );
          const statsArray = parameters?.map((row) => {
            return {
              title: row,
              count: covidTrackerData?.data?.[params?.stateCode]?.total?.[row],
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

const mapStatetoProps = (state: any) => ({
  covidTrackerData: state,
});

export default connect(mapStatetoProps, null)(StateTracker);
