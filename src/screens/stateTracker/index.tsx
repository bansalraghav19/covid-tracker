import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchBar/index";
import TableComponent from "../../components/tableComponent/index";
import { useParams } from "react-router-dom";
import { indianStates } from "../../utilities/indianStates";
import { connect } from "react-redux";

interface IProps {
  covidTrackerData: any;
}

interface IState {
  tableData: ({
    name: string;
    confirmed?: string;
    active?: string;
    recovered?: string;
    deceased?: string;
  } | null)[];

  statisticsData: {
    title: string;
    count?: string;
  }[];

  stateDetailsHashMap: {
    [stateCode: string]: string;
  };

  paramTypes: {
    stateCode: string;
  };
}

const StateTracker: React.FC<IProps> = ({ covidTrackerData }) => {
  const [stateData, setStateData] = useState<IState['tableData']>([]);
  const [statsData, setStatsData] = useState<IState['statisticsData']>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const params = useParams<IState['paramTypes']>();

  const [stateNamesHashMap, setStateNamesHashMap] =
    useState<IState['stateDetailsHashMap'] | null>(null);

  useEffect(() => {
    // stateCode as key and stateName as value
    const stateNamesHashMap: IState['stateDetailsHashMap'] = {};
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
