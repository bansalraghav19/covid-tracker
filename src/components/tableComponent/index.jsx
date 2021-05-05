import React from "react";
import StatsCards from "../statsCard/index";
import { Wrapper } from "./style";

const TableComponent = ({ trackerData, name, statsData }) => {
  return (
    <Wrapper>
      <div>
        <h1 className="state-name">{name}</h1>
      </div>
      {statsData?.length > 0 && (
        <div className="stats-cards">
          {statsData?.map((row, index) => (
            <StatsCards key={index} cardData={row} />
          ))}
        </div>
      )}
      {trackerData?.length === 0 && <div>No Data Available</div>}
      {trackerData?.length > 0 && (
        <table border="1" rules="rows">
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
            {trackerData.map((row, index) => {
              return row ? (
                <tr key={index}>
                  <td>{row?.name}</td>
                  <td>{row?.confirmed}</td>
                  <td>{row?.active}</td>
                  <td>{row?.recovered}</td>
                  <td>{row?.deceased}</td>
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
