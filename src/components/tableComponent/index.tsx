import * as React from "react";
import StatsCards from "../statsCard/index";
import { Wrapper } from "./style";

interface IState {
  tableData: {
    name: string;
    confirmed?: string;
    active?: string;
    recovered?: string;
    deceased?: string;
  } | null;

  statisticsData: {
    title: string;
    count?: string;
  };
}
interface Props {
  trackerData: IState["tableData"][];
  statsData?: IState["statisticsData"][];
  name: string | undefined;
}

const TableComponent: React.FC<Props> = ({ trackerData, name, statsData }) => {
  return (
    <Wrapper>
      <div>
        <h1 className="state-name">{name}</h1>
      </div>
      {statsData && statsData?.length > 0 && (
        <div className="stats-cards">
          {statsData?.map((row: IState["statisticsData"], index) => (
            <StatsCards key={index} cardData={row} />
          ))}
        </div>
      )}
      {trackerData?.length === 0 && <div>No Data Available</div>}
      {trackerData && trackerData?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Active</th>
              <th>Recovered</th>
              <th>Deceased</th>
            </tr>
          </thead>
          <tbody>
            {trackerData.map((row: IState["tableData"], index) => {
              return row ? (
                <tr key={index}>
                  <td>{row?.name || "-"}</td>
                  <td>{row?.confirmed || "-"}</td>
                  <td>{row?.active || "-"}</td>
                  <td>{row?.recovered || "-"}</td>
                  <td>{row?.deceased || "-"}</td>
                </tr>
              ) : null;
            })}
          </tbody>
        </table>
      )}
    </Wrapper>
  );
};

export default TableComponent;
